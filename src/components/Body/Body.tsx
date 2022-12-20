import {PropsWithChildren} from 'react';

import useStyles from './Body.styles';

export default function Body({children}: PropsWithChildren) {
	const {classes} = useStyles();
	return <div className={classes.body}>{children}</div>;
}
