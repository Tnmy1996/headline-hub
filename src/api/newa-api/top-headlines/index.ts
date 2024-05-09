import { type NewsAPIResponse } from '@/api/newa-api/types';
import { removePropertiesByValue } from '@/utils/utility-functions';
import { useQuery } from '@tanstack/react-query';

import { newsAPIInstance } from '..';
import { type TopHeadlinesAPIParams } from './types';

export const fetchTopHeadlines = async (
    params: TopHeadlinesAPIParams,
): Promise<NewsAPIResponse> => {
    // const validatedParams = TopHeadlinesAPIPropsSchema.parse(
    // );
    const validatedParams = removePropertiesByValue(params, [null, 'all']);

    const response = await newsAPIInstance.get<NewsAPIResponse>(
        `/top-headlines`,
        {
            params: {
                ...validatedParams,
            },
        },
    );

    return response.data;
};

export const useTopHeadlinesQuery = ({
    enabled = true,
    ...params
}: TopHeadlinesAPIParams & { enabled?: boolean }) =>
    useQuery({
        queryKey: ['top-headlines', params],
        queryFn: () => fetchTopHeadlines(params),
        enabled,
    });
