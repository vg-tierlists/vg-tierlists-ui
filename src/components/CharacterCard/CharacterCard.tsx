import {Text, Tooltip} from '@mantine/core';
import Link from 'next/link';

import {Character} from 'api/types';
import {ImageCard} from 'components';
import {useGameParam} from 'hooks';

type Props = {
	character: Character;
};

const CharacterCard = ({character}: Props) => {
	const game = useGameParam();
	return (
		<Tooltip label={character.name}>
			<ImageCard
				src={character.images.sm}
				component={Link}
				href={`/${game}/characters/${character.slug}`}
				imageOnly
				imageProps={{fit: 'contain', height: 100}}
				maw={100}
			>
				<Text size="xs">{character.name}</Text>
			</ImageCard>
		</Tooltip>
	);
};

export default CharacterCard;
