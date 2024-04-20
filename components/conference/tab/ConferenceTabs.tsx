import Link from 'next/link';
import { ConferenceType } from '../Conference';
import ConferenceTab from './ConferenceTab';
import ConferenceTabInfo from './ConferenceTabInfo';

const ConferenceTabs = ({ conference }: { conference: ConferenceType }) => {
	const { id, activeTab, conferenceTabs } = conference || {};
	return (
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
						className={`${activeTab === tab ? 'block' : 'hidden'} lg:hidden`}
					>
						<ConferenceTabInfo conference={conference} />
					</div>
				</>
			))}
		</div>
	);
};

export default ConferenceTabs;
