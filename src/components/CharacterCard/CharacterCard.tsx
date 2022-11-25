import {Text, Tooltip} from '@mantine/core';
import {Link} from 'react-router-dom';

import {Character} from 'api/types';
import ImageCard from 'components/ImageCard/ImageCard';

type Props = {
	character: Character;
};

const CharacterCard = ({character}: Props) => (
	<Tooltip label={character.name}>
		<ImageCard
			src={character.images.sm}
			component={Link}
			to={character.slug}
			imageOnly
			imageProps={{fit: 'contain', height: 100}}
			maw={100}
		>
			<Text size="xs">{character.name}</Text>
		</ImageCard>
	</Tooltip>
);

export default CharacterCard;
