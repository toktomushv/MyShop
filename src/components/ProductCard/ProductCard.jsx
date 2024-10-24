import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../api/products";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { addToCart, removeToCart } from "../../redux/slices/cartSlice";

export default function ProductCard() {
  const products = useSelector((state) => state.products.data);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart(productId) {
    dispatch(removeToCart(productId));
  }

  function isInCart(productId) {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    return cartItems.some((item) => item.id === productId);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
      {products.map((product) => (
        <Card style={{ marginTop: 50, marginRight: 20 }} key={product.id} sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 240, width: 300 }} image={product.image} />
          <hr />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Бренд: {product.brand}
              <br />
              Цена: {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            {isInCart(product.id) ? (
              <Button
                size="small"
                variant="contained"
                color="warning"
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Убрать
              </Button>
            ) : (
              <Button
                size="small"
                variant="contained"
                onClick={() => handleAddToCart(product)}
              >
                В Корзину
              </Button>
            )}
            <Link to={`/detail/${product.id}`}>
              <Button size="small" variant="contained">
                Подробнее
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
