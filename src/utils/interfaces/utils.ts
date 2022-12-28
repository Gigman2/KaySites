export interface PageData {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
}

export interface ISearchResponsePayload<T> {
  data?: T[];
  pageData?: PageData;
  pagerofItems?: T[];
  pageofItems?: T[];
  pager?: PageData;
}