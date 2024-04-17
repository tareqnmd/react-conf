'use client';
import { useEffect } from 'react';

const GlobalError = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="app-screen grid place-items-center">
			<div className="text-center">
				<h2 className=''>Something went wrong !!!</h2>
				<button
					className="underline"
					onClick={() => reset()}
				>
					Try again
				</button>
			</div>
		</main>
	);
};
export default GlobalError;
