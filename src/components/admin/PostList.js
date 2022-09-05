import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container } from "@mui/system";
import { Box, Button, CssBaseline, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { FormatAlignJustify } from "@mui/icons-material";
import MyModal from "./Modal";

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  // textDecoration:
}));
export default function PostList({ postData }) {
  const [open, setOpen] = useState({
    open: false,
    post: null,
  });
  return (
    <Container maxWidth="lg" sx={{ minHeight: "100vh", height: "auto" }}>
      <Typography color="primary" variant="h4" align="center" mt={12}>
        Latest Blogs
      </Typography>
      <TableContainer sx={{ mt: "10vh" }} component={Paper}>
        <Table aria-label="simple table" sx={{ tableLayout: "auto" }}>
          <TableHead>
            <CssBaseline />
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", minWidth: "6px" }}>
                Title
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                ID
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Category
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {postData?.map((post) => (
              <TableRow
                key={post.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <StyledLink to={"/post/" + post.slug}>
                    {post.title}
                  </StyledLink>
                </TableCell>
                <TableCell align="right">{post.id}</TableCell>
                <TableCell align="right">{post.category_name}</TableCell>
                <TableCell sx={{ display: "flex" }} align="right">
                  <DeleteIcon
                    // color="red"
                    sx={{ cursor: "pointer", color: "red" }}
                    onClick={() => {
                      // console.log(post);
                      setOpen({ open: true, post: post });
                    }}
                  />

                  <Link to={"/admin/edit/" + post.id}>
                    <EditIcon sx={{ color: "#0279BF", mx: 2 }} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} align="right">
                <Button
                  href={"/admin/create"}
                  variant="contained"
                  color="primary"
                >
                  New Post
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {open.open ? (
        <MyModal open={open} setOpen={setOpen} post={open.post} />
      ) : null}
      {/* {console.log(open)} */}
    </Container>
  );
}
