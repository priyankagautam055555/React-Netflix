import React from "react";
import Sdata from "./data";
import Card from "./Card";
const Netflix = () => { 
    return (
            <>
            <Card title={Sdata[1].title}
                imgsrc={Sdata[1].imgsrc}    
                sname={Sdata[1].sname}
                links={Sdata[1].links}/>
            </>
        )
}
export default Netflix;

