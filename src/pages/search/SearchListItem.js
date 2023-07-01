// lấy dữ liệu css

import styles from "./SearchList.module.css";

function SearchListItem(props) {
  const Pagedetail = (event) => {
    event.preventDefault(); // ngăn không gửi dữ liệu đến server

    window.location.replace("/detail"); // chuyển sang trang Detail
  };
  return (
    <div className={styles.searchListItem}>
      <img className={styles.img} src={props.item.image_url} />

      <div className={styles.content}>
        <h2 className={styles.title}>{props.item.name}</h2>
        <p className={styles.text}>{props.item.distance} from center</p>
        <p>
          <span className={styles.free}>{props.item.tag}</span>
        </p>

        <h3 className={styles.titleContent}>{props.item.description}</h3>
        <p className={styles.text}>{props.item.type}</p>
        {props.item.free_cancel ? ( // nếu có cancel thí mới hiện div
          <div>
            <h3 className={styles.titleCancel}>Free cancellation</h3>
            <p className={styles.textCancel}>
              You can cancel later, so lock in this great price today!
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.exc}>
        <h3 style={{ fontWeight: "500" }}>{props.item.rate_text}</h3>
        <span className={styles.span}>{props.item.rate}</span>
      </div>
      <div className={styles.see}>
        <h2 style={{ fontWeight: "400" }}>${props.item.price}</h2>
        <p className={styles.textSee}>Includes taxes and fees</p>
        <button onClick={Pagedetail} className={styles.btnSee}>
          See availability
        </button>
      </div>
    </div>
  );
}
// xuất dữ liệu
export default SearchListItem;
