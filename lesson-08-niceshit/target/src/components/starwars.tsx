import * as React from "react";
import * as $ from "jquery";
import { Planet } from "./planet";

export interface IStarWarsProps { }

export interface IStarWarsState {
    // Meta Data
    InLoading: boolean;
    ErrorWhileLoading: boolean;

    // Star Wars Data
    next: string;
    previous: string;
    results: Array<any>;
}

export class StarWarsState {
    // Meta Data
    InLoading: boolean;
    ErrorWhileLoading: boolean;

    // Star Wars Data
    next: string;
    previous: string;
    results: Array<any>;
}


export class StarWars extends React.Component<IStarWarsProps, IStarWarsState> {

    constructor(_Props: IStarWarsProps) {
        super(_Props);
        this.state = new StarWarsState();
        this.onLoadDataSuccess = this.onLoadDataSuccess.bind(this);
    }

    componentWillMount(): void {
        this.loadData('https://swapi.co/api/planets/?format=json&page=1');
    }

    onLoadDataSuccess(_Answer: any): void {
        // Hide Loading
        _Answer.InLoading = false;
        // Save Data
        this.setState(_Answer);
    }

    loadData(_Url: string): void {
        // Show Loading
        this.setState({
            InLoading: true
        });
        // Load Data
        $.get(_Url, this.onLoadDataSuccess);
    }

    renderStatus(): JSX.Element {
        let HStatusMessage: string = "";
        if (this.state.ErrorWhileLoading) {
            HStatusMessage = "Dein Raumschiff ist abgestürzt :(";
        } else if (this.state.InLoading) {
            HStatusMessage = "Universum wird erkundet..";
        } else if (this.state.results.length === 0) {
            HStatusMessage = "Alle Planeten wurden von einem schwarzen Loch geschluckt :(";
        }
        return <div className="status">{HStatusMessage}</div>
    }

    renderPlanets(): JSX.Element {
        let HPlanets : Array<JSX.Element> = [] ;

        for( let HIndex : number = 0; HIndex < this.state.results.length ; HIndex++ ){
            HPlanets.push(<Planet data={this.state.results[HIndex]} />);
        }
        
        return <div className="planets" >{HPlanets}</div>;
    }
    renderNextButton(_Left: boolean, _Url: string): JSX.Element {
        let HArrowClass: string = "arrow ";
        if(_Url){
            if (_Left) {
                HArrowClass += "ion-chevron-left";
            } else {
                HArrowClass += "ion-chevron-right";
            }
            return <div className={HArrowClass} onClick={() => this.loadData(_Url)}></div> ;
        }
        return <div className={HArrowClass}></div> ;
    }
    renderContent(): Array<JSX.Element> {
        let HResult: Array<JSX.Element> = [];
        if (this.state.ErrorWhileLoading || this.state.InLoading || this.state.results.length === 0) {
            HResult.push(this.renderStatus());
        } else {
            HResult.push(this.renderNextButton(true, this.state.previous));
            HResult.push(this.renderPlanets());
            HResult.push(this.renderNextButton(false, this.state.next));
        }
        return HResult;
    }
    render() {
        return (
            <div className="starwars">
                {this.renderContent()}
            </div>
        );
    }
}