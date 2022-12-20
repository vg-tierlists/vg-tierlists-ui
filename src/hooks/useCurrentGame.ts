import useGame from './useGame';
import useGameParam from './useGameParam';

export default function useCurrentGame() {
	return useGame(useGameParam());
}
