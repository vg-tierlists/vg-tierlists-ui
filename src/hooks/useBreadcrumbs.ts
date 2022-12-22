import {useRouter} from 'next/router';

import {Game} from 'api/types';

import useGame from './useGame';

export type Breadcrumb = {
	label: string;
	href: string;
};

const labels: Record<string, (game?: Game) => string> = {
	'[game]': (game?: Game) => game?.name || '',
	characters: () => 'Characters',
	'tier-lists': () => 'Tier Lists',
};

export default function useBreadcrumbs(): Breadcrumb[] {
	const {game} = useGame();
	const {pathname, asPath} = useRouter();

	const routes = pathname.split('/').filter((p) => p.length > 0);
	const paths = asPath
		.split('?')[0]
		.split('/')
		.filter((p) => p.length > 0);

	return routes.map((segment, i) => ({
		label: labels[segment](game),
		href: `/${paths.slice(0, i + 1).join('/')}`,
	}));
}
