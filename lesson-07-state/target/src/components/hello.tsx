import * as React from "react";

export interface IHelloProps { 
    // TODO
}

export interface IHelloState {
    activeName : number ;
    names : Array<String> ;
}

export class HelloState {
    activeName : number = 0 ;
    names : Array<String> = [] ;

    constructor(){
        this.names = [ "Tim" , "Alex" , "Andreas" , "Christian" , "Mario" , "Florian" , "Finn" , "Karsten" , "Louisa" , "Sven" , "Norbert" , "Anja" , "Joachim" ] ;
    }
}

// 'IHelloProps' describes the shape of props.
// 'IHelloState' describes the shape of state.
export class Hello extends React.Component<IHelloProps, IHelloState> {

    constructor( _Props : IHelloProps ){
        super( _Props );
        this.state = new HelloState();  
        this.onTimerTick = this.onTimerTick.bind(this);  
    }

    onTimerTick():void{
        this.state.activeName==this.state.names.length?this.resetState():this.triggerNext();
        setTimeout(this.onTimerTick , 100);
    }

    resetState():void{
        this.setState({
            activeName : 0
        });
    }

    triggerNext():void{
        this.setState({
            activeName : this.state.activeName + 1
        });
    }

    componentDidMount():void{
        setTimeout(this.onTimerTick , 100);
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

    render() {
        return <div className="helloworld">Hello, {this.state.names[this.state.activeName]}!</div>
    }
}