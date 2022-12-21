import {Title} from '@mantine/core';
import type {GetStaticPaths, GetStaticProps} from 'next';

import {getGame, getGames, queryKeys} from 'api';
import {useGame} from 'hooks';
import {GameLayout} from 'layouts';
import type {NextPageWithLayout} from 'pages/_app';
import {getParam} from 'utils';
import queryStaticPaths from 'utils/queryStaticPaths';
import queryStaticProps from 'utils/queryStaticProps';

export const getStaticPaths: GetStaticPaths = () =>
	queryStaticPaths(getGames, (game) => `/${game.slug}`);

export const getStaticProps: GetStaticProps = ({params}) => {
	const game = getParam(params!!, 'game');
	return queryStaticProps({
		queryKey: queryKeys.game(game),
		queryFn: () => getGame(game),
	});
};

const GamePage: NextPageWithLayout = () => {
	const {game} = useGame();
	return <Title>{game?.name}</Title>;
};

GamePage.getLayout = GameLayout;

export default GamePage;
