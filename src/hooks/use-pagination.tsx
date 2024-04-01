import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';

export interface Pagination {
	page: number;
	pageSize: number;
}

export type OnPageChange = (event: MouseEvent | null, page: number) => void;
export type OnRowsPerPageChange = (event: ChangeEvent<HTMLInputElement>) => void;

function usePagination(page: number, pageSize: number) {
	const [pagination, setPagination] = useState<Pagination>({ page, pageSize });

	const onPageChange: OnPageChange = useCallback((_, newPage) => {
		setPagination(prev => ({ ...prev, page: newPage }));
	}, []);

	const onRowsPerPageChange: OnRowsPerPageChange = useCallback(event => {
		setPagination({ page: 0, pageSize: parseInt(event.target.value, 10) });
	}, []);

	return { pagination, onPageChange, onRowsPerPageChange };
}

export default usePagination;
