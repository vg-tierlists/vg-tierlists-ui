import {ReactElement} from 'react';
import {Container, Navbar, Title} from '@mantine/core';

import Layout from 'components/Layout';
import useCurrentGame from 'hooks/useCurrentGame';
import {NextPageWithLayout} from 'pages/_app';

type Props = {};

const GamePage: NextPageWithLayout<Props> = () => {
	const {data: game} = useCurrentGame();
	return (
		<Container fluid>
			<Title>{game?.name}</Title>
		</Container>
	);
};

GamePage.getLayout = function getLayout(page: ReactElement) {
	return <Layout navbar={<Navbar w={300}>Test Navbar</Navbar>}>{page}</Layout>;
};

export default GamePage;
