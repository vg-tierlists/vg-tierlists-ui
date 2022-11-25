import {createStyles} from '@mantine/styles';

export const height = 104;

export default createStyles((theme) => ({
	root: {
		height: 'var(--nav-height, 100%)',
	},
	title: {
		padding: theme.spacing.md,
	},
	tabs: {},
}));
