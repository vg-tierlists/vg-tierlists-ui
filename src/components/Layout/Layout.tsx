import {PropsWithChildren} from 'react';
import {AppShell} from '@mantine/core';

import Body from 'components/Body';
import Header from 'components/Header';

const Layout = ({children}: PropsWithChildren) => (
	<AppShell header={<Header />}>
		<Body>{children}</Body>
	</AppShell>
);

export default Layout;
