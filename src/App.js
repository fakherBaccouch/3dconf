import logo from './logo.svg';
import './App.css';
import React from "react"
import leather from "./images/leather.svg"
import checked from "./images/checked.png"
import brac from "./images/belt.png"

function App() {
  const [watch,setWatch] = React.useState(
    
      {
        piece: "centure", matieres: [
          {
            matName: "leather",
            colors: ["red", "green", "blue"]
          },
          {
            MatName: "Metal"
            , texture: "7did gafsa",
            colors: ["red", "green", "blue"]
          }
        ]
      }
    
  )
  return (
    <div className="App">
<nav>
   
  <div className="logo"> Brand. </div>
  <ul><li>Home</li><li>Services</li><li>Portfolio</li><li>Contact us</li></ul></nav>
<div className="content">
  <div className="content_text">
  <h1>Personaliser</h1>
<p>Design your custom watch online and create an unique watch that fits your style</p>
  </div>
<div className="content_left" >
<div className="title">Leather Type</div>
<div className="title_secondary">Grainy</div>
<div className="type_list">
  <div style={{backgroundColor:"brown" ,height:"60px",width:"60px"}}  className="type_list_item"></div>
  <div style={{backgroundColor:"orange" ,height:"60px",width:"60px"}}  className="type_list_item"> <img height="15px" src={checked}/></div>
  <div style={{backgroundColor:"gray" ,height:"60px",width:"60px"}}  className="type_list_item"></div>

</div>

</div>
<div className="content_right" >
<div className="title">Coleur</div>
<div className="title_secondary">Aqua blue</div>
<div className="type_list">
  <div style={{backgroundColor:"#e2c4a7"}} className="type_list_item"> <img height="15px" src={checked}/></div>
  <div style={{backgroundColor:"#884a26"}}  className="type_list_item"></div>
  <div style={{backgroundColor:"#161a1c"}}  className="type_list_item"></div>
  <div  style={{backgroundColor:"#838381"}} className="type_list_item"></div>
  <div  style={{backgroundColor:"#7c918d"}} className="type_list_item"></div>
  <div style={{backgroundColor:"#b0182c"}}  className="type_list_item"></div>
  <div style={{backgroundColor:"#a0b594"}}  className="type_list_item"></div>
  <div style={{backgroundColor:"#bab0a4"}}  className="type_list_item"></div>
  <div style={{backgroundColor:"#796f69"}}  className="type_list_item"></div>
  <div style={{backgroundColor:"#305a68"}}  className="type_list_item"></div>
  <div style={{backgroundColor:"#fff"}}  className="type_list_item"></div>

  <div style={{backgroundColor:"#64485a"}}  className="type_list_item"></div>

</div>
</div>

<div  className="content_right_bottom"> 
<h3> £300.00</h3>
<button> ADD TO CART </button>

</div>
</div>

    </div>
  );
}

export default App;
