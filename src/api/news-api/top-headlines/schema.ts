import { z } from 'zod';

import { CategorySchema, CountrySchema } from '../schema';

export const TopHeadlinesAPIPropsSchema = z.object({
    country: CountrySchema.optional(), //.default(COUNTRIES.US),
    category: CategorySchema.optional(),
    sources: z.string().optional(),
    q: z.string().max(500).optional(),
    pageSize: z.number().min(1).max(100).optional().default(20),
    page: z.number().optional().default(1),
});
