import {Title} from '@mantine/core';
import type {GetStaticPaths, GetStaticProps} from 'next';
import {getParam} from 'utils';

import {getGame, getGames} from 'api';
import type {Game} from 'api/types';
import {useGame} from 'hooks';
import {GameLayout} from 'layouts';
import type {NextPageWithLayout} from 'pages/_app';

type Props = {
	game: Game;
};

export const getStaticPaths: GetStaticPaths = () => {
	return getGames()
		.then((games) => games.map((game) => `/${game.slug}`))
		.then((paths) => ({
			paths,
			fallback: false,
		}));
};

export const getStaticProps: GetStaticProps<Props> = ({params}) => {
	return getGame(getParam(params!!, 'game')).then((game) => ({
		props: {game},
		revalidate: 10,
	}));
};

const GamePage: NextPageWithLayout = () => {
	const {data: game} = useGame();
	return <Title>{game?.name}</Title>;
};

GamePage.getLayout = GameLayout;

export default GamePage;
