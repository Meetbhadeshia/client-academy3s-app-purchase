import React from "react"
import { useNavigate } from "react-router-dom"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { useTheme } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./styles.css"

const ProductCard = ({ }) => {
    const theme = useTheme()
    const navigate = useNavigate()
    const productCards = [
        {
            title: "Master new skills with our online courses.",
            price: "6000",
            courseName: "IFCO-CPO",
            chaptersIncluded: "10",
            src: "/images/courses/1.png",
            originalPrice: '1000'
        },
        {
            title: "Achieve your goals through lifelong learning.",
            price: "7900",
            courseName: "IFCO-CPO Advanced",
            chaptersIncluded: "34",
            src: "/images/courses/2.png",
            originalPrice: '1000'
        },
        {
            title: "Expand your knowledge with expert-led courses.",
            price: "4999",
            courseName: "Academy3s course",
            chaptersIncluded: "21",
            src: "/images/courses/3.png",
            originalPrice: '1000'
        },
        {
            title: "Take the first step towards your dream career with us.",
            price: "10000",
            courseName: "Academy3s IFCO-CPO",
            chaptersIncluded: "15",
            src: "/images/courses/4.png",
            originalPrice: '1000'
        }
    ]
    const navigateToIndividualCourse = () => {
        navigate("/course")
    }
    return (
        <div className="main-product-div">
            {productCards.map((product, i) =>
                <Card
                    onClick={navigateToIndividualCourse}
                    key={product.title} sx={{
                        width: { xs: "100%", sm: "40%", md: "25%" }, display: "flex", flexDirection: "column", "&:hover": { transform: 'scale(1.1)', transition: '300ms' }
                    }} >
                    <CardMedia
                        component="img"
                        image={product.src}
                        alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1, padding: 2.5 }}>
                        <Box
                            sx={{ display: 'flex', justifyContent: 'space-between' }}
                        >
                            <Typography gutterBottom variant="subtitle2" sx={{ color: theme.palette.secondary.main }}>
                                {product.courseName}
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" sx={{ color: theme.palette.secondary.main }}>
                                {product.chaptersIncluded} chapters
                            </Typography>
                        </Box>

                        <Typography gutterBottom variant="subtitle1" sx={{
                            lineHeight: 1.2,
                            fontSize: "1.1rem",
                            margin: 1,
                            marginLeft: 0,
                            // wordBreak: "break-all",
                            color: theme.palette.primary.main,
                            "&:hover": {
                                color: "#ff5a00",
                                cursor: "pointer"
                            }
                        }}>
                            {product.title}
                        </Typography>
                    </CardContent>
                    <Divider />
                    <CardActions sx={{ display: 'flex', flexGrow: 1, px: 2.5, justifyContent: 'space-between' }}>

                        <Typography gutterBottom variant="subtitle2" sx={{ color: "grey", }}>
                            ₹{product.originalPrice}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" sx={{ color: theme.palette.secondary.main }}>
                            ₹{product.price}
                        </Typography>

                    </CardActions>
                </Card>
            )
            }
            {/* </Grid> */}
            {/* </Grid> */}

            {/* <Container sx={{ py: 8, bgcolor: "#f2f4f9" }} maxWidth="full"> */}
            {/* End hero unit */}
        </div >
    )
}

export default ProductCard
