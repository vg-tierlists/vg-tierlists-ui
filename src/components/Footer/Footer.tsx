import {ActionIcon, Center, Footer as MantineFooter, Group, Space, Text} from '@mantine/core';
import {IconBrandDiscord, IconCode} from '@tabler/icons';

const Footer = () => (
	<MantineFooter height={60} p="xs">
		<Center>
			<Group spacing="xs">
				<ActionIcon size="sm" component="a" href="https://github.com/vg-tierlists" target="_blank">
					<IconCode />
				</ActionIcon>
				<ActionIcon size="sm">
					<IconBrandDiscord />
				</ActionIcon>
			</Group>
		</Center>
		<Space h={5} />
		<Text align="center" size="xs" color="dimmed">
			© 2022 Tom Stockwell. No rights reserved.
		</Text>
	</MantineFooter>
);

export default Footer;
