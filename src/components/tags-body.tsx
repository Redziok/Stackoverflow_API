import TableCell from '@mui/material/TableCell/TableCell';
import TableRow from '@mui/material/TableRow/TableRow';
import { useTableContext } from '../contexts/context';
import { StyledTableRow } from '../themes/styles';

export default function TagsBody() {
	const {
		tagsQuery: { data, isFetching, isError, error },
	} = useTableContext();

	if (isFetching) {
		return <ErrorRow text='Loading...' />;
	}

	if (isError) {
		return <ErrorRow text={error?.response?.data?.error_message || 'Error loading tags'} />;
	}

	if (!data || data.items.length === 0) {
		return <ErrorRow text='No tags found' />;
	}

	return (
		<>
			{data.items.map(tag => (
				<StyledTableRow key={tag.name}>
					<TableCell>{tag.name}</TableCell>
					<TableCell align='right'>{tag.count}</TableCell>
				</StyledTableRow>
			))}
		</>
	);
}

function ErrorRow({ text }: { text: string }) {
	return (
		<TableRow style={{ height: 53 }}>
			<TableCell colSpan={10} align='center'>
				{text}
			</TableCell>
		</TableRow>
	);
}
