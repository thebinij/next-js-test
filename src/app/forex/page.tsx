import ReactCountryFlag from 'react-country-flag';
import axios from "axios"
import { API_URL } from "@/utils/constants";
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
const Forex = async () => {
  const response = await axios.post(API_URL + '/transaction-manager/v1/public/foreign-exchanges/search', {})
  const data = response?.data?.data?.data;

  const col: ColumnsType<DataType> = [
    {
      title: 'Country',
      dataIndex: 'country',
      align: 'left',
      fixed: true,
    },
    {
      title: 'Exchange Rates',
      dataIndex: 'exchange_rate',
      align: 'center',
      fixed: true,
    }
  ]

  const dataSource = data?.map((index:number,item: any) => {
    return {
      country: (
        <span style={{ fontSize: '10px' }}>
          <ReactCountryFlag
            countryCode={item?.ISO2}
            svg
            className="mr-2"
            style={{ height: '1.8em', width: '1.8em' }}
          />
          {item?.country} {`(${item?.currency})`}
        </span>
      ),
      exchange_rate: <span style={{ fontSize: '10px' }}> {item?.exchange_rate}</span>,
    };
  });

  let tableProps: any = {
    columns: col,
    pagination: false,
    dataSource: dataSource,
    style: {
      fontSize: '16px',
    },
    // scroll: { y: '459px' },
  };

  return (
    <div className="exchange-rate">
      <Table className="table-striped-rows" {...tableProps} />
    </div>
  );
}

export default Forex;