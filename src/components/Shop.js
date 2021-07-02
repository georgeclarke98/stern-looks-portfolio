import { Grid } from '@material-ui/core';
import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import Product from "./Products/Product/Product";
import useStyles from './Products/styles'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    
    const classes = useStyles();

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
      };

      const addToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(cart);
      };

      const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
      };
    
      useEffect(() => {
        fetchProducts();
        fetchCart();
      }, []);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                { products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} addToCart={addToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Shop;
