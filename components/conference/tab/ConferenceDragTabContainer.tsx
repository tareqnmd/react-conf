import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
	const [redirectUrl, setRedirectUrl] = useState('#');
	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		activeIndex,
	} = useSortable({ id: tab });
	const style = { transition, transform: CSS.Transform.toString(transform) };
	useEffect(() => {
		setRedirectUrl('#');
		const handler = setTimeout(() => {
			setRedirectUrl(activeIndex !== -1 ? '#' : `/conference/${id}?tab=${tab}`);
		}, 500);
		return () => {
			clearTimeout(handler);
		};
	}, [id, activeIndex, tab]);

	return (
		<Link
			ref={setNodeRef}
			{...attributes}
			{...listeners}
			style={style}
			href={redirectUrl}
		>
			<ConferenceTab
				active={activeTab === tab}
				title={tab}
			/>
		</Link>
	);
};

export default ConferenceDragTabContainer;
