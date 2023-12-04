// Import necessary dependencies
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

// Your React component
const AdCard = ({ text, image_url,onChange  }) => {
  // State to manage the checkbox
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Card style={{ height: "300px", position: "relative" }}>
        {/* Checkbox at the top left corner */}
        <Checkbox
          checked={checked}
          //onChange={() => setChecked(!checked)}
          onChange={() => {
            setChecked(!checked);
            onChange && onChange(text); // Pass the text value to the onChange prop
          }}
          color="primary"
          style={{ position: "absolute", top: 8, left: 8 }}
        />

        {/* Card content */}
        <CardContent>
          {/* Image at the center */}
          <CardMedia
            component="img"
            height="140"
            image={image_url} // Replace with your image URL
            alt="Your Image"
            style={{ margin: "auto", width: "50%" }}
          />

          {/* Two texts below the image */}
          <Typography variant="subtitle1" align="center">
            Add
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ fontWeight: "bold" }}
          >
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdCard;
