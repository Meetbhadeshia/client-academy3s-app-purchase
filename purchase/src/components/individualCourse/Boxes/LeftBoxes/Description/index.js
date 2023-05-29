import React from 'react'
import { Box, Typography } from "@mui/material"

const CourseDescription = () => {
    return (
        <Box sx={{ display: "flex", gap: { md: '10px' }, flexDirection: 'column', padding: { xs: '10px 0', md: '20px 0' } }}>
            <Typography variant="h4">
                Description
            </Typography>
            <Typography variant="subtitle2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, reprehenderit nostrum. Nostrum, ipsa dicta id magnam animi, atque odit quaerat repellat recusandae distinctio deleniti quae assumenda? Vitae obcaecati rerum eaque!
            </Typography>
        </Box>
    )
}

export default CourseDescription