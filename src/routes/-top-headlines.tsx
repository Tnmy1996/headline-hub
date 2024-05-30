import { COUNTRIES, COUNTRIES_LABELS } from '@/api/news-api/constants';
import { useTopHeadlinesQuery } from '@/api/news-api/top-headlines';
import { ArticleGrid } from '@/components/article-grid';
import { Combobox } from '@/components/combobox';
import { SelectDropdown } from '@/components/select';
import Spinner from '@/components/spinner';
import { type Option } from '@/components/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import { useDebounce } from '@/hooks/useDebounce';
import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import {
    CatIcon,
    GlobeIcon,
    HelpCircleIcon,
    NewspaperIcon,
} from 'lucide-react';
import { useState } from 'react';

const all: Option = {
    value: 'all',
    label: 'All',
};

export type TopHeadlineProps = {
    sourcesOptions: Array<Option>;
    categoryOptions: Array<Option>;
    countryOptions: Array<Option>;
};

export function TopHeadlines({
    sourcesOptions,
    categoryOptions,
    countryOptions,
}: TopHeadlineProps) {
    // country
    const [selectedCountry, setSelectedCountry] = useState<Option | null>({
        value: COUNTRIES.US,
        label: COUNTRIES_LABELS[COUNTRIES.US],
    });

    // category
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        all.value,
    );

    // source
    const [selectedSource, setSelectedSource] = useState<Option | null>(null);

    // query
    const [query, setQuery] = useState('');

    // page
    const [page, setPage] = useState(1);

    const [debouncedQuery] = useDebounce(query, 500);

    const {
        data: topHeadlines,
        isLoading,
        isError,
        error,
    } = useTopHeadlinesQuery({
        country: selectedCountry?.value,
        category: selectedCategory,
        sources: selectedSource?.value,
        page,
        q: debouncedQuery,
    });

    return (
        <>
            <div className='sticky top-[137px] z-50 flex flex-col justify-between gap-4 bg-background pb-4 md:flex-row lg:items-center'>
                <div className='flex min-w-[200px] flex-1 items-center lg:max-w-96'>
                    <Input
                        className='w-full bg-white dark:bg-gray-800 dark:text-white'
                        placeholder='Search news...'
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                        }}
                    />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <HelpCircleIcon className='ml-2 size-6 text-gray-500 dark:text-gray-400' />
                            </TooltipTrigger>
                            <TooltipContent
                                className='z-50'
                                side='bottom'
                                sideOffset={5}
                            >
                                <Card className='max-w-80 text-justify'>
                                    <CardContent className='pt-6'>
                                        Refine your search easily with our
                                        advanced search bar! Simply enter
                                        keywords or phrases to search for in the
                                        article title and body. Use quotes
                                        (`&quot;`) for exact matches, and
                                        prepend words with a + symbol to make
                                        them mandatory. Exclude specific terms
                                        by adding a - symbol. Want more control?
                                        Utilize AND, OR, and NOT keywords, and
                                        group them with parenthesis. Remember,
                                        the complete search query must not
                                        exceed 500 characters.
                                    </CardContent>
                                </Card>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className='flex flex-wrap gap-1 xl:items-center '>
                    <Combobox
                        className='w-[220px]'
                        options={sourcesOptions}
                        value={selectedSource}
                        onChange={(source) => {
                            if (source) {
                                setSelectedCategory('all');
                                setSelectedCountry(null);
                            }
                            setSelectedSource(source);
                        }}
                        placeholder='Source'
                        icon={<NewspaperIcon className='mr-2 size-5' />}
                    />
                    <SelectDropdown
                        className='w-[165px]'
                        options={categoryOptions}
                        value={selectedCategory}
                        onChange={(category) => {
                            if (category) {
                                setSelectedSource(null);
                            }
                            setSelectedCategory(category);
                        }}
                        placeholder='Category'
                        icon={<CatIcon />}
                    />
                    <Combobox
                        className='w-[220px]'
                        options={countryOptions}
                        value={selectedCountry}
                        onChange={(country) => {
                            if (country) {
                                setSelectedSource(null);
                            }
                            setSelectedCountry(country);
                        }}
                        placeholder='Country'
                        icon={<GlobeIcon className='mr-2 size-5' />}
                    />
                </div>
            </div>

            {isError ? (
                <Card>
                    <CardHeader>
                        <CardTitle>Oops Error!</CardTitle>
                    </CardHeader>
                    <CardContent>{error.message}</CardContent>
                </Card>
            ) : null}

            {isLoading ? (
                <div className='mx-auto flex w-full flex-1 items-center justify-center'>
                    <Spinner size='lg' />
                </div>
            ) : topHeadlines?.articles.length ? (
                <ArticleGrid
                    articles={topHeadlines.articles}
                    totalCount={topHeadlines.totalResults}
                    currentPage={page}
                    setCurrentPage={setPage}
                />
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>No Data found!</CardTitle>
                    </CardHeader>
                    <CardContent>Such empty, much Wow </CardContent>
                </Card>
            )}
        </>
    );
}
