import {Title} from '@mantine/core';

import GameLayout from 'layouts/GameLayout';
import {NextPageWithLayout} from 'pages/_app';

const CharactersPage: NextPageWithLayout = () => <Title>Characters</Title>;

CharactersPage.getLayout = GameLayout;

export default CharactersPage;
