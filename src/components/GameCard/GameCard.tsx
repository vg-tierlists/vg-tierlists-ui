import {Text} from '@mantine/core';
import Link from 'next/link';

import {Game} from 'api/types';
import ImageCard from 'components/ImageCard';

type Props = {
	game: Game;
};

const GameCard = ({game}: Props) => (
	<ImageCard src={game.image} component={Link} href={`/${game.slug}`} p="sm" w={250}>
		<Text size="lg" mt="sm">
			{game.name}
		</Text>
	</ImageCard>
);

export default GameCard;
