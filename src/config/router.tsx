import {createBrowserRouter} from 'react-router-dom';
import {QueryClient, QueryFunction, QueryKey} from '@tanstack/react-query';

import {getGames} from 'api';
import Root from 'components/Root';
import queryClient from 'config/queryClient';
import {Game, Games, Home} from 'pages';

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
				path: '/games',
				element: <Games />,
				loader: queryLoader(queryClient, getGames()),
			},
			{
				path: '/games/:slug',
				element: <Game />,
			},
		],
	},
]);

export default router;
