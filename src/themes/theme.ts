import iconButtonClasses from '@mui/material/IconButton/iconButtonClasses';
import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
	components: {
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
