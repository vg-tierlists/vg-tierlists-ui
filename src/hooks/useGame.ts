import {useQuery} from '@tanstack/react-query';

import getGame from 'api/getGame';

export default function useGame(slug: string) {
	return useQuery(getGame(slug));
}
