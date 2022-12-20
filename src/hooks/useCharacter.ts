import {useQuery} from '@tanstack/react-query';

import {getCharacter} from 'api';

import useCharacterParam from './useCharacterParam';

export const queryKey = (id: string) => ['characters', id];

export default function useCharacter() {
	const id = useCharacterParam();
	return useQuery(queryKey(id), () => getCharacter(id), {
		enabled: id.length > 0,
	});
}
