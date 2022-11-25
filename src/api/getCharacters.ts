import axios, {AxiosResponse} from 'axios';

import {Character} from 'api/types';
import {API_URL} from 'config';

export default function getCharacters(gameId: string) {
	return {
		queryKey: ['games', gameId, 'characters'],
		queryFn: () => {
			return axios
				.get(`${API_URL}/games/${gameId}/characters`)
				.then((res: AxiosResponse<Character[]>) => res.data);
		},
	};
}
