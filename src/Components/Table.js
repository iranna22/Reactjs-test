import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import {
  HelpOutline,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

const CustomTable = () => {
  const classes = useStyles();
  const [sortOrder, setSortOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);

  const data = [
    ["Cosmetics", 712, "USD 4272", 8, "USD 16568"],
    ["Serums", 3961, "USD 27331", 115, "USD 362526"],
    ["Facewash", 9462, "USD 76831", 123, "USD 266800"],
    ["Shampoo", 439, "USD 2151", 5, "USD 11029"],
    ["Conditioners", 1680, "USD 3864", 49, "USD 175245"],
    ["FacewashM", 4978, "USD 29370", 189, "USD 623106"],
    ["Total", 26510, "USD 143819", 489, "USD 1573563"],
  ];

  const headers = ["Campaigns", "Clicks", "Cost", "Conversions", "Revenue"];

  const handleSort = (columnIndex) => {
    let newSortOrder;
    if (sortColumn === columnIndex) {
      newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    } else {
      newSortOrder = "asc";
    }

    setSortOrder(newSortOrder);
    setSortColumn(columnIndex);

    const rowsToSort = data.slice(0, data.length - 1);
    const sortedData = [...rowsToSort].sort((a, b) => {
      const valueA = a[columnIndex];
      const valueB = b[columnIndex];

      if (typeof valueA === "number" && typeof valueB === "number") {
        return newSortOrder === "asc" ? valueA - valueB : valueB - valueA;
      } else {
        return newSortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
    });

    setData([...sortedData, data[data.length - 1]]);
  };

  const [tableData, setData] = useState(data);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={4}>
              <Typography variant="h6" fontWeight="bold">
                Highlighted Text
              </Typography>
            </TableCell>
            <TableCell align="right">
              <IconButton>
                <HelpOutline />
              </IconButton>
            </TableCell>
          </TableRow>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                align="center"
                onClick={() => handleSort(index)}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {header}
                </Typography>
                <div className={classes.arrowContainer}>
                  <KeyboardArrowUp
                    color={
                      sortColumn === index && sortOrder === "asc"
                        ? "primary"
                        : "disabled"
                    }
                  />
                  <KeyboardArrowDown
                    color={
                      sortColumn === index && sortOrder === "desc"
                        ? "primary"
                        : "disabled"
                    }
                  />
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((rowData, rowIndex) => (
            <TableRow key={rowIndex}>
              {rowData.map((cellData, cellIndex) => (
                <TableCell key={cellIndex} align="center">
                  {cellData}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
