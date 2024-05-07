import { Link, useRouteContext } from '@tanstack/react-router';
import { Menu, Package2 } from 'lucide-react';

import { MainNav } from './main-nav';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { UserNav } from './user-nav';

export default function Header() {
    const { status } = useRouteContext({
        from: '__root__',
        select: (c) => ({ status: c.auth.status }),
    });

    return (
        <>
            <div className='hidden flex-col md:flex'>
                <div className='border-b'>
                    <div className='relative flex h-16 items-center border-b px-4'>
                        <div className='flex w-full items-center justify-between'>
                            <div className='h-[40px] w-[88px]'></div>
                            <h2 className='absolute left-1/2 -translate-x-1/2 text-3xl font-bold tracking-tight'>
                                <Link to='/'> Heading Hub</Link>
                            </h2>
                            <div className='flex items-center space-x-4'>
                                <ModeToggle />
                                {status === 'loggedIn' ? (
                                    <UserNav />
                                ) : (
                                    <Button>
                                        <Link to='/login'>Login</Link>
                                    </Button>
                                )}
                                {/* {status !== 'loggedIn' && <UserNav />} */}
                            </div>
                        </div>
                    </div>
                    <div className='flex h-16 items-center px-4'>
                        <MainNav className='mx-auto' />
                    </div>
                </div>
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant='outline'
                        size='icon'
                        className='shrink-0 md:hidden'
                    >
                        <Menu className='size-5' />
                        <span className='sr-only'>Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side='left'>
                    <nav className='grid gap-6 text-lg font-medium'>
                        <Link
                            href='#'
                            className='flex items-center gap-2 text-lg font-semibold'
                        >
                            <Package2 className='size-6' />
                            <span className='sr-only'>Acme Inc</span>
                        </Link>
                        <Link
                            href='#'
                            className='text-muted-foreground hover:text-foreground'
                        >
                            Dashboard
                        </Link>
                        <Link
                            href='#'
                            className='text-muted-foreground hover:text-foreground'
                        >
                            Orders
                        </Link>
                        <Link
                            href='#'
                            className='text-muted-foreground hover:text-foreground'
                        >
                            Products
                        </Link>
                        <Link
                            href='#'
                            className='text-muted-foreground hover:text-foreground'
                        >
                            Customers
                        </Link>
                        <Link href='#' className='hover:text-foreground'>
                            Settings
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </>
    );
}
