import axios from 'axios';

import {Game} from 'api/types/Game';
import {API_URL} from 'util/config';

export default function getGames(): Promise<Game[]> {
	return axios.get(`${API_URL}/games`).then((res) => res.data);
}
