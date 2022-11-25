import {QueryClient, QueryFunction, QueryKey} from '@tanstack/react-query';
import {createBrowserRouter} from 'react-router-dom';

import {getGame} from 'api';
import GameNav from 'components/GameNav';
import {queryClient} from 'config';
import {Body, Root} from 'layouts';
import {Characters, Game, Games, TierLists} from 'pages';
import Character from 'pages/Character';

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
					},
				],
			},
			{
				path: ':gameId',
				element: <Body nav={<GameNav />} />,
				loader: ({params}) => params.id && queryLoader(queryClient, getGame(params.id)),
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
					},
					{
						path: 'characters/:charId',
						element: <Character />,
					},
				],
			},
		],
	},
]);

export default router;
