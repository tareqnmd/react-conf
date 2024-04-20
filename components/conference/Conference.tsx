import { ContactType } from './contacts/ContactInfo';
import { ScheduleType } from './schedules/Schedules';
import ConferenceTabInfo from './tab/ConferenceTabInfo';
import ConferenceTabs from './tab/ConferenceTabs';
export type ActiveTabType =
	| 'schedules'
	| 'speakers'
	| 'organizers'
	| 'sponsors';
export type ConferenceType = {
	id: string;
	name: string;
	activeTab: ActiveTabType;
	slogan: string;
	conferenceTabs: { title: string; id: string }[];
	schedules: ScheduleType[];
	sponsors: ContactType[];
	organizers: ContactType[];
	speakers: ContactType[];
};
const Conference = ({ conference }: { conference: ConferenceType }) => {
	const { name, slogan } = conference || {};
	return (
		<div className="container grid gap-[40px] lg:gap-[52px] my-[20px] pt-[88px] lg:pt-[110px] lg:my-[60px]">
			<div className="grid gap-[12px] lg:gap-[16px]">
				<h2 className="text-[#0A142F] text-[24px] lg:text-[48px] font-[700]">
					{name}
				</h2>
				<p className="text-[#0A142F] text-[16px] lg:text-[24px] font-[400]">
					{slogan}
				</p>
			</div>
			<div className="grid grid-cols-12 lg:gap-[48px] place-items-start">
				<ConferenceTabs conference={conference} />
				<div className="col-span-8 hidden lg:block w-full">
					<ConferenceTabInfo conference={conference} />
				</div>
			</div>
		</div>
	);
};

export default Conference;
