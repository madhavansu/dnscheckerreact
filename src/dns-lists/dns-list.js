import styles from './dns-list.module.css';
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";

const DNSList = ({ dataList }) => {

    // const dataList = [
    //     {
    //         id: 1,
    //         location: "India",
    //         provider: "Airtel",
    //         ips: "102.101.111.11",
    //         status: "active"
    //     }
    // ];

    const listItems = dataList.map((data, index) => {
        return (
            <li key={index}>
                <div className={styles.title}>{data.location}</div>
                <div className={styles.contentSection}>
                    <div>
                        <span className={styles.content}>Goldman Sach Inc</span> {/** Change Google with data.content (from response) */}
                    </div>
                    <div>
                        <span className={styles.ipAddress}>{data.ips}</span>
                        <span className={styles.statusIcon}>
                            {
                                data.status !== 'active' ? <RxCrossCircled color="red"></RxCrossCircled>
                                : <RxCheckCircled color="green"></RxCheckCircled>
                            }
                        </span>
                    </div>
                </div>
            </li>
        );
    });

    return (
            <>
                <h1>DNS CHECK</h1>
                <br/>
                <ul className={styles.dnsul}>
                    {listItems}
                </ul>
            </>
    )
}

export default DNSList;