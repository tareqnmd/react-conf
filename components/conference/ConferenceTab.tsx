import { cn } from '@/lib/util';
import Rearrange from '../icons/Rearrange';

const ConferenceTab = ({
	title,
	active,
}: {
	title: string;
	active: boolean;
}) => {
	return (
		<div
			className={cn(
				'conference-tab border border-[#D9D9D980] rounded-[8px] flex items-center p-[7px] gap-[40px] lg:gap-[45px] text-[#0A142F]',
				active
					? 'bg-[#FFC93E] text-[#fff] shadow-[0_10px_20px_0px_#A1A1A140]'
					: ''
			)}
		>
			<Rearrange />
			<strong className="capitalize font-[700] text-[20px]">{title}</strong>
		</div>
	);
};

export default ConferenceTab;
