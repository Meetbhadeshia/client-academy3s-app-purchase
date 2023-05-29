import Banner from "../components/banner";
import Footer from "../components/footer/";
import Navbar from "../components/navbar/";
import Contact from "../components/contact/";
import FAQ from "../components/faq"
import { Box, Typography } from "@mui/material"

function CoursesLayout(props) {
    return (
        <>
            <Navbar />
            <div className="main">
                <Banner title="Contact Us" />
                <Contact />
                <Box sx={{ padding: { xs: '0', md: '50px 128px 100px' } }}>
                    <Box sx={{ display: "flex", alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant="h3" sx={{
                            color: '#00306e',
                            fontWeight: 'bold',
                            textAlign: { md: 'center', lg: 'center' },
                            ml: { xs: '5%', md: '0' },
                        }}>
                            Frequently Asked Questions
                        </Typography>
                        <img src="/images/line.png" style={{ textAlign: "center" }} />
                    </Box>
                    <FAQ />
                </Box>
            </div>
            <Footer />
        </>
    );
}

export default CoursesLayout;