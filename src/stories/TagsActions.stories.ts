import type { Meta, StoryObj } from '@storybook/react';
import TagsActions from '../components/tags-actions';

const meta = {
	title: 'TagsActions',
	component: TagsActions,
	parameters: { layout: 'centered' },
} satisfies Meta<typeof TagsActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
