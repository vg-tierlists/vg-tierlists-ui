import {useQuery, UseQueryResult} from '@tanstack/react-query';

import {getGames} from 'api';
import {Game} from 'api/types/Game';

export default function useGames(): UseQueryResult<Game[]> {
	return useQuery(['games'], getGames);
}
