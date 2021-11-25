import logo from "./logo.svg";
import "./App.css";
import React from "react";
import leather from "./images/leather.svg";
import checked from "./images/checked.png";
import brac from "./images/belt.png";

function App() {
  const [watch, setWatch] = React.useState([
    {
      piece: "centure",
      matieres: [
        {
          matName: "leather",
          textures: ["jeld tounes", "jeld suisse"],
          colors: ["red", "yellow", "blue"]
        },
        {
          matName: "Metal",
          textures: [""],
          colors: ["red", "black", "blue"]
        },
      ],
    },
    {
      piece: "dora",
      matieres: [
        {
          matName: "metal",
          textures: [""],
          colors: ["yellow", "gray"],
        },
      ],
    },
    {
      piece: "dial",
      matieres: [
        {
          matName: "numbers",
          textures: [""],
          colors: ["yellow", "gray", "blue"],
        },
        {
          matName: "akaréb",
          textures: [],
          colors: ["yellow", "gray", "blue"],
        },
        {
          matName: "dora westania",
          textures: ["txt dora1", "txt dora1", "txt dora1"],
          colors: [""],
        },
      ],
    },
  ]);
  const [activePiece, setActivePiece] = React.useState(0);
  const [activeMat, setActiveMat] = React.useState(0);
const setInit = (i)=>{
  setActiveMat(0);
  setActivePiece(i)
}
  return (
    <div className="App">
      <nav>
        <div className="logo"> Brand. </div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div className="content">
        <div className="content_text">
          <h1>Personaliser</h1>
          <p>
            Design your custom watch online and create an unique watch that fits
            your style
          </p>
        </div>
        <div className="content_left">
          <h3 style={{ borderBottom: "20px" }}>Les Matieres</h3>
          {watch[activePiece].matieres.map((m, i) => {
            return (
              <div
                style={{ border: activeMat == i ? "2px solid black" : null }}
                onClick={() => setActiveMat(i)}
              >
                {m.matName}{" "}
              </div>
            );
          })}
        </div>
        <div className="content_right">
          <div>
            <div className="title">Coleur</div>
            {/* <div className="title_secondary">Aqua blue</div> */}
            <div className="type_list">
              {watch[activePiece].matieres[activeMat].colors && watch[activePiece].matieres[activeMat].colors.map((c) => {
                return (
                  <div
                    style={{ backgroundColor: c }}
                    className="type_list_item"
                  ></div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="title">Textures</div>
            {/* <div className="title_secondary">Aqua blue</div> */}
            <div className="type_list">
              {watch[activePiece].matieres[activeMat].textures?.map((t) => {
                return (
                  <div style={{ width: "100%" }}>
                    <h4 style={{ color: "gray" }}>{t}</h4>
                    <br></br>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="content_right_bottom">
          <h3> £300.00</h3>
          <button> ADD TO CART </button>
        </div>
        <div className="content_bottom">
          <button
            className="content_bottom_button"
            onClick={() =>setInit(0)}
            style={{background:activePiece == 0? "black" : null}}
          >
            Bracelet
          </button>
          <button
            className="content_bottom_button"
            onClick={() => setInit(1)}
            style={{background:activePiece == 1? "black" : null}}

          >
            Box
          </button>
          <button
            className="content_bottom_button"
            onClick={() => setInit(2)}
            style={{background:activePiece == 2? "black" : null}}

          >
            Dial
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div style={{backgroundColor:"#884a26"}}  className="type_list_item"></div>
<div style={{backgroundColor:"#161a1c"}}  className="type_list_item"></div>
<div  style={{backgroundColor:"#838381"}} className="type_list_item"></div>
<div  style={{backgroundColor:"#7c918d"}} className="type_list_item"></div>
<div style={{backgroundColor:"#b0182c"}}  className="type_list_item"></div>
<div style={{backgroundColor:"#a0b594"}}  className="type_list_item"></div>
<div style={{backgroundColor:"#bab0a4"}}  className="type_list_item"></div>
<div style={{backgroundColor:"#796f69"}}  className="type_list_item"></div>
<div style={{backgroundColor:"#305a68"}}  className="type_list_item"></div>
<div style={{backgroundColor:"#fff"}}  className="type_list_item"></div>

<div style={{backgroundColor:"#64485a"}}  className="type_list_item"></div> */
}
