import { LogOut, User } from 'lucide-react';

import { Avatar } from './ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

export interface ProfileDropdownProps {
    mobile?: boolean;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
    mobile = false,
}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <User
                        className='size-8 rounded-full text-white'
                        aria-hidden='true'
                    />
                </Avatar>
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

export default ProfileDropdown;
