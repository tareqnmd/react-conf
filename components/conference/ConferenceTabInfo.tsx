import ContactInfo from './ContactInfo';
import Schedules from './Schedules';

const ConferenceTabInfo = ({ conference }: any) => {
	const { activeTab } = conference;
	const tabData = conference[activeTab];
	return (
		<div className="rounded-[8px] bg-[#F9FAFB] p-[20px] lg:p-[52px]">
			{activeTab === 'schedules' ? (
				<Schedules schedules={tabData} />
			) : (
				<ContactInfo contacts={tabData} />
			)}
		</div>
	);
};

export default ConferenceTabInfo;
