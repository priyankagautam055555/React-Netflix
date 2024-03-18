import './index.css';
//import App from './App';
import Card from './Card';
import Sdata from './data';

function App(storevalue) { 
    return (
        <>
            <Card
                imgsrc={storevalue.imgsrc}
                title={storevalue.title}
                sname={storevalue.sname}
                links = {storevalue.links}
                
        />
         {Sdata.map((storevalue, index ,Array) => { 
           
    return (
        <>
            <Card
                Key={storevalue.id}
                imgsrc={storevalue.imgsrc}
                title={storevalue.title}
                sname={storevalue.sname}
                links = {storevalue.links}
                
            />
        </>
    )
}
)}
        </>
    )
}
export default App;
