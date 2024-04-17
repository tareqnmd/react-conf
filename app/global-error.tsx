'use client';

import RootGlobalError from '@/components/root/GlobalError';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<RootGlobalError
			error={error}
			reset={reset}
		/>
	);
}
