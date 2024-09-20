import React from "react";
import { classNames } from "../../utils/functions";

type Item = {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
};
type Props = {
  items: Item[];
  handleSelectCompany: (symbol: string) => void;
};
export default function ListResultComponent({ items, handleSelectCompany }: Props) {
  const itemRender = (item: Item) => (
    <div
        onClick={() => handleSelectCompany(item.symbol)}
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
      {items.map((item: Item) => itemRender(item))}
    </div>
  );
}
