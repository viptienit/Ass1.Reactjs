// lấy dữ liệu các component

import NavbarItem from "./NavbarItem";
import Header from "./Header";
import City from "./City";
import Type from "./Type";
import Hotel from "./Hotel";
import Form from "./Form";
import Footer from "./Footer";

// phân chia các component
const Home = () => {
  return (
    <div>
      <NavbarItem />
      <Header />
      <City />
      <Type />
      <Hotel />
      <Form />
      <Footer />
    </div>
  );
};
// suất dữ liệu khỏi file code
export default Home;
