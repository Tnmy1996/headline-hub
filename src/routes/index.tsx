import { useEverythingQuery } from '@/api/newa-api/everything';
import { useSourcesQuery } from '@/api/newa-api/sources/index';
import { useTopHeadlinesQuery } from '@/api/newa-api/top-headlines/index';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Content,
});

function Content() {
    const { data } = useEverythingQuery({ q: 'bitcoin' });
    console.log('🚀 ~ Content ~ data:', data);

    const { data: topHeadlines } = useTopHeadlinesQuery({ country: 'us' });
    console.log('🚀 ~ Content ~ topHeadlines:', topHeadlines);

    const { data: sources } = useSourcesQuery({});
    console.log('🚀 ~ Content ~  sources:', sources);

    return <div>Content</div>;
}
