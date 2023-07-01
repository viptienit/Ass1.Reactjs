// llấy dữ liệu css
import styles from "./Type.module.css";
// lưu dữ liệu vào biến
const type = [
  {
    id: "t1",
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  { id: "t2", name: "Apartments", count: 2331, image: "./images/type_2.jpg" },
  { id: "t3", name: "Resorts", count: 2331, image: "./images/type_3.jpg" },
  { id: "t4", name: "Villas", count: 2331, image: "./images/type_4.jpg" },
  { id: "t5", name: "Cabins", count: 2331, image: "./images/type_5.jpg" },
];
const Type = () => {
  return (
    <div className={styles.type}>
      <div style={{ width: "1300px " }}>
        {/** inline style */}
        <h2 className={styles.header}>Browse by property type</h2>
        <div className={styles.items}>
          {type.map(
            (
              mov // lặp để tạo các component con
            ) => (
              <div key={mov.id} className={styles.item}>
                <img className={styles.img} src={mov.image} />
                <h3 className={styles.text}>{mov.name}</h3>
                <p className={styles.text}>{mov.count} hotels</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
// suất dữ liẹue
export default Type;
