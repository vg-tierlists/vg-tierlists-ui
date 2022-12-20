import {useRouter} from 'next/router';

export default function useGameParam() {
	const {
		query: {slug: gameId},
	} = useRouter();
	if (!gameId) {
		throw Error('No game ID');
	}
	return gameId as string;
}
