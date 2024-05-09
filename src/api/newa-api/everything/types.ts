import { type Languages } from '../types';
import { type SEARCH_IN, type SORT_BY } from './constants';

export type SearchIn = (typeof SEARCH_IN)[keyof typeof SEARCH_IN];
export type SortBy = (typeof SORT_BY)[keyof typeof SORT_BY];

export type EverythingAPIParams = {
    q?: string;

    searchIn?: SearchIn;

    // The sources to restrict your search to.
    sources?: string;

    domains?: string;

    excludeDomains?: string;

    from?: string; // YYYY-MM-DD
    to?: string; // YYYY-MM-DD

    language?: Languages;
    /*
      The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
      relevancy = articles more closely related to q come first.
      popularity = articles from popular sources and publishers come first.
      publishedAt = newest articles come first.
    */
    sortBy?: SortBy;

    pageSize?: number;
    page?: number;
};
