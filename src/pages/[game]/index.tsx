import {Title} from '@mantine/core';

import useGame from 'hooks/useGame';
import GameLayout from 'layouts/GameLayout';
import {NextPageWithLayout} from 'pages/_app';

const GamePage: NextPageWithLayout = () => {
	const {data: game} = useGame();
	return <Title>{game?.name}</Title>;
};

GamePage.getLayout = GameLayout;

export default GamePage;
