import {Outlet} from 'react-router-dom';
import {AppShell} from '@mantine/core';

import Header from 'components/Header';

const Layout = () => (
	<AppShell header={<Header />}>
		<Outlet />
	</AppShell>
);

export default Layout;
