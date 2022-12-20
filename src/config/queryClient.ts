import {QueryClient} from '@tanstack/react-query';

import {CACHE_STALE_TIME} from 'config';

export default function buildQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: CACHE_STALE_TIME,
			},
		},
	});
}
