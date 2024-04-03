import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 60_000,
			staleTime: Infinity,
			retry: failureCount => failureCount < 2,
		},
	},
});

export default queryClient;
