import Header from '@/components/header';
import { type Auth } from '@/utils/auth';
import { type QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { lazy } from 'react';

const TanStackRouterDevtools =
    import.meta.env.MODE === 'production'
        ? () => null // Render nothing in production
        : lazy(() =>
              // Lazy load in development
              import('@tanstack/router-devtools').then((res) => ({
                  default: res.TanStackRouterDevtools,
              })),
          );

const TanStackQueryDevtools =
    import.meta.env.MODE === 'production'
        ? () => null // Render nothing in production
        : lazy(() =>
              // Lazy load in development
              import('@tanstack/react-query-devtools').then((res) => ({
                  default: res.ReactQueryDevtools,
              })),
          );

interface RootRouteContext {
    auth: Auth;
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RootRouteContext>()({
    component: Root,
});

function Root() {
    return (
        <div className='flex min-h-screen w-full min-w-[400px] flex-col'>
            <Header />
            <main className='flex h-[calc(100vh_-_65px)] max-h-[calc(100vh_-_65px)] flex-col gap-4 bg-muted/40 p-4 md:gap-8'>
                <Outlet />
            </main>
            <TanStackRouterDevtools />
            <TanStackQueryDevtools />
        </div>
    );
}
