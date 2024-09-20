'use client'
import React, {useEffect, useState} from 'react';
import styles from '../home/home.module.css';
import CompanySelectedComponent from './CompanySelectedComponent';

const API_COMPANY_URL = `https://financialmodelingprep.com/api/v3/search?apikey=${process.env.NEXT_PUBLIC_API_KEY}&limit=10&query=`;
const API_TICKER_URL = `https://financialmodelingprep.com/api/v3/search-ticker?apikey=${process.env.NEXT_PUBLIC_API_KEY}&limit=10&query=`;

export default function SearchComponent() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const fetchSearch = async () => {
      try {
        const companyResponse = await fetch(`${API_COMPANY_URL}${search}`);
        const tickerResponse = await fetch(`${API_TICKER_URL}${search}`);
  
        if (!companyResponse.ok || !tickerResponse.ok) {
          throw new Error('Failed to fetch data');
        }
  
        const companyData = await companyResponse.json();
        const tickerData = await tickerResponse.json();
  
        if (!Array.isArray(companyData) || !Array.isArray(tickerData)) {
          throw new Error('Unexpected data format');
        }
  
        setData([...companyData, ...tickerData]);
      } catch (err) {
        console.error(err);
        setError((err as Error).message);
      }
    }
    useEffect(() => {
      if(search.length > 0) fetchSearch();
    },[search]);
    /**
     * currency
      : 
      "USD"
      exchangeShortName
      : 
      "NYSE"
      name
      : 
      "Agilent Technologies, Inc."
      stockExchange
      : 
      "New York Stock Exchange"
      symbol
      : 
      "A"
     */
    
    return (<div className={styles.actionContainer} key="action">
        <div className={styles.action}>
          <div className={styles.actionHeader}>
            5,000+ companies with data and insight for you
          </div>
          <span className={styles.descriptionAction}>
            Find the company you are interested in.<br />
            This will help us customize your experience.
          </span>
          <input 
            onChange={(e) => setSearch(e.target.value)}
            type='text' 
            className={styles.actionInput} 
            placeholder='Search company or ticket' />
          <div className={styles.itemsContainer}>
            <div className={styles.items}>
              <CompanySelectedComponent abbr='AAPL' name='Apple' />
              <CompanySelectedComponent abbr='AMZN' name='Amazon' />
              <CompanySelectedComponent abbr='GOOGL' name='Alphabet' />
            </div>
            <div className={styles.actionableContainer}>
              <a href="#" >0 Companies saved</a>
              <a href="#" >Refresh companies</a>
            </div>
          </div>
        </div>
        <div className={styles.infoImage}>
          <img src="/aiPicture.svg" alt="AI Picture" />
        </div>
        
      </div>);
}