import {AppShell} from '@mantine/core';

import Body from 'components/Body';
import Header from 'components/Header';

const Layout = () => (
	<AppShell header={<Header />}>
		<Body></Body>
	</AppShell>
);

export default Layout;
