import {hoursToSeconds, minutesToMilliseconds} from 'date-fns';

export const API_URL = 'http://localhost:8080';
export const CACHE_STALE_TIME = minutesToMilliseconds(5);
export const ISR_REVALIDATE_TIME = hoursToSeconds(1);
