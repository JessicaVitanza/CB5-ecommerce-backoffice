import ProductsForm from "../ProductsForm";
import styles from "./styles.module.scss";
const EditModal = ({ setShowModal, data, getData }) => {
  return (
    <div className={styles.cover}>
      <div className={styles.modal}>
        <button onClick={() => setShowModal(false)}>x</button>
        <ProductsForm
          data={data}
          getData={getData}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
};

export default EditModal;