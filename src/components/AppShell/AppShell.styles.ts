import {createStyles} from '@mantine/styles';

export default createStyles({
	main: {
		// required to push footer to bottom
		minHeight:
			'calc(100vh' +
			' - var(--mantine-header-height, 0px)' +
			' - var(--mantine-footer-height, 0px)' +
			' - var(--nav-height, 0px)' +
			')',
	},
});
