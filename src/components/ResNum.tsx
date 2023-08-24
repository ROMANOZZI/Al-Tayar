import React from "react";
import { Box } from "@mui/system";
import { flights } from "./files/data";
const ResNum = ({ flights: [] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#B4D6F5",
        height: "min-content",
        borderRadius: "0.5em 0.5em 0 0",
      }}
    >
      <p className="Results">{`${flights.length} results found`}</p>
    </Box>
  );
};

export default ResNum;
