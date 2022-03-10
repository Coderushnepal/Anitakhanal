import React from "react";
import Welcome from './Welcome';
import ClickMe from "./ClickMe";
import HoverMe from "./HoverMe";
import List from "./List";

import SpeedIndicator from "./SpeedIndicator";
import { Calculator } from "./Calculator";

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            list:["Apple"," Mango", "Orange", "Banana"],
        };
        this.handleListAdd = this.handleListAdd.bind(this);
    }


        handleListAdd(){
            const enteredFruit = prompt("Enter the name of fruit");

            if(!enteredFruit){
                return;
            }

            this.setState({list: [...this.state.list, enteredFruit]});

            console.log(enteredFruit);
        }

    render(){
        return(
            <>
            <Welcome name = "Anita Khanal" />
            <SpeedIndicator />
            <h1>Number of fruits = {this.state.list.length} </h1>
            <List list ={this.state.list} onAdd = {this.handleListAdd} />
            <ClickMe />
            <HoverMe />
            <Calculator />
           
            </>
        );
    }
}

export default App;