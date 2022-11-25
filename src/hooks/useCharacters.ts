import {useQuery} from '@tanstack/react-query';

import getCharacters from 'api/getCharacters';
import useGameIdParam from 'hooks/useGameIdParam';

export default function useCharacters() {
	const gameId = useGameIdParam();
	return useQuery(getCharacters(gameId));
}
