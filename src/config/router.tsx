import {QueryClient, QueryFunction, QueryKey} from '@tanstack/react-query';
import {createBrowserRouter} from 'react-router-dom';

import {getCharacters, getGame, getGames} from 'api';
import GameNav from 'components/GameNav';
import {queryClient} from 'config';
import {Body, Root} from 'layouts';
import {Character, Characters, Game, Games, TierLists} from 'pages';

type QueryProps = {
	queryKey: QueryKey;
	queryFn: QueryFunction;
};

const queryLoader = (queryClient: QueryClient, q: QueryProps) => async () => {
	if (!queryClient.getQueryData(q.queryKey)) {
		await queryClient.fetchQuery(q.queryKey, q.queryFn);
	}
	return {q: q.queryKey};
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Body />,
				children: [
					{
						path: '/',
						element: <Games />,
						loader: () => queryLoader(queryClient, getGames()),
					},
				],
			},
			{
				path: ':gameId',
				element: <Body nav={<GameNav />} />,
				loader: ({params: {gameId}}) => gameId && queryLoader(queryClient, getGame(gameId)),
				children: [
					{
						path: '/:gameId',
						element: <Game />,
					},
					{
						path: 'tier-lists',
						element: <TierLists />,
					},
					{
						path: 'characters',
						element: <Characters />,
						loader: ({params: {gameId}}) =>
							gameId && queryLoader(queryClient, getCharacters(gameId)),
					},
					{
						path: 'characters/:characterId',
						element: <Character />,
						loader: ({params: {characterId}}) =>
							characterId && queryLoader(queryClient, getCharacters(characterId)),
					},
				],
			},
		],
	},
]);

export default router;
