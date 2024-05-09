import { CATEGORIES, COUNTRIES } from '@/api/newa-api/constants';
import { TopHeadlinesData } from '@/api/newa-api/top-headlines/data';
import ArticleCard from '@/components/article';
import { Combobox } from '@/components/combox';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { createFileRoute } from '@tanstack/react-router';
import { ListFilter } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/')({
    component: Content,
});

function Content() {
    // const [activeTab, setActiveTab] = useState('all');

    // const { data } = useEverythingQuery({ q: 'bitcoin' });
    // console.log('🚀 ~ Content ~ data:', data);

    // const { data: topHeadlines } = useTopHeadlinesQuery({ country: 'us' });
    // console.log('🚀 ~ Content ~ topHeadlines:', topHeadlines);

    // const { data: sources } = useSourcesQuery({});
    // console.log('🚀 ~ Content ~  sources:', sources);

    const [selectedCountry, setSelectedCountry] = useState<string>(
        COUNTRIES.US,
    );

    const articles = TopHeadlinesData.articles;
    const countries = Object.entries(COUNTRIES).map(([_key, value]) => ({
        value,
        label: value,
    }));
    console.log('🚀 ~ countries ~ countries:', countries);

    return (
        <>
            <h2 className='text-2xl font-bold'>Top Headlines</h2>
            <Tabs
                defaultValue='all'
                className=''
                onValueChange={(e) => {
                    // setActiveTab(e);
                }}
            >
                <div className='flex items-center'>
                    <TabsList>
                        <TabsTrigger className='capitalize' value='all'>
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            className='capitalize'
                            value={CATEGORIES.BUSINESS}
                        >
                            {CATEGORIES.BUSINESS}
                        </TabsTrigger>
                        <TabsTrigger
                            className='capitalize'
                            value={CATEGORIES.ENTERTAINMENT}
                        >
                            {CATEGORIES.ENTERTAINMENT}
                        </TabsTrigger>
                        <TabsTrigger
                            className='capitalize'
                            value={CATEGORIES.GENERAL}
                        >
                            {CATEGORIES.GENERAL}
                        </TabsTrigger>
                        <TabsTrigger
                            className='capitalize'
                            value={CATEGORIES.HEALTH}
                        >
                            {CATEGORIES.HEALTH}
                        </TabsTrigger>
                        <TabsTrigger
                            className='capitalize'
                            value={CATEGORIES.SCIENCE}
                        >
                            {CATEGORIES.SCIENCE}
                        </TabsTrigger>
                        <TabsTrigger
                            className='capitalize'
                            value={CATEGORIES.SPORTS}
                        >
                            {CATEGORIES.SPORTS}
                        </TabsTrigger>
                        <TabsTrigger
                            className='capitalize'
                            value={CATEGORIES.TECHNOLOGY}
                        >
                            {CATEGORIES.TECHNOLOGY}
                        </TabsTrigger>
                    </TabsList>
                    <div className='ml-auto flex items-center gap-2'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant='outline'
                                    size='sm'
                                    className='h-7 gap-1 text-sm'
                                >
                                    <ListFilter className='size-3.5' />
                                    <span className='sr-only sm:not-sr-only'>
                                        Country
                                    </span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                                {Object.entries(COUNTRIES).map(
                                    ([key, value]) => (
                                        <DropdownMenuCheckboxItem key={key}>
                                            {value}
                                        </DropdownMenuCheckboxItem>
                                    ),
                                )}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Combobox
                            options={countries}
                            value={selectedCountry}
                            onChange={setSelectedCountry}
                            label='Country'
                        />
                    </div>
                </div>
            </Tabs>
            <div className='no-scrollbar flex-1 overflow-auto pb-8'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {articles.map((article) => (
                        <ArticleCard key={article.url} {...article} />
                    ))}
                </div>
            </div>
        </>
    );
}
