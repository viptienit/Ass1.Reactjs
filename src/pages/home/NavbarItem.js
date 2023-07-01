// lấy dữ liệu
import styles from "./NavbarItem.module.css";
// lưu dữ liệu vbào biéne
const navbars = [
  { id: "a1", type: "Stays", icon: "fa-bed", active: true },
  { id: "a2", type: "Flights", icon: "fa-plane", active: false },
  {
    id: "a3",
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    id: "a4",
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    id: "a5",
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];

function NavbarItem() {
  return (
    <div className={styles.navbarItem}>
      <div style={{ width: "1300px " }}>
        <div className={styles.headNavbar}>
          <h1 className={styles.titleNavbar}>Booking Website</h1>
          <div>
            <button className={styles.btnLogin}>Register</button>
            <button className={styles.btnLogin}>Login</button>
          </div>
        </div>
        <div className={styles.linkNavbar}>
          {navbars.map((mov) => (
            <span
              className={
                (mov.active ? styles.active : " ") + " " + styles.links
              }
              key={mov.id}
            >
              <i className={mov.icon + " fa " + styles.icon}></i>
              <a className={styles.link} href="#">
                {mov.type}
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
// suất dữ liệu
export default NavbarItem;
