import {AppShell} from '@mantine/core';
import {Outlet} from 'react-router-dom';

import Header from 'components/Header';

const Root = () => (
	<AppShell header={<Header />} padding={0}>
		<Outlet />
	</AppShell>
);

export default Root;
