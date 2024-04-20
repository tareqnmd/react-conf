import Link from 'next/link';
import { ConferenceType } from '../Conference';
import ConferenceTab from './ConferenceTab';
import ConferenceTabInfo from './ConferenceTabInfo';

const ConferenceBaseTab = ({
	conference,
	tab,
}: {
	tab: string;
	conference: ConferenceType;
}) => {
	const { id, activeTab } = conference;
	return (
		<>
			<Link href={`/conference/${id}?tab=${tab}`}>
				<ConferenceTab
					active={activeTab === tab}
					title={tab}
				/>
			</Link>
			<div className={`${activeTab === tab ? 'block' : 'hidden'} lg:hidden`}>
				<ConferenceTabInfo conference={conference} />
			</div>
		</>
	);
};

export default ConferenceBaseTab;
