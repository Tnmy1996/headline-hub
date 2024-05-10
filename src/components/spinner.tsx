interface LoadingSpinnerProps {
    size?: 'lg' | 'md' | 'sm';
    className?: string;
}

export const Spinner: React.FC<LoadingSpinnerProps> = ({
    size = 'md',
    className = '',
}) => {
    const sizeClasses = {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-14 w-14',
    };

    return (
        <div
            className={`animate-spin rounded-full border-2 border-black border-t-transparent ${sizeClasses[size]} ${className}`}
        />
    );
};

export default Spinner;
