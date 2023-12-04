import React, { useState } from "react";
import CustomTable from "./CustomTable";
import DonutChart from "./DonutChart";
import { Container, Box, Switch, Typography } from "@mui/material";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import TableChartIcon from "@mui/icons-material/TableChart";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";

const ChartTable = () => {
  const [isTableVisible, setTableVisible] = useState(false);
  const data2 = [
    ["Male", 348, "USD 12528", 42, "USD 62118"],
    ["Female", 692, "USD 24912", 35, "USD 5175"],
    ["Unknown", 105, "USD 3943", 3, "USD 4489"],
    ["Total", 1145, "USD 41383", 489, "USD 71782"],
  ];

  const toggleVisibility = () => {
    setTableVisible(!isTableVisible);
  };

  return (
    <Container>
      <Box>
        {isTableVisible ? <CustomTable data={data2} /> : <DonutChart />}
      </Box>
      <Box
        position="fixed"
        bottom={16}
        right={16}
        display="flex"
        alignItems="center"
      >
        <DonutSmallIcon style={{ fontSize: 30,marginLeft: 5, color: "#0088FE" }} />
        <Switch
          checked={isTableVisible}
          onChange={toggleVisibility}
          icon={<ToggleOffIcon />}
          checkedIcon={<ToggleOnIcon />}
        />
        <TableChartIcon style={{ fontSize: 30, marginRight: 5, color: "#0088FE" }} />
      </Box>
    </Container>
  );
};

export default ChartTable;
