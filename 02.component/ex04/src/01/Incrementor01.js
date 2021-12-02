import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            step: this.props.step,
            val: this.props.begin
        }
    }

    onClickPlusButton(e) {
        // this.state.value = this.state.value + this.props.step;

        this.setState({
            val: this.state.val + this.state.step
        })
    }

    onClickMinusButton(e) {

        this.setState({
            val: this.state.val - this.state.step
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickPlusButton.bind(this)}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
                {' '}
                {/* - 구현하기 */}
                <button onClick={this.onClickMinusButton.bind(this)}>
                    <strong>-</strong>
                </button>
            </div>
        );
    }
}