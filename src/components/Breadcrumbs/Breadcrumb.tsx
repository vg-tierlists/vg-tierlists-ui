import {Anchor, Text, TextProps} from '@mantine/core';
import Link, {LinkProps} from 'next/link';
import {UrlObject} from 'url';

type Props = {
	label: string;
	href: string | UrlObject;
	disabled?: boolean;
	linkProps?: LinkProps;
} & TextProps;

const Breadcrumb = ({label, href, disabled = false, linkProps, ...props}: Props) => {
	return disabled ? (
		<Text {...props}>{label}</Text>
	) : (
		<Anchor href={href} component={Link} {...linkProps} {...props}>
			{label}
		</Anchor>
	);
};

export default Breadcrumb;
