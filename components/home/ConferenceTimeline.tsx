import ConferenceCard from './ConferenceCard';
import { ConferenceCardType } from './Conferences';

const ConferenceTimeline = ({
	conference,
	type,
}: {
	conference: ConferenceCardType;
	type: string;
}) => {
	return (
		<>
			<div className="flex flex-row-reverse md:contents">
				<div className="col-start-1 col-end-5 ml-auto ">
					<ConferenceCard conference={conference} />
				</div>
				<div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
					<div className="h-full w-6 flex items-center justify-center">
						<div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
					</div>
					<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
				</div>
			</div>
			{conference?.startDate}
			<div className="flex md:contents">
				<div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
					<h2 className="text-[#000]"></h2>
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
		</>
	);
};

export default ConferenceTimeline;