import {SimpleGrid, Space, Title} from '@mantine/core';

import GameCard from 'components/GameCard';
import {useGames} from 'hooks';

const Games = () => {
	const {data: games} = useGames();

	return (
		<>
			<Title>Games</Title>
			<Space h="lg" />
			<SimpleGrid cols={3}>
				{games?.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default Games;
