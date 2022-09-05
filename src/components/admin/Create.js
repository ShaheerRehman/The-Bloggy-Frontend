import styled from "@emotion/styled";
import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../../Axios";

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  mt: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const AvatarStyled = styled(Avatar)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
}));
// const FormStyled = styled(form)()

const ContStyled = styled(Container)(({ theme }) => ({
  height: "100vh",
  // maxWidth: "600px",
  marginTop: theme.spacing(10),
}));

export default function Create() {
  function slugify(string) {
    const a =
      "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    const b =
      "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
    const p = new RegExp(a.split("").join("|"), "g");

    return string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }

  const navigate = useNavigate();
  const [formData, updateFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
  });

  // console.log(formData.title);
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("admin/create/", {
        title: formData.title,
        slug: formData.slug,
        author: 1,
        excerpt: formData.excerpt,
        content: formData.content,
      })
      .then((res) => {
        navigate("/admin/");
      });
  };
  return (
    <ContStyled maxWidth="md">
      <CssBaseline />
      <PaperStyled>
        <AvatarStyled></AvatarStyled>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Post Title"
                name="title"
                autoComplete="title"
                onChange={(e) => {
                  updateFormData({
                    ...formData,
                    title: e.target.value,
                    slug: slugify(e.target.value),
                  });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Post Excerpt"
                name="excerpt"
                autoComplete="excerpt"
                multiline
                rows={4}
                onChange={(e) => {
                  updateFormData({ ...formData, excerpt: e.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Slug"
                name="slug"
                autoComplete="slug"
                value={formData.slug}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Post Content"
                name="content"
                autoComplete="content"
                multiline
                rows={4}
                onChange={(e) => {
                  updateFormData({ ...formData, content: e.target.value });
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => handleSubmit(e)}
          >
            Post
          </Button>
        </form>
      </PaperStyled>
    </ContStyled>
  );
}
