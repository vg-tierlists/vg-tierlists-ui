import {useParams} from 'react-router-dom';

import useGame from './useGame';

export default function useCurrentGame() {
	const {id} = useParams();
	if (!id) {
		throw Error('Nope?');
	}
	return useGame(id);
}
