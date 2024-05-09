import { type Categories, type Countries } from '../types';

export type TopHeadlinesAPIParams = {
    country?: Countries;
    category?: Categories;
    sources?: string;
    q?: string;
    pageSize?: number;
    page?: number;
};
