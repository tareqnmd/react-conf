import Link from 'next/link';

const ScrollDown = () => {
	return (
		<Link
			href="#conferences"
			className="hidden lg:flex items-center gap-1 [writing-mode:vertical-lr] justify-self-end mr-[100px]"
		>
			<span className="text-[#0A142F] font-[400] text-[14px]">Scroll Down</span>
			<svg
				width="17"
				height="16"
				viewBox="0 0 17 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.0316157 0.938778L8.31383 15.284L16.596 0.938778L15.5706 0.938777L8.31383 13.5079L1.05704 0.938777L0.0316157 0.938778Z"
					fill="#0A142F"
				/>
				<path
					d="M2.26397 0.938778L8.31383 11.4174L14.3637 0.938777L2.26397 0.938778Z"
					fill="#0A142F"
				/>
			</svg>
		</Link>
	);
};

export default ScrollDown;
