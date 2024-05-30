import { type Categories, type Countries, type Languages } from '../types';

export type SourceAPIParams = {
    category?: Categories;
    language?: Languages;
    country?: string;
};
export interface SourceAPIResponse {
    status: string;
    sources: Array<Source>;
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: Categories;
    language: Languages;
    country: Countries;
}
