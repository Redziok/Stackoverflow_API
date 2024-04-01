import type { Meta, StoryObj } from '@storybook/react';
import TagsBody from '../components/tags-body';

const meta = {
	title: 'TagsBody',
	component: TagsBody,
	parameters: {
		layout: 'fullscreen',
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof TagsBody>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
