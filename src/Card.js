import React from "react";
import Images from "./Images";
import Title from './Title';
function Card(props) { 
    return (       
        <>
          <div className="cards">
                <div className="card">
                    
                    <Images imgsrc={props.imgsrc} />
                    
                    <div className="card_info">
                        <span className="card-category">{ props.title}</span>
                        <Title title={props.sname}/>
                        <a href={ props.links}>
                            <button>Watch now</button>
                        </a>
                        
                </div>    
                
                </div>
            </div>
           
        </>
        
    )
}

export default Card;
