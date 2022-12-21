import {dehydrate} from '@tanstack/query-core';
import {FetchQueryOptions} from '@tanstack/query-core/src/types';

import {ISR_REVALIDATE_TIME} from 'config';
import buildQueryClient from 'config/queryClient';
import WithRequired from 'utils/WithRequired';

type Query = WithRequired<FetchQueryOptions, 'queryFn' | 'queryKey'>;

export default async function queryStaticProps(...queries: Query[]) {
	const queryClient = buildQueryClient();
	await Promise.all(queries.map((query) => queryClient.prefetchQuery(query)));

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: ISR_REVALIDATE_TIME,
	};
}
