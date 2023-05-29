import { Box, Button } from "@mui/material";
import React from "react";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const curriculum = [
  {
    id: 0,
    h3: "Week1",
    text: "0/4",
    p: "",
    h2: " 2 Videos,1 Audio,1 Reading",
    span1: "Greetings and Introductions",
    span2: "12 minutes",
    btn: "2 questions",
    level: "Beginners level",
  },

  {
    id: 1,
    h3: "Week2",
    text: "0/4",
    p: "",
    h2: " 2 Videos,1 Audio,1 Reading",
    span1: "Greetings and Introductions",
    span2: "12 minutes",
    btn: "2 questions",
    level: "Intermediate level",
  },

  {
    id: 2,
    h3: "Week3",
    text: "0/4",
    p: "",
    h2: " 2 Videos,1 Audio,1 Reading",
    span1: "Greetings and Introductions",
    span2: "12 minutes",
    btn: "2 questions",
    level: "Advanced level",
  },
];

const Curriculum = () => {
  return (
    <>
      {curriculum.map((el) => {
        return (
          <Box
            sx={{
              width: "100%",
              backgroundColor: "rgb(247,247,248)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              marginBottom: "30px",
              paddingBottom: "30px",
            }}
          >
            <Box sx={{ width: "90%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid lightGray",
                }}
              >
                <h3>{el.h3}</h3>
                <text style={{ fontSize: "18px" }}>{el.text}</text>
              </Box>

              <Box>
                <h2 style={{ color: "black", fontWeight: 500 }}>{el.level}</h2>
                <p style={{ lineHeight: 1.5, color: "rgb(91,95,109)" }}>
                  {el.p}
                </p>
              </Box>

              <Box sx={{ width: "100%" }}>
                <h2 style={{ color: "black", fontWeight: 500 }}>{el.h2}</h2>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Box>
                    <span>
                      <VideoCameraBackOutlinedIcon />
                    </span>
                    &nbsp;&nbsp;
                    <span
                      style={{
                        fontSize: "17px",
                        width: "60%",
                        fontWeight: "600",
                        color: "rgb(0,57,159)",
                      }}
                    >
                      Video:
                    </span>
                    <span style={{ color: "rgb(91,95,109)" }}>{el.span1}</span>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "38%",
                    }}
                  >
                    <Box>
                      <span>
                        <AccessTimeOutlinedIcon />
                      </span>
                      &nbsp;&nbsp;
                      <span style={{ color: "rgb(91,95,109)" }}>
                        {" "}
                        {el.span2}
                      </span>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        style={{
                          color: "rgb(248,107,51)",
                          backgroundColor: "white",
                          textTransform: "lowerCase",
                        }}
                      >
                        {el.btn}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default Curriculum;
