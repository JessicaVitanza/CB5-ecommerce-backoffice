import styles from "./styles.module.scss";
import { navBarLinks } from "./../../constants/navbar.js";
import LiComponent from "./../LiComponent";

const NavBar = () => {
  return (
    <ul className={styles.main}>
      {navBarLinks.map((item, index) => (
        <LiComponent icon={item.icon} key={item.id} label={item.label} />
      ))}
    </ul>
  );
};

export default NavBar;