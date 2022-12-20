import {ActionIcon, Header as MantineHeader} from '@mantine/core';
import {IconHome} from '@tabler/icons';
import Link from 'next/link';

const Header = () => (
	<MantineHeader
		height={64}
		p="xs"
		sx={(theme) => ({
			backgroundColor: theme.colors.dark[5],
		})}
	>
		<ActionIcon size="xl" variant="transparent" component={Link} href="/">
			<IconHome size={36}></IconHome>
		</ActionIcon>
	</MantineHeader>
);

export default Header;
