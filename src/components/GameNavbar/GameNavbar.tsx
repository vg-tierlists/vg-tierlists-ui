import {Navbar, Text} from '@mantine/core';

import {NavButton} from 'components';
import {useGame, useGameNav} from 'hooks';

const GameNavbar = () => {
	const {game} = useGame();
	const {links} = useGameNav();
	return (
		<Navbar width={{base: 300}}>
			<Navbar.Section mt="xs">
				<Text>Game: {game?.name}</Text>
			</Navbar.Section>
			<Navbar.Section grow>
				{links.map((link) => (
					<NavButton key={link.href} {...link} />
				))}
			</Navbar.Section>
		</Navbar>
	);
};

export default GameNavbar;
