import { cn } from '@/lib/util';
import { ReactNode } from 'react';

const TabInfoCard = ({
	children,
	small,
}: {
	children: ReactNode;
	small?: boolean;
}) => {
	return (
		<div
			className={cn(
				'bg-[#fff] rounded-[8px]',
				small ? 'p-[14px] lg:p-[40px]' : 'p-[20px]'
			)}
		>
			{children}
		</div>
	);
};

export default TabInfoCard;
