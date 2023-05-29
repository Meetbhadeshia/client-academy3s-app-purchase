import { Avatar, Box } from "@mui/material";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const relatedCourses = [
  {
    id: 0,
    imgUrl: "/images/courses/5.jpg",
    reviews: "4.2",
    students: "77",
    p: "The Most Complete Design Thinking Course On The Market",
    lessons: "4",
    fees: "68",
  },
  {
    id: 1,
    imgUrl: "/images/courses/6.jpg",
    reviews: "4.1",
    students: "75",
    p: "Everything You Need to Know About Business",
    lessons: "4",
    fees: "70",
  },
];

const RelatedCourses = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "left", marginTop: "50px" }}>
      <h3>Related Courses</h3>
      <Box
        sx={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gridTemplateRows: "auto",
          gap: "2%",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          "@media (max-width: 765px)": { display: "block", width: "100%", paddingBottom: "20px", gap: 0 }
        }}
      >
        {relatedCourses.map((el) => (
          <Box
            key={el.id}
            sx={{ border: "1px solid lightGray", borderRadius: "8px" }}
          >
            <Box sx={{ height: "30%", width: "100%" }}>
              <img
                alt="image2"
                src={el.imgUrl}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "8px 8px 0px 0px",
                }}
              />
            </Box>
            <Box
              sx={{
                height: "70%",
                width: "87%",
                paddingLeft: "7%",
                paddingTop: "2%",
                paddingBottom: "2%",
                paddingRight: "5%",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "5%",
                  color: "rgb(91,95,110)",
                }}
              >
                <Box>
                  <text>
                    <span style={{ color: "	rgb(139, 128, 0)" }}>
                      <StarBorderIcon />
                    </span>
                    &nbsp;&nbsp;{el.reviews} Reviews
                  </text>
                </Box>
                <Box>
                  <text>
                    <Person4OutlinedIcon />
                    &nbsp;&nbsp;{el.students} Students
                  </text>
                </Box>
              </Box>
              <p
                style={{
                  fontSize: "20px",
                  flexWrap: "wrap",
                  fontWeight: "600",
                }}
              >
                {el.p}
              </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  width: "max-content",
                }}
              >
                <Avatar
                  alt="Your avatar"
                  src=""
                  style={{ height: 30, width: 30 }}
                />
                <text>&nbsp;&nbsp;Akash Keshari</text>{" "}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "5%",
                }}
              >
                <Box>
                  <ArticleOutlinedIcon />
                  &nbsp;&nbsp;{el.lessons} Lessons
                </Box>
                <Box sx={{ fontSize: "20px", fontWeight: "500" }}>
                  ${el.fees}{" "}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RelatedCourses;
