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
                  // For Embedded Mode
                  // default: res.TanStackRouterDevtoolsPanel
              })),
          );

interface MyRouterContext {
    auth: Auth;
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: App,
});

function App() {
    return (
        <>
            <div className='flex min-h-screen w-full min-w-[400px] flex-col'>
                <Header />
                <main className='flex  flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10'>
                    {/* min-h-[calc(100vh_-_theme(spacing.16))] */}
                    <Outlet />
                </main>
                <TanStackRouterDevtools />
            </div>
        </>
    );
}
