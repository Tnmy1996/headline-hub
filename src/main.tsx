import { QueryClientProvider } from '@tanstack/react-query';
import {
    createRouter,
    ErrorComponent,
    RouterProvider,
} from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Spinner from './components/spinner';
import { ThemeProvider } from './components/theme-provider';
import './index.css';
import { queryClient } from './routes/-query-client';
import { routeTree } from './routeTree.gen';
import { auth } from './utils/auth';

const router = createRouter({
    routeTree,
    defaultPendingComponent: () => (
        <div className={`p-2 text-2xl`}>{<Spinner />}</div>
    ),
    defaultErrorComponent: ({ error }) => <ErrorComponent error={error} />,
    context: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        auth: undefined!, // We'll inject this when we render
        // auth,
        queryClient,
    },
    defaultPreload: 'intent',
    // Since we're using React Query, we don't want loader calls to ever be stale
    // This will ensure that the loader is always called when the route is preloaded or visited
    defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

// Render the app
const rootElement = document.getElementById('app');

if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider
                        router={router}
                        context={{
                            auth,
                            queryClient,
                        }}
                    />
                </QueryClientProvider>
            </ThemeProvider>
        </StrictMode>,
    );
}
