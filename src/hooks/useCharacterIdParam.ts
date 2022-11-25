import {useParams} from 'react-router-dom';

export default function useCharacterIdParam() {
	const {characterId} = useParams();
	if (!characterId) {
		throw Error('No character ID');
	}
	return characterId;
}
