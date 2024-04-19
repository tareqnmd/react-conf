import axios from 'axios';
import ConferenceTimeline from './ConferenceTimeline';

export type ConferenceCardType = {
	id: 'string';
	name: 'string';
	startDate: 'string';
	slogan: 'string';
};

const getConferenceData = async () => {
	try {
		const response = await axios.post(process.env.GRAPHQL_API_URL as string, {
			query: `
            query{
                conferences{
                    id
                    name
                    startDate
                    slogan
                }
            }
          `,
		});
		const conferences = response.data.data.conferences;
		const sortedConference = conferences.sort(
			(a: ConferenceCardType, b: ConferenceCardType) =>
				new Date(a.startDate).valueOf() - new Date(b.startDate).valueOf()
		);
		return sortedConference;
	} catch (error) {
		return [];
	}
};

const Conferences = async () => {
	const conferences = await getConferenceData();
	return (
		<div className="container">
			<div className="conference-timeline pl-[16px] lg:pl-[0px]">
				{conferences?.map((conference: ConferenceCardType, index: number) => (
					<ConferenceTimeline
						type={index % 2 === 0 ? 'left' : 'right'}
						lastItem={index === conferences.length - 1}
						key={conference.id}
						conference={conference}
					/>
				))}
			</div>
		</div>
	);
};
export default Conferences;
