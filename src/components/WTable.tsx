'use client'

import React from 'react';
import classNames from 'classnames';
import { Col, Table } from 'antd';

const WTable = (props:any) => {
  const {
    className,
    scroll = { x: 'max-content' },
    rowClassName,
    bordered = true,
    columns,
    dataSource,
    rowKey,
    pagination,
    handleTableChange,
    customBgColor,
    extraTitleContent,
    ...rest
  } = props;

  const col = columns?.filter((item:any) => !['is_total'].includes(item?.title));

  const getRowKey = (record:any) => {
    if (typeof rowKey === 'string') {
      return record?.[rowKey];
    } else if (typeof rowKey === 'function') {
      rowKey(record);
    }
  };
  let paginationObj = {
    total: pagination?.total,
    pageSize: pagination?.pageSize,
    showTotal: (total:any, range:any) => `Showing ${range[0]}-${range[1]} of ${total}`,
    showSizeChanger: true,
    current: pagination?.current,
    pageSizeOptions: [5, 10, 20, 50, 100],
  };

  return (
    <>
      <Table
        className={classNames('table-root', className)}
        rowKey={getRowKey}
        rowClassName={(record:any, index:any) => {
          let isTotalRow = false;
          if (record?.is_total) {
            isTotalRow = true;
          }

          if (typeof rowClassName === 'function' && typeof rowClassName() === 'string') {
            return rowClassName();
          }

          return index % 2 === 0
            ? `${customBgColor && isTotalRow ? 'total-row' : 'table-default-row table-row-light'}`
            : `${customBgColor && isTotalRow ? 'total-row' : 'table-default-row table-row-dark'}`;
        }}
        columns={col.filter((d:any) => d?.isVisible !== false)}
        scroll={scroll}
        dataSource={dataSource instanceof Array ? dataSource : []}
        pagination={pagination ? {
          position: ['bottomRight', 'topRight'],
          ...(pagination ? paginationObj : false)
        } : false}
        bordered={bordered}
        onChange={handleTableChange}
        {...rest}
      />
    </>
  );
};

export default WTable;
