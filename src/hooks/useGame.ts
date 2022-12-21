import {useQuery, UseQueryResult} from '@tanstack/react-query';

import {getGame, queryKeys} from 'api';
import {Game} from 'api/types';

import useGameParam from './useGameParam';

type UseGameResult = UseQueryResult<Game> & {
	game?: Game;
};

export default function useGame(): UseGameResult {
	const id = useGameParam();
	const result = useQuery(queryKeys.game(id), () => getGame(id), {
		enabled: id.length > 0,
	});
	return {
		...result,
		game: result.data,
	};
}
