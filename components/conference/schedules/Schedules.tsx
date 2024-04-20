import TabInfoCard from '../tab/TabInfoCard';
import SingleSchedule from './SingleSchedule';

export type ScheduleType = {
	day: string;
	intervals: { title: string; begin: string; end: string }[];
};

const Schedules = ({ schedules }: { schedules: ScheduleType[] }) => {
	return (
		<div className="grid gap-[24px]">
			{schedules?.length === 0 && <strong>No Data Found</strong>}
			{schedules?.map((schedule: ScheduleType, index: number) => (
				<TabInfoCard key={index}>
					<SingleSchedule schedule={schedule} />
				</TabInfoCard>
			))}
		</div>
	);
};

export default Schedules;
