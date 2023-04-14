import styles from './dropdown.module.css';

const Dropdown = ({ label, value, options, onChange }) => {
   return (
   <div className={styles.dropdown}>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
         {options.map((option) => (
         <option value={option.value}>{option.label}</option>
         ))}
      </select>
   </div>
   );
}

export default Dropdown;