import logo from "./logo.svg";
import "./App.css";
import React from "react";
import checked from "./images/checked.png";
import brac from "./images/belt.png";
import hand from "./images/hand.png"
import marker from "./images/marker.png"
import dial from "./images/dial.png"
import leather from "./images/leather.png"
import metal from "./images/Metal.png"
import case_Metal from "./images/case_Metal.png"

function App() {
  const [left, setLeft] = React.useState()

  const [watch, setWatch] = React.useState([
    {
      piece: "Strap",
      matieres: [
        {
          matName: "Leather",
          textures: ["Flat Grain", "Pebbled", "Embossed"],
          colors: ['#161a1c', 'red', '#7c918d', '#bab0a4']
        },
        {
          matName: "Metal",
          textures: [],
          colors: ['#161a1c', '#838381', '#7c918d', '#b0182c', '#bab0a4']
        },
      ],
    },
    {
      piece: "Case",
      matieres: [
        {
          matName: "Case Metal",
          textures: [],
          colors: ["silver", "gold"],
        },
      ],
    },
    {
      piece: "Dial",
      matieres: [
        {
          matName: "marker",
          textures: [],
          colors: ['#161a1c', '#838381', '#7c918d', '#b0182c', '#bab0a4'],
        },
        {
          matName: "hand",
          textures: [],
          colors: ['#838381', "#64485a", '#b0182c'],
        },
        {
          matName: "dial",
          textures: ["Dial texture 1", "Dial texture 2", "Dial texture 3"],
          colors: [],
        },
      ],
    },
  ]);
  const [activePiece, setActivePiece] = React.useState(0);
  const [activeMat, setActiveMat] = React.useState(0);
  const setInit = (i, l) => {
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
            <div className="type_list">
              {watch[activePiece].matieres.map((m, i) => {
                return (
                  <div
                    style={{ color: activeMat === i ? "orange" : null, cursor: "pointer" }}
                    onClick={() => setActiveMat(i)}
                    className="type_list_texture"
                  >

                    <div className="flex-c-c"> <img width='50px' height='auto' src={m.matName === "hand" ? hand : m.matName === "dial" ? dial : m.matName === "marker" ? marker : m.matName === "Metal" ? metal : m.matName === "Leather" ? leather : case_Metal} /> {m.matName}{" "} </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="content_middle">
            <div className="bottom-navigation-responsive ">
              <div onClick={() => setInit(0, 10)} className="nav-item " style={{ color: "white !important" }} > Bracelet</div>
              <div onClick={() => setInit(1, 125)} className="nav-item" style={{ color: activePiece === 1 ? "white !important" : null }} >Cirlce</div>
              <div onClick={() => setInit(2, 230)} className="nav-item" style={{ color: activePiece === 2 ? "black !important" : "white !important" }} >Dial</div>
              <span style={{ left: left }} className="nav-indicator"><div style={{ height: "8px", width: '8px', borderRadius: "50%", backgroundColor: "white" }}></div></span>
            </div>
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
              <div style={{ marginLeft: "25px" }} className="type_list">
                {watch[activePiece].matieres[activeMat].textures?.map((t) => {
                  return (
                    <div className="type_list_texture">
                      <h4 style={{ color: "gray" }}>{t}</h4>
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
              <div onClick={() => setInit(0, 60)} className="nav-item " style={{ color: "white !important" }} > {watch[0].piece}</div>
              <div onClick={() => setInit(1, 240)} className="nav-item" style={{ color: activePiece === 1 ? "white !important" : null }} >{watch[1].piece}</div>
              <div onClick={() => setInit(2, 420)} className="nav-item" style={{ color: activePiece === 2 ? "black !important" : "white !important" }} >{watch[2].piece}</div>
              <span style={{ left: left }} className="nav-indicator"><div style={{ height: "15px", width: '15px', borderRadius: "50%", backgroundColor: "white" }}></div></span>
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

