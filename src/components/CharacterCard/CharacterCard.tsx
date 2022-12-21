import {Text, Tooltip} from '@mantine/core';

import {Character} from 'api/types';
import {ImageCard} from 'components';

type Props = {
	character: Character;
};

const CharacterCard = ({character}: Props) => (
	<Tooltip label={character.name}>
		<ImageCard
			src={character.images.sm}
			component="a"
			href={character.href}
			target="_blank"
			imageProps={{fit: 'contain'}}
		>
			<Text size="xs" align="center">
				{character.name}
			</Text>
		</ImageCard>
	</Tooltip>
);

export default CharacterCard;
