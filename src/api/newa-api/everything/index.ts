import { useQuery } from '@tanstack/react-query';

import { newsAPIInstance } from '..';
import { EverythingAPIParamsSchema } from './schema';
import { type EverythingAPIParams, type EverythingAPIResponse } from './types';

const fetchEverything = async (
    params: EverythingAPIParams,
): Promise<EverythingAPIResponse> => {
    const validatedParams = EverythingAPIParamsSchema.parse(params);

    const response = await newsAPIInstance.get<EverythingAPIResponse>(
        `/everything`,
        {
            params: {
                ...validatedParams,
            },
        },
    );

    return response.data;
};

export const useEverythingQuery = (params: EverythingAPIParams) =>
    useQuery({
        queryKey: ['everything', params],
        queryFn: () => fetchEverything(params),
    });
