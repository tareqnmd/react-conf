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
			<div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
				{conferences?.map((conference: ConferenceCardType, index: number) => (
					<ConferenceTimeline
						type={index % 2 === 0 ? 'left' : 'right'}
						key={conference.id}
						conference={conference}
					/>
				))}
				<div className="flex flex-row-reverse md:contents">
					<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
						<h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
						<p className="leading-tight text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
							quaerat?
						</p>
					</div>
					<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
						<div className="h-full w-6 flex items-center justify-center">
							<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
						</div>
						<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
					</div>
				</div>
				<div className="flex md:contents">
					<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
						<div className="h-full w-6 flex items-center justify-center">
							<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
						</div>
						<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
					</div>
					<div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
						<h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
						<p className="leading-tight text-justify">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
							facilis.
						</p>
					</div>
				</div>
				<div className="flex flex-row-reverse md:contents">
					<div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
						<h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
						<p className="leading-tight text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
							quaerat?
						</p>
					</div>
					<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
						<div className="h-full w-6 flex items-center justify-center">
							<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
						</div>
						<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Conferences;
