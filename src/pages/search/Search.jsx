//lấy dữ liệu các component

import SearchPopup from "./SearchPopup";
import NavbarItem from "../home/NavbarItem";
import SearchList from "./SearchList";
import styles from "./Search.module.css";
import Form from "../home/Form";
import Footer from "../home/Footer";
const Search = () => {
  // phân chia các component
  return (
    <div>
      <NavbarItem />
      <div className={styles.search}>
        <SearchPopup />
        <SearchList />
      </div>
      <Form />
      <Footer />
    </div>
  );
};
// xuất dữ liẹue
export default Search;
