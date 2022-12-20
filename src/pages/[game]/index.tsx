import {Title} from '@mantine/core';

import {useGame} from 'hooks';
import {GameLayout} from 'layouts';
import {NextPageWithLayout} from 'pages/_app';

const GamePage: NextPageWithLayout = () => {
	const {data: game} = useGame();
	return <Title>{game?.name}</Title>;
};

GamePage.getLayout = GameLayout;

export default GamePage;
