import { useQuery } from '@tanstack/react-query';

import { newsAPIInstance } from '..';
import { TopHeadlinesAPIPropsSchema } from './schema';
import {
    type TopHeadlinesAPIParams,
    type TopHeadlinesAPIResponse,
} from './types';

export const fetchTopHeadlines = async (
    params: TopHeadlinesAPIParams,
): Promise<TopHeadlinesAPIResponse> => {
    const validatedParams = TopHeadlinesAPIPropsSchema.parse(params);

    const response = await newsAPIInstance.get<TopHeadlinesAPIResponse>(
        `/top-headlines`,
        {
            params: {
                ...validatedParams,
            },
        },
    );

    return response.data;
};

export const useTopHeadlinesQuery = (params: TopHeadlinesAPIParams) =>
    useQuery({
        queryKey: ['top-headlines', params],
        queryFn: () => fetchTopHeadlines(params),
    });
