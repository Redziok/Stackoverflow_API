import TableSortLabel from '@mui/material/TableSortLabel/TableSortLabel';

export type Order = 'desc' | 'asc';

export interface SortOptions<T extends string> {
	order: Order;
	sort: T;
}

interface SortableCellProps<T extends string> {
	sortBy: T;
	label: string;
	onSortChange: (key: T) => void;
	sortOptions: SortOptions<T>;
}

function SortableCell<T extends string>({
	sortBy,
	label,
	onSortChange,
	sortOptions,
}: SortableCellProps<T>) {
	const isKey = sortOptions.sort === sortBy;

	return (
		<TableSortLabel
			active={isKey}
			direction={isKey ? sortOptions.order : 'asc'}
			onClick={() => onSortChange(sortBy)}
		>
			<b>{label}</b>
		</TableSortLabel>
	);
}

export default SortableCell;
