import { Box } from "@mui/material";
import React, { useState } from "react";

const faqs = [
  {
    id: 0,
    ques: "What are the different types of course?",
    ans: "Lobortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.",
  },
  {
    id: 0,
    ques: "What makes Echooling different from other?",
    ans: "obortis, nisl id! Facere voluptates veritatis interdum ac, occaecat orci vero consequat excepteur nibh aspernatur suspendisse? Mollitia facilisi autem magnam bibendum reiciendis.",
  },
];

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <h2>FAQs</h2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        {faqs.map((el) => {
          return (
            <Box
              key={el.id}
              sx={{
                width: "100%",
                height: "60px",
                border: "1px solid lightGray",
                marginBottom: "10px",
                paddingLeft: "20px",
              }}
            >
              <p onClick={onClickOpen}>{el.ques}</p>
              {/* <p style={{display:isOpen?"block":"none"}}>{el.ans}</p> */}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default FAQs;
