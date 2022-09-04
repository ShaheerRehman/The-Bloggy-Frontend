import React, { useState, useEffect } from "react";
import { Container, CssBaseline, Typography, Box } from "@mui/material";
import axiosInstance from "../Axios";
import { useParams } from "react-router-dom";
import ApiContext from "./ApiContext";
import { useContext } from "react";

export default function Post() {
  // const [api] = useContext
  const { slug } = useParams();
  const [data, setData] = useState({ posts: [] });
  useEffect(() => {
    axiosInstance.get("posts/" + slug).then((res) => {
      setData({ posts: res.data });
      console.log(res.data);
    });
  }, [setData]);
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "#111827",
        color: "white",
        // color: "primary.main",
        mt: 5,
      }}
    >
      <Container fixed>
        {/* <CssBaseline /> */}
        <Typography sx={{ pt: 5 }} align="center" variant="h3">
          {data.posts.title}
        </Typography>
        <Typography align="center" variant="h5">
          {data.posts.excerpt}...
        </Typography>
        <Typography sx={{ pt: 3 }} variant="h6">
          {data.posts.content}
        </Typography>
      </Container>
    </Box>
  );
}
