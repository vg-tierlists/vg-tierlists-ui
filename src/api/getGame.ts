import axios, {AxiosResponse} from 'axios';

import {Game} from 'api/types';
import {API_URL} from 'config';

export default function getGame(id: string) {
	return {
		queryKey: ['games', id],
		queryFn: () => {
			return axios.get(`${API_URL}/games/${id}`).then((res: AxiosResponse<Game>) => res.data);
		},
	};
}
