import React, { ReactElement } from 'react';
import { Box, ComponentWithAs, Flex, IconProps } from '@chakra-ui/react';
import { IconType } from 'react-icons/lib';
import TablePagination from './TablePagination';
import TableWrapper from './TableWrapper';
import TableContent from './TableContent';
import { ISearchResponsePayload } from '../../../utils/interfaces/utils';

export type ITableColumns = {
  name: string;
  id: string | number;
  selector?: string | 'numbering' | ((x: unknown, l: number) => ReactElement);
  Selector?: React.FC<{ index: number } & Record<string, unknown>> | undefined;
}[];
const Table = ({
  data = [],
  columns,
  setPage,
  pageData,
  pagination = true,
  title,
  onClick,
  loading,
  onLoadingData,
  isClickable,
  noPagination = false,
  showEmptyState = true,
  onSingleContentClick,
  icon,
}: {
  pagination?: boolean;
  icon?: ComponentWithAs<'svg', IconProps> | IconType;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  setPage?: (d?: unknown) => void;
  pageData?: ISearchResponsePayload<unknown>['pageData'];
  onLoadingData?: boolean;
  onSingleContentClick?: (i: unknown) => void;
  loading?: boolean;
  isClickable?: boolean;
  showEmptyState?: boolean;
  noPagination?: boolean;
  data: unknown[];
  columns: ITableColumns;
}) => {
  const currentData = data || [];
  return (
    <Flex direction="column" w="100%" h="100%" position="relative">
       <TableWrapper
          overflowX="auto"
          data={currentData || []}
          tableHeads={columns}
          loading={loading}
          onLoadingData={onLoadingData}
        >
          <Box w="100%" as="tbody">
            {(currentData || [])?.map((item, i) => (
              <TableContent
                index={
                  pageData
                    ? ((pageData?.currentPage || 1) - 1) *
                        (pageData?.pageSize || 1) +
                      i +
                      1
                    : i + 1
                }
                isEven={i%2 === 0}
                key={(item as { _id: string })?._id}
                renderer={columns}
                item={item}
                onClick={onSingleContentClick}
                isClickable={isClickable}
              />
            ))}
          </Box>
        </TableWrapper>

      {!noPagination && pagination && currentData?.length > 0 ? (
        <TablePagination
          setCurrentPage={setPage as (d?: unknown) => void}
          pageData={pageData}
        />
      ) : null}
    </Flex>
  );
};

export default Table;
