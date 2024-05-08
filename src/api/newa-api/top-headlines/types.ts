import { type Categories, type Countries } from '../types';

export type TopHeadlinesAPIParams = {
    country?: Countries;
    category?: Categories;
    sources?: string;
    q?: string;
    pageSize?: number;
    page?: number;
};

export interface TopHeadlinesAPIResponse {
    status: string;
    totalResults: number;
    articles: Array<Article>;
}

export interface Article {
    source: Source;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: Date;
    content: string | null;
}

export interface Source {
    id: string | null;
    name: string;
}
