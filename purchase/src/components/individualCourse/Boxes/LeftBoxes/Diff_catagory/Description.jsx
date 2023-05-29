import { Box } from "@mui/material";
import React from "react";

const Description = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "justify", color: "rgb(91,95,109)" }}>
      <h2 style={{ color: "black", fontWeight: 500 }}>About This Course</h2>
      <p style={{ lineHeight: 1.5 }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat nis Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occae cat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>

      <p style={{ lineHeight: 1.5 }}>
        Sed ut perspiciatis unde om nis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo in ve ntore veritatis et qua architecto beatae vitae dicta sunt
        explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt neu e porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur ad ipisci velit, sed quia non numquame
        senius modi tempora incidunt ut labore et dolore magnam.
      </p>
      <Box>
        <img alt="img1" src="/images/courses/5.jpg" style={{ width: "100%" }} />
      </Box>
    </Box>
  );
};

export default Description;
