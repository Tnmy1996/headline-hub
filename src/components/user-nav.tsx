import { Link, useRouteContext } from '@tanstack/react-router';
import { User } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function UserNav() {
    const { username, firstName, lastName, email, isLoggedIn } =
        useRouteContext({
            from: '__root__',
            select: (c) => ({ ...c.auth }),
        });

    const userInitials = `${firstName?.[0] ?? ''}${lastName?.[0] ?? ''}`;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='ghost'
                    className='relative size-8 rounded-full'
                >
                    <Avatar className='size-8'>
                        <AvatarImage src='/avatars/01.png' alt='@shadcn' />
                        <AvatarFallback className='uppercase'>
                            {isLoggedIn ? userInitials : <User />}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
                {isLoggedIn ? (
                    <>
                        <DropdownMenuLabel className='font-normal'>
                            <div className='flex flex-col space-y-1'>
                                <p className='text-sm font-medium leading-none'>
                                    {username}
                                </p>
                                <p className='text-xs leading-none text-muted-foreground'>
                                    {email}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Log out</DropdownMenuItem>
                    </>
                ) : (
                    <Link to='/login'>
                        <DropdownMenuItem>Login</DropdownMenuItem>
                    </Link>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
