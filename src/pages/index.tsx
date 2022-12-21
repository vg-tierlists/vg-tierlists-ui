import {Container, Flex, Space, Title} from '@mantine/core';
import type {GetStaticProps} from 'next';

import {getGames} from 'api';
import {Game} from 'api/types';
import {GameCard} from 'components';

type Props = {
	games: Game[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
	return getGames().then((games) => ({
		props: {
			games,
		},
		revalidate: 10,
	}));
};

const Home = ({games}: Props) => {
	// const {isLoading, isError, data: games} = useGames();
	//
	// if (isLoading) {
	// 	return <Text>Loading...</Text>;
	// }
	//
	// if (isError) {
	// 	return <Text>Error...</Text>;
	// }

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
