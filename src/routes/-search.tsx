import { useEverythingQuery } from '@/api/newa-api/everything';
import { SORT_BY } from '@/api/newa-api/everything/constants';
import { ArticleGrid } from '@/components/article-grid';
import { Combobox } from '@/components/combobox';
import { DatePickerWithRange } from '@/components/date-range-picker';
import { SelectDropdown } from '@/components/select';
import Spinner from '@/components/spinner';
import { type Option } from '@/components/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import { useDebounce } from '@/hooks/useDebounce';
import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { format } from 'date-fns';
import {
    HelpCircleIcon,
    Languages,
    ListOrderedIcon,
    NewspaperIcon,
} from 'lucide-react';
import { useState } from 'react';
import { type DateRange } from 'react-day-picker';

export type TopHeadlineProps = {
    sourcesOptions: Array<Option>;
    languageOptions: Array<Option>;
    sortByOptions: Array<Option>;
};

export function SearchHeadlines({
    sourcesOptions,
    languageOptions,
    sortByOptions,
}: TopHeadlineProps) {
    // query
    const [query, setQuery] = useState('');

    // source
    const [selectedSource, setSelectedSource] = useState<Option | null>(null);

    // date range
    const [date, setDate] = useState<DateRange | undefined>();

    // language
    const [selectedLanguage, setSelectedLanguage] = useState<Option | null>(
        null,
    );

    // sort by
    const [selectedSortBy, setSelectedSortBy] = useState<string | null>(
        SORT_BY.PUBLISHED_AT,
    );

    // page
    const [page, setPage] = useState(1);

    const [debouncedQuery] = useDebounce(query, 500);

    const {
        data: searchedArticles,
        isError,
        isLoading,
        error,
    } = useEverythingQuery({
        q: debouncedQuery,
        sources: selectedSource?.value,
        to: date?.to && format(date.to, 'yyyy-MM-dd'),
        from: date?.from && format(date.from, 'yyyy-MM-dd'),
        language: selectedLanguage?.value,
        sortBy: selectedSortBy ?? undefined,
        page,
        pageSize: 20,
        enabled: !!debouncedQuery,
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
                <div className='flex flex-wrap  gap-1 xl:items-center '>
                    <Combobox
                        className='w-[220px]'
                        options={sourcesOptions}
                        value={selectedSource}
                        onChange={(source) => {
                            setSelectedSource(source);
                        }}
                        placeholder='Source'
                        icon={<NewspaperIcon className='mr-2 size-5' />}
                    />
                    <Combobox
                        className='w-[220px]'
                        options={languageOptions}
                        value={selectedLanguage}
                        onChange={(language) => {
                            setSelectedLanguage(language);
                        }}
                        placeholder='Language'
                        icon={<Languages className='mr-2 size-5' />}
                    />
                    <DatePickerWithRange date={date} setDate={setDate} />

                    <SelectDropdown
                        className='w-[165px]'
                        options={sortByOptions}
                        onChange={setSelectedSortBy}
                        placeholder='Sort By'
                        icon={<ListOrderedIcon />}
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
            ) : null}

            {searchedArticles === undefined ? (
                <Card>
                    <CardHeader>
                        <CardTitle>Search Somethings</CardTitle>
                    </CardHeader>
                    <CardContent>Go ahead it won&apos;t bite </CardContent>
                </Card>
            ) : searchedArticles.articles.length ? (
                <ArticleGrid
                    articles={searchedArticles.articles}
                    totalCount={searchedArticles.totalResults}
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
