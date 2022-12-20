import {Title} from '@mantine/core';

import {GameLayout} from 'layouts';
import {NextPageWithLayout} from 'pages/_app';

const TierListsPage: NextPageWithLayout = () => <Title>Tier Lists</Title>;

TierListsPage.getLayout = GameLayout;

export default TierListsPage;
