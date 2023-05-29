import React from 'react'
import { Button } from "@mui/material";

const ButtonHoc = ({ el, onHandleClickCourse }) => {
  return (
    <Button
      onClick={onHandleClickCourse}
      variant="contained"
      color="primary"
      style={{ marginLeft: "15px", borderRadius: "4px", backgroundColor: "white", color: "black", textTransform: "capitalize", height: "90%", "@media (maxWidth: 500px)": { width: "max-content" } }}
    >{el}</Button>
  )
}

export default ButtonHoc