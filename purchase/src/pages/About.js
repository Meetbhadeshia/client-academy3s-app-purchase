import Banner from "../components/banner";
import Footer from "../components/footer/";
import Navbar from "../components/navbar/";
import About from "../components/about/";
import Sidebar from "../components/sidebarForCart"

function CoursesLayout(props) {
    return (
        <>
            <Navbar />
            <div className="main">
                <Banner title="About Us" />
                <About />
            </div>
            <Footer />
        </>
    );
}

export default CoursesLayout;