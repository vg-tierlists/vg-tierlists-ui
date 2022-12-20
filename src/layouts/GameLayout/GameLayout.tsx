import {ReactElement} from 'react';
import {Container} from '@mantine/core';

import {AppShell, GameNavbar} from 'components';

const GameLayout = (page: ReactElement) => (
	<AppShell navbar={<GameNavbar />}>
		<Container fluid>{page}</Container>
	</AppShell>
);

export default GameLayout;
