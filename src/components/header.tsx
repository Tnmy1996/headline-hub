import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from '@tanstack/react-router';
import { Menu, Newspaper } from 'lucide-react';

import { ModeToggle } from './mode-toggle';
import { UserNav } from './user-nav';

export function Header() {
    return (
        <header className='sticky top-0  w-full border-b bg-background px-4 md:px-6'>
            <div className='sticky top-0 flex h-16 w-full items-center justify-between gap-4 border-b'>
                <div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant='outline'
                                size='icon'
                                className='shrink-0 md:hidden'
                            >
                                <Menu className='size-5' />
                                <span className='sr-only'>
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left'>
                            <nav className='grid gap-6 text-lg font-medium'>
                                <Link
                                    to='/'
                                    className='flex items-center gap-2 text-lg font-semibold'
                                >
                                    <Newspaper className='size-6' />
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
                                <Link
                                    href='#'
                                    className='hover:text-foreground'
                                >
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
                <h2 className='absolute left-1/2 -translate-x-1/2 font-bold tracking-tight sm:text-2xl md:text-3xl'>
                    <Link to='/'>Heading Hub</Link>
                </h2>
                <div className='flex items-center space-x-4'>
                    <ModeToggle />
                    <UserNav />
                </div>
            </div>
        </header>
    );
}

export default Header;
