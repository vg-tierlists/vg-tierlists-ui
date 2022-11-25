import {forwardRef, ReactNode} from 'react';
import {Card, CardProps, createPolymorphicComponent, Image, ImageProps} from '@mantine/core';

type Props = CardProps & {
	src: string;
	imageProps?: ImageProps;
	children?: ReactNode;
	imageOnly?: boolean;
};

const ImageCard = forwardRef<HTMLDivElement, Props>(
	({src, imageProps, children, imageOnly = false, ...other}, ref) => (
		<Card radius="sm" ref={ref} {...other}>
			<Card.Section>
				<Image src={src} height={160} styles={{image: {objectPosition: 'top'}}} {...imageProps} />
			</Card.Section>
			{imageOnly || children}
		</Card>
	)
);

ImageCard.displayName = 'ImageCard';

export default createPolymorphicComponent<'div', Props>(ImageCard);
