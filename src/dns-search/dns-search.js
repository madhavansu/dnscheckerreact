import * as React from 'react'; 
import Dropdown from '../components/dropdown/dropdown';
import Checkbox from '../components/checkbox/checkbox';
import InputBox from '../components/input/input-box';
import styles from './dns-search.module.css';

const DNSSearch = ({fetchDnsData}) => {

    const options = [
        { label: 'A', value: 'a' },
        { label: 'CNAME', value: 'cname' },
        { label: 'NS', value: 'ns' },
        { label: 'PTR', value: 'ptr' },
        { label: 'MX', value: 'mx' },
        { label: 'TXT', value: 'txt' }
    ];
    
    
    const [type, setType] = React.useState("ns");
    const [advanced, setAdvanced] = React.useState(false);
    const [domain, setDomain] = React.useState("");
    const [match, setMatch] = React.useState("");

    const handleAdvanced = () => {
        setAdvanced(!advanced);
    };
    const handleType = (event) => {
        setType(event.target.value);
    };
    const handleDomain = (event) => {
        setDomain(event.target.value);
    }
    const handleMatch = (event) => {
        setMatch(event.target.value);
    }

    return (
        <div className={styles.formFields}>
            <>
                <InputBox label="Domain" value={domain} onChange={handleDomain}></InputBox>
            </>
            <>
                <Dropdown label="Type" options={options} value={type} onChange={handleType}></Dropdown>
            </>
            <>
                <InputBox label="Exact Match" value={match} onChange={handleMatch}></InputBox>
            </>
            <>
                <Checkbox label="Advanced" value={advanced} onChange={handleAdvanced}></Checkbox>
            </>
            <>
                <button className={styles.button} onClick={()=>fetchDnsData({domain, type, match, advanced})}>Search</button>
            </>
        </div>
    );
}

export default DNSSearch;
