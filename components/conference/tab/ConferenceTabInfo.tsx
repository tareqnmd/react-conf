import { ConferenceType } from '../Conference';
import ContactInfo from '../contacts/ContactInfo';
import Schedules from '../schedules/Schedules';

const ConferenceTabInfo = ({ conference }: { conference: ConferenceType }) => {
	const { activeTab } = conference;
	const { schedules, organizers, speakers, sponsors } = conference;
	return (
		<div className="rounded-[8px] bg-[#F9FAFB] p-[20px] lg:p-[52px]">
			{activeTab === 'schedules' ? (
				<Schedules schedules={schedules} />
			) : (
				<ContactInfo
					contacts={
						activeTab === 'organizers'
							? organizers
							: activeTab === 'sponsors'
							? sponsors
							: speakers
					}
				/>
			)}
		</div>
	);
};

export default ConferenceTabInfo;
