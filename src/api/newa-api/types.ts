import { type CATEGORIES, type COUNTRIES, type LANGUAGES } from './constants';

export type Categories = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export type Languages = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export type Countries = (typeof COUNTRIES)[keyof typeof COUNTRIES];

export interface NewsAPIResponse {
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
    publishedAt: string | null; // Date;
    content: string | null;
}

export interface Source {
    id: string | null;
    name: string | null;
}
