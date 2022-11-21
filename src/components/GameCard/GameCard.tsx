import {Link} from 'react-router-dom';
import {Card, Image, Space, Title} from '@mantine/core';

import {Game} from 'api/types/Game';

type Props = {
	game: Game;
};

const GameCard = ({game}: Props) => (
	<Card radius="md" component={Link} to={`/games/${game.id}`}>
		<Card.Section>
			<Image src={game.image} height={160} alt={game.name} />
		</Card.Section>
		<Space h="sm" />
		<Title order={4}>{game.name}</Title>
	</Card>
);

export default GameCard;
