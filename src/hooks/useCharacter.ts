import {useQuery} from '@tanstack/react-query';

import {getCharacter} from 'api';

import useCharacterIdParam from './useCharacterIdParam';

export default function useGame() {
	const id = useCharacterIdParam();
	return useQuery(getCharacter(id));
}
