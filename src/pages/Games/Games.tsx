import {SimpleGrid, Space, Title} from '@mantine/core';

import GameCard from 'components/GameCard';
import useGames from 'hooks/api/useGames';

const Games = () => {
	const {isLoading, error, data: games, isFetching} = useGames();

	if (isLoading || error || isFetching || !games) {
		return <></>;
	}

	return (
		<>
			<Title>Games</Title>
			<Space h="lg" />
			<SimpleGrid cols={3}>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default Games;
