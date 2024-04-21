import Conference from '@/components/conference/Conference';
import axios from 'axios';
import { redirect } from 'next/navigation';
const getAllConferenceSlug = async () => {
	try {
		const response = await axios.post(process.env.GRAPHQL_API_URL as string, {
			query: `
            query{
                conferences{
                    id
                }
            }
          `,
		});
		const conferences = response.data.data.conferences;
		return conferences;
	} catch (error) {
		return [];
	}
};

export async function generateStaticParams() {
	const conferences = await getAllConferenceSlug();
	return conferences.map((data: { id: string }) => ({
		slug: data.id,
	}));
}

const getConferenceData = async (slug: string, tab?: string) => {
	try {
		const response = await axios.post(process.env.GRAPHQL_API_URL as string, {
			query: `
            query{
                conference(id:"${slug}"){
                    id
                    name
                    slogan
                        schedules{
                        day
                        intervals{
                            title
                            begin
                            end
                        }
                    }
                    organizers{
                        name
                        aboutShort
                        image{
                            url
                        }
                    }
                    speakers{
                        name
                        aboutShort
                        image{
                            url
                        }
                        social{
                            twitter
                            linkedin
                            dribble
                            github
                        }
                    }
                    sponsors{
                        name
                        aboutShort
                        image{
                            url
                        }
                    }
                }
            }
          `,
		});
		const conference = response.data.data.conference;
		return {
			...conference,
			conferenceTabs: [
				{ id: 'organizers', title: 'Organizers' },
				{ id: 'speakers', title: 'Speakers' },
				{ id: 'schedules', title: 'Schedules' },
				{ id: 'sponsors', title: 'Sponsors' },
			],
			activeTab: tab,
		};
	} catch (error) {
		redirect('/');
	}
};

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const conference = await getConferenceData(params.slug);
	return {
		title: conference.name || 'React Conference',
		description: conference.slogan || 'React Conference',
	};
}

const Page = async ({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { tab: string };
}) => {
	if (!params.slug) {
		redirect('/');
	}
	const activeTab = searchParams.tab || 'organizers';
	const conference = await getConferenceData(params.slug, activeTab);
	return <Conference conference={conference} />;
};

export default Page;
