import styles from "./styles.module.scss";
import RefreshBtn from "../RefreshBtn";
import EditBtn from "../EditBtn";
import DeleteBtn from "../DeleteBtn";

const TableProducts = ({ productsState, getData, loading }) => {
  return (
    <div className={styles.main}>
      <div className={styles.tableHead}>
        <div className={styles.description}>
          <p>ID</p>
          <p>IMG</p>
          <p>Title</p>
        </div>
        <RefreshBtn getData={getData} />
      </div>
      {loading ? (
        "loading..."
      ) : (
        <div className={styles.tableBody}>
          {productsState.map(item => (
            <div className={styles.tableRow} key={item.id}>
              <p>{item.id}</p>
              <img src={item.images} alt={item.title} />
              <p className={styles.name}>{item.title.substring(0, 20)}</p>
              <div className={styles.btnSet}>
                <EditBtn
                  getData={getData}
                  data={{ name: item.title, image: item.images, id: item.id }}
                />
                <DeleteBtn getData={getData} id={item.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableProducts;