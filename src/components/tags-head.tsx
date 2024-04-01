import Box from '@mui/material/Box/Box';
import TableCell from '@mui/material/TableCell/TableCell';
import TableHead from '@mui/material/TableHead/TableHead';
import TableRow from '@mui/material/TableRow/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { useTableContext } from '../context';
import { Sort } from '../utils/models';

function TagsHead() {
	const { sortOptions, setSortOptions } = useTableContext();

	const handleSort = (key: Sort) => {
		const isAsc = sortOptions.sort === key && sortOptions.order === 'asc';
		setSortOptions({ sort: key, order: isAsc ? 'desc' : 'asc' });
	};

	const isDescending = sortOptions.order === 'desc';
	const isSortName = sortOptions.sort === 'name';

	return (
		<TableHead>
			<TableRow>
				<TableCell>
					<TableSortLabel
						active={isSortName}
						direction={isSortName ? sortOptions.order : 'asc'}
						onClick={() => handleSort('name')}
					>
						<b>Tag Name</b>
						{isSortName && (
							<Box component='span' sx={visuallyHidden}>
								{isDescending ? 'sorted descending' : 'sorted ascending'}
							</Box>
						)}
					</TableSortLabel>
				</TableCell>

				<TableCell align='right'>
					<TableSortLabel
						active={!isSortName}
						direction={!isSortName ? sortOptions.order : 'asc'}
						onClick={() => handleSort('popular')}
					>
						<b>Post Count</b>
						{!isSortName && (
							<Box component='span' sx={visuallyHidden}>
								{isDescending ? 'sorted descending' : 'sorted ascending'}
							</Box>
						)}
					</TableSortLabel>
				</TableCell>
			</TableRow>
		</TableHead>
	);
}

export default TagsHead;
