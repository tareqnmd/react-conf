import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Link from 'next/link';
import { ConferenceType } from '../Conference';
import ConferenceTab from './ConferenceTab';

const ConferenceDragTabContainer = ({
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
		<Link
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
			href={`/conference/${id}?tab=${tab}`}
		>
			<ConferenceTab
				active={activeTab === tab}
				title={tab}
			/>
		</Link>
	);
};

export default ConferenceDragTabContainer;
