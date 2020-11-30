import React from "react";

const BeyCard =(props)=> {
      console.log("props :", props)
      //  console.log("props.bey :", bey)  //  -- (Passing the Whole Object)


  // const { bey, clickHandler } = props;  //  ***
  ////  *** (Destructuring)
  // let name = props.name


  const clickHandlerOnCard =()=> { 
         //  X  console.log(props.bey.id) 
    props.clickHandler(props.idForClick)    
    //props.clickHandler(props)
  }
  //console.log(event.target) }

  return(
  <div className="card" 
  //  onClick={clickHandlerOnCard} 
  >
      <h2>{props.title}</h2>
      <img alt="TheQueen!" src={props.img} 
        onClick={clickHandlerOnCard} 
      />
       {/* {console.log(props)} */}
  </div>

)}

export default BeyCard;
