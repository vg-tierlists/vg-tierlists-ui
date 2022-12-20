import {useQuery} from '@tanstack/react-query';

import {getGame} from 'api';

import useGameParam from './useGameParam';
import {queryKey as parentQueryKey} from './useGames';

export const queryKey = (id: string) => [...parentQueryKey, id];

export default function useGame() {
	const id = useGameParam();
	return useQuery(queryKey(id), () => getGame(id), {
		enabled: id.length > 0,
	});
}
