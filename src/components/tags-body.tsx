import TableBody from '@mui/material/TableBody/TableBody';
import TableCell from '@mui/material/TableCell/TableCell';
import TableRow from '@mui/material/TableRow/TableRow';
import { useTableContext } from '../context';

export default function TagsBody() {
	const {
		tagsQuery: { data, isFetching, isError, error },
	} = useTableContext();

	return (
		<TableBody>
			{isFetching || isError || !data ? (
				<TableRow style={{ height: 53 }}>
					<TableCell colSpan={2} align='center'>
						{isFetching
							? 'Loading...'
							: isError
							? error?.response?.data?.error_message
							: 'No tags found'}
					</TableCell>
				</TableRow>
			) : (
				data.items.map(tag => (
					<TableRow key={tag.name}>
						<TableCell component='th' scope='row'>
							{tag.name}
						</TableCell>

						<TableCell align='right'>{tag.count}</TableCell>
					</TableRow>
				))
			)}
		</TableBody>
	);
}
