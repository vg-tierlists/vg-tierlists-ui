import {createStyles} from '@mantine/styles';

export default createStyles((theme) => ({
	body: {
		flex: 1,

		width: '100vw',
		boxSizing: 'border-box',

		// required for 'fixed' layout elements
		minHeight:
			'calc(100vh' +
			' - var(--mantine-header-height, 0px)' +
			' - var(--mantine-footer-height, 0px)' +
			' - var(--nav-height, 0px)' +
			')',
	},
}));
