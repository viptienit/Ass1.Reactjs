// lấy dữ liệu css
import styles from "./Hotel.module.css";

const hotel = [
  {
    id: "h1",
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },

  {
    id: "h2",
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },

  {
    id: "h3",
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },

  {
    id: "h4",
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const Hotel = () => {
  return (
    // lấy dữ liệu từ biéne
    <div className={styles.hotel}>
      <div style={{ width: "1300px " }}>
        <h2 className={styles.header}>Homes guests love</h2>
        <div className={styles.items}>
          {hotel.map((mov) => (
            <div key={mov.id}>
              <img className={styles.img} src={mov.image_url} />
              <br />
              <a className={styles.link} href="#">
                {mov.name}
              </a>
              <p className={styles.text}>{mov.city}</p>
              <h3 className={styles.text}>Strating from ${mov.price}</h3>
              <p className={styles.text}>
                <span className={styles.rate}>{mov.rate}</span> {mov.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// xuất dữ liệu
export default Hotel;
