import {
    CATEGORIES,
    CATEGORIES_LABELS,
    COUNTRIES,
    COUNTRIES_LABELS,
    LANGUAGES,
    LANGUAGES_LABELS,
} from '@/api/news-api/constants';
import { SORT_BY, SORT_BY_LABELS } from '@/api/news-api/everything/constants';
import { SourcesData } from '@/api/news-api/sources/data';
import { type Option } from '@/components/types';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { createFileRoute } from '@tanstack/react-router';
import { useMemo, useState } from 'react';

import { SearchHeadlines } from './-search';
import { TopHeadlines } from './-top-headlines';

export const Route = createFileRoute('/')({
    component: Content,
});

const all: Option = {
    value: 'all',
    label: 'All',
};

const languageOptions = Object.entries(LANGUAGES).map(([_key, value]) => ({
    value,
    label: LANGUAGES_LABELS[value],
}));

const sortByOptions = Object.entries(SORT_BY).map(([_key, value]) => ({
    value,
    label: SORT_BY_LABELS[value],
}));

const countryOptions = Object.entries(COUNTRIES).map(([_key, value]) => ({
    value,
    label: COUNTRIES_LABELS[value],
}));

const categoryOptions: Array<Option> = Object.entries(CATEGORIES).map(
    ([_key, value]) => ({
        value,
        label: CATEGORIES_LABELS[value],
    }),
);
categoryOptions.unshift(all);

function Content() {
    const [activeTab, setActiveTab] = useState('top-headlines');

    const sourcesOptions = useMemo(() => {
        return SourcesData.sources.map((d) => {
            return { value: d.id, label: d.name };
        });
    }, []);

    return (
        <>
            <div className='sticky top-[65px] z-10 bg-background py-4'>
                <Tabs
                    defaultValue='top-headlines'
                    onValueChange={(e) => {
                        setActiveTab(e);
                    }}
                >
                    <div className='flex items-center'>
                        <TabsList>
                            <TabsTrigger
                                className='capitalize'
                                value='top-headlines'
                            >
                                Top Headlines
                            </TabsTrigger>
                            <TabsTrigger
                                className='capitalize'
                                value={CATEGORIES.BUSINESS}
                            >
                                Search Headlines
                            </TabsTrigger>
                        </TabsList>
                    </div>
                </Tabs>
            </div>
            {activeTab === 'top-headlines' ? (
                <TopHeadlines
                    sourcesOptions={sourcesOptions}
                    categoryOptions={categoryOptions}
                    countryOptions={countryOptions}
                />
            ) : (
                <SearchHeadlines
                    sortByOptions={sortByOptions}
                    languageOptions={languageOptions}
                    sourcesOptions={sourcesOptions}
                />
            )}
        </>
    );
}
