import SingleSchedule from './SingleSchedule';
import TabInfoCard from './TabInfoCard';

export type ScheduleType = {
	day: string;
	intervals: { title: string; begin: string; end: string }[];
};

const Schedules = ({ schedules }: { schedules: ScheduleType[] }) => {
	return (
		<div className="grid gap-[24px]">
			{schedules.map((schedule: ScheduleType, index: number) => (
				<TabInfoCard key={index}>
					<SingleSchedule schedule={schedule} />
				</TabInfoCard>
			))}
		</div>
	);
};

export default Schedules;
