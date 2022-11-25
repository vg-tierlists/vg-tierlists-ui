import {useCallback} from 'react';
import {Global, Stack, Tabs, TabsValue, Title} from '@mantine/core';
import {useLocation, useNavigate} from 'react-router-dom';

import {useCurrentGame} from 'hooks';

import useStyles, {height} from './GameNav.styles';

const GameNav = () => {
	const {data: game} = useCurrentGame();
	const navigate = useNavigate();

	const {classes} = useStyles();
	const {pathname} = useLocation();
	const path = pathname.split('/');
	const handleTabChange = useCallback(
		(v: TabsValue) => {
			navigate(v || '');
		},
		[navigate]
	);

	return (
		<Stack className={classes.root} justify="space-between" spacing={0}>
			<div className={classes.title}>
				<Title order={2}>{game?.name}</Title>
			</div>
			<Tabs
				className={classes.tabs}
				onTabChange={handleTabChange}
				value={path.length > 2 ? path.pop() : pathname}
			>
				<Tabs.List>
					<Tabs.Tab value={`/${game?.slug}`}>Game Info</Tabs.Tab>
					<Tabs.Tab value="tier-lists">Tier Lists</Tabs.Tab>
					<Tabs.Tab value="characters">Characters</Tabs.Tab>
				</Tabs.List>
			</Tabs>

			<Global
				styles={() => ({
					':root': {
						[`--nav-height`]: `${height}px`,
					},
				})}
			/>
		</Stack>
	);
};

export default GameNav;
