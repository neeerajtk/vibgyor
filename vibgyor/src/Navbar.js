import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Navbar extends Component {
    render() {
        const {level,changeLevel}=this.props;
        return (
            <header className="Navbar"> 
                <div className="logo">
                    <a href="#">VIBGYOR</a>
                </div>
                <div className="slider">
                <Slider defaultValue={level}
                 min={100} 
                 max={900}
                 step={100}
                 onAfterChange={changeLevel} />
                 </div>
            </header>
        )
    }
}
export default Navbar;