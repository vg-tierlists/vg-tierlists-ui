import {Image, Title} from '@mantine/core';

import useCharacter from 'hooks/useCharacter';

const Character = () => {
	const {data: character} = useCharacter();

	if (!character) {
		return <></>;
	}

	return (
		<>
			<Title>{character.name}</Title>
			<Image src={character.images.lg}></Image>
		</>
	);
};

export default Character;
