import {Flex, Space, Title} from '@mantine/core';
import type {GetStaticProps} from 'next';

import {getGames, queryKeys} from 'api';
import {GameCard} from 'components';
import {useGames} from 'hooks';
import {queryStaticProps} from 'utils';

export const getStaticProps: GetStaticProps = () =>
	queryStaticProps({
		queryKey: queryKeys.games(),
		queryFn: getGames,
	});

const Home = () => {
	const {games} = useGames();
	return (
		<>
			<Title>Games</Title>
			<Space h="lg" />
			<Flex gap="md" wrap="wrap">
				{games?.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</Flex>
		</>
	);
};

export default Home;
