import React from "react";
import Netflix from './Netflix';
import Amazone from "./Amazone";
const favseries = "Netflix";
const App = () =>
{
    return(
        <> 
            {favseries === "Netflix" ? <Netflix /> : <Amazone />}
        </>
        )

    }
export default App;