import Image, { StaticImageData } from 'next/image';

type sponsorType = { name: string; sponsorList: StaticImageData[] };

const SponsorList = ({ sponsor }: { sponsor: sponsorType }) => {
	const { name, sponsorList } = sponsor;
	return (
		<div>
			<span>{name}</span>
			<div>
				{sponsorList?.map((sponsor: StaticImageData, index: number) => (
					<Image
						key={index}
						src={sponsor}
						alt="sponsor"
					/>
				))}
			</div>
		</div>
	);
};

export default SponsorList;
