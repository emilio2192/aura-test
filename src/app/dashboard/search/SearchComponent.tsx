"use client";
import React, { useEffect, useState } from "react";
import styles from "../home/home.module.css";
import CompanySelectedComponent from "./CompanySelectedComponent";
import { classNames } from "../../utils/functions";
import ListResultComponent from "./ListResultComponent";
const API_COMPANY_URL = `https://financialmodelingprep.com/api/v3/search?apikey=${process.env.NEXT_PUBLIC_API_KEY}&limit=10&query=`;
const API_TICKER_URL = `https://financialmodelingprep.com/api/v3/search-ticker?apikey=${process.env.NEXT_PUBLIC_API_KEY}&limit=10&query=`;
type ItemResponse = {
  symbol: string;
  name: string;
  currency: string;
  stockExchange: string;
  exchangeShortName: string;
};
export default function SearchComponent() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<ItemResponse[]>([]);
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [companiesSelected, setCompaniesSelected] = useState<ItemResponse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchSearch = async () => {
    try {
      setIsLoading(true);
      const companyResponse = await fetch(`${API_COMPANY_URL}${search}`);
      const tickerResponse = await fetch(`${API_TICKER_URL}${search}`);

      if (!companyResponse.ok || !tickerResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      const companyData = await companyResponse.json();
      const tickerData = await tickerResponse.json();

      if (!Array.isArray(companyData) || !Array.isArray(tickerData)) {
        throw new Error("Unexpected data format");
      }

      setData([...companyData, ...tickerData]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (search.length > 0) {
      fetchSearch();
    }else {
      setData([]);
    }
  }, [search]);

  const handleSelectCompany = (item: ItemResponse) => {
    setCompaniesSelected(prevSelectedCompanies => {
      if (!prevSelectedCompanies.some((currentItem) => currentItem.symbol === item.symbol && currentItem.name === item.name)) {
        return [...prevSelectedCompanies, item];
      }
      return prevSelectedCompanies;
    });
  };

  const handleFocusOut = () => {
    setInputFocus(false);
  }

  return (
    <div className={styles.actionContainer} key="action">
      <div className={styles.action}>
        <div className={styles.actionHeader}>
          5,000+ companies with data and insight for you
        </div>
        <span className={styles.descriptionAction}>
          Find the company you are interested in.
          <br />
          This will help us customize your experience.
        </span>
        <div className={classNames("w-full relative")}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setInputFocus(true)}
            onBlur={() => {
              
              if(search.length === 0){
                setData([]);
              }
            }}
            value={search}
            type="text"
            className={styles.actionInput}
            placeholder="Search company or ticket"
          />
          {((data && data.length) > 0 || isLoading) && inputFocus && (
            <ListResultComponent
              items={data}
              handleSelectCompany={handleSelectCompany}
              handleFocusOut={handleFocusOut}
              isLoading={isLoading}
            />
          )}
        </div>
        <div className={styles.itemsContainer}>
          <div className={styles.items}>
            {companiesSelected.map(item => <CompanySelectedComponent key={`item=${item.symbol}`} abbr={item.symbol} name={item.name} /> )}
          </div>
          <div className={styles.actionableContainer}>
            <a href="#">{companiesSelected.length} Companies saved</a>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCompaniesSelected([]);
                setSearch('');
              }}
            >
              Refresh companies
            </a>
          </div>
        </div>
      </div>
      <div className={styles.infoImage}>
        <img src="/aiPicture.svg" alt="AI Picture" />
      </div>
    </div>
  );
}
