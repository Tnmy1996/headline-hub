// profile-menu.tsx
import { LogOut, User } from 'lucide-react';

import { Avatar } from './ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

const ProfileMenu: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type='button'
                    className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                    <span className='sr-only'>Open user menu</span>
                    <Avatar>
                        <User
                            className='size-8 rounded-full text-white'
                            aria-hidden='true'
                        />
                    </Avatar>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-48'>
                <DropdownMenuItem>
                    <a href='#' className='flex w-full'>
                        Your Profile
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href='#' className='flex w-full'>
                        Settings
                    </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href='#' className='flex w-full items-center'>
                        <LogOut
                            className='mr-2 inline-block size-5'
                            aria-hidden='true'
                        />
                        Log out
                    </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileMenu;
