import iconButtonClasses from '@mui/material/IconButton/iconButtonClasses';
import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
	components: {
		// MuiTablePagination: {
		// 	styleOverrides: {
		// 		root: {
		// 			color: 'inherit',
		// 			// backgroundColor: 'var(--background-color)',
		// 			borderBottom: '1px solid #eee',
		// 			// backgroundImage:
		// 			// 	'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',

		// 			svg: {
		// 				color: 'inherit',
		// 			},
		// 		},
		// 	},
		// },
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
	},
});

export default theme;
