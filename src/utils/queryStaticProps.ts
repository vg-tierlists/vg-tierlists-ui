import {dehydrate, FetchQueryOptions} from '@tanstack/query-core';

import {buildQueryClient, ISR_REVALIDATE_TIME} from 'config';

import WithRequired from './WithRequired';

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
