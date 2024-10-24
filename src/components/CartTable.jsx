import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

function CartTable() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartProducts(cart);
  }, []);

  const handleIncrease = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: (product.quantity || 1) + 1 }
          : product
      )
    );
  };

  const handleDencrease = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max((product.quantity || 1) - 1, 1) }
          : product
      )
    );
  };

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

  return (
    <>
      <h2>Cart Page</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
        {cartProducts.map((product) => (
          <div
            key={product.id}
            style={{
              width: 275,
              border: "3px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <img
              src={product.image}
              style={{
                width: 275,
                height: 250,
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />

            <p>{product.name}</p>
            <p>Price: {product.price}</p>
            <Button
              sx={{
                backgroundColor: "green",
                color: "white",
                marginRight: "10px",
              }}
              onClick={() => handleDencrease(product.id)}
            >
              Уменьшить
            </Button>
            <p>Quantity: {product.quantity}</p>
            <Button
              sx={{
                backgroundColor: "green",
                color: "white",
                marginRight: "10px",
              }}
              onClick={() => handleIncrease(product.id)}
            >
              Увеличить
            </Button>
            <p>Общая цена: {product.price * (product.quantity || 1)}</p>
          </div>
        ))}
      </div>
      <h2>Total Price: {totalPrice}</h2>
    </>
  );
}

export default CartTable;
