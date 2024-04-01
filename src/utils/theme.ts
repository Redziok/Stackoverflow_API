import iconButtonClasses from '@mui/material/IconButton/iconButtonClasses';
import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
	components: {
		MuiTablePagination: {
			styleOverrides: {
				root: {
					color: 'inherit',
					backgroundColor: 'var(--background-color)',
					borderBottom: '1px solid #eee',
					backgroundImage:
						'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',

					svg: {
						color: 'inherit',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					color: 'inherit',
					backgroundColor: 'var(--background-color)',
					backgroundImage:
						'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					color: 'inherit',
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					[`&.${iconButtonClasses.disabled}`]: {
						color: 'inherit',
						opacity: 0.25,
					},
				},
			},
		},
		MuiList: {
			styleOverrides: {
				root: {
					backgroundColor: '#444',
				},
			},
		},
	},
});

export default theme;
