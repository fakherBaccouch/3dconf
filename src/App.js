import logo from './logo.svg';
import './App.css';
import React from "react"
import leather from "./images/leather.png"
import checked from "./images/checked.png"
import brac from "./images/bra.png"

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
    <div className="App_left">
   <div className="App_left_nav">
   <div>
<img width="60px" height="auto" src={brac}/>
<h4>Bracelt</h4>
   </div>
   <div>
<img width="60px" height="auto" src={brac}/>
<h4>Bracelt</h4>
   </div><div>
<img width="60px" height="auto" src={brac}/>
<h4>Bracelt</h4>
   </div>

   </div>
   <div className="App_left_content"></div>
    </div>
    <div className="App_right">
<h2>configuration de ceinture de montre (Leather)</h2>
<div className="active_block">

<img width="100px" height="auto" src={leather}/>
</div>
<p>sélectionner votre couleur préférée</p>
<div className="color_block">
 <div className="color_block_text">Red</div>  <div style={{backgroundColor:"red"}} className="color_block_color"></div>
</div>
<div className="color_block">
 <div className="color_block_text">Green</div>  <div  style={{backgroundColor:"green"}} className="color_block_color"></div>
</div>
<div className="color_block">
 <div className="color_block_text">orange</div>  <div  style={{backgroundColor:"orange"}} className="color_block_color"> <img src={checked} width="35px" height="auto"/></div>
</div>
<div className="color_block">
 <div className="color_block_text">Blue</div>  <div  style={{backgroundColor:"blue"}} className="color_block_color"></div>
</div>


    </div>
    </div>
  );
}

export default App;
