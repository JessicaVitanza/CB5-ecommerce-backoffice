import { useEffect, useState } from "react";
import { POST, PUT } from "../../libs/HTTP";
import styles from "./styles.module.scss";


const ProductsForm = ({ setShowModal, getData, data }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    if (data) {
      setForm({
        name: data.title,
        image: data.images,
      });
      setEdit(true);
    }
  }, []);

  const handleForm = (input, e) => {
    setForm({
      ...form,
      [input]: e.target.value,
    });
  };

  const submitForm = e => {
    e.preventDefault();
    POST("products", form).then(data => {
      console.log(data);
      if (data.status === 201) {
        setShowModal(false);
        getData();
      }
    });
  };

  const editForm = e => {
    e.preventDefault();
    PUT("products", form, "/" + data.id).then(data => {
      console.log(data);
      if (data.status === 200) {
        setShowModal(false);
        getData();
      }
    });
  };

  return (
    <form className={styles.Form}>
      <input
        type="text"
        value={form.title}
        onChange={e => handleForm("title", e)}
      />
      <input
        type="text"
        value={form.images}
        onChange={e => handleForm("image", e)}
      />

      {edit ? (
        <button type="submit" onClick={e => editForm(e)}>
          edit
        </button>
      ) : (
        <button type="submit" onClick={e => submitForm(e)}>
          invia
        </button>
      )}
    </form>
  );
};

export default ProductsForm;