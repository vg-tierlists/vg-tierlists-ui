import {PropsWithChildren} from 'react';
import {MantineProvider} from '@mantine/core';

const Providers = ({children}: PropsWithChildren) => (
	<MantineProvider withGlobalStyles withNormalizeCSS>
		{children}
	</MantineProvider>
);

export default Providers;
