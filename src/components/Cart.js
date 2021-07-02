import React, { useState } from "react";
import { commerce } from "../lib/commerce";
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './Cart/styles';
import CartItem from './Cart/CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState({});
    const classes = useStyles();
    
      const updateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
      };
    
      const removeFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
      };
    
      const emptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        setCart(cart);
      };

    const IsCartEmpty = () => (
        <Typography variant="subtitle1">Shopping Cart is Empty,  
            <Link to="/" className={classes.link}> Go to products</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3} >
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} updateCartQty={updateCartQty} removeFromCart={removeFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_code}
                </Typography>       
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={emptyCart}>Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained"color="primary">Checkout</Button>
                </div>         
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3' gutterBottom>ShoppingCart</Typography>
            { !cart.line_items.length ? <IsCartEmpty /> : <FilledCart />}
        </Container>
    );
};

export default Cart
