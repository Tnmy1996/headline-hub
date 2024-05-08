import { LanguageSchema } from '@/api/newa-api/schema';
import { z } from 'zod';

import { SEARCH_IN, SORT_BY } from './constants';

export const EverythingAPIParamsSchema = z.object({
    /*
    Keywords or phrases to search for in the article title and body.

    Advanced search is supported here:

    Surround phrases with quotes (") for exact match.
    Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
    Prepend words that must not appear with a - symbol. Eg: -bitcoin
    Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
    The complete value for q must be URL-encoded. Max length: 500 chars.
  */
    q: z
        .string()
        .max(500) // Max length: 500 chars
        .optional(),

    /*
    The fields to restrict your q search to.

    The possible options are:

    title
    description
    content
    Multiple options can be specified by separating them with a comma, for example: title,content.

  */
    searchIn: z
        .enum([
            SEARCH_IN.CONTENT,
            SEARCH_IN.DESCRIPTION,
            SEARCH_IN.TITLE,

            SEARCH_IN.DESCRIPTION_CONTENT,
            SEARCH_IN.TITLE_CONTENT,
            SEARCH_IN.TITLE_DESCRIPTION_CONTENT,
            SEARCH_IN.TITLE_DESCRIPTION,
        ])
        .optional(),

    sources: z.string().optional(),

    domains: z.string().optional(),

    excludeDomains: z.string().optional(),

    from: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .optional(),
    to: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/)
        .optional(),

    language: LanguageSchema.optional(),

    sortBy: z
        .enum([SORT_BY.RELEVANCY, SORT_BY.POPULARITY, SORT_BY.PUBLISHED_AT])
        .optional()
        .default(SORT_BY.PUBLISHED_AT),

    pageSize: z.number().min(1).max(100).optional().default(20),

    page: z.number().optional().default(1),
});
