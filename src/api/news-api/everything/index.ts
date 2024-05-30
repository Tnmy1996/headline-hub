import { type NewsAPIResponse } from '@/api/news-api/types';
import { removePropertiesByValue } from '@/utils/utility-functions';
import { useQuery } from '@tanstack/react-query';

import { newsAPIInstance } from '..';
import { EverythingAPIParamsSchema } from './schema';
import { type EverythingAPIParams } from './types';

const fetchEverything = async (
    params: EverythingAPIParams,
): Promise<NewsAPIResponse> => {
    const validatedParams = EverythingAPIParamsSchema.parse(
        removePropertiesByValue(params, [null, 'all']),
    );

    const response = await newsAPIInstance.get<NewsAPIResponse>(`/everything`, {
        params: {
            ...validatedParams,
        },
    });

    return response.data;
};

export const useEverythingQuery = ({
    enabled,
    ...params
}: EverythingAPIParams & { enabled?: boolean }) =>
    useQuery({
        queryKey: ['everything', params],
        queryFn: () => fetchEverything(params),
        enabled,
    });
