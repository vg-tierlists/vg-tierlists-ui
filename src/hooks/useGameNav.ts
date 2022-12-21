import {useRouter} from 'next/router';

import useGame from './useGame';

export default function useGameNav() {
	const {game} = useGame();
	const {pathname} = useRouter();

	const home = {
		label: 'Home',
		href: `/${game?.slug}`,
		active: pathname == '/[game]',
	};

	const characters = {
		label: 'Characters',
		href: `/${game?.slug}/characters`,
		active: pathname.startsWith('/[game]/characters'),
	};

	const tierLists = {
		label: 'Tier Lists',
		href: `/${game?.slug}/tier-lists`,
		active: pathname.startsWith('/[game]/tier-lists'),
	};

	return {links: [home, characters, tierLists], home, characters, tierLists};
}
