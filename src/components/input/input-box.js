import styles from './input-box.module.css';

const InputBox = ({ label, value, onChange }) => {
    return (
        <div className={styles.inputbox}>
            <label>{label}</label>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
};
  
export default InputBox;