import {useQuery, UseQueryResult} from '@tanstack/react-query';

import {getCharacters, queryKeys} from 'api';
import {Character} from 'api/types';

import useGameParam from './useGameParam';

type UseCharactersResult = UseQueryResult<Character[]> & {
	characters?: Character[];
};

export default function useCharacters(): UseCharactersResult {
	const gameId = useGameParam();
	const result = useQuery(queryKeys.characters(gameId), () => getCharacters(gameId), {
		enabled: gameId.length > 0,
	});

	return {
		...result,
		characters: result.data,
	};
}
