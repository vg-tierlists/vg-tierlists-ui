import {useRouter} from 'next/router';

export default function useParam(key: string) {
	const {query} = useRouter();
	return (query[key] as string) ?? '';
}
