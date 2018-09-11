import React, { Component } from "react";
import {numberReturn} from '../Mathutils/utils'

class DisplayMath extends Component {
    render() {
        return (
            <div>
                <span>DisplayMath.js</span>
                {JSON.stringify(numberReturn())}
            </div>
        );
    }
}

export default DisplayMath;
