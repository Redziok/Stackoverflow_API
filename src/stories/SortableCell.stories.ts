import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SortableCell from '../components/sortable-cell';

const meta = {
	title: 'SortableCell',
	component: SortableCell,
	parameters: { layout: 'centered' },
	args: { onSortChange: fn() },
} satisfies Meta<typeof SortableCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Descending: Story = {
	args: {
		sortBy: 'count',
		label: 'Count',
		sortOptions: { order: 'desc', sort: 'count' },
	},
};

export const Ascending: Story = {
	args: {
		sortBy: 'name',
		label: 'Name',
		sortOptions: { order: 'asc', sort: 'name' },
	},
};
