import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 60_000,
			retry: failureCount => {
				return failureCount < 2;
			},
		},
	},
});

export default queryClient;
