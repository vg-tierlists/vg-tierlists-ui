import {forwardRef, ReactNode} from 'react';
import {Box, Card, CardProps, createPolymorphicComponent, Image, ImageProps} from '@mantine/core';

type Props = CardProps & {
	src: string;
	imageProps?: ImageProps;
	children?: ReactNode;
	size?: number;
};

const ImageCard = forwardRef<HTMLDivElement, Props>(
	({src, imageProps, children, size = 120, ...props}, ref) => (
		<Card radius="sm" p="xs" ref={ref} {...props} maw={size} miw={size}>
			<Card.Section>
				<Image src={src} {...imageProps} w={size} />
			</Card.Section>
			{children && <Box mt="xs">{children}</Box>}
		</Card>
	)
);

ImageCard.displayName = 'ImageCard';

export default createPolymorphicComponent<'div', Props>(ImageCard);
