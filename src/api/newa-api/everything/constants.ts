export const SEARCH_IN = {
    CONTENT: 'content',
    DESCRIPTION: 'description',
    TITLE: 'title',

    DESCRIPTION_CONTENT: 'description,content',
    TITLE_CONTENT: 'title,content',
    TITLE_DESCRIPTION_CONTENT: 'title,description,content',
    TITLE_DESCRIPTION: 'title,description',
} as const;

export const SORT_BY = {
    POPULARITY: 'popularity',
    PUBLISHED_AT: 'publishedAt',
    RELEVANCY: 'relevancy',
} as const;

export const SORT_BY_LABELS = {
    [SORT_BY.POPULARITY]: 'Popularity',
    [SORT_BY.PUBLISHED_AT]: 'Published At',
    [SORT_BY.RELEVANCY]: 'Relevancy',
} as const;
