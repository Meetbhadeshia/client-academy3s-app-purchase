import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./styles.css"

function Carousel1(props) {

    var items = [
        {
            name: "Random Name #1",
            description: "Boost Your Knowledge with Our High-Quality Courses",
            desktop: "/images/carousel/carousel1-desktop.jpg",
            mobile: "/images/mobile/carousel1-mobile.jpg"
        },
        {
            name: "Random Name #2",
            description: "Enrich Your Skills with Our Top Courses!",
            desktop: "/images/carousel/carousel2-desktop.jpg",
            mobile: "/images/mobile/carousel2-mobile.jpg",
        },
        {
            name: "Random Name #3",
            description: "Take Your Learning to the Next Level with Our Courses",
            desktop: "/images/carousel/carousel3-desktop.jpg",
            mobile: "/images/carousel/carousel3-desktop.jpg",
        }
    ]

    return (
        <Carousel
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
                style: {
                    background: 'none',
                    borderRadius: '50%',
                    display: 'block',
                }
            }} navButtonsAlwaysVisible >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </ Carousel>
    )
}

function Item(props) {
    const [resize, setResize] = useState(window.innerWidth);

    function handleResize() {
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [resize]);
    return (
        < div style={{
            display: 'flex', flexDirection: 'column',
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: "5%",
            backgroundImage: resize < 600 ? `url(${props.item.mobile})` : `url(${props.item.desktop})`, backgroundSize: 'cover', width: "100vw", height: resize < 900 ? "45vh" : "88.5vh"
        }
        }>
            <Typography gutterBottom variant="h2" sx={{
                marginBottom: "15px",
                fontWeight: { xs: "500", md: "700" },
                wordBreak: 'wrap',
                color: 'white',
                width: { xs: '70%', md: '50%' },
                // pt: { xs: 7, md: 25 },
                ml: { xs: 5, sm: 10, md: 10 },
                fontSize: { xs: '1.7rem', md: '4rem' },
            }}>
                {props.item.description}
            </Typography>

            <Button variant="outlined" sx={{
                width: { xs: '50%', sm: '30%', md: '20%' },
                ml: { xs: 5, sm: 10, md: 10 },
                borderColor: "white",
                letterSpacing: '.6px',
                color: 'white', padding: { xs: '10px', md: '15px 10px' }, '&:hover': { background: "#03a1c6", transition: '1000ms' }
            }}>Explore Courses</Button>
        </div >
    )
}

export default Carousel1