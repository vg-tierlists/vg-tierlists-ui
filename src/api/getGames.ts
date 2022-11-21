import axios, {AxiosResponse} from 'axios';

import {Game} from 'api/types';
import {API_URL} from 'config';

export default function getGames() {
	return {
		queryKey: ['games'],
		queryFn: () => {
			return axios.get(`${API_URL}/games`).then((res: AxiosResponse<Game[]>) => res.data);
		},
	};
}
