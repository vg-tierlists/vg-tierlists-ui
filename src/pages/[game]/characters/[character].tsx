import {Image, Title} from '@mantine/core';

import {useCharacter} from 'hooks';
import {GameLayout} from 'layouts';
import {NextPageWithLayout} from 'pages/_app';

const CharacterPage: NextPageWithLayout = () => {
	const {isSuccess, data: character} = useCharacter();

	if (!isSuccess) {
		return <></>;
	}

	return (
		<>
			<Title>{character.name}</Title>
			<Image src={character.images.lg} width={800} placeholder={character.name}></Image>
		</>
	);
};

CharacterPage.getLayout = GameLayout;

export default CharacterPage;
