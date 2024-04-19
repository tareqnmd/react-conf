import { cn } from '@/lib/util';
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
		<div className="flex flex-col md:grid grid-cols-12 mx-auto">
			<div
				className={cn(
					'',
					type === 'left'
						? 'col-start-1 col-end-6 order-1'
						: 'col-start-7 col-end-12 order-3'
				)}
			>
				<ConferenceCard conference={conference} />
			</div>
			<div className="col-start-6 col-end-7 md:mx-auto relative order-2">
				<div className="h-full w-6 flex items-center justify-center">
					<div className="h-full w-1 bg-[#cdcdcd] pointer-events-none"></div>
				</div>
				<div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#cdcdcd] shadow"></div>
			</div>
			<div
				className={cn(
					'grid items-center',
					type === 'left'
						? 'col-start-7 col-end-12 justify-start order-3'
						: 'col-start-1 col-end-6 justify-end order-1'
				)}
			>
				{conference?.startDate}
			</div>
		</div>
	);
};

export default ConferenceTimeline;
