import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import takeOFF from "../../Assets/takeOff.png";
import landing from "../../Assets/landing.png";
import { Stations } from "./files/data";

const ResBar = () => {
  const [destination, setDestination] = React.useState("");
  const [back, setBack] = React.useState("");
  return (
    <div className="Res-container">
      <FormControl
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <InputLabel id="helperdest"> الوجهة </InputLabel>
        <Select
          labelId="helperdest"
          id="dest"
          value={destination}
          label="dest"
          onChange={(e) => {
            setDestination(e?.target.value);
          }}
        >
          {Stations[0].map((station) => {
            return (
              <MenuItem value={station.name} style={{ fontSize: "1.5em" }}>
                {station.name} - {station.country}
              </MenuItem>
            );
          })}
        </Select>
        <InputLabel id="helperback"> محطة العودة</InputLabel>
        <Select
          labelId="helperback"
          id="back"
          value={back}
          label="back"
          onChange={(e) => {
            setBack(e?.target.value);
          }}
        >
          {Stations[0]
            .filter((station) => station.name != destination)
            .map((station) => {
              return (
                <MenuItem value={station.name} style={{ fontSize: "1.5em" }}>
                  {station.name} - {station.country}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default ResBar;
