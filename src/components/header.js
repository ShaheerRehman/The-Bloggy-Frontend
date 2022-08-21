import { headerContent } from "./utils/utils";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  useMediaQuery,
  useTheme,
  Grid,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import DrawerComp from "./DrawerComp";

export default function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar sx={{ background: "#111827" }}>
      <Toolbar>
        {/* <Container sx={{ display: { sm: "none", xs: "none", md: "flex" } }}> */}
        {/* <Grid md={4} lg={4}> */}
        <NavLink to="/">
          <img
            style={{ width: "35px", height: "40px", display: "inline-flex" }}
            src={logo}
            alt="logo"
          />
        </NavLink>
        {!isMatch ? (
          <Tabs sx={{ marginLeft: "auto" }} indicatorColor="secondary">
            {headerContent.map((item) => {
              let string = item.replace(/\s+/g, "").trim();
              let sentence = string.toLowerCase();
              sentence === "blogs" ? (sentence = "/") : (sentence = sentence);
              return (
                <NavLink
                  to={sentence}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    color: isActive ? "#52CDFF" : "",
                  })}
                >
                  <Tab label={item} key={item} />
                </NavLink>
              );
            })}
          </Tabs>
        ) : (
          <DrawerComp style={{ marginLeft: "auto" }} />
        )}
      </Toolbar>
    </AppBar>
  );
}
