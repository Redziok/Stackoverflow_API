import { ThemeProvider } from '@mui/material';
import type { Preview } from '@storybook/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { TableContextProvider } from '../src/context';
import theme from '../src/utils/theme';

const queryClient = new QueryClient();

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		Story => (
			<QueryClientProvider client={queryClient}>
				<ThemeProvider theme={theme}>
					<TableContextProvider>
						<Story />
					</TableContextProvider>
				</ThemeProvider>
			</QueryClientProvider>
		),
	],
};

export default preview;
