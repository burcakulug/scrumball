import React, {Component} from 'react';
import PropTypes from 'prop-types';

const small = {height: '100px', width: '100px'};
const large = {height: '300px', width: '300px'};

class Ball extends Component {
    constructor(props){
        super(props);
    //     this.state = {selected: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.id);
        // this.setState(prevState => {
        //     if (prevState.selected){
        //         window.location = '#top';
        //     } else
        //     {
        //         window.location = `#${this.props.id}`;
        //     }
        //     return {selected: !prevState.selected}
        // });
    }

    render() {
        return (
            <div id={this.props.id}>
                <img src={this.props.image} alt="logo" style={this.props.id === this.props.selected ? large : small}
                     onClick={this.handleClick}
                />
            </div>
        );
    }
}

Ball.propTypes = {};
Ball.defaultProps = {};

export default Ball;
