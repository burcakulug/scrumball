import React, {Component} from 'react';
import './App.css';
import golfball from './Golf.png';
import baseball from './Baseball.svg.png';
import soccerball from './ball-306820_960_720.png';
import basketball from './Basketball.png';
import beachball from './beach-ball-575425_960_720.png';
import yogaball from './1-2-gym-ball-png-clipart.png';
import Ball from "./Ball";

const scrollTo = (href) => window.location = `#${href}`;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {selected: null};
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(selected) {
        this.setState((prevState) => {
                prevState.selected === selected
                return {selected: prevState.selected === selected ? null : selected};
            },
            () => {
                setTimeout(() => {
                        scrollTo(this.state.selected ? selected : 'top');
                    }
                , 2000)
            });
    }

    render() {
        return (
            <div id="top" className="App grid">
                {/*<header className="App-header">*/}
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<h1 className="App-title">Welcome to React</h1>*/}
                {/*</header>*/}
                {/*<p className="App-intro">*/}
                {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/**/}
                {/*</p>*/}
                {/*<img src={baseball} alt="logo" style={this.state.selected ? large : small} onClick={this.handleClick}/>*/}
                {/*<img src={soccerball} alt="logo" style={small}/>*/}
                {/*<img src={baseball} alt="logo" style={small}/>*/}
                {/*<img src={baseball} alt="logo" style={small}/>*/}
                {/*<img src={baseball} alt="logo" style={small}/>*/}
                <Ball id='golfball' image={golfball} onClick={this.handleClick} selected={this.state.selected}/>
                <Ball id='baseball' image={baseball} onClick={this.handleClick} selected={this.state.selected}/>
                <Ball id='soccerball' image={soccerball} onClick={this.handleClick} selected={this.state.selected}/>
                <Ball id='basketball' image={basketball} onClick={this.handleClick} selected={this.state.selected}/>
                <Ball id='beachball' image={beachball} onClick={this.handleClick} selected={this.state.selected}/>
                <Ball id='yogaball' image={yogaball} onClick={this.handleClick} selected={this.state.selected}/>
            </div>

        );
    }
}

export default App;
