import {PropsWithChildren} from 'react';
import {MantineProvider} from '@mantine/core';
import {QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {RouterProvider} from '@tanstack/react-router';

import queryClient from 'config/queryClient';
import router from 'config/router';

const Providers = ({children}: PropsWithChildren) => (
	<MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: 'dark'}}>
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools />
			<RouterProvider router={router}>{children}</RouterProvider>
		</QueryClientProvider>
	</MantineProvider>
);

export default Providers;
