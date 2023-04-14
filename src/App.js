import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import DNSList from './dns-lists/dns-list';
import DNSSearch from './dns-search/dns-search';
import Maps from './maps/Maps';
import { AiOutlineLoading } from "react-icons/ai";

function App() {
  
  const [dnsData, setDnsData] = useState([]);
  const [progress, setProgress] = useState(false);

  // useEffect(() => {
  //   fetch('https://mocki.io/v1/2c852f38-ff52-4806-97f7-95895ad786a7')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       return response.json()
  //     })
  //     .then((data) => {
  //         console.log(data);
  //         setDnsData(data);
  //     })
  //     .catch((err) => {
  //         console.log(err.message);
  //     });
  // }, []);

  const fetchDnsData = async ({ domain, type, match, advanced }) => {
    setProgress(true);
    const queryParams = "domain=" + domain + "&type=" + type + "&expectedValue=" + match + "&advanced=" + advanced;
    try {
      const response = await fetch('https://mocki.io/v1/2c852f38-ff52-4806-97f7-95895ad786a7?'+queryParams);
      const data = await response.json();
      if (response.status === 200) {
        setDnsData(data);
      } else {
        console.log("API fetch error")
      }
      setProgress(false);
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>DNS Checker</h1>
      </header>
      <section className={styles.appSection}>
        <div className={styles.inputs}>
          <DNSSearch fetchDnsData={fetchDnsData}></DNSSearch>
        </div>
        <div className={styles.results}>
          <div className={styles.sectionLeft}>
            <DNSList dataList={dnsData}></DNSList>
          </div>
          <div className={styles.sectionRight}>
            <Maps></Maps>
          </div>
        </div>
      </section>
      {
        progress ? 
            (<div className={styles.progress}>
            <div className={styles.progressText}><AiOutlineLoading color="white" fontSize="3em" ></AiOutlineLoading></div>
          </div>) : null
      }
      
    </div>
  );
}

export default App;
