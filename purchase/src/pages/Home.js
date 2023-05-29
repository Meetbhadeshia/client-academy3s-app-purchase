import React, { useState, useEffect } from 'react'
import Contact from "../components/contact/"
import Carousel1 from "../components/carousel/index"
import Footer from "../components/footer/index"
import Navbar from "../components/navbar/index"
import ProductCards from "../components/productCard"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Divider, Typography, IconButton } from '@mui/material'
import Testimonial from "../components/testimonial/"
import Box from "@mui/material/Box"
import { useTheme } from '@mui/material/styles';

const Home = () => {
    const theme = useTheme()
    const [resize, setResize] = useState(window.innerWidth);

    function handleResize() {
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [resize]);

    const stylesForFeaturesSectionLarge = {
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 0'
    }

    const stylesForFeaturesSectionSmall = {
        display: 'flex',
        flexDirection: 'column',
    }

    const numbersDesktop = {
        background: '#003399',
        display: 'flex',
        margin: '100px 128px',
        padding: '40px'
    }
    const numbersMobile = {
        background: '#003399',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
    }

    return (
        <div>
            <Navbar />
            <Carousel1 />

            <Box sx={{ margin: { md: '0 128px' }, padding: { xs: "20px", md: "70px 0" } }}>
                <Box sx={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h3" sx={{
                        color: '#00306e',
                        fontWeight: 'bold',
                        textAlign: { md: 'center', lg: 'center' },
                        ml: { xs: '5%', md: '0' },
                    }}>
                        Who we are
                    </Typography>
                    <>
                        {
                            resize > 900 &&
                            <img src="/images/line.png" style={{ textAlign: "center" }} />
                        }

                        {
                            resize < 900 &&
                            <img src="/images/line.png" style={{ textAlign: "center", marginLeft: '5%' }} />
                        }
                    </>
                </Box>

                <Box className="ceo-container"
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '15px', md: "30px" },
                        padding: { xs: '30px 0 0', md: "40px 0 0" }
                    }}>
                    <Typography variant="subtitle1" sx={{
                        fontWeight: '540',
                        textAlign: { md: 'center', lg: 'center' },
                        ml: { xs: '5%', md: '0' },
                    }}>
                        <em style={{
                            color: '#03A1C6',
                            fontWeight: 'bolder',
                        }}>"</em>Academy of Support Services Studies is a leading training provider, helping support functions professionals across industries and sectors develop new expertise and bridge their skill gap for recognition and growth in the global corporate world.
                        Developed with the intention of delivering high value online training through innovative and practical approaches. Acdemy3s offers a wide range of services in online training courses, learning and development in the fields of support services.
                        Our courses and trainings have been designed by keeping practical approach in support services in view, moreover we offer customized solutions for all your training needs.
                        <em style={{
                            color: '#03A1C6',
                            fontWeight: 'bolder',
                        }}>"</em>
                    </Typography>
                </Box>
            </Box>

            <div className="product-cards-section">
                <div style={{ margin: resize < 900 ? '100px 0 0' : '0 128px' }}>
                    <section style={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant="h3" sx={{
                            color: '#00306e',
                            fontWeight: 'bold',
                            textAlign: { md: 'center', lg: 'center' },
                            marginLeft: { xs: '5%' }
                            // fontSize: { xs: '3rem', sm: '3.5rem' },
                        }}>
                            Top Courses
                        </Typography>
                        {
                            resize > 900 &&
                            <img src="/images/line.png" style={{ textAlign: "center" }} />
                        }

                        {
                            resize < 900 &&
                            <img src="/images/line.png" style={{ textAlign: "center", marginLeft: '5%' }} />
                        }
                    </section>

                    <div style={{ padding: '50px 0' }}>
                        <ProductCards />
                    </div>
                </div>
            </div>

            <div className="academy3s-features" style={{
                backgroundImage: 'url(/images/background-features.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'none',
                padding: resize > 900 ? '70px 0' : '50px 10px',
                width: '100%'
            }}>
                {/* heading */}
                <Box sx={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h3" sx={{
                        color: '#00306e',
                        fontWeight: 'bold',
                        textAlign: { md: 'center', lg: 'center' },
                        ml: { xs: '5%', md: '0' },
                    }}>
                        Academy3s Features
                    </Typography>
                    <>
                        {
                            resize > 900 &&
                            <img src="/images/line.png" style={{ textAlign: "center" }} />
                        }

                        {
                            resize < 900 &&
                            <img src="/images/line.png" style={{ textAlign: "center", marginLeft: '5%' }} />
                        }
                    </>
                </Box>
                {/* main body */}
                <div style={(resize > 900) ? stylesForFeaturesSectionLarge : stylesForFeaturesSectionSmall}>
                    <div className="left" style={{ background: 'white', padding: resize > 900 ? '60px 40px' : '10px' }}>
                        <div className="single-feature">
                            <div style={{ display: resize > 900 ? 'flex' : 'inherit', alignItems: 'start', padding: '30px 0' }}>
                                <img src="/images/feature_icon_1.svg" />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginLeft: '10px' }}>
                                    <Typography variant="h6" sx={{
                                        color: '#00306e', fontWeight: '700 !important',
                                    }}>Do More, Stress Less</Typography>
                                    <Typography variant="h6" sx={{
                                        paddingRight: { xs: '10px', md: '150px' }, fontSize: '16px',
                                        lineHeight: '22px',
                                        color: '#4D5765',
                                    }}>Why I say old chap that is spiffing he legged <br />
                                        it in my flat easy peasy.
                                    </Typography>
                                </div>
                                <IconButton sx={{ '&:hover': { color: 'white', background: '#00306e' }, border: '2px solid #EDEDED', color: theme.palette.primary.main }}>
                                    <ArrowForwardIcon />
                                </IconButton>
                            </div>
                            <Divider />
                        </div>
                        <div className="single-feature">
                            <div style={{ display: resize > 900 ? 'flex' : 'inherit', alignItems: 'start', padding: '30px 0' }}>
                                <img src="/images/feature_icon_2.svg" />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginLeft: '10px' }}>
                                    <Typography variant="h6" sx={{
                                        color: '#00306e', fontWeight: '700 !important',
                                    }}>The Business Intelligence</Typography>
                                    <Typography variant="h6" sx={{
                                        paddingRight: { xs: '10px', md: '150px' }, fontSize: '16px',
                                        lineHeight: '22px',
                                        color: '#4D5765',
                                    }}>Why I say old chap that is spiffing he legged <br />
                                        it in my flat easy peasy.
                                    </Typography>
                                </div>
                                <IconButton sx={{ '&:hover': { color: 'white', background: '#00306e' }, border: '2px solid #EDEDED', color: theme.palette.primary.main }}>
                                    <ArrowForwardIcon />
                                </IconButton>
                            </div>
                            <Divider />
                        </div>
                        <div className="single-feature">
                            <div style={{ display: resize > 900 ? 'flex' : 'inherit', alignItems: 'start', padding: '30px 0' }}>
                                <img src="/images/feature_icon_3.svg" />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginLeft: '10px' }}>
                                    <Typography variant="h6" sx={{
                                        color: '#00306e', fontWeight: '700 !important',
                                    }}>System Administration</Typography>
                                    <Typography variant="h6" sx={{
                                        paddingRight: { xs: '10px', md: '150px' },
                                        fontSize: '16px',
                                        lineHeight: '22px',
                                        color: '#4D5765',
                                    }}>Why I say old chap that is spiffing he legged <br />
                                        it in my flat easy peasy.
                                    </Typography>
                                </div>
                                <IconButton sx={{ '&:hover': { color: 'white', background: '#00306e' }, border: '2px solid #EDEDED', color: theme.palette.primary.main }}>
                                    <ArrowForwardIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src="/images/courses/7.png" style={{ width: '100%' }} height="auto" />
                    </div>
                </div>
            </div>
            <Testimonial />

            <div style={resize < 900 ? numbersMobile : numbersDesktop}>
                <div style={{
                    color: "white", margin: resize < 900 ? '20px 0' : '0 10px', width: '25%',
                    textAlign: 'center'
                }}>
                    <Typography style={{
                        fontsize: '20px',
                        lineheight: '24px',
                        fontweight: '700',
                        margin: '0',
                        color: '#fff',
                    }} variant="h6">
                        Successfully <br />
                        Trained <br />
                    </Typography>

                    <Typography variant="h3">67 <br /></Typography>
                    <Typography variant="subtitle1">ENROLLED LEARNERS</Typography>
                </div>
                <div style={{ background: '#d7d7d7', width: '.2px' }} />
                <Divider orientation="vertical" />
                <div style={{
                    color: "white", margin: resize < 900 ? '20px 0' : '0 10px', width: '25%',
                    textAlign: 'center'
                }}>
                    <Typography style={{
                        fontsize: '20px',
                        lineheight: '24px',
                        fontweight: '700',
                        margin: '0',
                        color: '#fff',
                    }} variant="h6">
                        Available <br />
                        Courses <br />
                    </Typography>

                    <Typography variant="h3">82 <br /></Typography>
                    <Typography variant="subtitle1">COUNTRYWIDE AWARDS</Typography>
                </div>
                <div style={{ background: '#d7d7d7', width: '.2px' }} />
                <Divider orientation="vertical" />
                <div style={{
                    color: "white", margin: resize < 900 ? '20px 0' : '0 10px', width: '25%',
                    textAlign: 'center'
                }}>
                    <Typography style={{
                        fontsize: '20px',
                        lineheight: '24px',
                        fontweight: '700',
                        margin: '0',
                        color: '#fff',
                    }} variant="h6">
                        Scheduled <br />
                        Events <br />
                    </Typography>

                    <Typography variant="h3">12 <br /></Typography>
                    <Typography variant="subtitle1">SUCCESS EVENTS</Typography>
                </div >
                <div style={{ background: '#d7d7d7', width: '.2px' }} />
                <Divider orientation="vertical" />
                <div style={{
                    color: "white", margin: resize < 900 ? '20px 0' : '0 10px', width: '25%', textAlign: 'center'
                }}>
                    <Typography style={{
                        fontsize: '20px',
                        lineheight: '24px',
                        fontweight: '700',
                        margin: '0',
                        color: '#fff',
                    }} variant="h6">
                        Getting <br />
                        Featured on <br />
                    </Typography>

                    <Typography variant="h3">47 <br /></Typography>
                    <Typography variant="subtitle1">ONLINE COURSES</Typography>
                </div >
            </div >

            <Box sx={{ margin: { md: '0 128px' }, padding: { xs: "20px", md: "0 0 100px" } }}>
                <Box sx={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h3" sx={{
                        color: '#00306e',
                        fontWeight: 'bold',
                        textAlign: { md: 'center', lg: 'center' },
                        ml: { xs: '5%', md: '0' },
                    }}>
                        What our CEO says
                    </Typography>
                    <>
                        {
                            resize > 900 &&
                            <img src="/images/line.png" style={{ textAlign: "center" }} />
                        }

                        {
                            resize < 900 &&
                            <img src="/images/line.png" style={{ textAlign: "center", marginLeft: '5%' }} />
                        }
                    </>
                </Box>

                <Box className="ceo-container"
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: { xs: '15px', md: "30px" },
                        padding: { xs: '30px 0 0', md: "70px 0 0" }
                    }}>
                    <Box className="left-Ceo" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src="/images/fake-ceo-pic.jpg"
                            style={{
                                width: resize > 900 ? "300px" : "200px",
                                borderRadius: "50%"
                            }} />
                    </Box>
                    <Box className="right-Ceo" sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="subtitle2" sx={{
                            fontWeight: '540',
                            textAlign: { md: 'center', lg: 'center' },
                            ml: { xs: '5%', md: '0' },
                        }}>
                            <em style={{
                                color: '#03A1C6',
                                fontWeight: 'bolder',
                            }}>"</em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sollicitudin nibh sit amet commodo. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Neque egestas congue quisque egestas diam in arcu. Leo vel fringilla est ullamcorper. Consequat id porta nibh venenatis cras sed felis eget. Aliquet porttitor lacus luctus accumsan tortor posuere ac. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Consequat id porta nibh venenatis cras sed felis eget velit. Nisl tincidunt eget nullam non nisi est sit.

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sollicitudin nibh sit amet commodo. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Neque egestas congue quisque egestas diam in arcu. Leo vel fringilla est ullamcorper. Neque egestas congue quisque egestas diam in arcu. Leo vel fringilla est ullamcorper. Neque egestas congue quisque egestas diam in arcu. Leo vel fringilla est ullamcorper.
                            <em style={{
                                color: '#03A1C6',
                                fontWeight: 'bolder',
                            }}>"</em>

                        </Typography>
                        <Typography variant="h6" sx={{
                            color: '#00306e',
                            fontWeight: 'bold',
                            textAlign: { md: 'center', lg: 'center' },
                            ml: { xs: '5%', md: '0' },
                        }}>
                            John Doe
                        </Typography>
                        <Typography variant="subtitle2" sx={{
                            color: '#03A1C6',
                            fontWeight: 'bold',
                            textAlign: { md: 'center', lg: 'center' },
                            ml: { xs: '5%', md: '0' },
                        }}>
                            CEO
                        </Typography>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="h3" sx={{
                    color: '#00306e',
                    fontWeight: 'bold',
                    textAlign: { md: 'center', lg: 'center' },
                    ml: { xs: '5%', md: '0' },
                }}>
                    Contact us
                </Typography>
                <>
                    {
                        resize > 900 &&
                        <img src="/images/line.png" style={{ textAlign: "center" }} />
                    }

                    {
                        resize < 900 &&
                        <img src="/images/line.png" style={{ textAlign: "center", marginLeft: '5%' }} />
                    }
                </>
            </Box>
            <Contact />

            <Footer />



        </div >
    )
}

export default Home