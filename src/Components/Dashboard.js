import React from "react";
import ChartTable from "./ChartTable";
import CustomTable from "./CustomTable";

const Dashboard = () => {
  const data1 = [
    ["Cosmetics", 712, "USD 4272", 8, "USD 16568"],
    ["Serums", 3961, "USD 27331", 115, "USD 362526"],
    ["Facewash", 9462, "USD 76831", 123, "USD 266800"],
    ["Shampoo", 439, "USD 2151", 5, "USD 11029"],
    ["Conditioners", 1680, "USD 3864", 49, "USD 175245"],
    ["FacewashM", 4978, "USD 29370", 189, "USD 623106"],
    ["Total", 26510, "USD 143819", 489, "USD 1573563"],
  ];
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <CustomTable data={data1} />
      </div>
      <div style={{ flex: 1 }}>
        <ChartTable />
      </div>
    </div>
  );
};

export default Dashboard;
