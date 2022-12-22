const queryKeys = Object.freeze({
	all: ['games'] as const,
	games: () => [...queryKeys.all, 'list'] as const,
	game: (id: string) => [...queryKeys.games(), id] as const,
	characters: (id: string) => [...queryKeys.game(id), 'characters'] as const,
});

export default queryKeys;
