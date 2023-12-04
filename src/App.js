import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import Dashboard from "./Components/Dashboard";
import { styled } from "@mui/system";
import CreateAds from "./Components/CreateAds";
import TextAd from "./Components/TextAd";
import MediaAd from "./Components/MediaAd";

const StyledAppBar = styled(AppBar)({
  "&.MuiAppBar-root": {
    background: "white",
    color: "black",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  },
});

const App = () => {
  return (
    <Router>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            APP LOGO
          </Typography>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography
              variant="h6"
              style={{ marginRight: "20px", color: "black" }}
            >
              Dashboard
            </Typography>
          </Link>
          <Link
            to="/create-ads"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Typography variant="h6" style={{ color: "black" }}>
              CreateAds
            </Typography>
          </Link>
        </Toolbar>
      </StyledAppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-ads" element={<CreateAds />} />
          <Route path="/text-ad" element={<TextAd />} />
          <Route path="/media-ad" element={<MediaAd />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
