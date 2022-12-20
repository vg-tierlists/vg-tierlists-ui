import {Container, Flex, Space, Text, Title} from '@mantine/core';

import {GameCard} from 'components';
import {useGames} from 'hooks';

const Home = () => {
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
};

export default Home;
