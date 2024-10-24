import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api/products";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { deleteProduct } from "../redux/slices/deleteProductSlice"; 

export default function AdminTable() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleDeleteProduct = async (productId) => {
  try {
    if (window.confirm("Вы уверены, что хотите удалить этот продукт?")) {
      await dispatch(deleteProduct(productId)).unwrap();
      dispatch(getAllProducts());
    }
  } catch (error) {
    console.error("Ошибка удаления продукта:", error);
  }
};

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Changing</TableCell>
            <TableCell align="right">Deleting</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="product">
                {product.name}
              </TableCell>
              <TableCell align="right">{product.brand}</TableCell>
              <TableCell align="right">{product.description}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
                <img width={100} src={product.image} alt="laptopImage" />
              </TableCell>
              <TableCell align="right">{product.color}</TableCell>
              <TableCell align="right">
                <Link to={`/admin/edit/${product.id}`}>
                  <Button color="success" variant="contained">
                    Изменить
                  </Button>
                </Link>
              </TableCell>
              <TableCell align="right">
                <Button
                  color="warning"
                  variant="contained"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
