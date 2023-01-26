import { useEffect, useState } from "react";
import { GET } from "../../libs/HTTP";
import EditModal from "../EditModal";
import TableProducts from "../TableProducts";
import styles from "./styles.module.scss";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const productsStateInit = {
    categories: [],
    loading: true,
  };
  const [productsState, setProductsState] = useState(productsStateInit);

  const getData = () => {
    setProductsState({ ...productsState, loading: true });
    GET("products").then(data =>
      setProductsState({
        loading: false,
        products: data,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.main}>
      {showModal && <EditModal getData={getData} setShowModal={setShowModal} />}
      <h1>Products</h1>
      <button className={styles.Add} onClick={() => setShowModal(true)}>Aggiungi</button>
      <TableProducts
        productsState={productsState.products}
        loading={productsState.loading}
        getData={getData}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Products;