import {useQuery} from '@tanstack/react-query';

import getGame from 'api/getGame';
import useGameIdParam from 'hooks/useGameIdParam';

export default function useGame() {
	const id = useGameIdParam();
	return useQuery(getGame(id));
}
