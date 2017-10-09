import React, { Component } from 'react';

// check type
function isPropsType(p) {
    return !(typeof p === 'number' || typeof p === 'boolean' || Array.isArray(p));
}

/**
 * @param{Number|Boolean|Array} render
 */
export default class StaticView extends Component {

    static defaultProps = {
        render: 1,
        element: 'div',
    }

    constructor(props) {
        super(props);
        if (isPropsType(this.props.render)) {
            console.warn('TypeError: react-static-view props render is not a number or boolean or array');
            this._render = 1;
        }
        else {
            this._render = this.props.render;
        }
        this.renderCount = 0;
    }

    componentWillReceiveProps(nextProps) {
        if (isPropsType(nextProps.render)) {
            console.warn('TypeError: react-static-view props render is not a number or boolean or array');
            this._render = 1;
        }
        else {
            this._render = nextProps.render;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.renderCount++;

        if (typeof this._render === 'boolean') {
            return this._render;
        }

        else if (Array.isArray(this._render)) {

            if (this._render.indexOf(this.renderCount) !== -1) {
                return true;
            }
            else {
                return false;
            }
        }

        else if (typeof this._render === 'number') {
            if (this.renderCount >= this._render) {
                return false;
            }
            else {
                return true;
            }
        }
    }

    render() {
        const { children = null, render, element, ...props } = this.props;
        if (this._render === false) return null;

        return React.createElement(element, props, children);
    }
}
