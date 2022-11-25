import {Tooltip} from '@mantine/core';
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
			imageProps={{fit: 'contain', height: 100}}
		>
			<></>
		</ImageCard>
	</Tooltip>
);

export default CharacterCard;
