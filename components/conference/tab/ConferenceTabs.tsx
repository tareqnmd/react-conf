'use client';
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core';
import {
	SortableContext,
	arrayMove,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { ConferenceType } from '../Conference';
import ConferenceDragTab from './ConferenceDragTab';

export type TabType = { title: string; id: string };

const ConferenceTabs = ({ conference }: { conference: ConferenceType }) => {
	const { conferenceTabs } = conference || {};
	const [tabs, setTabs] = useState(conferenceTabs);
	const getTaskPos = (id: string) => tabs.findIndex((task) => task.id === id);
	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		if (active?.id === over?.id) return;
		setTabs((tabs) => {
			const originalPos = getTaskPos(active?.id as string);
			const newPos = getTaskPos(over?.id as string);
			return arrayMove(tabs, originalPos, newPos);
		});
	};
	return (
		<div className="col-span-12 lg:col-span-4 grid gap-[24px] lg:gap-[32px] w-full">
			<DndContext
				onDragEnd={handleDragEnd}
				collisionDetection={closestCorners}
			>
				<SortableContext
					items={tabs}
					strategy={verticalListSortingStrategy}
				>
					{tabs?.map((tab: TabType) => (
						<ConferenceDragTab
							key={tab.id}
							tab={tab.id}
							conference={conference}
						/>
					))}
				</SortableContext>
			</DndContext>
		</div>
	);
};

export default ConferenceTabs;
