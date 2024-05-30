import { type Article } from '@/api/news-api/types';
import { format, parseISO } from 'date-fns';

import { Badge } from './ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card';

export type ArticleCardProps = Article;

function parseAndFormatDate(isoString: string) {
    const date = parseISO(isoString);
    return format(date, 'MMMM d, yyyy');
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
    title,
    description,
    source,
    urlToImage,
    publishedAt,
    author,
    url,
}) => {
    return (
        <Card className='group flex flex-col shadow-lg '>
            <div className='relative overflow-hidden'>
                <img
                    alt='Article Image'
                    className='h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                    height='200'
                    src={urlToImage ?? 'https://via.placeholder.com/400x200'}
                    style={{
                        aspectRatio: '400/200',
                        objectFit: 'cover',
                    }}
                    width='400'
                />
            </div>
            <CardHeader className='pt-5'>
                {source.name ? (
                    <div className='mb-2'>
                        <Badge>{source.name}</Badge>
                    </div>
                ) : null}
                <CardTitle>
                    <a
                        className='hover:underline'
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {title}
                    </a>
                </CardTitle>
                {author ?? publishedAt ? (
                    <CardDescription>
                        {author ? <span>By {author}</span> : null}
                        {author && publishedAt ? (
                            <span className='mx-2'>·</span>
                        ) : null}
                        {publishedAt ? (
                            <time>{parseAndFormatDate(publishedAt)}</time>
                        ) : null}
                    </CardDescription>
                ) : null}
            </CardHeader>
            <CardContent className='flex-1'>
                {description ? (
                    <CardDescription>
                        Discover the latest advancements in renewable energy
                        technology and how they are shaping the future of our
                        planet.
                    </CardDescription>
                ) : null}
            </CardContent>
            <CardFooter>
                <a
                    className='font-medium text-primary hover:underline'
                    href={url}
                    target='_blank'
                    rel='noreferrer'
                >
                    Read More
                </a>
            </CardFooter>
        </Card>
    );
};

export default ArticleCard;
