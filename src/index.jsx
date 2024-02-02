import React from "react";
import ReactDOM  from "react-dom/client";
import Hello from "./hello";


function App() {
    return (
        <React.Fragment>
            
           <Hello></Hello>
      
       </React.Fragment>
    )
}


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App/>);
