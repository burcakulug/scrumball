import React, {Component} from 'react';

const min = 240;
const max = 360;
const small = {height: `${min}px`, width: `${min}px`};
const large = {height: `${max}px`, width: `${max}px`};
const calculateFibSize = fibPoint => min / 20 * fibPoint;

function size(id) {
    switch (id) {
        case 'golfball':
            return {height: calculateFibSize(1) + 'px', width: calculateFibSize(1) + 'px'};
        case 'baseball':
            return {height: calculateFibSize(3) + 'px', width: calculateFibSize(3) + 'px'};
        case 'soccerball':
            return {height: calculateFibSize(5) + 'px', width: calculateFibSize(5) + 'px'};
        case 'basketball':
            return {height: calculateFibSize(8) + 'px', width: calculateFibSize(8) + 'px'};
        case 'beachball':
            return {height: calculateFibSize(13) + 'px', width: calculateFibSize(13) + 'px'};
        case 'yogaball':
            return {height: calculateFibSize(20) + 'px', width: calculateFibSize(20) + 'px'};
    }
}


class Ball extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.id);
    }

    render() {
        return (
            <div id={this.props.id}>
                <img src={this.props.image} alt="logo"
                     style={this.props.id === this.props.selected ? large : size(this.props.id)}
                     onClick={this.handleClick}
                />
            </div>
        );
    }
}

Ball.propTypes = {};
Ball.defaultProps = {};

export default Ball;
