import {Container} from '@mantine/core';
import type {ReactElement} from 'react';

import {AppShell} from 'components';

const DefaultLayout = (page: ReactElement) => (
	<AppShell>
		<Container>{page}</Container>
	</AppShell>
);

export default DefaultLayout;
