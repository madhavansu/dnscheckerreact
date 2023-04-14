import styles from './checkbox.module.css';

const Checkbox = ({ label, value, onChange }) => {
    return (
        <div className={styles.checkbox}>
            <span>&nbsp;</span>
            <label class={styles.container}>{label}
                <input type="checkbox" checked={value} onChange={onChange} />
                <span class={styles.checkmark}></span>
            </label>
        </div>
    );
}

export default Checkbox;