import {Text} from '@mantine/core';
import Link from 'next/link';

import {Game} from 'api/types';
import {ImageCard} from 'components';

type Props = {
	game: Game;
};

const GameCard = ({game}: Props) => (
	<ImageCard src={game.image} component={Link} href={`/${game.slug}`} size={250}>
		<Text size="lg" align="center">
			{game.name}
		</Text>
	</ImageCard>
);

export default GameCard;
