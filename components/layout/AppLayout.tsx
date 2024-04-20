import { ReactNode } from 'react';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const AppLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default AppLayout;
