import { Box, Button } from "@mui/material";
import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import EastIcon from "@mui/icons-material/East";
import ShareIcon from "@mui/icons-material/Share";
import LabelIcon from "@mui/icons-material/Label";
import GroupIcon from "@mui/icons-material/Group";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import LanguageIcon from "@mui/icons-material/Language";
import cartContext from "../../../../../context/carItems/cartContext";

const informationArray = [
  { id: 0, logo: <Person2Icon />, title: " Instructor", name: "Akash" },
  { id: 1, logo: <LabelIcon />, title: "Subject", name: "UX Design" },
  // { id: 2, logo: <GroupIcon />, title: "Enrolled", name: "56 students" },
  { id: 2, logo: <AccessTimeIcon />, title: "Duration", name: "3 Weeks" },
  // {
  //   id: 4,
  //   logo: <CollectionsBookmarkIcon />,
  //   title: "Lectures",
  //   name: "5 lectures",
  // },
  // { id: 4, logo: <LanguageIcon />, title: "Language", name: "Spanish" },
];

const Information = () => {
  const { setLocalCart, calculatePrice } = React.useContext(cartContext)

  const handleCart = () => {
    if (window.localStorage.getItem("cartItems") === null || JSON.parse(window.localStorage.getItem("cartItems")).length === 0) {
      console.log("1")
      const object = [{ index: 1, title: 'Academy3s IFCO CPO', price: 3000, src: '/images/courses/1.png' }]
      window.localStorage.setItem("cartItems", JSON.stringify(object))
      setLocalCart(object)
      calculatePrice()
    } else {
      const object = JSON.parse(window.localStorage.getItem("cartItems"))

      object.push({ index: 2, title: 'Academy3s inormation technology', price: 5000, src: '/images/courses/2.png' })

      window.localStorage.setItem("cartItems", JSON.stringify(object))
      setLocalCart(JSON.parse(window.localStorage.getItem("cartItems")))
      calculatePrice()
    }
  }

  return (
    <Box
      sx={{
        border: "1px solid lightGray",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        "@media (max-width: 765px)": { marginBottom: "30px" }
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid lightGray",
          paddingBottom: "25px",
          paddingTop: "25px",
          dispaly: "flex",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Button
          variant="contained"
          disabled
          style={{
            borderRadius: "4px",
            textTransform: "capitalize",
            height: "90%",
            fontSize: "25px",
            color: "rgb(50,112,252)",
            fontWeight: "600",
            backgroundColor: "rgb(250,250,250)",
          }}
        >
          ₹3000 RS
        </Button>

        <Button
          disabled
          variant="contained"
          style={{
            borderRadius: "4px",
            textTransform: "capitalize",
            height: "90%",
            fontSize: "17px",
            color: "gray",
            textDecoration: "line-through",
            backgroundColor: "rgb(250,250,250)",
          }}
        >
          ₹4000 RS
        </Button>

        <Button
          variant="contained"
          style={{
            borderRadius: "4px",
            backgroundColor: "white",
            textTransform: "capitalize",
            height: "90%",
            fontSize: "14px",
            color: "rgb(214,29,76)",
          }}
        >
          25% OFF
        </Button>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "20px",
        }}
      >
        {/* {informationArray.map((el) => {
          return (
            <Box
              sx={{
                width: "70%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "left",
                borderBottom: "1px solid lightGray",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
              key={el.id}
            >
              <Box sx={{ width: "50%", textAlign: "left" }}>
                <span>{el.logo}</span>&nbsp;&nbsp;&nbsp;
                <span>{el.title}</span>
              </Box>

              <Box
                sx={{
                  width: "35%",
                  textAlign: "left",
                }}
              >
                <span>{el.name}</span>
              </Box>
            </Box>
          );
        })} */}

        <Box sx={{ width: "70%", marginTop: "30px" }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: "4px",
              backgroundColor: "white",
              color: "black",
              textTransform: "capitalize",
              height: "50px",
              width: "100%",
              fontSize: "18px",
            }}
            onClick={handleCart}
          >
            Enroll Now &nbsp; &nbsp; <EastIcon color="primary" />
          </Button>
        </Box>

        <Box sx={{ marginTop: "30px", display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "17px" }}>Share this course</span>&nbsp;
          &nbsp;
          <Box
            sx={{
              padding: "5px",
              borderRadius: "100%",
              border: "1px solid gray",
              cursor: "pointer",
            }}
          >
            <ShareIcon color="primary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Information;
