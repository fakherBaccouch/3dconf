import logo from "./logo.svg";
import "./App.css";
import React from "react";
import leather from "./images/leather.svg";
import checked from "./images/checked.png";
import brac from "./images/belt.png";

function App() {
  const [left, setLeft] = React.useState(60)

  const [watch, setWatch] = React.useState([
    {
      piece: "Strap",
      matieres: [
        {
          matName: "Leather",
          textures: ["Flat Grain", "Pebbled","Embossed"],
          colors: ["red", "yellow", "blue"]
        },
        {
          matName: "Metal",
          textures: [],
          colors: ["red", "black", "blue"]
        },
      ],
    },
    {
      piece: "Case",
      matieres: [
        {
          matName: "Metal",
          textures: [],
          colors: ["yellow", "gray"],
        },
      ],
    },
    {
      piece: "Dial",
      matieres: [
        {
          matName: "Marker",
          textures: [],
          colors: ["yellow", "gray", "blue"],
        },
        {
          matName: "Hand",
          textures: [],
          colors: ["yellow", "gray", "blue"],
        },
        {
          matName: "Dial",
          textures: ["Dial texture 1", "Dial texture 2", "Dial texture 2"],
          colors: [],
        },
      ],
    },
  ]);
  const [activePiece, setActivePiece] = React.useState(0);
  const [activeMat, setActiveMat] = React.useState(0);
const setInit = (i,l)=>{
  setActiveMat(0);
  setActivePiece(i)
  setLeft(l)
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
          <div  className="content_left_top title" style={{ borderBottom: "20px",padding:"0 4%" }}>Matieres </div>
          {watch[activePiece].matieres.map((m, i) => {
            return (
              <div
                style={{ color: activeMat == i ? "orange" : null ,cursor:"pointer"}}
                onClick={() => setActiveMat(i)}
                className="mat_box"
              >
                {m.matName}{" "}
              </div>
            );
          })}
        </div>
        <div className="content_right">
          <div>
            {watch[activePiece].matieres[activeMat].colors.length > 0 && <div className="title">Coleur</div>}
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
          {watch[activePiece].matieres[activeMat].textures.length > 0 && <div className="title">Textures</div>}
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
        <div className="bottom-navigation">
  <div  onClick={()=>setInit(0,60)} className="nav-item " style={{color:"white !important"}} >Bracelet</div>
  <div onClick={()=>setInit(1,240)} className="nav-item" style={{color:activePiece == 1 ? "white !important":null}} >Cirlce</div>
  <div onClick={()=>setInit(2,420)} className="nav-item" style={{color:activePiece == 2 ? "black !important":"white !important"}} >Dial</div>
  <span style={{left:left}} className="nav-indicator"></span>
</div>

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
