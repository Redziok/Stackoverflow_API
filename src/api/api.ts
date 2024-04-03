import axios from 'axios';
import { SortOptions } from '../components/sortable-cell';
import { Pagination } from '../hooks/use-pagination';
import { Sort, TagsResponse } from '../utils/models';

const api = axios.create({
	baseURL: 'https://api.stackexchange.com',
	params: {
		site: 'stackoverflow',
	},
});

export async function fetchTags(
	{ page, pageSize }: Pagination,
	{ sort, order }: SortOptions<Sort>
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
