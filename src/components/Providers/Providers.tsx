import {PropsWithChildren, useState} from 'react';
import {MantineProvider} from '@mantine/core';
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import queryClientBuilder from 'config/queryClient';

const Providers = ({children}: PropsWithChildren) => {
	const [queryClient] = useState(queryClientBuilder);
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools />
				{children}
			</QueryClientProvider>
		</MantineProvider>
	);
};

export default Providers;
