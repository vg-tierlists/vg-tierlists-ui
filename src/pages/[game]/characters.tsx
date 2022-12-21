import {Flex, Space, Title} from '@mantine/core';
import {GetStaticPaths, GetStaticProps} from 'next';
import {getParam} from 'utils';

import {getCharacters, getGames} from 'api';
import {Character} from 'api/types';
import {CharacterCard} from 'components';
import {GameLayout} from 'layouts';
import {NextPageWithLayout} from 'pages/_app';

type Props = {
	characters: Character[];
};

export const getStaticPaths: GetStaticPaths = () => {
	return getGames()
		.then((games) => games.map((game) => `/${game.slug}/characters`))
		.then((paths) => ({
			paths,
			fallback: false,
		}));
};

export const getStaticProps: GetStaticProps<Props> = ({params}) => {
	return getCharacters(getParam(params!!, 'game')).then((characters) => ({
		props: {characters},
		revalidate: 10,
	}));
};

const CharactersPage: NextPageWithLayout<Props> = ({characters}) => {
	return (
		<>
			<Title>Characters</Title>
			<Space h="lg" />
			<Flex gap="sm">
				{characters?.map((game) => (
					<CharacterCard key={game.id} character={game} />
				))}
			</Flex>
		</>
	);
};

CharactersPage.getLayout = GameLayout;

export default CharactersPage;
