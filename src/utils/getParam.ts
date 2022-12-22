import {ParsedUrlQuery} from 'querystring';

type GetParamOptions = {
	defaultValue?: string;
	separator?: string;
};

const defaultOptions = {
	defaultValue: '',
	separator: ',',
};

export default function getParam(
	params: ParsedUrlQuery,
	key: string,
	options: GetParamOptions = {}
): string {
	const opts = {
		...defaultOptions,
		...options,
	};
	const value = params[key];
	if (!value) {
		return opts.defaultValue;
	}
	if (Array.isArray(value)) {
		return value.join(opts.separator);
	}
	return value;
}
