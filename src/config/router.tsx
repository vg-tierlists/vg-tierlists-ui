import {QueryClient, QueryFunction, QueryKey} from '@tanstack/react-query';
import {Body, Root} from 'layouts';
import {createBrowserRouter} from 'react-router-dom';

import {getGame} from 'api';
import GameNav from 'components/GameNav';
import {queryClient} from 'config';
import {Characters, Game, Home, TierLists} from 'pages';

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
				element: <Home />,
			},
			{
				path: ':id',
				element: <Body nav={<GameNav />} />,
				loader: ({params}) => params.id && queryLoader(queryClient, getGame(params.id)),
				children: [
					{
						path: '/:id',
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
				],
			},
		],
	},
]);

export default router;
