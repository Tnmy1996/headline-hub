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
        <div className='size-full min-w-[400px]'>
            <Header />
            <main className='flex min-h-screen flex-col p-4 pt-[65px]'>
                <Outlet />
            </main>
            <TanStackRouterDevtools />
            <TanStackQueryDevtools />
        </div>
    );
}
