import type { Meta, StoryObj } from '@storybook/react';
import TagsHead from '../components/tags-head';

const meta = {
	title: 'TagsHead',
	component: TagsHead,
	parameters: {
		layout: 'fullscreen',
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof TagsHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
