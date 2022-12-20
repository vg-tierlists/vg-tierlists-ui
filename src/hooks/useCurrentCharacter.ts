import useCharacter from './useCharacter';
import useCharacterParam from './useCharacterParam';

export default function useCurrentCharacter() {
	return useCharacter(useCharacterParam());
}
