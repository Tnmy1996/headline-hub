'use client';

import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { Check, ChevronDownIcon } from 'lucide-react';

import { type Option } from './types';

export type ComboboxProps = {
    options: Array<Option>;
    value: Option | null;
    onChange: React.Dispatch<React.SetStateAction<Option | null>>;
    placeholder: string;
    icon?: React.ReactNode;
    className?: string;
};

export function Combobox({
    className,
    placeholder,
    value: selectedOption,
    onChange: setSelectedOption,
    options,
    icon,
}: ComboboxProps) {
    // const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');
    // const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    if (isDesktop) {
        return (
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant='outline'
                        className={cn('flex items-center', className)}
                    >
                        {icon}
                        {selectedOption ? (
                            <span>{selectedOption.label}</span>
                        ) : (
                            <span>{placeholder}</span>
                        )}
                        <ChevronDownIcon className='ml-auto size-4' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='w-[200px] p-0' align='start'>
                    <OptionList
                        placeholder={placeholder}
                        options={options}
                        // setOpen={setOpen}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant='outline' className='flex items-center'>
                    {icon}
                    {selectedOption ? (
                        <span>{selectedOption.label}</span>
                    ) : (
                        <span>{placeholder}</span>
                    )}
                    <ChevronDownIcon className='ml-2 size-4' />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mt-4 border-t'>
                    <OptionList
                        placeholder={placeholder}
                        options={options}
                        // setOpen={setOpen}
                        selectedOption={selectedOption}
                        setSelectedOption={setSelectedOption}
                    />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

function OptionList({
    options,
    // setOpen,
    selectedOption,
    setSelectedOption,
    placeholder,
}: {
    placeholder: string;
    options: Array<Option>;
    // setOpen: (open: boolean) => void;
    selectedOption: Option | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<Option | null>>;
}) {
    return (
        <Command>
            <CommandInput placeholder={`Filter ${placeholder}...`} />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    <CommandItem
                        value='clear_filter'
                        onSelect={() => {
                            setSelectedOption(null);
                        }}
                    >
                        <span className='ml-6'>Clear Filter</span>
                    </CommandItem>
                </CommandGroup>
                <CommandGroup heading={placeholder}>
                    {options.map((option) => (
                        <CommandItem
                            key={option.value}
                            value={option.value}
                            onSelect={(value) => {
                                setSelectedOption((prev) => {
                                    if (prev?.value === value) return null;

                                    return (
                                        options.find(
                                            (priority) =>
                                                priority.value === value,
                                        ) ?? null
                                    );
                                });
                            }}
                        >
                            <Check
                                className={cn(
                                    'mr-2 h-4 w-4',
                                    selectedOption?.value === option.value
                                        ? 'opacity-100'
                                        : 'opacity-0',
                                )}
                            />
                            {option.label}
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
