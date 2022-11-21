import {useParams} from 'react-router-dom';
import {useQuery} from '@tanstack/react-query';

import getGame from 'api/getGame';

export default function useCurrentGame() {
	const {id} = useParams();
	if (!id) {
		throw Error('Nope?');
	}
	return useQuery(getGame(id));
}
