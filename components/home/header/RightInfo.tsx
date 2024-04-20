import headerImg from '@/assets/images/header_img.png';
import headerImg2 from '@/assets/images/header_img_2.png';
import Star from '@/components/icons/Star';
import Image from 'next/image';

const RightInfo = () => {
	return (
		<div className="grid gap-[72px]">
			<div className="relative">
				<Image
					src={headerImg}
					alt="Header Img"
					className="max-lg:w-full"
				/>
				<div className="absolute bottom-[-60px] lg:bottom-[-50px] lg:left-[-50px] max-lg:right-[-30px]">
					<Star />
				</div>
			</div>
			<div className="lg:hidden grid grid-cols-2">
				<Image
					src={headerImg2}
					alt="Header Img"
					className="w-full"
				/>
			</div>
		</div>
	);
};

export default RightInfo;
