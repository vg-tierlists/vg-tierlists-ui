import {createStyles} from '@mantine/styles';

export default createStyles((theme) => {
	const padding = theme.spacing.md;

	return {
		body: {
			flex: 1,

			// width: '100vw',
			// boxSizing: 'border-box',
			// padding: theme.spacing.md,

			// required for 'fixed' layout elements
			// minHeight: '100vh',
			// paddingTop: `calc(var(--mantine-header-height, 0px) + ${padding}px)`,
		},
	};
});
