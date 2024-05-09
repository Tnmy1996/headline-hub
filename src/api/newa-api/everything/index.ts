import { type NewsAPIResponse } from '@/api/newa-api/types';
import { useQuery } from '@tanstack/react-query';

import { newsAPIInstance } from '..';
import { EverythingAPIParamsSchema } from './schema';
import { type EverythingAPIParams } from './types';

const fetchEverything = async (
    params: EverythingAPIParams,
): Promise<NewsAPIResponse> => {
    const validatedParams = EverythingAPIParamsSchema.parse(params);

    const response = await newsAPIInstance.get<NewsAPIResponse>(`/everything`, {
        params: {
            ...validatedParams,
        },
    });

    return response.data;
};

export const useEverythingQuery = (params: EverythingAPIParams) =>
    useQuery({
        queryKey: ['everything', params],
        queryFn: () => fetchEverything(params),
    });
