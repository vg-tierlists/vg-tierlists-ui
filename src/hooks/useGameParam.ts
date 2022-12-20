import {useRouter} from 'next/router';

export default function useGameParam(): string {
	const {
		query: {game},
	} = useRouter();
	return (game as string) ?? '';
}
