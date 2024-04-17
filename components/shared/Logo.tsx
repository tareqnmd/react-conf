import primaryLogo from '@/assets/images/primary-logo.png';
import secondaryLogo from '@/assets/images/secondary-logo.png';
import Image from 'next/image';
const Logo = ({ type }: { type?: string }) => {
	return (
		<Image
			src={type === 'secondary' ? secondaryLogo : primaryLogo}
			alt="React Conference"
			className={
				type === 'secondary'
					? 'w-[116px] lg:w-[176px]'
					: 'w-[58px] lg:w-[116px]'
			}
		/>
	);
};

export default Logo;
