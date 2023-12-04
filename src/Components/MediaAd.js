import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function FormWith() {
  const [selectedItem, setSelectedItem] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleBack = () => {
    navigate("/create-ads");
    console.log("Back button clicked");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit button clicked");
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setRedirect(true);
    }, 600);
  };

  useEffect(() => {
    if (redirect) {
      navigate("/create-ads");
    }
  }, [redirect, navigate]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: 3,
        alignItems: "flex-start", 
        justifyContent: "flex-start",
        minHeight: "100vh",
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        position: "relative",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" sx={{ marginBottom: 0.1, fontWeight: "bold" }}>
        Create Text & Media
      </Typography>
      
      <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <InputLabel
            htmlFor="outlined-multiline-flexible-1"
            sx={{ fontWeight: "bold" }}
          >
            Heading 01
          </InputLabel>
          <TextField
            id="outlined-multiline-flexible-1"
            multiline
            maxRows={4}
            placeholder="Add a heading that would make user interested"
            style={{ width: "65ch" }}
          />

          <InputLabel
            htmlFor="outlined-multiline-flexible-2"
            sx={{ fontWeight: "bold" }}
          >
            Heading 02
          </InputLabel>
          <TextField
            id="outlined-multiline-flexible-2"
            multiline
            maxRows={4}
            placeholder="Add a heading that would make user interested"
            style={{ width: "65ch" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <InputLabel htmlFor="outlined-textarea" sx={{ fontWeight: "bold" }}>
            Description 01
          </InputLabel>
          <TextField
            id="outlined-textarea"
            placeholder="Add primary text to help user understand more about your products, services or offer"
            multiline
            rows={4}
            style={{ width: "73ch" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <InputLabel htmlFor="outlined-t3" sx={{ fontWeight: "bold" }}>
            Landscape Marketing Image (1.9:1)
          </InputLabel>
          <TextField
            id="outlined-t3"
            placeholder="Add the url of the image you want to use for the ad"
            multiline
            maxRows={4}
            style={{ width: "45ch",margin: "5px" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <InputLabel htmlFor="outlined-t4" sx={{ fontWeight: "bold" }}>
            Portrait Marketing Image(4:5)
          </InputLabel>
          <TextField
            id="outlined-t4"
            placeholder="Add the url of the image you want to use for the ad"
            multiline
            maxRows={4}
            style={{ width: "45ch", margin: "5px" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <InputLabel htmlFor="outlined-t5" sx={{ fontWeight: "bold" }}>
            Square Marketing Image(1:1)
          </InputLabel>
          <TextField
            id="outlined-t5"
            placeholder="Add the url of the image you want to use for the ad"
            multiline
            maxRows={4}
            style={{ width: "45ch", margin: "5px" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <InputLabel htmlFor="outlined-t6" sx={{ fontWeight: "bold" }}>
          Video URL
        </InputLabel>
        <TextField
          id="outlined-t6"
          placeholder="Add the url of the video you want to use for the ad"
          multiline
          maxRows={4}
          style={{ width: "140ch" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <InputLabel htmlFor="outlined-t7" sx={{ fontWeight: "bold" }}>
            Business Name
          </InputLabel>
          <TextField
            id="outlined-t7"
            placeholder="Add your business name"
            multiline
            maxRows={4}
            style={{ width: "65ch" }}
          />
        </div>

        <div>
          
          <InputLabel htmlFor="select-item" sx={{ fontWeight: "bold"}}>
  Button Label
</InputLabel>
<Select
  id="select-item"
  value={selectedItem}
  onChange={handleItemChange}
  style={{ width: "65ch", margin: "5px" }}
  displayEmpty
  inputProps={{ "aria-label": "Without label" }}
>
  <MenuItem value="" disabled>
    Select a label that best suits your ad
  </MenuItem>
  <MenuItem value="item1">Item 1</MenuItem>
  <MenuItem value="item2">Item 2</MenuItem>
  <MenuItem value="item3">Item 3</MenuItem>
</Select>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <InputLabel htmlFor="outlined-t8" sx={{ fontWeight: "bold" }}>
          Website URL
        </InputLabel>
        <TextField
          id="outlined-t8"
          //label="T8"
          placeholder="Add the url of the landing page"
          multiline
          maxRows={4}
          style={{ width: "140ch", marginBottom: "50px"}}
        />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: 24,
              maxWidth: "300px",
              margin: "auto",
              marginTop: "150px",
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 48, color: "blue" }} />
            <Typography variant="h6" gutterBottom>
              Submitted
            </Typography>
          </Box>
        </Fade>
      </Modal>

      
      <div style={{ position: "absolute", bottom: "20px", right: "20px" }}>
        <Button
          variant="outlined"
          style={{ marginRight: "10px", width: "130px", border:'black',color:'black',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)' }}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "10px", width: "130px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: 24,
              maxWidth: "300px",
              margin: "auto",
              marginTop: "150px",
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 48, color: "blue" }} />
            <Typography variant="h6" gutterBottom>
              Submitted
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}
