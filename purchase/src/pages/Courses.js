import { useState, useEffect } from "react"
import Banner from "../components/banner";
import Footer from "../components/footer/";
import Navbar from "../components/navbar/";
import ProductCards from "../components/productCard"
import Box from '@mui/material/Box';

function CoursesLayout(props) {
    const [resize, setResize] = useState(window.innerWidth);

    function handleResize() {
        setResize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [resize]);
    return (
        <>
            <Navbar />
            <div className="main">
                <Banner title="Courses" />
                <Box sx={{ padding: { xs: '5px', sm: '50px 0', md: '100px 128px' } }}>
                    <ProductCards />
                </Box>
            </div>
            <Footer />
        </>
    );
}

export default CoursesLayout;