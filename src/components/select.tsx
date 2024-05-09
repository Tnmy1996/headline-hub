/**
 * v0 by Vercel.
 * @see https://v0.dev/t/itVPY8UYCGb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

import { type Option } from './types';

export type SelectDropdownProps = {
    className?: string;
    icon: React.ReactNode;
    placeholder: string;
    options: Array<Option>;
    value?: string | null;
    onChange: React.Dispatch<React.SetStateAction<string | null>>;
};
export function SelectDropdown({
    icon,
    onChange,
    placeholder,
    options,
    value,
    className,
}: SelectDropdownProps) {
    return (
        <Select
            value={value ?? undefined}
            onValueChange={(v) => {
                onChange(v);
            }}
        >
            <SelectTrigger className={cn('flex  gap-1', className)}>
                <div className='mr-1'>{icon}</div>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
