import { useState, useEffect } from "react"
import Footer from "../components/footer/";
import Navbar from "../components/navbar/";
import Checkout1 from "../components/checkout"

function Checkout() {
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
            {/* <Navbar /> */}
            <Checkout1 />
            {/* <Footer /> */}
        </>
    );
}

export default Checkout;