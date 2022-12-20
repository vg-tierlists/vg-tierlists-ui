import {AppShell as MantineAppShell, AppShellProps} from '@mantine/core';

import Footer from 'components/Footer';
import Header from 'components/Header';

import useStyles from './AppShell.styles';

const AppShell = ({children, ...props}: AppShellProps) => {
	const {classes} = useStyles();
	return (
		<MantineAppShell
			header={<Header />}
			footer={<Footer />}
			classNames={classes}
			fixed={false}
			{...props}
		>
			{children}
		</MantineAppShell>
	);
};

export default AppShell;
