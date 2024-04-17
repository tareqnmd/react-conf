import Link from 'next/link';
import Dribble from '../icons/Dribble';
import Facebook from '../icons/Facebook';
import Linkedin from '../icons/Linkedin';
import Twitter from '../icons/Twitter';
import Logo from './Logo';

const Footer = () => {
	return (
		<footer className="bg-[#111D5E] grid place-items-center gap-[48px] lg:gap-[80px] py-[40px] lg:py-[60px]">
			<Logo type="secondary" />
			<div className="grid place-items-center gap-[24px]">
				<ul className="flex items-center gap-[32px]">
					<li>
						<Link
							target="_blank"
							href="#"
						>
							<Twitter />
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							href="#"
						>
							<Linkedin />
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							href="#"
						>
							<Facebook />
						</Link>
					</li>
					<li>
						<Link
							target="_blank"
							href="#"
						>
							<Dribble />
						</Link>
					</li>
				</ul>
				<span className="text-[#fff] text-[16px] font-[400]">
					© 2023 Lemonhive. All rights reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
