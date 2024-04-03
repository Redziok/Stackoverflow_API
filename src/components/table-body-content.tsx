import TableCell from '@mui/material/TableCell/TableCell';
import TableRow from '@mui/material/TableRow/TableRow';
import { UseQueryResult } from 'react-query';

const defaultMessages: ErrorMessages<any> = {
	loading: 'Loading...',
	error: 'Something went wrong',
	noData: 'No data found',
};

interface ErrorMessages<E> {
	loading: string;
	error: string | ((error: E) => string);
	noData: string;
}

interface TableBodyContentProps<T, E> {
	query: UseQueryResult<T, E>;
	children: (data: T) => JSX.Element;
	errorMessages?: Partial<ErrorMessages<E>>;
}

function TableBodyContent<T, E>({ query, children, errorMessages }: TableBodyContentProps<T, E>) {
	const { data, isFetching, isError, error } = query;

	if (isFetching) {
		return <ErrorRow text={errorMessages?.loading || defaultMessages.loading} />;
	}

	if (isError) {
		const mess =
			typeof errorMessages?.error === 'function'
				? errorMessages?.error(error)
				: errorMessages?.error;

		return <ErrorRow text={mess || (defaultMessages.error as string)} />;
	}

	if (!data) {
		return <ErrorRow text={errorMessages?.noData || defaultMessages.noData} />;
	}

	return children(data);
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

export default TableBodyContent;
