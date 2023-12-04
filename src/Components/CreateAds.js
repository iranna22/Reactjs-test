import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdCard from "./AdCard";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CreateAds() {
  const [selectedAd, setSelectedAd] = useState(null);
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    if (selectedAd === "Text Ad") {
      console.log("Navigating to /text-ad");
      navigate("/text-ad");
    } else if (selectedAd === "Media Ad") {
      console.log("Navigating to /media-ad");
      navigate("/media-ad");
    }
  };

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", padding: "16px" }}
    >
      <Typography variant="h5" sx={{ marginBottom: 0.1, fontWeight: "bold" }}>
        Create Ads
      </Typography>

      <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
        <AdCard
          text={"Text Ad"}
          image_url={
            "https://images.unsplash.com/photo-1592496031762-230d5a32f6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dHN8ZW58MHx8MHx8fDA%3D"
          }
          onChange={(selectedText) => setSelectedAd(selectedText)}
        />
        <AdCard
          text={"Media Ad"}
          image_url={
            "https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.webp?b=1&s=170667a&w=0&k=20&c=ODFMGn1FLGl-xXAqS-GDEUBmhnqTD9PZ85yhhD2fDnE="
          }
          onChange={(selectedText) => setSelectedAd(selectedText)}
        />
      </div>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "16px", alignSelf: "flex-end", width: "150px" }}
        onClick={handleNextButtonClick}
      >
        Next
      </Button>
    </div>
  );
}
