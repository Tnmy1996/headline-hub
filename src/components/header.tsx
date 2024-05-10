import { Link } from '@tanstack/react-router';

import { ModeToggle } from './mode-toggle';
import { UserNav } from './user-nav';

export function Header() {
    return (
        <header className='fixed top-0 z-50 flex w-full flex-col border-b bg-background '>
            <div className='flex h-16 w-full items-center justify-between gap-4 border-b px-4 md:px-6'>
                <div></div>
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
