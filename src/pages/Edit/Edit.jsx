import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllProducts,
  getProduct,
  saveEditedProduct,
} from "../../api/products";

function Edit() {
  const editToProduct = useSelector((state) => state.editProduct.data);
  const [editProduct, setEditProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    image: "",
    color: "",
  });

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (editToProduct) {
      setEditProduct(editToProduct);
    }
  }, [editToProduct]);

  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  function handleSubmit(e) {
    e.preventDefault();
    for (const key in editProduct) {
      if (!editProduct[key]) {
        alert("Zapolnite polya");
      }
    }
    dispatch(saveEditedProduct(editProduct));
    dispatch(getAllProducts());
    navigate("/admin");
  }

  return (
    <>
      <Container>
        <h2>Add Product Page</h2>
        <form className="formAdd" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="filled-basic"
            label="Enter Name"
            variant="filled"
            onChange={(e) =>
              setEditProduct({ ...editProduct, name: e.target.value })
            }
            value={editProduct.name}
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Enter Brand"
            variant="filled"
            onChange={(e) =>
              setEditProduct({ ...editProduct, brand: e.target.value })
            }
            value={editProduct.brand}
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Enter Description"
            variant="filled"
            onChange={(e) =>
              setEditProduct({ ...editProduct, description: e.target.value })
            }
            value={editProduct.description}
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Enter Price"
            variant="filled"
            type="number"
            onChange={(e) =>
              setEditProduct({ ...editProduct, price: e.target.value })
            }
            value={editProduct.price}
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Get link for image"
            variant="filled"
            onChange={(e) =>
              setEditProduct({ ...editProduct, image: e.target.value })
            }
            value={editProduct.image}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={editProduct.color}
              label="color"
              onChange={(e) =>
                setEditProduct({ ...editProduct, color: e.target.value })
              }
            >
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="green">Green</MenuItem>
            </Select>
          </FormControl>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Сохранить
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Edit;
