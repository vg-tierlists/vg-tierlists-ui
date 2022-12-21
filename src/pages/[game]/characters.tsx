import {Flex, Space, Title} from '@mantine/core';
import {GetStaticPaths, GetStaticProps} from 'next';

import {getCharacters, getGames, queryKeys} from 'api';
import {CharacterCard} from 'components';
import {useCharacters} from 'hooks';
import {GameLayout} from 'layouts';
import {NextPageWithLayout} from 'pages/_app';
import {getParam} from 'utils';
import queryStaticPaths from 'utils/queryStaticPaths';
import queryStaticProps from 'utils/queryStaticProps';

export const getStaticPaths: GetStaticPaths = () =>
	queryStaticPaths(getGames, (game) => `/${game.slug}/characters`);

export const getStaticProps: GetStaticProps = ({params}) => {
	const game = getParam(params!!, 'game');
	return queryStaticProps({
		queryKey: queryKeys.characters(game),
		queryFn: () => getCharacters(game),
	});
};

const CharactersPage: NextPageWithLayout = () => {
	const {characters} = useCharacters();
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
