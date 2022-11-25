import {useParams} from 'react-router-dom';

export default function useGameIdParam() {
	const {gameId} = useParams();
	if (!gameId) {
		throw Error('No game ID');
	}
	return gameId;
}
