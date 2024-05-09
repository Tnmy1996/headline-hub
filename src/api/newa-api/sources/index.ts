import { useQuery } from '@tanstack/react-query';

import { newsAPIInstance } from '..';
import { SourcesAPIParamsSchema } from './schema';
import { type SourceAPIParams, type SourceAPIResponse } from './types';

const fetchSources = async (
    params: SourceAPIParams,
): Promise<SourceAPIResponse> => {
    const validatedParams = SourcesAPIParamsSchema.parse(params);
    const response = await newsAPIInstance.get<SourceAPIResponse>(`/sources`, {
        params: {
            ...validatedParams,
        },
    });

    return response.data;
};

export const useSourcesQuery = (params: SourceAPIParams) =>
    useQuery({
        queryKey: ['sources', params],
        queryFn: () => fetchSources(params),
    });
