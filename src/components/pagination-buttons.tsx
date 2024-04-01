import { KeyboardArrowRight } from '@mui/icons-material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import Box from '@mui/material/Box/Box';
import IconButton from '@mui/material/IconButton/IconButton';
import { TablePaginationActionsProps } from '@mui/material/TablePagination/TablePaginationActions';
import { MouseEvent } from 'react';

function PaginationButtons({ page, onPageChange }: TablePaginationActionsProps, has_more: boolean) {
	const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
		onPageChange(event, page + 1);
	};

	return (
		<Box sx={{ display: 'flex', marginX: 1 }}>
			<IconButton color='inherit' onClick={handleBackButtonClick} disabled={page === 0}>
				<KeyboardArrowLeft />
			</IconButton>

			<IconButton color='inherit' onClick={handleNextButtonClick} disabled={!has_more}>
				<KeyboardArrowRight />
			</IconButton>
		</Box>
	);
}

export default PaginationButtons;
