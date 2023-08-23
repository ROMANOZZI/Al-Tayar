import React from "react";

const NavBar = () => {
  const [selected, setselected] = React.useState("home");
  return (
    <div className="Nav-container">
      <div className="Logo-container">
        <img
          src="../../Assets/flight-svgrepo-com.svg"
          alt="logo"
          className="Logo"
        />
        <h1 className="Logo-text">الطيار</h1>
      </div>
      <div className="Nav-links">
        <p
          className={`Nav-link ${selected == "home" && `Nav-selected`}`}
          onClick={() => {
            setselected("home");
          }}
        >
          الرئيسية
        </p>
        <p
          className={`Nav-link ${selected == "myBook" && `Nav-selected`}`}
          onClick={() => {
            setselected("myBook");
          }}
        >
          حجوزاتي
        </p>
        <p
          className={`Nav-link ${selected == "promo" && `Nav-selected`}`}
          onClick={() => {
            setselected("promo");
          }}
        >
          الخصومات
        </p>
      </div>
      <div className="user-container">
        <p className="user-name">Mohamed Salah</p>
        <img className="Avatar" src="../../Assets/pp.png"></img>
      </div>
    </div>
  );
};

export default NavBar;
