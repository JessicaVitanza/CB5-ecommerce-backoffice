import NavBar from "../NavBar";
import styles from "./styles.module.scss";

const Container = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sxColumn}>
        <NavBar />
      </div>
      <div className={styles.dxColumn}></div>
    </div>
  );
};

export default Container;