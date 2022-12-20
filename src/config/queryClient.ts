import {QueryClient} from '@tanstack/react-query';

import {CACHE_STALE_TIME} from 'config';

const queryClientBuilder = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: CACHE_STALE_TIME,
			},
		},
	});

export default queryClientBuilder;
