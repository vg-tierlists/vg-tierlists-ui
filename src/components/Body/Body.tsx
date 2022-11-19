import {Container, Title} from '@mantine/core';

import Games from 'pages/Games';

const Body = () => (
	<Container>
		<div>
			<Title h={2}>Test</Title>
			<Games />
		</div>
	</Container>
);

export default Body;
