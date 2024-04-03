interface ExternalLink {
	type: string;
	link: string;
}

interface Collective {
	description: string;
	link: string;
	name: string;
	slug: string;
	external_links: ExternalLink[];
	tags: string[];
}

interface Item {
	has_synonyms: boolean;
	is_moderator_only: boolean;
	is_required: boolean;
	count: number;
	name: string;
	collectives?: Collective[];
}

export interface TagsResponse {
	items: Item[];
	has_more: boolean;
	quota_max: number;
	quota_remaining: number;
}

export interface ErrorResponse {
	error_id: number;
	error_message: string;
	error_name: string;
}

export const sortType = {
	Name: 'name',
	Count: 'popular',
} as const;

export type Sort = (typeof sortType)[keyof typeof sortType];
