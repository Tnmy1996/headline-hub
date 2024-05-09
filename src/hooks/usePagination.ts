import { useMemo } from 'react';

export const DOTS = 'ellipsis';

const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};

type UsePagination = {
    pageSize: number;
    totalCount: number;
    currentPage: number;
    siblingCount?: number;
};

// TODO complete this function to refine the behavior
/* function calculateTotalPagingNodes(
    siblingCount: number,
    currentPage: number,
    totalPageCount: number,
) {
    const lastPageNode = 1;
    const firstPageNode = 1;
    const currentPageNode = 1;

    // siblingCount + (firstPageNode|CurrentPageNode)
    if (currentPage == 1) return siblingCount + firstPageNode;

    // siblingCount + (lastPageNode|CurrentPageNode)
    if (currentPage == totalPageCount) return siblingCount + lastPageNode;

    return siblingCount + 5;
}
 */
type PaginationRange = Array<number | typeof DOTS>;

export const usePagination = ({
    totalCount,
    pageSize,
    siblingCount = 1,
    currentPage,
}: UsePagination): {
    paginationRange: PaginationRange;
    totalPageCount: number;
} => {
    return useMemo(() => {
        let paginationRange: PaginationRange = [];
        const totalPageCount = Math.ceil(totalCount / pageSize);

        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5;

        /*
          If the number of pages is less than the page numbers we want to show
          in our paginationComponent, we return the range [1..totalPageCount]
        */
        if (totalPageNumbers >= totalPageCount) {
            paginationRange = range(1, totalPageCount) as PaginationRange;
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);

        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount,
        );

        /*
          We do not want to show dots if there is only one position left
          after/before the left/right page count as that would lead to a change
          if our Pagination component size which we do not want
        */
        const shouldShowLeftDots = leftSiblingIndex > 2;

        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;

            const rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount,
            );

            const x = rightRange[0] - 1 === 2 ? 2 : DOTS;

            paginationRange = [firstPageIndex, x, ...rightRange];
        }

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);

            const x =
                (leftRange.at(-1) ?? 0) + 1 === totalPageCount - 1
                    ? totalPageCount - 1
                    : DOTS;

            paginationRange = [...leftRange, x, totalPageCount];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            paginationRange = [
                firstPageIndex,
                DOTS,
                ...middleRange,
                DOTS,
                lastPageIndex,
            ];
        }

        return { paginationRange, totalPageCount };
    }, [totalCount, pageSize, siblingCount, currentPage]);
};
