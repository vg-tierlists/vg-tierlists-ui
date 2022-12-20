import React, {PropsWithChildren} from 'react';
import {AppShell} from '@mantine/core';

import Footer from 'components/Footer';
import Header from 'components/Header';

import useStyles from './Layout.styles';

type Props = {
	navbar?: React.ReactElement;
};

export default function Layout({children, navbar}: PropsWithChildren<Props>) {
	const {classes} = useStyles();
	return (
		<AppShell
			header={<Header />}
			footer={<Footer />}
			navbar={navbar}
			classNames={classes}
			fixed={false}
		>
			{children}
		</AppShell>
	);
}
