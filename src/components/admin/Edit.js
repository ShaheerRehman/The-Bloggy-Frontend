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
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../Axios";

const PaperStyled = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.secondary.main,
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

export const ContStyled = styled(Container)(({ theme }) => ({
  height: "100vh",
  // maxWidth: "600px",
  marginTop: theme.spacing(10),
}));

export default function Edit() {
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
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, updateFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    returnTitle: "",
    returnSlug: "",
    returnExcerpt: "",
    returnContent: "",
  });
  useEffect(() => {
    axiosInstance.get("admin/edit/postdetail/" + id).then((res) => {
      // console.log(res);
      updateFormData({
        ...formData,
        returnTitle: res.data.title,
        returnSlug: res.data.slug,
        returnAuthor: res.data.author,
        returnExcerpt: res.data.excerpt,
        returnContent: res.data.content,
      });
    });
  }, []);
  // console.log(returnData);
  const handleSubmit = (e) => {
    e.preventDefault();
    let submitData = {
      title: "",
      slug: "",
      author: 1,
      excerpt: "",
      content: "",
    };
    if (formData.title.length !== 0) {
      submitData.title = formData.title;
    } else {
      submitData.title = formData.returnTitle;
    }
    if (formData.slug.length !== 0) {
      submitData.slug = formData.slug;
    } else {
      submitData.slug = formData.returnSlug;
    }
    if (formData.excerpt.length !== 0) {
      submitData.excerpt = formData.excerpt;
    } else {
      submitData.excerpt = formData.returnExcerpt;
    }
    if (formData.content.length !== 0) {
      submitData.content = formData.content;
    } else {
      submitData.content = formData.returnContent;
    }
    axiosInstance
      .put("admin/edit/" + id, {
        title: submitData.title,
        slug: submitData.slug,
        author: 1,
        excerpt: submitData.excerpt,
        content: submitData.content,
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
                value={formData.returnTitle}
                onChange={(e) => {
                  updateFormData({
                    ...formData,
                    title: e.target.value,
                    slug: slugify(e.target.value),
                    returnTitle: e.target.value,
                    returnSlug: slugify(e.target.value),
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
                value={formData.returnExcerpt}
                onChange={(e) => {
                  updateFormData({
                    ...formData,
                    excerpt: e.target.value,
                    returnExcerpt: e.target.excerpt,
                  });
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
                value={formData.returnSlug}
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
                value={formData.returnContent}
                onChange={(e) => {
                  updateFormData({
                    ...formData,
                    content: e.target.value,
                    returnContent: e.target.value,
                  });
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
            Edit
          </Button>
        </form>
      </PaperStyled>
    </ContStyled>
  );
}
