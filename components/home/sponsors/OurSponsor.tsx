import catalog from '@/assets/images/sponsor/catalog.png';
import circooles from '@/assets/images/sponsor/circooles.png';
import circooles_2 from '@/assets/images/sponsor/circooles_2.png';
import gofore from '@/assets/images/sponsor/gofore.png';
import layer from '@/assets/images/sponsor/layers.png';
import layer_2 from '@/assets/images/sponsor/layers_2.png';
import quotient from '@/assets/images/sponsor/quotient.png';
import sisyphus from '@/assets/images/sponsor/sisyphus.png';
import sisyphus_2 from '@/assets/images/sponsor/sisyphus_2.png';
import SponsorList from './SponsorList';

const sponsors = [
	{ name: '🥇 Gold Sponsor', sponsorList: [layer, sisyphus] },
	{ name: '🥈Silver Sponsors', sponsorList: [circooles, catalog, gofore] },
	{
		name: '🥉Bronze Sponsors',
		sponsorList: [sisyphus_2, quotient, layer_2, circooles_2],
	},
];
const OurSponsor = () => {
	return (
		<div className="bg-[#F9FAFB]">
			<div className="container grid gap-[24px] lg:gap-[32px] py-[56px] lg:py-[100px]">
				<h3 className="font-[700] text-[20px] lg:text-[48px] text-[#0A142F] text-center">
					Our Sponsor
				</h3>
				{sponsors.map((sponsor, index) => (
					<SponsorList
						sponsor={sponsor}
						key={index}
					/>
				))}
			</div>
		</div>
	);
};

export default OurSponsor;
