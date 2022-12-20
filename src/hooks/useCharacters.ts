import {useQuery} from '@tanstack/react-query';

import {getCharacters} from 'api';

import {queryKey as parentQueryKey} from './useGame';
import useGameParam from './useGameParam';

export const queryKey = (gameId: string) => [...parentQueryKey(gameId), 'characters'];

export default function useCharacters() {
	const gameId = useGameParam();
	return useQuery(queryKey(gameId), () => getCharacters(gameId), {
		enabled: gameId.length > 0,
	});
}
