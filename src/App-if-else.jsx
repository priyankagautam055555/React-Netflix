import React from "react";

import Netflix from './Netflix';
import Amazone from "./Amazone";

const favseries = "netflix";
const App = () => { 
    if (favseries === "netflix") {
        return(
            <Netflix />
          )  
    }
    else { 
        return (
            
            <Amazone/>
        )
    }
    

   
}


export default App;