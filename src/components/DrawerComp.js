import { useState } from "react";
import { headerContent } from "./utils/utils";
import logo from "../assets/logo.png";
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
export default function DrawerComp() {
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
                  to={sentence}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#52CDFF" : "",
                  })}
                >
                  <ListItemButton
                    onClick={() => setOpenDrawer(false)}
                    key={item}
                  >
                    <ListItemIcon>
                      <ListItemText>{item}</ListItemText>
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
