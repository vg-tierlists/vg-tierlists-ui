import {ReactElement} from 'react';
import {Container} from '@mantine/core';

import AppShell from 'components/AppShell';
import GameNavbar from 'components/GameNavbar';

const GameLayout = (page: ReactElement) => (
	<AppShell navbar={<GameNavbar />}>
		<Container fluid>{page}</Container>
	</AppShell>
);

export default GameLayout;
