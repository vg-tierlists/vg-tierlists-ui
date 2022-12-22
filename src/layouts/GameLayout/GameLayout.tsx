import {ReactElement} from 'react';
import {Box, Container} from '@mantine/core';

import {AppShell, Breadcrumbs, GameNavbar} from 'components';

const GameLayout = (page: ReactElement) => (
	<AppShell navbar={<GameNavbar />}>
		<Container fluid>
			<Breadcrumbs />
			<Box pt="md">{page}</Box>
		</Container>
	</AppShell>
);

export default GameLayout;
