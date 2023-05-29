import Biography from "./Biography";
import ProfileIntro from "./profileIntro";
import "./profile.css";
import { useState, useContext } from "react";
import Course from "../courses";
import SmallCards from "./SmallCards";
import loginContext from "../../context/auth/authContext"
import ProductCard from "../productCard"
import { Box, Button, Typography } from "@mui/material"

function Profile() {
    const [follow, setFollow] = useState(true);
    const { localLogIn, setLocalLogIn } = useContext(loginContext)
    const doLogout = () => {
        window.localStorage.removeItem("isLoggedIn")
        setLocalLogIn(window.localStorage.getItem("isLoggedIn"))
    }
    const ProfileData = [
        {
            id: 1,
            name: "Douglas Lyphe",
            phone: "+(088) 223 478 365",
            email: "douglas@echooling.com",
        },
    ];

    const BiographyData = [
        {
            id: 1,
            title: "Biography",
            text1: "Why I say old chap that is spiffing he legged easy peasy.",
            text2:
                "Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate.",
        },
    ];
    const smallCardsData = [
        {
            id: 1,
            counter: 28,
            text: "foreign followers",
        },
        {
            id: 2,
            counter: 10,
            text: "Classes complete",
        },
        {
            id: 3,
            counter: 208,
            text: "Students enrolled",
        },
    ];

    function handleFollow() {
        setFollow(!follow);
    }

    return (
        <div className="profile">
            <div className="container">
                <div className="profile-inner">
                    <div className="profile-content">
                        {ProfileData.map((item) => (
                            <ProfileIntro
                                key={item.id}
                                name={item.name}
                                phone={item.phone}
                                email={item.email}
                                socials={item.socials}
                            />
                        ))}
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <Typography variant="h5">My courses</Typography>
                            <ProductCard />
                            <Button sx={{ width: "25%" }} variant="contained" color="error" onClick={doLogout}>logout</Button>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;