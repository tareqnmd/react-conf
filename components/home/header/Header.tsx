import headerImg2 from '@/assets/images/header/header_img_2.png';
import LineCircle from '@/components/icons/LineCircle';
import LineCircleHalf from '@/components/icons/LineCircleHalf';
import SmallSnakeLine from '@/components/icons/SmallSnakeLine';
import SnakeLine from '@/components/icons/SnakeLine';
import Image from 'next/image';
import BuyTickets from './BuyTickets';
import HeaderTitle from './HeaderTitle';
import RightInfo from './RightInfo';
import ScrollDown from './ScrollDown';
const Header = () => {
	return (
		<div className="relative overflow-hidden pt-[144px] lg:pt-[166px] pb-[56px] lg:pb-[100px] header-area bg-[url('../assets/images/header/header_bg_small.png')] lg:bg-[url('../assets/images/header/header_bg.png')] bg-cover lg:bg-contain">
			<div className="container max-w-[1550px] p-[1.5rem] lg:p-[1rem]">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] lg:gap-[40px] place-items-end relative">
					<div className="max-lg:hidden absolute top-0 right-[-100px] xl:right-[-30px] 2xl:right-0">
						<SnakeLine />
					</div>
					<div className="lg:hidden absolute top-0 left-0">
						<SmallSnakeLine />
					</div>
					<div className="col-span-1 lg:col-span-7 grid gap-[30px] z-[1]">
						<HeaderTitle />
						<div className="flex gap-[30px]">
							<div className="relative w-full hidden lg:block">
								<Image
									src={headerImg2}
									alt="Header Img"
									className="relative z-[2]"
								/>
								<div className="absolute right-[-50px] bottom-[-80px]">
									<LineCircle />
								</div>
							</div>
							<div className="grid items-start justify-between gap-[30px]">
								<p className="text-[#000] lg:text-[#0A142F] font-[400] text-[16px] lg:text-[18px] max-lg:text-justify">
									Lorem uis diam turpis quam id fermentum.In quis diam turpis
									quam id fermentum..id fermentum.In quis diam turpis quam id
									fermentum.
								</p>
								<BuyTickets />
								<ScrollDown />
							</div>
						</div>
					</div>
					<div className="col-span-1 lg:col-span-5 w-full z-[1]">
						<RightInfo />
					</div>
				</div>
			</div>
			<div className="lg:hidden absolute bottom-[116px] right-0">
				<LineCircleHalf />
			</div>
		</div>
	);
};

export default Header;
