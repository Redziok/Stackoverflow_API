import styled from '@emotion/styled';
import TableRow from '@mui/material/TableRow/TableRow';

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
	color: 'inherit',
	'&:nth-of-type(even)': {
		// backgroundColor: 'transparent',
		backgroundColor: 'rgba(232, 232, 232, 1)',
	},
	'&:nth-of-type(odd)': {
		backgroundColor: 'rgba(232, 232, 232, 0.5)',
	},
	'&:last-child': {
		'th, td': {
			borderBottom: 0, // Remove bottom border for the last row
		},
	},
}));
