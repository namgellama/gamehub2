import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
	next: string | null;
}

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'ed04d4d7cef7439dbf793fa68c6bb02c',
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};
}

export default APIClient;
