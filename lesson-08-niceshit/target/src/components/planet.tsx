import * as React from "react";
import PlanetData from "../data/planet-data";
import swal, { SweetAlertOptions } from "sweetalert2";

export interface IPlanetProps { 
    data : PlanetData ;
}

export interface IPlanetState {
}

// 'IHelloProps' describes the shape of props.
// 'IHelloState' describes the shape of state.
export class Planet extends React.Component<IPlanetProps, IPlanetState> {

    constructor( _Props : IPlanetProps ){
        super( _Props );
        this.onPlanetClick = this.onPlanetClick.bind(this);
    } 

    onPlanetClick():void{
        let HInfoText : string = `${this.props.data.name} has a population of ${this.props.data.population} individuals. The Surface is covered to ${this.props.data.surface_water}% by water, while the terrain is composed of ${this.props.data.terrain}. It was part of ${this.props.data.films.length} movies.`
        swal({
            title: this.props.data.name ,
            type:"info" ,
            text : HInfoText
        });
    }

    render() {
        return (
            <div className="planet" onClick={this.onPlanetClick}>
                <div className="planet-display ion-earth" style={ { fontSize : (this.props.data.diameter/350)+'px' } }></div>
                <div className="planet-title">{this.props.data.name}</div>
            </div>
        );
    }
}