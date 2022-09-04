import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
  InputBase,
  alpha,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { loggedIn, loggedOut } from "./utils/utils";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 8,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export default function Header() {
  let headerContent = null;
  if (localStorage.getItem("refresh_token")) {
    headerContent = loggedIn;
  } else {
    headerContent = loggedOut;
  }

  useEffect(() => {}, [headerContent]);
  let navigate = useNavigate();
  const [data, setData] = useState({ search: "" });
  const theme = useTheme();
  const goSearch = () => {
    navigate({
      pathname: "/search/",
      search: "?search=" + data.search,
    });
    window.location.reload();
  };
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar sx={{ background: "#111827" }}>
      <Toolbar>
        <NavLink to="/">
          <img
            style={{ width: "35px", height: "40px", display: "inline-flex" }}
            src={logo}
            alt="logo"
          />
        </NavLink>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              goSearch(data.search);
            }}
          >
            <StyledInputBase
              value={data.search}
              onChange={(e) => setData({ search: e.target.value })}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </form>
        </Search>
        {!isMatch ? (
          <Tabs
            sx={{ marginLeft: "auto" }}
            indicatorColor="secondary"
            value={false}
          >
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
