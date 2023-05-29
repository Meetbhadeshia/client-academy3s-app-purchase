import Banner from "../components/banner";
import Footer from "../components/footer/";
import Navbar from "../components/navbar/";
import Profile from "../components/profile";

function ProfileLayout(props) {
    return (
        <>
            <Navbar />
            <div className="main">
                <Banner title="Profile" />
                <Profile />
            </div>
            <Footer />
        </>
    );
}

export default ProfileLayout;