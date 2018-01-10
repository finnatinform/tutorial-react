import * as React from "react";

export interface IHelloProps { 
    name : string ;
}

export interface IHelloState {
    // TODO
}

// 'IHelloProps' describes the shape of props.
// State is never set so we use a '{}' type.
export class Hello extends React.Component<IHelloProps, IHelloState> {

    __InMounting : boolean ; // For Mounting Identifier in Render

    /**
     * Mounting
     */
    constructor( _Props : IHelloProps ){
        super( _Props );
        // log progress
        console.log('Mounting: 1/4');

        // Set default variables
        this.__InMounting = true ;

    }
    componentWillMount():void{
        console.log('Mounting: 2/4');
    }
    componentDidMount():void{
        console.log('Mounting: 4/4');
        this.__InMounting = false ;
    }

    /**
     * Updating
     */
    componentWillReceiveProps():void{
        console.log('Updating: 1/5');
    }
    shouldComponentUpdate( _NextProps : IHelloProps , _NextState : IHelloState , _NextContext : any ):boolean{
        console.log('Updating: 2/5');
        return true;
    }
    componentWillUpdate():void{
        console.log('Updating: 3/5');
    }
    componentDidUpdate():void{
        console.log('Updating: 5/5');
    }  

    /**
     * Unmounting
     */
    componentWillUnmount():void{
        console.log('Unmounting: 1/1');
    }

    /**
     * Error Handling
     */
    componentDidCatch():void{
        console.log('Error Handling: 1/1');
    }

    render() {
        if(this.__InMounting){
            console.log('Mounting: 3/4');
        } else {
            console.log('Updating: 4/5');
        }
        return <div className="helloworld">Hello, {this.props.name}!</div>
    }
}