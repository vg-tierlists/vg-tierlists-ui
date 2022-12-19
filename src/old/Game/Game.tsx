import {Title} from '@mantine/core';

import {useGame} from 'hooks';

const Game = () => {
	const {data: game} = useGame();
	return <Title>{game?.id}</Title>;
};

export default Game;
