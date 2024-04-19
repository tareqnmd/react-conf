import Conference from '@/components/conference/Conference';
import axios from 'axios';
const getConferenceData = async (slug: string, tab: string) => {
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
			conferenceTabs: ['organizers', 'speakers', 'schedules', 'sponsors'],
			activeTab: tab,
		};
	} catch (error) {
		return {};
	}
};
const Page = async ({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { tab: string };
}) => {
	const activeTab = searchParams.tab || 'organizers';
	const conference = await getConferenceData(params.slug, activeTab);
	return <Conference conference={conference} />;
};

export default Page;
