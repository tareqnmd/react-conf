import AppLayout from '@/components/layout/AppLayout';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return <AppLayout>{children}</AppLayout>;
};

export default Layout;
