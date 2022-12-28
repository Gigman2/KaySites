import React, { useEffect, useState } from 'react';
import { usePagination as useRealPagination } from 'hooks/usePagination';
import { ISearchResponsePayload } from '../../../../utils/interfaces/utils';

function usePagination({
  pageData,
  setCurrentPage,
}: {
  pageData: ISearchResponsePayload<unknown>['pageData'];
  setCurrentPage: (d?: unknown) => void;
}) {
  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const [selectedItem, setSelectedItem] = React.useState(1);
  useEffect(() => {
    if (pageData?.totalItems) {
      setTotalItems(pageData?.totalItems);
    }
  }, [pageData?.totalItems]);
  useEffect(() => {
    if (pageData?.pages) {
      setTotalPages(pageData?.pages?.length);
    }
  }, [pageData?.pages]);

  const handleClick = (event: unknown) => {
    setCurrentPage(event);
  };

  const paginationRange = useRealPagination({
    totalCount: totalItems,
    pageSize: 15,
    siblingCount: 1,
    currentPage: selectedItem,
  });
  // If there are less than 2 times in pagination range we shall not render the component

  const prev = (number: number) => {
    if (number - 1 < 1) {
      return undefined;
    }
    setCurrentPage(() => number - 1);
    setSelectedItem(number - 1);
  };
  const next = (number: number) => {
    if (number + 1 > totalPages) {
      return undefined;
    }
    setCurrentPage(() => number + 1);
    setSelectedItem(number + 1);
  };
  const lastPage = paginationRange?.[paginationRange.length - 1];
  return {
    totalPages,
    lastPage,
    prev,
    next,
    handleClick,
    selectedItem,
    setSelectedItem,
    paginationRange,
    isDirty: pageData?.currentPage === 0 || (paginationRange?.length || 0) < 2,
  };
}

export default usePagination;
