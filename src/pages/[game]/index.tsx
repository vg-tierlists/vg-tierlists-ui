import {Title} from '@mantine/core';

import useCurrentGame from 'hooks/useCurrentGame';
import GameLayout from 'layouts/GameLayout';
import {NextPageWithLayout} from 'pages/_app';

const GamePage: NextPageWithLayout = () => {
	const {data: game} = useCurrentGame();
	return <Title>{game?.name}</Title>;
};

GamePage.getLayout = GameLayout;

export default GamePage;
