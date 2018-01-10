import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/hello";

ReactDOM.render(
    <Hello name="Christian" />,
    document.getElementById("application")
);

window.onclick = OnWindowClick ;

function OnWindowClick():void{
    ReactDOM.render(
        <Hello name="Anja" />,
        document.getElementById("application")
    );
}