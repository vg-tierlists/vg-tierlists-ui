import {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';

import Providers from 'components/Providers';
import DefaultLayout from 'layouts/DefaultLayout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const App = ({Component, pageProps}: AppPropsWithLayout) => {
	const getLayout = Component.getLayout || DefaultLayout;

	return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>;
};

export default App;
