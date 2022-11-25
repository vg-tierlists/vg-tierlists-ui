import {createStyles} from '@mantine/styles';

export default createStyles((theme) => {
	const padding = theme.spacing.md;

	return {
		root: {},
		title: {
			padding: theme.spacing.md,
			// borderBottom: `1px solid ${theme.colors.dark[4]}`,
		},
		tabs: {},
	};
});
