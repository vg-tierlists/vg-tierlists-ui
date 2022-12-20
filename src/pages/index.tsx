import {Container, Flex, Space, Text, Title} from '@mantine/core';

import GameCard from 'components/GameCard';
import useGames from 'hooks/useGames';

export default function Home() {
	const {isLoading, isError, data: games} = useGames();

	if (isLoading) {
		return <Text>Loading...</Text>;
	}

	if (isError) {
		return <Text>Error...</Text>;
	}

	return (
		<Container>
			<Title>Games</Title>
			<Space h="lg" />
			<Flex gap="md" wrap="wrap">
				{games?.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</Flex>
		</Container>
	);
}
