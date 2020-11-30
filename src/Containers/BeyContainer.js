import React from "react";
import BeyCard from '../Components/BeyCard'




class BeyContainer extends React.Component { 
  

 // ---- Card Related ----

  renderBeys =()=> {return(
    this.props.beyAPI.map(bey => 
      
    <BeyCard key={bey.id} title={bey.name} img={bey.img} fav={bey.favorite} 
    clickHandler={this.props.clickHandler}
    idForClick={bey.id}


   // *** Trying to Pass in the Whole Object

    // <BeyCard key={bey.id} bey={bey}
    // clickHandler={this.props.clickHandler}
    // idForClick={bey.id}
    
    />)
  )}
  //console.log("renderBeys") }


 // ---- Card Related ----


  render(){ 
    //  console.log(this.props);
    //  console.log(this.props.beyAPI);
    
    return (
    <div className="index">
      <h1>Index</h1>
        {this.renderBeys()}
         {/* <BeyCard/> */}
    </div>


)}} export default BeyContainer;
