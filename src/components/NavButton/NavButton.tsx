import {NavLink, NavLinkProps} from '@mantine/core';
import Link, {LinkProps} from 'next/link';

type Props = NavLinkProps & LinkProps;

const NavButton = ({children, ...props}: Props) => (
	<NavLink rightSection={<></>} component={Link} {...props}>
		{children}
	</NavLink>
);

export default NavButton;
