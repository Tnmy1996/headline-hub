import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { usePagination } from '@/hooks/usePagination';

export type PaginationProps = {
    totalCount: number;
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;

    pageSize?: number;
    className?: string;
    siblingCount?: number;
};

export function PaginationBar({
    className,
    pageSize = 20,
    totalCount,
    currentPage,
    siblingCount = 1,
    setCurrentPage,
}: PaginationProps) {
    const { paginationRange, totalPageCount } = usePagination({
        pageSize,
        totalCount,
        currentPage,
        siblingCount,
    });

    return (
        <Pagination className={className}>
            <PaginationContent>
                <PaginationItem className='cursor-pointer'>
                    <PaginationPrevious
                        aria-disabled={currentPage === totalPageCount}
                        onClick={() => {
                            currentPage > 1 && setCurrentPage((p) => p - 1);
                        }}
                    />
                </PaginationItem>
                {paginationRange.map((d, idx) => {
                    if (d === 'ellipsis') {
                        return (
                            <PaginationEllipsis
                                key={`${d}-${idx.toString()}`}
                            />
                        );
                    }
                    return (
                        <PaginationItem className='cursor-pointer' key={d}>
                            <PaginationLink
                                onClick={() => {
                                    setCurrentPage(d);
                                }}
                                isActive={d === currentPage}
                            >
                                {d}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                <PaginationItem className='cursor-pointer'>
                    <PaginationNext
                        aria-disabled={currentPage === totalPageCount}
                        onClick={() => {
                            currentPage < totalPageCount &&
                                setCurrentPage((p) => p + 1);
                        }}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
