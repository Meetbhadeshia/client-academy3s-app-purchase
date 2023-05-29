import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Slider = () => {
  return (
    <Card sx={{ height: "69.2vh", width: "100%" }}>
      <CardMedia
        component="img"
        image={"/images/individualCourse//image1.jpg"}
        alt={"image1"}
        style={{
          zIndex: -1,
          width: "100%",
          height: "100%",
          "@media (maxWidth: 1300px)": { width: "100%" },
          "@media (maxWidth: 850px)": { width: "100%" },

          "@media (maxWidth: 500px)": { width: "100%" },
        }}
      />
      <CardContent
        sx={{
          marginTop: "-450px",
          zIndex: 10,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          paddingLeft: "5%",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            paddingTop: { xs: "12%", md: "3%" },
            paddingLeft: "3%",

            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            textAlign: "left",


            "@media (maxWidth: 1300px)": { width: "70%" },
            "@media (maxWidth: 850px)": { width: "90%" },

            "@media (maxWidth: 500px)": { width: "100%" },
          }}
        >
          <Button
            variant="contained"
            sx={{ height: "60%", width: "max-content" }}
          >
            UX Design
          </Button>
          <h1
            style={{
              color: "white",
              flexWrap: "wrap",
              marginLeft: 0,
              paddingLeft: 0,
              paddingRight: { md: "15%" },
              marginTop: "1%",
              fontSize: "45px",
            }}
          >
            Dave Conservatoire Is The Entirely Free Online
          </h1>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "60%",
              color: "white",

              width: "max-content",
              "@media (maxWidth: 500px)": {
                width: "100%",
                display: "block",
                lineHeight: 2,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                width: "max-content",
                "@media (maxWidth: 500px)": { marginLeft: "18px" },
              }}
            >
              <Avatar
                alt="Your avatar"
                src=""
                style={{ height: 30, width: 30 }}
              />
              <text>&nbsp;&nbsp;Dilip Rao Sir</text>{" "}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Slider;
