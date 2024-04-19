import Link from 'next/link';
import ConferenceTab from './ConferenceTab';
import ConferenceTabInfo from './ConferenceTabInfo';
export type ConferenceType = {
	id: string;
	name: string;
	activeTab: string;
	slogan: string;
	conferenceTabs: string[];
};
const Conference = ({ conference }: { conference: ConferenceType }) => {
	const { id, activeTab, name, slogan, conferenceTabs } = conference || {};
	return (
		<div className="container grid gap-[40px] lg:gap-[52px] my-[20px] lg:my-[60px]">
			<div className="grid gap-[12px] lg:gap-[16px]">
				<h2 className="text-[#0A142F] text-[24px] lg:text-[48px] font-[700]">
					{name}
				</h2>
				<p className="text-[#0A142F] text-[16px] lg:text-[24px] font-[400]">
					{slogan}
				</p>
			</div>
			<div className="grid grid-cols-12 lg:gap-[48px] place-items-start">
				<div className="col-span-12 lg:col-span-4 grid gap-[24px] lg:gap-[32px] w-full">
					{conferenceTabs?.map((tab: string) => (
						<>
							<Link href={`/conference/${id}?tab=${tab}`}>
								<ConferenceTab
									active={activeTab === tab}
									title={tab}
								/>
							</Link>
							<div
								className={`${
									activeTab === tab ? 'block' : 'hidden'
								} lg:hidden`}
							>
								<ConferenceTabInfo conference={conference} />
							</div>
						</>
					))}
				</div>
				<div className="col-span-8 hidden lg:block w-full">
					<ConferenceTabInfo conference={conference} />
				</div>
			</div>
		</div>
	);
};

export default Conference;
