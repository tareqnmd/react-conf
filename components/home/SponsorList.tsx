import Image, { StaticImageData } from 'next/image';

type sponsorType = { name: string; sponsorList: StaticImageData[] };

const SponsorList = ({ sponsor }: { sponsor: sponsorType }) => {
	const { name, sponsorList } = sponsor;
	return (
		<div className="grid gap-[16px] lg:gap-[32px] place-items-center">
			<span className="font-[500] text-[12px] lg:text-[16px] text-[#667085]">
				{name}
			</span>
			<div className="flex justify-center flex-wrap items-center gap-x-[56px] gap-y-[16px] lg:gap-y-[56px]">
				{sponsorList?.map((sponsor: StaticImageData, index: number) => (
					<Image
						key={index}
						src={sponsor}
						alt="sponsor"
						className="max-lg:w-auto h-[32px] lg:h-auto"
					/>
				))}
			</div>
		</div>
	);
};

export default SponsorList;
