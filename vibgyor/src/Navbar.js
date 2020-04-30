import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';


import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            format: "hex",
            open:"true"
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            format: e.target.value
        });
        this.props.handleChange(e.target.value);
    }
    render() {
        const {level,changeLevel}=this.props;
        const {format} = this.state;
        return (
            <header className="Navbar"> 
                <div className="logo">
                    <a href="#">VIBGYOR</a>
                </div>
                <div className="slider-container">
                    <span>level : {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level}
                        min={100} 
                        max={900}
                        step={100}
                        onAfterChange={changeLevel} />
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff </MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255) </MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0) </MenuItem>
                    </Select>
                </div>
              <Snackbar 
              anchorOrigin={{vertical: "bottom", horizontal: "left"}}
              open = {this.state.open}
              autoHideDuration={3000}
              message={<span id="message-id">Format changed to {this.state.format} !</span>}
              />
            </header>
        )
    }
}
export default Navbar;