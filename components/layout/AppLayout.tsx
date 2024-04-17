import { ReactNode } from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const AppLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="min-h-dvh grid grid-rows-layout">
			<Navbar />
			{children}
			<Footer />
		</main>
	);
};

export default AppLayout;
