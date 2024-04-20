import Crown from '@/components/icons/Crown';

const HeaderTitle = () => {
	return (
		<h1 className="text-[#111d5e] font-[700] text-[48px] lg:text-[100px] 2xl:text-[140px] flex flex-col items-end leading-[48px] lg:leading-[100px] 2xl:leading-[140px] mr-auto sm:mx-auto lg:mx-0">
			<span className="relative">
				React
				<div className="absolute top-0 -translate-x-[65%] -translate-y-[65%]">
					<Crown />
				</div>
			</span>
			<span className="relative">Conference</span>
		</h1>
	);
};

export default HeaderTitle;
