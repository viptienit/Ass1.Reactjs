// lấy dữ liệu css
import styles from "./City.module.css";

const city = [
  {
    id: "c1",
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    id: "c2",
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    id: "c3",
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];
const City = () => {
  return (
    <div className={styles.city}>
      <div className={styles.cityItems} style={{ width: "1300px " }}>
        {city.map((mov) => (
          <div key={mov.id} className={styles.cityItem}>
            <img className={styles.imgCity} src={mov.image} />
            <div className={styles.textItem}>
              <h2>{mov.name}</h2>
              <p>{mov.subText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
//xuất dữ liệu
export default City;
