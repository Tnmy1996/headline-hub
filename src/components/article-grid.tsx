import { type Article } from '@/api/newa-api/types';
import ArticleCard from '@/components/article';
import { PaginationBar, type PaginationProps } from '@/components/pagination';

export type ArticleGridProps = PaginationProps & {
    articles: Array<Article>;
};

export function ArticleGrid({
    articles,
    totalCount,
    currentPage,
    siblingCount = 2,
    setCurrentPage,
}: ArticleGridProps) {
    return (
        <div className='flex flex-1 flex-col'>
            <div className='grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {articles.map((article) => (
                    <ArticleCard
                        key={
                            article.url +
                            (article.author ?? '') +
                            (article.publishedAt ?? '') +
                            article.title +
                            (article.urlToImage ?? '')
                        }
                        {...article}
                    />
                ))}
            </div>
            <PaginationBar
                totalCount={totalCount}
                currentPage={currentPage}
                siblingCount={siblingCount}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}
