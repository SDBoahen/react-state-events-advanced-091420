import React, { Component } from "react";
import "./App.css";

import api from "./api";
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites";


class App extends Component { 

  state={ api, 

    favorites: [
    // { "id": 1,
    //   "name": "All Day Slay",
    //   "img": "https://media.giphy.com/media/3o6gb7cN7bwDxAbnS8/giphy.gif",
    //   "favorite": true }
    ] 
    
  }

 // ---- (Favorites) ----

  renderFavorites =(findFavsFromHere)=>{ 

    let currentFavs = findFavsFromHere.filter(bey => bey.favorite)
    this.setState({ favorites: currentFavs })

  }
  //console.log("FAVS!!")}




 // ---- Card Interactions ----

  addToFavorites =(idOnCard)=> { 
   //console.log("ID on Card: ", idOnCard)

    let tempAry = [...this.state.api]

    let cardToAddToFav = tempAry.find(bey => bey.id === idOnCard)
          console.log("Card to Add: ", cardToAddToFav)
        cardToAddToFav.favorite = true
    this.setState({ api: tempAry })

    this.renderFavorites(tempAry)

  }
  //console.log("ID on Card to Add: ", id) }
  //  **  GOAL:  Changing the value of (favorite) for that (Card)


  removeFromFavorites =(idOnCard)=> { 
    //console.log("ID on Card: ", idOnCard)
 
     let tempAry = [...this.state.api]
 
     let cardToAddToFav = tempAry.find(bey => bey.id === idOnCard)
           console.log("Card to Add: ", cardToAddToFav)
         cardToAddToFav.favorite = false
     this.setState({ api: tempAry })
 
     this.renderFavorites(tempAry)
     window.alert("I got a hot sauce in my bag!🌶👋🏾💫, swag!");
 
  }
  //console.log("ID on Card to Remove: ", id) }

 // ---- Card Interactions ----




  render(){  console.log("(state): ", this.state);  return(

    <div className="container" >
      <BeyContainer beyAPI={this.state.api} 
        clickHandler={this.addToFavorites} />
      <Favorites appFavs={this.state.favorites} 
        clickHandler={this.removeFromFavorites} />
    </div>

  )}


} export default App;









// import React from "react";
// import "./App.css";

// const App = () => {

//   return (
//     <div className="container" >

//     </div>
//   );
// };

// export default App;
