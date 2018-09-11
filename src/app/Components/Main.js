import React, { Component } from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setLevel } from "../Actions/LevelActions";
import { setOperation } from "../Actions/MathOperationActions";
import { Link } from "react-router-dom";

const Button = styled("button")``;

class Main extends Component {
    setLevelFunc = level => {
        this.props.setLevel(level);
    };
    setMathOperationFunc = mathOperation => {
        this.props.setOperation(mathOperation);
    };
    render() {
        return (
            <div>
                Main.js Math Operation --- {this.props.MathOperationReducer}
                <ul>
                    <li>
                        <Button
                            onClick={() => this.setMathOperationFunc("random")}
                        >
                            Random
                        </Button>
                    </li>
                    <li>
                        <Button
                            onClick={() => this.setMathOperationFunc("add")}
                        >
                            Add
                        </Button>
                    </li>
                    <li>
                        <Button
                            onClick={() =>
                                this.setMathOperationFunc("subtract")
                            }
                        >
                            Subtract
                        </Button>
                    </li>
                    <li>
                        <Button
                            onClick={() =>
                                this.setMathOperationFunc("multiplication")
                            }
                        >
                            Multiplication
                        </Button>
                    </li>
                    <li>
                        <Button
                            onClick={() =>
                                this.setMathOperationFunc("division")
                            }
                        >
                            Division
                        </Button>
                    </li>
                </ul>
                Level This is the level ---
                {this.props.LevelReducer}
                <ul>
                    <Button onClick={() => this.setLevelFunc(1)}>1</Button>
                    <Button onClick={() => this.setLevelFunc(2)}>2</Button>
                    <Button onClick={() => this.setLevelFunc(3)}>3</Button>
                </ul>
                <Link to="/play">Play</Link>
            </div>
        );
    }
}
function mapStateToProps({ LevelReducer, MathOperationReducer }) {
    return { LevelReducer, MathOperationReducer };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setLevel, setOperation }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
