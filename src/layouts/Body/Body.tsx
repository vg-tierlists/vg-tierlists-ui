import {ReactElement} from 'react';
import {Outlet} from 'react-router-dom';

import useStyles from './Body.styles';

type BodyProps = {
	nav?: ReactElement;
};

const Body = ({nav}: BodyProps) => {
	const {classes} = useStyles();

	return (
		<>
			{nav}
			<div className={classes.body}>
				<Outlet />
			</div>
		</>
	);
};

export default Body;
