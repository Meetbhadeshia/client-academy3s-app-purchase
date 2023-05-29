import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import cartContext from '../../context/carItems/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SwipeableTemporaryDrawer({ open, setOpen }) {
    const [resize, setResize] = React.useState(window.innerWidth);

    function handleResize() {
        setResize(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [resize]);

    const theme = useTheme()
    const navigate = useNavigate()
    const { localCart, setLocalCart, totalValue, calculatePrice } = React.useContext(cartContext)
    // const [totalPrice, setTotalPrice] = useState(0)

    const deleteAllCartItems = () => {
        window.localStorage.removeItem("cartItems")
        setLocalCart([])
        calculatePrice()
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        // setState({ ...state, [anchor]: open });
        setOpen(open)
    };

    const deleteSingleItem = (index) => {
        const Items = JSON.parse(window.localStorage.getItem("cartItems"))
        const ItemsNotToBeDeleted =
            Items.filter((item) => {
                return item.index !== index
            })
        window.localStorage.setItem("cartItems", JSON.stringify(ItemsNotToBeDeleted))
        setLocalCart(JSON.parse(window.localStorage.getItem("cartItems")))
        calculatePrice()
        console.log(ItemsNotToBeDeleted)
    }

    const list = (anchor) => (
        <Box
            sx={{ width: { xs: '300px', md: '500px' } }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{ padding: '20px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5" sx={{ fontWeight: { xs: '700', md: '600' }, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                        Your cart
                    </Typography>
                    <Typography variant="h6" sx={{ "&:hover": { cursor: 'pointer' } }}>
                        <CloseIcon onClick={toggleDrawer(anchor, false)} sx={{
                            width: { xs: "40px", md: "60px" },
                            height: { xs: "20px", md: "30px" }
                        }} />
                    </Typography>
                </Box>
                {localCart.length !== 0 ? <>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>
                            Course
                        </Typography>
                        <Button variant="outlined" color="error" onClick={deleteAllCartItems} sx={{ height: { xs: '25px', md: '35px' } }}>
                            delete all
                        </Button>
                    </Box>
                    <Divider />
                    {localCart.map((singleItem) => <>
                        <Box key={singleItem.id} sx={{ display: 'flex', width: '100%', padding: '10px 0 0' }}>
                            <img src={singleItem.src} style={
                                {
                                    width: resize < 900 ? '80px' : '160px',
                                    height: resize < 900 ? '60px' : '120px'
                                }
                            } />
                            <Box className="add-to-cart-right-div" sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '0 10px' }}>
                                <Box className="left-add-to-cart-text">
                                    <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>{singleItem.title}</Typography>
                                    <Box className="right-add-to-cart-text">
                                        <Typography variant="subtitle1" sx={{ fontWeight: '600', fontSize: { xs: '.8rem', md: '1rem' } }}>₹ {singleItem.price}</Typography>
                                    </Box>
                                </Box>
                                <Box className="below-text-add-to-cart">
                                    <DeleteIcon sx={{ "&:hover": { cursor: 'pointer' } }} color="error" onClick={() => deleteSingleItem(singleItem.index)} />
                                </Box>
                            </Box>
                        </Box>
                    </>
                    )}
                </> :
                    <Typography variant="h5">Your cart is empty!</Typography>}
                {/* <Box sx={{ display: 'flex', width: '100%', padding: '10px 0 0' }}>
                    <img src="/images/courses/2.png" style={{ width: '160px', height: '120px' }} />
                    <Box className="add-to-cart-right-div" sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', padding: '0 10px' }}>
                        <Box className="left-add-to-cart-text">
                            <Typography variant="h5">Academy3s IFCO-CPO</Typography>
                            <Box className="right-add-to-cart-text">
                                <Typography variant="subtitle1">₹ 5000</Typography>
                            </Box>
                        </Box>
                        <Box className="below-text-add-to-cart">
                            <DeleteIcon color="error" />
                        </Box>
                    </Box> */}
                <div className="add-to-cart-bottom-fixed" sx={{ width: '100%', position: 'fixed', bottom: '0', zIndex: '1000', background: "white", paddingBottom: "20px" }}>
                    <Divider sx={{ paddingTop: '10px' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>
                            Total
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>
                            {totalValue}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        {totalValue === 0 ?
                            <Button variant="contained" disabled>Checkout</Button>
                            :
                            <Button variant="contained" onClick={() => navigate("/checkout")}>Checkout</Button>
                        }
                    </Box>
                </div>
                <List>
                </List>
            </List>

        </Box >
    );

    return (
        <div>
            <SwipeableDrawer
                anchor="right"
                open={open}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
            >
                {list("right")}
            </SwipeableDrawer>
        </div>
    );
}