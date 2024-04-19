import Conference from '@/components/conference/Conference';
import axios from 'axios';
const getConferenceData = async (slug: string) => {
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
		return conference;
	} catch (error) {
		return {};
	}
};
const Page = async ({ params }: { params: { slug: string } }) => {
	const conference = await getConferenceData(params.slug);
	return <Conference conference={conference} />;
};

export default Page;
