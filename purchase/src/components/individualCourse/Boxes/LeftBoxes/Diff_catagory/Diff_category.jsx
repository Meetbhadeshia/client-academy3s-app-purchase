import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import ButtonHoc from "../../../HOC/ButtonHoc";
import Description from "./Description";
import Curriculum from "./Curriculum";
import FAQs from "./FAQs";

const Diff_category = () => {
  const [content, setContent] = useState(<Description />);

  const onHandleClickDescription = () => {
    setContent(<Description />);
  };

  const onHandleClickCurriculum = () => {
    setContent(<Curriculum />);
  };

  const onHandleClickReviews = () => {
    setContent("on working Reviews page");
  };

  const onHandleClickFAQs = () => {
    setContent(<FAQs />);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          width: "100%",
          marginTop: "50px",
          paddingTop: "20px",
          paddingBottom: "20px",
          height: "50px",
          border: "1px solid rgb(242,244,249)",
          backgroundColor: "rgb(242,244,249)",
          "@media (max-width: 550px)": {
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gridTemplateRows: "auto",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <ButtonHoc
          el={"Description"}
          onHandleClickCourse={onHandleClickDescription}
        />
        <ButtonHoc
          el={"Curriculum"}
          onHandleClickCourse={onHandleClickCurriculum}
        />
        <ButtonHoc el={"Reviews"} onHandleClickCourse={onHandleClickReviews} />
        <ButtonHoc el={"FAQs"} onHandleClickCourse={onHandleClickFAQs} />
      </Box>

      <Box>{content}</Box>
    </>
  );
};

export default Diff_category;
