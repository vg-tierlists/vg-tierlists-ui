import {useQuery} from '@tanstack/react-query';

import getGame from 'api/getGame';

export default function useGame(id: string) {
	return useQuery(getGame(id));
}
