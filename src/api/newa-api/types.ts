import { type CATEGORIES, type COUNTRIES, type LANGUAGES } from './constants';

export type Categories = (typeof CATEGORIES)[keyof typeof CATEGORIES];

export type Languages = (typeof LANGUAGES)[keyof typeof LANGUAGES];

export type Countries = (typeof COUNTRIES)[keyof typeof COUNTRIES];
