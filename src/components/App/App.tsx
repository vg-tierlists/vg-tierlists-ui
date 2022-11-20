import {Outlet} from '@tanstack/react-router';

import Layout from 'components/Layout';
import Providers from 'components/Providers';

function App() {
	return (
		<Providers>
			<Layout>
				<Outlet />
			</Layout>
		</Providers>
	);
}

export default App;
