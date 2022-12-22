import {Breadcrumbs as MantineBreadcrumbs} from '@mantine/core';

import {useBreadcrumbs} from 'hooks';

import Breadcrumb from './Breadcrumb';

const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs();

	return (
		<MantineBreadcrumbs>
			{breadcrumbs.map((crumb, i, {length}) => (
				<Breadcrumb key={crumb.href} disabled={i == length - 1} {...crumb} />
			))}
		</MantineBreadcrumbs>
	);
};

export default Breadcrumbs;
