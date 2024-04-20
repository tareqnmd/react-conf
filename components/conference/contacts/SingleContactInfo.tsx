import Image from 'next/image';
import Link from 'next/link';
import SmallDribble from '../../icons/SmallDribble';
import SmallGithub from '../../icons/SmallGithub';
import SmallLinkedin from '../../icons/SmallLinkedin';
import SmallTwitter from '../../icons/SmallTwitter';
import { ContactType } from './ContactInfo';

const SingleContactInfo = ({ contact }: { contact: ContactType }) => {
	const {
		name,
		aboutShort,
		image: { url },
		social,
	} = contact || {};
	return (
		<div className="grid grid-cols-[auto_1fr] gap-x-[20px] lg:gap-x-[40px] gap-y-[10px] lg:gap-y-[20px]">
			<Image
				alt={name}
				src={url}
				width="140"
				height="140"
				className="rounded-[8px] row-span-2 w-[88px] h-[88px] lg:w-[140px] lg:h-[140px] object-scale-down"
			/>
			<div className="flex justify-start lg:justify-between items-start lg:items-center max-lg:flex-col gap-[10px] self-end">
				<h4 className="text-[#0A142F] font-[700] text-[16px] lg:text-[20px]">
					{name}
				</h4>
				{Object.keys(social || {}).length > 0 && (
					<ul className="flex items-center gap-[16px]">
						{social?.twitter && (
							<li>
								<Link
									target="_blank"
									href={social.twitter as string}
								>
									<SmallTwitter />
								</Link>
							</li>
						)}
						{social?.linkedin && (
							<li>
								<Link
									target="_blank"
									href={social.linkedin as string}
								>
									<SmallLinkedin />
								</Link>
							</li>
						)}
						{social?.dribble && (
							<li>
								<Link
									target="_blank"
									href={social.dribble as string}
								>
									<SmallDribble />
								</Link>
							</li>
						)}
						{social?.github && (
							<li>
								<Link
									target="_blank"
									href={social.github as string}
								>
									<SmallGithub />
								</Link>
							</li>
						)}
					</ul>
				)}
			</div>
			<span className="text-[#0A142F] font-[400] text-[12px] lg:text-[16px]">
				{aboutShort}
			</span>
		</div>
	);
};

export default SingleContactInfo;
