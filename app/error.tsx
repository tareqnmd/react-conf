'use client';

import RootError from '@/components/root/Error';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<RootError
			error={error}
			reset={reset}
		/>
	);
}
