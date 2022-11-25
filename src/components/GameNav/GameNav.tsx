import {Tabs, Title} from '@mantine/core';
import {useLocation, useNavigate} from 'react-router-dom';

import {useCurrentGame} from 'hooks';

import useStyles from './GameNav.styles';

const GameNav = () => {
	const {data: game} = useCurrentGame();
	const navigate = useNavigate();

	const {classes} = useStyles();
	const {pathname} = useLocation();
	const path = pathname.split('/');

	console.log({
		pathname,
		path,
		length: path.length,
	});

	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<Title>{game?.name}</Title>
			</div>
			<Tabs
				className={classes.tabs}
				onTabChange={(v) => {
					navigate(v || '');
				}}
				value={path.length > 2 ? path.pop() : pathname}
			>
				<Tabs.List>
					<Tabs.Tab defaultChecked value={`/${game?.slug}`}>
						Game Info
					</Tabs.Tab>
					<Tabs.Tab value="tier-lists">Tier Lists</Tabs.Tab>
					<Tabs.Tab value="characters">Characters</Tabs.Tab>
				</Tabs.List>
			</Tabs>
		</div>
	);
};

export default GameNav;
