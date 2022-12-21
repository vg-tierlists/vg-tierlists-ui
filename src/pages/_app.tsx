import {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';

import {Providers} from 'components';
import {DefaultLayout} from 'layouts';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = Omit<AppProps, 'Component'> & {
	Component: NextPageWithLayout;
};

const App = ({Component, pageProps}: AppPropsWithLayout) => {
	const getLayout = Component.getLayout || DefaultLayout;

	return <Providers pageProps={pageProps}>{getLayout(<Component {...pageProps} />)}</Providers>;
};

export default App;
