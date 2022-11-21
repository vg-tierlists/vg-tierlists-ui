import {Title} from '@mantine/core';

import useCurrentGame from 'hooks/api/useCurrentGame';

const Game = () => {
	const {data: game} = useCurrentGame();
	return <Title>{game?.name}</Title>;
};

export default Game;
