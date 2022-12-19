import {Flex, Space, Title} from '@mantine/core';

import GameCard from 'components/GameCard';
import {useGames} from 'hooks';

const Games = () => {
	const {data: games} = useGames();

	return (
		<>
			<Title>Games</Title>
			<Space h="lg" />
			<Flex gap="md">
				{games?.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</Flex>
		</>
	);
};

export default Games;
