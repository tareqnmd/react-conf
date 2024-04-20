import { scheduleDate } from '@/lib/util';
import { ScheduleType } from './Schedules';

const SingleSchedule = ({ schedule }: { schedule: ScheduleType }) => {
	const { day, intervals } = schedule || {};
	const [weekDay, restDate] = scheduleDate(day);
	return (
		<div className="grid gap-[20px]">
			<div className="flex items-center justify-between">
				<strong className="text-[#0A142F] font-[700] text-[16px] lg:text-[20px]">
					{restDate}
				</strong>
				<span className="text-[#0A142F] font-[400] text-[12px] lg:text-[16px]">
					{weekDay}
				</span>
			</div>
			{intervals?.length === 0 && <strong>No Data Found</strong>}
			{intervals?.map((interval, index) => (
				<div
					className="text-[#0A142F] font-[400] text-[14px] lg:text-[16px]"
					key={index}
				>
					<span>
						Duration : {interval.begin}-{interval.end}
					</span>
					{interval.title && (
						<span className="list-item ml-[30px]">{interval.title}</span>
					)}
				</div>
			))}
		</div>
	);
};

export default SingleSchedule;
