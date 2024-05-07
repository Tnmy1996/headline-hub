import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/login')({
    component: LoginComponent,
});

function LoginComponent() {
    const router = useRouter();
    const { auth, status } = Route.useRouteContext({
        select: ({ auth }) => ({ auth, status: auth.status }),
    });

    const [username, setUsername] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        auth.login(username);
        router.invalidate();
    };

    return status === 'loggedIn' ? (
        <div>
            Logged in as <strong>{auth.username}</strong>
            <div className='h-2' />
            <button
                onClick={() => {
                    auth.logout();
                    router.invalidate();
                }}
                className='inline-block rounded border bg-blue-500 px-2 py-1 text-sm text-white'
            >
                Log out
            </button>
            <div className='h-2' />
        </div>
    ) : (
        <div className='p-2'>
            <div>You must log in!</div>
            <div className='h-2' />
            <form onSubmit={onSubmit} className='flex gap-2'>
                <Input
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    placeholder='Username'
                    className='rounded border p-1 px-2'
                />
                <Button
                    type='submit'
                    className='inline-block rounded border bg-blue-500 px-2 py-1 text-sm text-white'
                >
                    Login
                </Button>
            </form>
        </div>
    );
}
