export default function queryStaticPaths<T>(
	queryFn: () => Promise<T[]>,
	pathFn: (item: T) => string,
	fallback: boolean = false
) {
	return queryFn()
		.then((items) => items.map(pathFn))
		.then((paths) => ({
			paths,
			fallback,
		}));
}
