import {useQuery} from '@tanstack/react-query';

import {getGames} from 'api';

export default function useGames() {
	return useQuery(getGames());
}
