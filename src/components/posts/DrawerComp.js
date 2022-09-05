import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { NavLink } from "react-router-dom";
import { loggedIn, loggedOut } from "../utils/utils";

export default function DrawerComp() {
  let headerContent = null;
  if (localStorage.getItem("refresh_token")) {
    headerContent = loggedIn;
  } else {
    headerContent = loggedOut;
  }

  useEffect(() => {}, [headerContent]);
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <NavLink to="/">
                <img
                  style={{
                    width: "65px",
                    height: "70px",
                    display: "inline-flex",
                    marginBottom: "10px",
                  }}
                  src={logo}
                  alt="logo"
                />
              </NavLink>
            </ListItemIcon>
          </ListItemButton>
          {headerContent.map((item) => {
            let string = item.replace(/\s+/g, "").trim();
            let sentence = string.toLowerCase();
            sentence === "blogs" ? (sentence = "/") : (sentence = sentence);
            return (
              <>
                <NavLink
                  key={item}
                  to={sentence}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#52CDFF" : "",
                  })}
                >
                  <ListItemButton onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                      <ListItemText key={item}>{item}</ListItemText>
                    </ListItemIcon>
                  </ListItemButton>
                </NavLink>
              </>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}
