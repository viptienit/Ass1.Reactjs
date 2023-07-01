//lấy dữ liệu css
import styles from "./DetailItem.module.css";

const DetailItem = (props) => {
  // tạo khối
  return (
    <div className={styles.boxDetail}>
      <div className={styles.container}>
        <h2>{props.item.name}</h2>
        <p className={styles.text}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={"w-6 h-6 " + styles.icon}
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          {props.item.address}
        </p>
        <h3 className={styles.header}>{props.item.distance}</h3>
        <p className={styles.price}>{props.item.price}</p>
        <div className={styles.imgs}>
          {props.item.photos.map((mov) => (
            <img className={styles.img} key={mov} src={mov} />
          ))}
        </div>
        <div className={styles.boxTitle}>
          <div style={{ width: "67%" }}>
            <h2>{props.item.title}</h2>
            <p className={styles.text}>{props.item.description}</p>
          </div>
          <div className={styles.perfect}>
            <h3 className={styles.titlePerfect}>Perfect for a 9-night stay!</h3>
            <p className={styles.textPerfect}>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <p style={{ fontSize: "22px" }}>
              <strong style={{ padding: "10px 10px" }}>$945</strong>(9 nights)
            </p>
            <button className={styles.btnPerfect}>Reseve of Book Now!</button>
          </div>
        </div>
        <button
          onClick={() => window.location.replace("/search")}
          className={styles.btnApa}
        >
          Reseve of Book Now!
        </button>
      </div>
    </div>
  );
};
// xuất dữ liệu
export default DetailItem;
