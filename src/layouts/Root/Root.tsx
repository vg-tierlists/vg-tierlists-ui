import {AppShell} from '@mantine/core';
import {Outlet} from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

const Root = () => (
	<AppShell header={<Header />} footer={<Footer />} padding={0} fixed={false}>
		<Outlet />
	</AppShell>
);

export default Root;
