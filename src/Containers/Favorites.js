import React, { Component } from "react";
import BeyCard from "../Components/BeyCard"


export default class Favorites extends Component { 


  renderBeys =()=> {return(
    this.props.appFavs.map(bey => 
    <BeyCard key={bey.id} title={bey.name} img={bey.img} fav={bey.favorite} 
    clickHandler={this.props.clickHandler}
    idForClick={bey.id}
    />)
  )}
  //console.log("renderBeys") }


  render(){ 
    //  console.log(this.props);
    
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderBeys()}
      </div>
  )}


}
