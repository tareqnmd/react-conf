import Link from 'next/link';
import Logo from './Logo';
import SidebarIcon from './SidebarIcon';

const links = [
	{ title: 'About us', link: '#' },
	{ title: 'What We do', link: '#' },
	{ title: 'Our work', link: '#' },
	{ title: 'Blog', link: '#' },
	{ title: 'Say hi', link: '#' },
];

const Navbar = () => {
	return (
		<nav className="absolute w-full">
			<div className="container flex justify-between items-center py-[32px] lg:py-[40px]">
				<Link href="/">
					<Logo />
				</Link>
				<ul className="hidden lg:flex items-center gap-[58px]">
					{links.map((link, index) => (
						<li
							className="font-[500] text-[18px] text-[#0A142F]"
							key={index}
						>
							<Link href={link.link}>{link.title}</Link>
						</li>
					))}
				</ul>
				<SidebarIcon />
			</div>
		</nav>
	);
};

export default Navbar;
