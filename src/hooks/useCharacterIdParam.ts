import {useParams} from 'react-router-dom';

export default function useCharacterIdParam() {
	const {charId} = useParams();
	if (!charId) {
		throw Error('No id exists');
	}
	return charId;
}
