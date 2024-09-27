import React from "react";
import { classNames } from "../../utils/functions";
import { LineWave } from "react-loader-spinner";
import { v4 as uuid } from 'uuid'

type Item = {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
};
type Props = {
  items: Item[];
  handleSelectCompany: (item: Item) => void;
  isLoading: boolean;
  handleFocusOut: () => void;
};
export default function ListResultComponent({
  items,
  handleSelectCompany,
  isLoading,
  handleFocusOut
}: Props) {
  const itemRender = (item: Item) => (
    <div
      key={`option-${uuid()}`}
      onClick={() => {
        handleFocusOut();
        handleSelectCompany(item)
      }}
      className={classNames(
        "flex flex-row w-full p-1 companyDropdown cursor-pointer mb-1"
      )}
    >
      <span className={classNames("font-bold text-black mr-1")}>
        {item.symbol}
      </span>
      {item.name}
    </div>
  );
  return (
    <div
      className={classNames(
        "shadow absolute top-12 left-0 w-full p-1 flex flex-col listResultContainer"
      )}
    >
      {isLoading && (
        <LineWave
          visible={true}
          height="100"
          width="100"
          color="#6869ac"
          ariaLabel="line-wave-loading"
          wrapperStyle={{}}
          wrapperClass=""
          firstLineColor=""
          middleLineColor=""
          lastLineColor=""
        />
      )}
      {!isLoading && items.map((item: Item) => itemRender(item))}
    </div>
  );
}
