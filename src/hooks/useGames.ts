import {useQuery} from '@tanstack/react-query';

import {getGames} from 'api';

export const queryKey = ['games'];

export default function useGames() {
	return useQuery(queryKey, () => getGames());
}
