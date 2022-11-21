import {QueryClient} from '@tanstack/react-query';

import {CACHE_STALE_TIME} from 'config/config';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: CACHE_STALE_TIME,
		},
	},
});

export default queryClient;
