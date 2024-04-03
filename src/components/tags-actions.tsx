import TablePagination from '@mui/material/TablePagination/TablePagination';
import { useTableContext } from '../contexts/context';
import PaginationButtons from './pagination-buttons';

function TagsActions() {
	const { tagsQuery, pagination, onPageChange, onRowsPerPageChange } = useTableContext();

	return (
		<TablePagination
			component='div'
			sx={{ backgroundColor: 'rgba(221, 221, 221, 0.5)' }}
			count={-1}
			page={pagination.page}
			rowsPerPage={pagination.pageSize}
			onPageChange={onPageChange}
			onRowsPerPageChange={onRowsPerPageChange}
			rowsPerPageOptions={[5, 10, 25, 100]}
			ActionsComponent={props => PaginationButtons(props, tagsQuery.data?.has_more ?? false)}
		/>
	);
}

export default TagsActions;
