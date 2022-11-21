import {Outlet} from 'react-router-dom';

import Layout from 'components/Layout';

const Root = () => (
	<Layout>
		<Outlet />
	</Layout>
);

export default Root;
