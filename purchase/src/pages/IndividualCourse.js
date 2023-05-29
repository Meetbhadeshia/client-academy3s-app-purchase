import Footer from "../components/footer";
import Navbar from "../components/navbar";
import IndividualCourse from "../components/individualCourse/Main"

function CoursesLayout(props) {
    return (
        <>
            <Navbar />
            <IndividualCourse />
            <Footer />
        </>
    );
}

export default CoursesLayout;