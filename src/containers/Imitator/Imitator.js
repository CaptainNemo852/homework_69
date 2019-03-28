import React, {Component} from "react";
import {connect} from "react-redux";
import Buttons from "./../../components/Buttons/Buttons";
import Display from "./../../components/Display/Display";
import EraseButtons from "./../../components/EraseButtons/EraseButtons";
import Reset from "./../../components/Reset/Reset";

const num = [];
const numLength = 3;
for (let i = 1; i <= numLength; i++) {
    num.push(i);
}


class Imitator extends Component {
    render() {
        return <div className="wrapper">
            {this.props.is_available ?
                <p className="allowed_text">Welcome!!!Access allowed</p>
                : null}
            {this.props.prohibited ?
                <p className="prohibited_text">ERROR!!! Access Prohibited</p>

                : null}
            <Display
                digit={this.props.digits.replace(/\d/g, "*")}
            />
            <div>
                {num.map(currentVal => {
                    return <Buttons
                        clicked={this.props.getInput}
                        val={currentVal}
                        key={currentVal}
                    />
                })}
            </div>
            <div>
                {num.map((currentVal) => {
                    return <Buttons
                        clicked={this.props.getInput}
                        val={currentVal + 3}
                        key={currentVal + 3}
                    />
                })}
            </div>
            <div>
                {num.map((currentVal) => {
                    return <Buttons
                        clicked={this.props.getInput}
                        val={currentVal + 6}
                        key={currentVal + 6}
                    />
                })}
            </div>
            <div>
                <EraseButtons
                    onDelete={this.props.deleteDigit}
                />
                <Reset
                    confirmation={this.props.confirmPassword}
                />
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        digits: state.digits,
        is_available: state.is_available,
        prohibited: state.prohibited
    }
};


const mapDispatchToProps = dispatch => {
    return {
        getInput: (value) => dispatch({type: "INPUT", value}),
        deleteDigit: () => dispatch({type: "DELETE"}),
        confirmPassword: () => dispatch({type: "COMPARE"})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Imitator);
