import { Box, Button, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function MyModal({ open, setOpen, post }) {
  return (
    <Modal
      open={open.open}
      onClose={() => setOpen({ ...open, open: false })}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // mt: "25%",
          alignItems: "center",
          backgroundColor: "#111827",
          py: 3,
          width: "auto",
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          color="white"
        >
          Confirm Delete
        </Typography>
        <Typography id="modal-modal-description" color="white" sx={{ mt: 1 }}>
          Are you sure you want to delete "{post.title}" blog?
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
          <Link to={"/admin/delete/" + post.id}>
            <Button
              flexItem
              sx={{ mt: 1, mr: 3 }}
              variant="contained"
              color="error"
            >
              Confirm
            </Button>
          </Link>
          <Button
            sx={{ mt: 1, ml: 3 }}
            variant="contained"
            onClick={() => setOpen({ ...open, open: false })}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
