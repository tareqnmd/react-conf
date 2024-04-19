import { cn, conferencesDate } from '@/lib/util';
import Storm from '../icons/Storm';
import ConferenceCard from './ConferenceCard';
import { ConferenceCardType } from './Conferences';

const ConferenceTimeline = ({
	conference,
	type,
	lastItem,
}: {
	conference: ConferenceCardType;
	type: string;
	lastItem: boolean;
}) => {
	return (
		<div className="grid grid-cols-[auto_1fr] lg:grid-cols-11 mx-auto">
			<div
				className={cn(
					'pb-[40px] order-3 col-start-2 col-end-12',
					type === 'left'
						? 'lg:col-start-1 lg:col-end-6 lg:order-1'
						: 'lg:col-start-7 lg:col-end-12 lg:order-3'
				)}
			>
				<ConferenceCard conference={conference} />
			</div>
			<div className="col-start-1 col-end-2 row-span-2 lg:row-span-1 lg:col-start-6 lg:col-end-7 md:mx-auto relative order-1 lg:order-2">
				<div className="h-full w-6 flex items-center justify-center">
					{!lastItem && (
						<div className="h-full w-1 bg-[#cdcdcd] pointer-events-none"></div>
					)}
				</div>
				<div className="absolute top-0 -left-1/2">
					<Storm />
				</div>
			</div>
			<div
				className={cn(
					'grid py-3 order-2 col-start-2 col-end-12',
					type === 'left'
						? 'lg:col-start-7 lg:col-end-12 lg:justify-start lg:order-3'
						: 'lg:col-start-1 lg:col-end-6 lg:justify-end lg:order-1'
				)}
			>
				{conferencesDate(conference?.startDate)}
			</div>
		</div>
	);
};

export default ConferenceTimeline;
