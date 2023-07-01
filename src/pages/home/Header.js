// lấy dữ liệu css

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div style={{ width: "1300px " }}>
        <h1 className={styles.titleHeader}>
          A lifetime of discounts? It's Genius.
        </h1>
        <p className={styles.content}>
          Get rewarded for your travels - unlock instant savingd of 10% or more
          with a free account
        </p>
        <button className={styles.btnSignin}>Sign in / Register</button>
        <div className={styles.form}>
          <form className={styles.inputForm}>
            <label className={styles.iconInput}>
              <i className="fa fa-bed"></i>
            </label>
            <input
              placeholder="Where are you going?"
              className={styles.input}
            />
            <label className={styles.iconInput}>
              <i className="fa fa-calendar"></i>
            </label>
            <input
              className={styles.input}
              placeholder="06/24/2022 to 06/24/2022"
            />
            <label className={styles.iconInput}>
              <i className="fa fa-female"></i>
            </label>
            <input
              className={styles.input}
              placeholder="1 adult・0 children・1 room"
            />
            <button
              onClick={(event) => {
                event.preventDefault(); // ngăn không cho gửi dữ liệu
                window.location.replace("/search"); // chuyển đến trang seảch
              }}
              className={styles.btnSignin}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
// xuất dữ liệu
export default Header;
