import { Box, Typography } from "@mui/material";
import React from "react";
import RelatedCourses from "./LeftBoxes/RelatedCourses";
import Slider from "../Slider/Slider";
import Information from "./RightBoxes/Information/Information";
import Description from "./LeftBoxes/Description"

const Boxes = () => {
  return (
    <>
      {/* //left-box */}
      <Box
        sx={{ width: "60%", "@media (max-width: 850px)": { width: "100%" } }}
      >
        {/* <VideoLink /> */}
        <Slider />
        <Description />
        {/* <Diff_category /> */}
        {/* <RelatedCourses /> */}
      </Box>

      {/* //right-box */}
      <Box
        sx={{
          width: "32%",
          "@media (max-width: 850px)": {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: { xs: '10px', md: "100px" },
          },
          "@media (max-width: 765px)": { display: "block", width: "100%" }
        }}
      >
        <Information />
        {/* <CourseCategory /> */}
      </Box>
    </>
  );
};

export default Boxes;
