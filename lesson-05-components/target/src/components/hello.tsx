import * as React from "react";

export interface IHelloProps { 
    name : string;
}

export interface IHelloState {
    // Todo
}

// 'IHelloProps' describes the shape of props.
// State is never set so we use a '{}' type.
export class Hello extends React.Component<IHelloProps, IHelloState> {
    render() {
        return <div className="helloworld">Hello, {this.props.name}!</div>
    }
}