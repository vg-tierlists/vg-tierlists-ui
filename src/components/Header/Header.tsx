import {Header as MantineHeader, Title} from '@mantine/core';

const Header = () => (
	<MantineHeader
		height={60}
		sx={(theme) => ({
			backgroundColor: theme.colors.dark[6],
		})}
	>
		<Title>Tier Lists</Title>
	</MantineHeader>
);

export default Header;
