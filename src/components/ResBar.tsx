import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import takeOFF from "../../Assets/takeOff.png";
import landing from "../../Assets/landing.png";
import { Stations } from "./files/data";
import SvgIcon from "@mui/material/SvgIcon";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const ResBar = () => {
  const [destination, setDestination] = React.useState("");
  const [back, setBack] = React.useState("");
  const [type1, setType1] = React.useState("text");
  const [type2, setType2] = React.useState("text");
  return (
    <div className="Res-container">
      <div className="station-container">
        <FormControl
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InputLabel id="helperdest">
            <SvgIcon
              style={{
                width: "1.5em",
                position: "relative",
                top: "0.15em",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </SvgIcon>
            الوجهة{" "}
          </InputLabel>
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
        </FormControl>
        <p id="seprator">|</p>
        <FormControl
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InputLabel id="helperback">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="w-6 h-6"
              style={{
                width: "1em",
                position: "relative",
                top: "0.15em",
                marginRight: "0.5em",
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
            محطة العودة
          </InputLabel>
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
      <div className="date-container">
        <input
          type={type1}
          placeholder="تاريخ الذهاب"
          onFocus={() => {
            setType1("date");
          }}
          onBlur={() => {
            setType1("text");
          }}
          className="date"
        ></input>

        <input
          type="date"
          placeholder="تاريخ العودة "
          onFocus={() => {
            setType2("date");
          }}
          onBlur={() => {
            setType2("text");
          }}
          className="date"
        ></input>
      </div>
      <div className="btn-container">
        <button className="btn" value={"البحث عن رحلة"}>
          البحث عن رحلة
        </button>
      </div>
    </div>
  );
};

export default ResBar;
