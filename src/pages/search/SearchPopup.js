//lấy dữ liệu css

import styles from "./SearchPopup.module.css";

const SearchPopup = () => {
  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Search</h2>
      <label className={styles.text}>Destination</label>
      <input className={styles.inputSearch} />
      <label className={styles.text}>Check-in Date</label>
      <input
        className={styles.inputSearch}
        placeholder="06/24/2022 to 06/24/2022"
      />
      <label className={styles.text}>Options</label>
      <div className={styles.formOpsion}>
        <label className={styles.textOpsion}>Min price per night</label>
        <input className={styles.inputOpsion} />
        <label className={styles.textOpsion}>Max price per night</label>
        <input className={styles.inputOpsion} />
        <label className={styles.textOpsion}>Adult</label>
        <input className={styles.inputOpsion} />
        <label className={styles.textOpsion}>Children</label>
        <input className={styles.inputOpsion} />
        <label className={styles.textOpsion}>Room</label>
        <input className={styles.inputOpsion} />
      </div>
      <button className={styles.btnSearch}>Search</button>
    </div>
  );
};
// xuất dữ liệu
export default SearchPopup;
