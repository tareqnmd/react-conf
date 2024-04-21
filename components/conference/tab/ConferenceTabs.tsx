'use client';
import {
	DndContext,
	DragEndEvent,
	MouseSensor,
	closestCorners,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	SortableContext,
	arrayMove,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import { ConferenceType } from '../Conference';
import ConferenceBaseTab from './ConferenceBaseTab';
import ConferenceDragTabContainer from './ConferenceDragTabContainer';

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

	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 20,
			},
		})
	);

	return (
		<>
			<div className="hidden col-span-4 lg:grid gap-[32px] w-full">
				<DndContext
					sensors={sensors}
					onDragEnd={handleDragEnd}
					collisionDetection={closestCorners}
				>
					<SortableContext
						items={tabs}
						strategy={verticalListSortingStrategy}
					>
						{tabs?.map((tab: TabType) => (
							<ConferenceDragTabContainer
								key={tab.id}
								tab={tab.id}
								conference={conference}
							/>
						))}
					</SortableContext>
				</DndContext>
			</div>
			<div className="col-span-12 grid gap-[24px] w-full lg:hidden">
				{tabs?.map((tab: TabType) => (
					<ConferenceBaseTab
						key={tab.id}
						tab={tab.id}
						conference={conference}
					/>
				))}
			</div>
		</>
	);
};

export default ConferenceTabs;
