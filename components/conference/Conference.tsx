import ConferenceTabInfo from './ConferenceTabInfo';
import ConferenceTabs from './ConferenceTabs';
export type ConferenceType = {};
const Conference = ({ conference }: { conference: ConferenceType }) => {
	return (
		<div className="container">
			<h2 className="text-[#0A142F] text-[24px] lg:text-[48px] font-[700]">
				Conference info
			</h2>
			<p className="text-[#0A142F] text-[16px] lg:text-[24px] font-[400]">
				Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
				fermentum.
			</p>
			<div className="grid grid-cols-12">
				<div className="col-span-4">
					<ConferenceTabs />
					<ConferenceTabInfo />
				</div>
				<div className="col-span-12"></div>
			</div>
		</div>
	);
};

export default Conference;
