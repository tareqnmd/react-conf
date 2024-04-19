const ConferenceTabInfo = ({ conference }: any) => {
	return (
		<div className="rounded-[8px] bg-[#F9FAFB] p-[20px] lg:p-[52px]">
			{conference?.activeTab}
		</div>
	);
};

export default ConferenceTabInfo;
