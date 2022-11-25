import {Flex, Space, Title} from '@mantine/core';

import CharacterCard from 'components/CharacterCard';
import {useCharacters} from 'hooks';

const Characters = () => {
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

export default Characters;
