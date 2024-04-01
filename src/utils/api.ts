import axios from 'axios';
import { Pagination } from '../hooks/use-pagination';
import { SortOptions, TagsResponse } from './models';

const api = axios.create({
	baseURL: 'https://api.stackexchange.com',
	params: {
		site: 'stackoverflow',
	},
});

export async function fetchTags(
	{ page, pageSize }: Pagination,
	{ sort, order }: SortOptions
): Promise<TagsResponse> {
	const { data } = await api.get<TagsResponse>('tags', {
		params: {
			page: page + 1,
			pageSize,
			sort,
			order,
		},
	});
	return data;
}

export const xd = {
	items: [
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 2528416,
			name: 'javascript',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 2191713,
			name: 'python',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1917035,
			name: 'java',
		},
	],
	has_more: true,
	quota_max: 300,
	quota_remaining: 82,
};

export const xd2 = {
	items: [
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 2528416,
			name: 'javascript',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 2191713,
			name: 'python',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1917035,
			name: 'java',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1614821,
			name: 'c#',
		},
		{
			collectives: [
				{
					tags: ['php'],
					external_links: [
						{
							type: 'support',
							link: 'https://stackoverflow.com/contact?topic=15',
						},
					],
					description:
						'A collective where developers working with PHP can learn and connect about the open source scripting language.',
					link: '/collectives/php',
					name: 'PHP',
					slug: 'php',
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1464307,
			name: 'php',
		},
		{
			collectives: [
				{
					tags: ['ios', 'android'],
					external_links: [
						{
							type: 'support',
							link: 'https://stackoverflow.com/contact?topic=15',
						},
					],
					description:
						'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms',
					link: '/collectives/mobile-dev',
					name: 'Mobile Development',
					slug: 'mobile-dev',
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1416979,
			name: 'android',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1187178,
			name: 'html',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 1034766,
			name: 'jquery',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 806633,
			name: 'c++',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 804108,
			name: 'css',
		},
		{
			collectives: [
				{
					tags: ['ios', 'android'],
					external_links: [
						{
							type: 'support',
							link: 'https://stackoverflow.com/contact?topic=15',
						},
					],
					description:
						'A collective for developers who want to share their knowledge and learn more about mobile development practices and platforms',
					link: '/collectives/mobile-dev',
					name: 'Mobile Development',
					slug: 'mobile-dev',
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 687162,
			name: 'ios',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 670698,
			name: 'sql',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 661968,
			name: 'mysql',
		},
		{
			collectives: [
				{
					tags: [
						'tidyverse',
						'plyr',
						'rvest',
						'shiny-server',
						'rlang',
						'rstudio',
						'dplyr',
						'knitr',
						'lubridate',
						'tidyr',
						'r-raster',
						'shinydashboard',
						'shinyapps',
						'forcats',
						'tibble',
						'ggplot2',
						'stringr',
						'r-caret',
						'zoo',
						'data.table',
						'shiny',
						'r',
						'r-package',
						'dtplyr',
						'quantmod',
						'purrr',
						'readr',
					],
					external_links: [
						{
							type: 'support',
							link: 'https://stackoverflow.com/contact?topic=15',
						},
					],
					description:
						'A collective where data scientists and AI researchers gather to find, share, and learn about R and other subtags like knitr and dplyr.',
					link: '/collectives/r-language',
					name: 'R Language',
					slug: 'r-language',
				},
			],
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 505496,
			name: 'r',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 476405,
			name: 'reactjs',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 471870,
			name: 'node.js',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 416669,
			name: 'arrays',
		},
		{
			has_synonyms: false,
			is_moderator_only: false,
			is_required: false,
			count: 403900,
			name: 'c',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 374583,
			name: 'asp.net',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 360292,
			name: 'json',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 343564,
			name: 'python-3.x',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 338038,
			name: 'ruby-on-rails',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 337828,
			name: '.net',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 334494,
			name: 'sql-server',
		},
		{
			has_synonyms: true,
			is_moderator_only: false,
			is_required: false,
			count: 333346,
			name: 'swift',
		},
	],
	has_more: true,
	quota_max: 300,
	quota_remaining: 82,
};