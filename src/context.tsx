import { AxiosError } from 'axios';
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';
import { UseQueryResult, useQuery } from 'react-query';
import usePagination, {
	OnPageChange,
	OnRowsPerPageChange,
	Pagination,
} from './hooks/use-pagination';
import { fetchTags } from './utils/api';
import { ErrorResponse, SortOptions, TagsResponse } from './utils/models';

interface TableContextState {
	pagination: Pagination;
	sortOptions: SortOptions;
	tagsQuery: UseQueryResult<TagsResponse, AxiosError<ErrorResponse>>;
	onPageChange: OnPageChange;
	onRowsPerPageChange: OnRowsPerPageChange;
	setSortOptions: Dispatch<SetStateAction<SortOptions>>;
}

export const TableContext = createContext<TableContextState | undefined>(undefined);

export function TableContextProvider({ children }: { children: ReactNode }) {
	const { pagination, onPageChange, onRowsPerPageChange } = usePagination(0, 10);
	const [sortOptions, setSortOptions] = useState<SortOptions>({ sort: 'popular', order: 'desc' });

	const tagsQuery = useQuery<TagsResponse, AxiosError<ErrorResponse>>({
		queryKey: ['tags', pagination, sortOptions],
		queryFn: () => fetchTags(pagination, sortOptions),
		keepPreviousData: true,
	});

	return (
		<TableContext.Provider
			value={{
				pagination,
				sortOptions,
				tagsQuery,
				setSortOptions,
				onPageChange,
				onRowsPerPageChange,
			}}
		>
			{children}
		</TableContext.Provider>
	);
}

export const useTableContext = () => {
	const context = useContext(TableContext);

	if (context == null) {
		throw new Error('useTableContext must be used within a TableContextProvider');
	}

	return context;
};