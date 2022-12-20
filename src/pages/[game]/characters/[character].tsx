import {Image, Title} from '@mantine/core';

import useCurrentCharacter from 'hooks/useCurrentCharacter';
import GameLayout from 'layouts/GameLayout';
import {NextPageWithLayout} from 'pages/_app';

const CharacterPage: NextPageWithLayout = () => {
	const {isSuccess, data: character} = useCurrentCharacter();

	if (!isSuccess) {
		return <></>;
	}

	console.log(character);

	return (
		<>
			<Title>{character?.name}</Title>
			<Image src={character?.images?.lg} width={800}></Image>
		</>
	);
};

CharacterPage.getLayout = GameLayout;

export default CharacterPage;
