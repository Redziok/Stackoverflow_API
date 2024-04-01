import type { Meta, StoryObj } from '@storybook/react';

import TagsActions from '../components/tags-actions';

const meta = {
	title: 'TagsActions',
	component: TagsActions,
	parameters: {
		layout: 'fullscreen',
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof TagsActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
