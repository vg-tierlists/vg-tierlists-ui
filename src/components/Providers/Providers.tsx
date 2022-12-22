import {PropsWithChildren, useState} from 'react';
import {MantineProvider} from '@mantine/core';
import {Hydrate, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import {buildQueryClient} from 'config';

type Props = {
	pageProps: any;
};

const Providers = ({children, pageProps}: PropsWithChildren<Props>) => {
	const [queryClient] = useState(buildQueryClient);
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</MantineProvider>
	);
};

export default Providers;
