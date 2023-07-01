// lấy dữ liệu css
import styles from "./Form.module.css";
const Form = () => {
  const SubmitEmail = (event) => {
    event.preventDefault(); // ngăn không cho gửi dữ liêụ đến server
  };
  return (
    <div className={styles.form}>
      <div className={styles.allForm}>
        <h1 className={styles.title}>Save time, save money!</h1>
        <p className={styles.text}>
          Sign up and we'll send the best deals to you
        </p>
        <form onSubmit={SubmitEmail}>
          <input
            className={styles.input}
            type="email"
            placeholder="Your Email"
          />
          <button className={styles.btn} type="submit">
            Subcribe
          </button>
        </form>
      </div>
    </div>
  );
};
// xuất dữ liệu
export default Form;
