import React, { useState, useEffect } from 'react'
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Testimonial from "../testimonial/index"
import "./styles.css"

const About = () => {
    const [resize, setResize] = useState(window.innerWidth);

    function handleResize() {
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [resize]);

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
        <>
            <Box sx={{ margin: { md: '0 128px' }, padding: { xs: "20px", md: "70px 0" } }}>
                <Box sx={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h3" sx={{
                        color: '#00306e',
                        fontWeight: 'bold',
                        textAlign: { md: 'center', lg: 'center' },
                    }}>
                        Who we are
                    </Typography>
                    <img src="/images/line.png" style={{ textAlign: "center" }} />
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

            <Box sx={{ margin: { md: '0 128px' }, padding: { xs: "20px", md: "50px 0" } }}>
                <Box sx={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h3" sx={{
                        color: '#00306e',
                        fontWeight: 'bold',
                        textAlign: { md: 'center', lg: 'center' },
                    }}>
                        Our Vision
                    </Typography>
                    <img src="/images/line.png" style={{ textAlign: "center" }} />
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
                        }}>"</em>Academy3s envisions a world where professionals from all backgrounds have access to high-quality online education, empowering them to develop their skills, enhance their credentials, and achieve their career goals.
                        <em style={{
                            color: '#03A1C6',
                            fontWeight: 'bolder',
                        }}>"</em>
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ margin: { md: '0 128px' }, padding: { xs: "20px", md: "50px 0" } }}>
                <Box sx={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                    <Typography variant="h3" sx={{
                        color: '#00306e',
                        fontWeight: 'bold',
                        textAlign: { md: 'center', lg: 'center' },
                    }}>
                        Our Mission
                    </Typography>
                    <img src="/images/line.png" style={{ textAlign: "center" }} />
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
                        }}>"</em>The mission of Academy3s is to provide professionals globally with a comprehensive online learning experience. Through our curated library of short notes, study materials, flashcards, mock tests, and final test modules, we aim to offer accessible and flexible learning opportunities. Our platform enables individuals to acquire knowledge and earn certificates at their own convenience, using their own devices, anytime and anywhere.

                        Additionally, Academy3s extends its services to individuals seeking consulting, mentoring, or training assistance. We aim to support professionals in obtaining professional certifications, enhancing their critical job knowledge and skills, and improving workforce performance. Our focus is on enabling continuing professional development and growth for individuals in various industries.
                        <em style={{
                            color: '#03A1C6',
                            fontWeight: 'bolder',
                        }}>"</em>
                    </Typography>
                </Box>
            </Box>

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
                    }} variant="h5">
                        Successfully <br />
                        Trained <br />
                    </Typography>

                    <Typography variant="h3">67 <br /></Typography>
                    <Typography variant="subtitle1">ENROLLED LEARNERS</Typography>
                </div>
                <div style={{ background: '#d7d7d7', width: '.2px' }} />
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
        </>
    )
}

export default About