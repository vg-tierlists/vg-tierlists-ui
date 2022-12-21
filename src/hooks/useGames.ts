import {useQuery, UseQueryResult} from '@tanstack/react-query';

import {getGames, queryKeys} from 'api';
import {Game} from 'api/types';

type UseGamesResult = UseQueryResult<Game[]> & {
	games?: Game[];
};

export default function useGames(): UseGamesResult {
	const result = useQuery(queryKeys.games(), getGames);
	return {
		...result,
		games: result.data,
	};
}
