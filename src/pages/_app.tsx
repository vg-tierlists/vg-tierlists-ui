import {ReactElement, ReactNode} from 'react';
import type {NextPage} from 'next';
import type {AppProps} from 'next/app';

import Layout from 'components/Layout';
import Providers from 'components/Providers';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

	return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>;
}
