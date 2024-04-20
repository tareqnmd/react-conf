import { cn } from '@/lib/util';
import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'React Conference',
	description: 'React Conference',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'min-h-dvh grid grid-rows-layout relative',
					inter.className
				)}
			>
				{children}
			</body>
		</html>
	);
}
