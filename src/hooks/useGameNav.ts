import {useRouter} from 'next/router';

import useCurrentGame from 'hooks/useCurrentGame';

export default function useGameNav() {
	const {data: game} = useCurrentGame();
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
