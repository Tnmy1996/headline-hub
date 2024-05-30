import { z } from 'zod';

import { CategorySchema } from '../schema';

export const SourcesAPIParamsSchema = z.object({
    category: CategorySchema.optional(),
    language: z.string().optional(),
    country: z.string().optional(),
});
