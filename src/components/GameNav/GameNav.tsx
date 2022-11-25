import {Title} from '@mantine/core';

import {useCurrentGame} from 'hooks';

import useStyles from './GameNav.styles';

const GameNav = () => {
	const {data: game} = useCurrentGame();
	const {classes} = useStyles();

	return (
		<div className={classes.body}>
			<Title>{game?.name}</Title>
		</div>
	);
};

export default GameNav;
