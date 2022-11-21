import {PropsWithChildren} from 'react';
import {MantineProvider} from '@mantine/core';
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

import queryClient from 'config/queryClient';

const Providers = ({children}: PropsWithChildren) => (
	<MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			{children}
		</QueryClientProvider>
	</MantineProvider>
);

export default Providers;
