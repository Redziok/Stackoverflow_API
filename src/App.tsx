import Box from '@mui/material/Box/Box';
import Paper from '@mui/material/Paper/Paper';
import Table from '@mui/material/Table/Table';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import './App.css';
import TagsActions from './components/tags-actions';
import TagsBody from './components/tags-body';
import TagsHead from './components/tags-head';

function App() {
	return (
		<Box component='main' id='main-wrapper'>
			<TagsActions />

			<TableContainer component={Paper}>
				<Table>
					<TagsHead />

					<TagsBody />
				</Table>
			</TableContainer>
		</Box>
	);
}

export default App;
