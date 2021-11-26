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
          colors: ['#161a1c', 'red' ,'#7c918d', '#bab0a4']
        },
        {
          matName: "Metal",
          textures: [],
          colors: ['#161a1c', '#838381' ,'#7c918d', '#b0182c', '#bab0a4']
        },
      ],
    },
    {
      piece: "Case",
      matieres: [
        {
          matName: "Metal",
          textures: [],
          colors: ["silver", "gold"],
        },
      ],
    },
    {
      piece: "Dial",
      matieres: [
        {
          matName: "Marker",
          textures: [],
          colors: ['#161a1c', '#838381' ,'#7c918d', '#b0182c', '#bab0a4'],
        },
        {
          matName: "Hand",
          textures: [],
          colors: ['#838381', "#64485a", '#b0182c'],
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
     
        <div className="ligne2" >
        <div className="content_left">
          <div  className=" title" style={{ borderBottom: "20px",padding:"0 4%" }}>Matieres </div>
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
        <div className="content_middle">

        </div>
        <div className="content_right">
          <div>
            {watch[activePiece].matieres[activeMat].colors.length > 0 && <div className="title">Coleurs</div>}
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
          <div >
          {watch[activePiece].matieres[activeMat].textures.length > 0 && <div className="title">Textures</div>}
            {/* <div className="title_secondary">Aqua blue</div> */}
            <div style={{marginLeft:"25px"}} className="type_list">
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
        </div>
        <div className="ligne3" >

        
        <div className="content_bottom">
        <div className="bottom-navigation">
  <div  onClick={()=>setInit(0,60)} className="nav-item " style={{color:"white !important"}} > Bracelet</div>
  <div onClick={()=>setInit(1,240)} className="nav-item" style={{color:activePiece == 1 ? "white !important":null}} >Cirlce</div>
  <div onClick={()=>setInit(2,420)} className="nav-item" style={{color:activePiece == 2 ? "black !important":"white !important"}} >Dial</div>
  <span style={{left:left}} className="nav-indicator"><div style={{height:"15px",width:'15px',borderRadius:"50%",backgroundColor:"white"}}></div></span>
</div>

        </div>
        <div className="content_right_bottom">
          <h3> £300.00</h3>
          <button> ADD TO CART </button>
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
