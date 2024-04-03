import { TableCell } from '@mui/material';
import Box from '@mui/material/Box/Box';
import Table from '@mui/material/Table/Table';
import TableBody from '@mui/material/TableBody/TableBody';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import Typography from '@mui/material/Typography/Typography';
import TableBodyContent from './components/table-body-content';
import TagsActions from './components/tags-actions';
import TagsHead from './components/tags-head';
import { useTableContext } from './contexts/context';
import { StyledTableRow } from './themes/styles';

function App() {
	const { tagsQuery } = useTableContext();

	return (
		<Box component='main' id='main-wrapper'>
			<Typography fontWeight={900} variant='h4'>
				Stack Overflow Tags filter
			</Typography>

			<TableContainer className='table-wrapper'>
				<TagsActions />
				<Table>
					<TagsHead />

					<TableBody>
						<TableBodyContent
							query={tagsQuery}
							errorMessages={{
								noData: 'No tags found',
								error: err =>
									err.response?.data?.error_message || 'Error loading tags',
							}}
						>
							{data => (
								<>
									{data.items.map(tag => (
										<StyledTableRow key={tag.name}>
											<TableCell>{tag.name}</TableCell>

											<TableCell align='right'>{tag.count}</TableCell>
										</StyledTableRow>
									))}
								</>
							)}
						</TableBodyContent>
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}

export default App;
