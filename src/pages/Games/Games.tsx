import {Text} from '@mantine/core';

import useGames from 'hooks/api/useGames';

const Games = () => {
	const {isLoading, error, data, isFetching} = useGames();

	if (isLoading || error || isFetching || !data) {
		return <></>;
	}

	return (
		<>
			{data.map((game) => (
				<Text key={game.id}>{game.name}</Text>
			))}
		</>
	);
};

export default Games;
