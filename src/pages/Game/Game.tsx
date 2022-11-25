import {Title} from '@mantine/core';

import {useCurrentGame} from 'hooks';

const Game = () => {
	const {data: game} = useCurrentGame();
	return <Title>{game?.id}</Title>;
};

export default Game;
