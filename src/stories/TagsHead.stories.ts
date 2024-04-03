import type { Meta, StoryObj } from '@storybook/react';
import TagsHead from '../components/tags-head';

const meta = {
	title: 'TagsHead',
	component: TagsHead,
	parameters: { layout: 'centered' },
} satisfies Meta<typeof TagsHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
