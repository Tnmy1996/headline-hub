import { Input } from './ui/input';

interface SearchBarProps {
    mobile?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ mobile = false }) => {
    return (
        <div className={mobile ? 'mb-4' : ''}>
            <Input
                type='search'
                placeholder='Search'
                className={`w-full font-black ${mobile ? 'text-base' : 'text-sm'}`}
            />
        </div>
    );
};

export default SearchBar;
