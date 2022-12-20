import {useQuery} from '@tanstack/react-query';

import getCharacters from 'api/getCharacters';
import useGameParam from 'hooks/useGameParam';

export default function useCharacters() {
	const gameId = useGameParam();
	return useQuery(getCharacters(gameId));
}
