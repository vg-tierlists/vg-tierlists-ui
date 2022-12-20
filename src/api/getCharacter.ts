import axios, {AxiosResponse} from 'axios';

import {Character} from 'api/types';
import {API_URL} from 'config';

export default function getCharacter(id: string) {
	return axios.get(`${API_URL}/characters/${id}`).then((res: AxiosResponse<Character>) => res.data);
}
