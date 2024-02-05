import { httpPost } from "@/utils/httpUtils";
import ReactCountryFlag from "react-country-flag";

async function getData() {
  const result = await httpPost(
    "/transaction-manager/v1/public/foreign-exchanges/search",
    {}
  );

  return result?.data?.data;
}

const Forex = async () => {
  const data = await getData();

  const renderTableRows = () => {
    return data?.map((item: any) => (
      <tr key={item?.country + item?.currency} style={{ height: "3em" }}>
        <td style={{ textAlign: "left" }}>
          <span>
            <ReactCountryFlag
              countryCode={item?.ISO2}
              svg
              className="m-2"
              style={{ height: "1.8em", width: "1.8em" }}
            />
            {item?.country} ({item?.currency})
          </span>
        </td>
        <td style={{ textAlign: "center" }}>{item?.exchange_rate}</td>
      </tr>
    ));
  };

  return (
    <table className="w-full table-striped-rows ">
      <thead className="text-white h-[3em]">
        <tr className="bg-[#0054a0] ">
          <th>Country</th>
          <th>Exchange Rates</th>
        </tr>
      </thead>
      <tbody>{renderTableRows()}</tbody>
    </table>
  );
};

export default Forex;
