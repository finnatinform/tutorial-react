import * as React from "react";
import * as ReactDOM from "react-dom";

let HElementToRender = <div className="helloworld" >Hallo Inform!</div> ;

ReactDOM.render(
    HElementToRender,
    document.getElementById("application")
);