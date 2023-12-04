import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import {
  Typography,
  Paper,
  Toolbar,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const DonutChart = () => {
  const metricOptions = [
    { label: "Clicks", value: "all" },
    { label: "Metric 1", value: "metric1" },
    { label: "Metric 2", value: "metric2" },
    { label: "Metric 3", value: "metric3" },
  ];

  const initialData = {
    all: [
      { name: "Male 40%", value: 30 },
      { name: "Female 35%", value: 25 },
      { name: "Unknown 25%", value: 20 },
    ],
    metric1: [
      { name: "Category A", value: 50 },
      { name: "Category B", value: 30 },
      { name: "Category C", value: 20 },
    ],
    metric2: [
      { name: "Type X", value: 40 },
      { name: "Type Y", value: 30 },
      { name: "Type Z", value: 30 },
    ],
    metric3: [
      { name: "Group 1", value: 25 },
      { name: "Group 2", value: 25 },
      { name: "Group 3", value: 50 },
    ],
  };

  const COLORS = ["#0088FE", "#ff9933", "#000000"];

  const [selectedMetric, setSelectedMetric] = React.useState("all");
  const [data, setData] = React.useState(initialData[selectedMetric]);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMetric(selectedValue);
    setData(initialData[selectedValue]);
  };

  return (
    <Paper style={{ padding: "20px", textAlign: "center" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Ad Insights</Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Metric</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selectedMetric}
              label="Metric"
              onChange={handleChange}
            >
              {metricOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
        </div>
      </Toolbar>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            innerRadius={80}
            fill="#8884d8"
            label={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            wrapperStyle={{
              right: "5%",
              top: "50%",
              transform: "translate(0%, -50%)",
            }}
            formatter={(value) => (
              <span style={{ color: "black" }}>{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default DonutChart;
