import Link from 'next/link';

const NotFound = () => {
	return (
		<main className="app-screen grid place-items-center">
			<div className="text-center">
				<h2>Page Not Found !!</h2>
				<Link
					className="underline"
					href="/"
				>
					Home
				</Link>
			</div>
		</main>
	);
};
export default NotFound;
