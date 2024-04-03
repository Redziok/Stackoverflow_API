import ThemeProvider from '@mui/material/styles/ThemeProvider';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import App from './App';
import queryClient from './api/queryClient';
import { TableContextProvider } from './contexts/context';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
import theme from './themes/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	// <React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<ThemeProvider theme={theme}>
			<TableContextProvider>
				<App />
			</TableContextProvider>
		</ThemeProvider>
	</QueryClientProvider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
