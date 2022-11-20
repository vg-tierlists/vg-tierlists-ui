import axios, {AxiosResponse} from 'axios';

import {Game} from 'api/types/Game';
import {API_URL} from 'config/config';

export default function getGames() {
	return axios.get(`${API_URL}/games`).then((res: AxiosResponse<Game[]>) => res.data);
}
