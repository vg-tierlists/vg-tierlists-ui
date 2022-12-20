import {Flex, Space, Title} from '@mantine/core';

import CharacterCard from 'components/CharacterCard';
import {useCharacters} from 'hooks';
import GameLayout from 'layouts/GameLayout';
import {NextPageWithLayout} from 'pages/_app';

const CharactersPage: NextPageWithLayout = () => {
	const {data: characters} = useCharacters();

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
