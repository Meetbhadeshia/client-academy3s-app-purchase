import { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import Menu from "./menu";
import "./navbar.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CloseIcon from '@mui/icons-material/Close';
import loginContext from "../../context/auth/authContext"
import Sidebar from "../sidebarForCart"
import { IconButton, Badge, Link } from "@mui/material"
import cartContext from "../../context/carItems/cartContext";
import { useTheme } from '@mui/material/styles';

function Header() {
    const theme = useTheme();
    const [resize, setResize] = useState(window.innerWidth);
    const [cartItems, setCartItems] = useState(
        parseInt(localStorage.getItem('cartItems')) || 3
    );
    const [hamBtn, setHamBtn] = useState(false);
    const [sticky, setSticky] = useState(false);
    const { localLogIn, setLocalLogIn } = useContext(loginContext)
    const [open, setOpen] = useState(false)

    const MenuData = [
        {
            id: "1",
            title: "home",
            link: '/'
        },
        {
            id: "2",
            title: "Courses",
            link: '/courses'
        },
        {
            id: "3",
            title: "Contact",
            link: '/contact'
        },
        {
            id: "4",
            title: "About",
            link: '/about'
        },
        {
            id: "5",
            title: "Log in",
            link: "/login"
        }
    ];

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [resize]);

    function handleResize() {
        setResize(window.innerWidth);
    }
    function handleHamBtn() {
        setHamBtn(!hamBtn);
    }
    function handleSticky() {
        if (window.scrollY > 75) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }
    window.addEventListener("scroll", handleSticky);

    const { localCart, setLocalCart } = useContext(cartContext)

    return (
        <>
            <header className={sticky ? "sticky header" : "header"}>
                <div className="header-container">
                    <nav className="header-nav">
                        <div className="logo">
                            {/* <img className="headerLogo" src={logo} alt="logo" /> */}
                            <Link href="/">
                                <img src="/images/academy-logo.png" width="130px" height="50px" />
                            </Link>
                        </div>
                        {resize > 991 && (
                            <div className="menu-inner">

                                <div className="header-menu">
                                    {localLogIn ?
                                        MenuData.filter((item) => item.link !== "/login").map((item) => (
                                            <Menu
                                                key={item.id}
                                                title={item.title}
                                                link={item.link}
                                            />
                                        ))
                                        :
                                        MenuData.map((item) => (
                                            <Menu
                                                key={item.id}
                                                title={item.title}
                                                link={item.link}
                                            />
                                        ))
                                    }
                                </div>
                                <NavLink onClick={() => setOpen(true)}>
                                    <Badge badgeContent={localCart.length !== 0 ? localCart.length : 0} color="info" sx={{
                                        "&.MuiBadge-standard MuiBadge-anchorOriginTopRight": { display: localCart.length ? 'block' : 'none' },
                                        fontSize: '0.7rem !important',
                                        height: "18px !important",
                                    }}>
                                        <ShoppingCartOutlinedIcon
                                            className="icons-of-navbar cart-icon"
                                            sx={{ margin: "0 0 0 31px", p: '3px', cursor: "pointer", "&:hover": { color: "#03a1c6" } }} />
                                    </Badge>
                                </NavLink>
                                {localLogIn ?
                                    <NavLink to="/profile">
                                        <AccountCircleOutlinedIcon className="icons-of-navbar" sx={{ ml: "32px", p: '3px', cursor: "pointer", "&:hover": { color: "#03a1c6" } }} />
                                    </NavLink> : ''}
                            </div>
                        )}
                        {resize < 992 && (
                            <div className="small-size-nav-buttons-alignment">
                                {localLogIn ?
                                    <NavLink onClick={() => setOpen(true)} style={{ marginRight: '15px' }}>

                                        <AccountCircleOutlinedIcon sx={{ mx: "5px" }} />
                                    </NavLink>
                                    : ''}
                                <NavLink onClick={() => setOpen(true)} style={{ marginRight: '15px' }}>
                                    <Badge badgeContent={localCart.length !== 0 ? localCart.length : 0} color="info" sx={{
                                        "&.MuiBadge-standard MuiBadge-anchorOriginTopRight": { display: localCart.length ? 'block' : 'none' },
                                        fontSize: '0.7rem !important',
                                        height: "18px !important",
                                    }}>
                                        <ShoppingCartOutlinedIcon sx={{ p: '2.5px', mx: "5px 0 0 0" }} />
                                        {/* <ShoppingCartOutlinedIcon
                                            className="icons-of-navbar cart-icon"
                                            sx={{ margin: "0 0 0 31px", p: '3px', cursor: "pointer", "&:hover": { color: "#03a1c6" } }} /> */}
                                    </Badge>
                                </NavLink>
                                {/* <ShoppingCartOutlinedIcon sx={{ p: '2.5px', mx: "5px" }} /> */}
                                <button type="button" onClick={handleHamBtn} className="ham-btn">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                        )}
                    </nav>
                    {resize < 992 && hamBtn && (
                        <>
                            <div className="mobile-menu">
                                {localLogIn ?
                                    MenuData.filter((item) => item.link !== "/login").map((item) => (
                                        <Menu
                                            key={item.id}
                                            title={item.title}
                                            link={item.link}
                                        />
                                    ))
                                    :
                                    MenuData.map((item) => (
                                        <Menu
                                            key={item.id}
                                            title={item.title}
                                            link={item.link}
                                        />
                                    ))
                                }
                            </div>
                        </>
                    )}
                </div >
            </header >
            <Sidebar open={open} setOpen={setOpen} />
        </>
    );
}
export default Header;