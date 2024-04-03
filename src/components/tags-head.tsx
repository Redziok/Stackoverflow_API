import TableCell from '@mui/material/TableCell/TableCell';
import TableHead from '@mui/material/TableHead/TableHead';
import TableRow from '@mui/material/TableRow/TableRow';
import { useTableContext } from '../context';
import { Sort, sortType } from '../utils/models';
import SortableCell from './sortable-cell';

function TagsHead() {
	const { sortOptions, setSortOptions } = useTableContext();

	const onSortChange = (key: Sort) => {
		console.log(key);
		const isAsc = sortOptions.sort === key && sortOptions.order === 'asc';
		setSortOptions({ sort: key, order: isAsc ? 'desc' : 'asc' });
	};

	return (
		<TableHead>
			<TableRow sx={{ backgroundColor: '#bbb' }}>
				<TableCell component='th' scope='col'>
					<SortableCell<Sort>
						sortBy={sortType.Name}
						label='Tag Name'
						sortOptions={sortOptions}
						onSortChange={onSortChange}
					/>
				</TableCell>

				<TableCell component='th' scope='col' align='right'>
					<SortableCell<Sort>
						sortBy={sortType.Count}
						label='Post Count'
						sortOptions={sortOptions}
						onSortChange={onSortChange}
					/>
				</TableCell>
			</TableRow>
		</TableHead>
	);
}

export default TagsHead;
