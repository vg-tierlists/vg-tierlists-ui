import axios, {AxiosResponse} from 'axios';

import {Character} from 'api/types';
import {API_URL} from 'config';

export default function getCharacter(charId: string) {
	return {
		queryKey: ['games', charId, 'characters'],
		queryFn: () => {
			return axios
				.get(`${API_URL}/characters/${charId}`)
				.then((res: AxiosResponse<Character>) => res.data);
		},
	};
}
