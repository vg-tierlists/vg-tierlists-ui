import {useQuery} from '@tanstack/react-query';

import {getCharacter} from 'api';

export default function useGame(id: string) {
	return useQuery(getCharacter(id));
}
