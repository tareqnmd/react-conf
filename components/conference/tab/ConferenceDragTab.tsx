import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Link from 'next/link';
import { ConferenceType } from '../Conference';
import ConferenceTab from './ConferenceTab';
import ConferenceTabInfo from './ConferenceTabInfo';

const ConferenceDragTab = ({
	conference,
	tab,
}: {
	tab: string;
	conference: ConferenceType;
}) => {
	const { id, activeTab } = conference;
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: tab });
	const style = { transition, transform: CSS.Transform.toString(transform) };
	return (
		<div
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
		>
			<Link href={`/conference/${id}?tab=${tab}`}>
				<ConferenceTab
					active={activeTab === tab}
					title={tab}
				/>
			</Link>
			<div className={`${activeTab === tab ? 'block' : 'hidden'} lg:hidden`}>
				<ConferenceTabInfo conference={conference} />
			</div>
		</div>
	);
};

export default ConferenceDragTab;
