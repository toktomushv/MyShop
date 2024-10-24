import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../api/products";

function Add() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    image: "",
    color: "",
  });

  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    for (const key in newProduct) {
      if (!newProduct[key]) {
        alert("Заполните все поля!");
      }
    }
    dispatch(addNewProduct(newProduct));
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
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Enter Brand"
            variant="filled"
            onChange={(e) =>
              setNewProduct({ ...newProduct, brand: e.target.value })
            }
            value={newProduct.brand}
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Enter Description"
            variant="filled"
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Enter Price"
            variant="filled"
            type="number"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            value={newProduct.price}
          />
          <TextField
            fullWidth
            id="filled-basic"
            label="Get link for image"
            variant="filled"
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={newProduct.color}
              label="color"
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
            >
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="green">Green</MenuItem>
            </Select>
          </FormControl>
          <Button fullWidth variant="contained" color="primary" type="submit">
            Add Product
          </Button>
         
        </form>
      </Container>
    </>
  );
}

export default Add;
