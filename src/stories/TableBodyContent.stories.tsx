import TableBody from '@mui/material/TableBody/TableBody';
import type { Meta, StoryObj } from '@storybook/react';
import { mockQuery, mockQueryError } from '../api/mock';
import TableBodyContent from '../components/table-body-content';
import { TagsResponse } from '../utils/models';

const meta = {
	title: 'TableBodyContent',
	component: TableBodyContent,
	parameters: { layout: 'centered' },
	args: {
		query: mockQuery,
		errorMessages: {
			loading: 'Loading tags...',
			error: 'Something went wrong',
			noData: 'No tags found',
		},
		children: data => (
			<>
				{(data as TagsResponse).items.map(tag => (
					<div key={tag.name}>{`${tag.name}: ${tag.count}`}</div>
				))}
			</>
		),
	},
	decorators: [
		Story => (
			<TableBody>
				<Story />
			</TableBody>
		),
	],
} satisfies Meta<typeof TableBodyContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Data: Story = {
	args: {},
};

export const IsLoading: Story = {
	args: {
		query: { ...mockQuery, isFetching: true },
	},
};

export const IsError: Story = {
	args: {
		query: mockQueryError,
	},
};

export const IsNoData: Story = {
	args: {
		query: { ...mockQuery, data: null! },
	},
};
