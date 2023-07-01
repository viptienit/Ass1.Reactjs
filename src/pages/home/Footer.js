// lấy dữ liệu css
import styles from "./Footer.module.css";

const footer = [
  {
    id: "p1",
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    id: "p2",
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    id: "p3",
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    id: "p4",
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    id: "p5",
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

const Footer = () => {
  return (
    // tạo 5 div mỗi điv lấy thông tin từ biến
    <div className={styles.boxFooter}>
      <div className={styles.footer} style={{ width: "1300px " }}>
        {footer.map((mov) => (
          <div key={mov.id}>
            {mov.col_values.map((mov) => (
              <p className={styles.text} key={mov}>
                {mov}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
// xuất dữ liệu
export default Footer;
