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
            <Header />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
}
