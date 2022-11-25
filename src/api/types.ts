export type ApiResource = {
	id: string;
	name: string;
	slug: string;
};

export type Game = ApiResource & {
	image: string;
};

type Images = {
	sm: string;
	lg: string;
};

export type Character = ApiResource & {
	images: Images;
};
