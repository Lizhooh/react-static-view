import React, { Component } from 'react';

// check type
function isPropsType(p) {
    return !(typeof p === 'number' || typeof p === 'boolean' || Array.isArray(p));
}

const WARNTEXT = 'TypeError: react-static-view props render is not a number or boolean or array';

/**
 * @param{Number|Boolean|Array} render
 */
class StaticView extends Component {

    constructor(props) {
        super(props);
        if (isPropsType(this.props.rendered)) {
            console.warn(WARNTEXT);
            this.$render = 1;
        }
        else {
            this.$render = this.props.rendered;
        }
        this.renderCount = 0;
        this.n = 1;
    }

    componentWillReceiveProps(nextProps) {
        if (isPropsType(nextProps.rendered)) {
            console.warn(WARNTEXT);
            this.$render = 1;
        }
        else {
            this.$render = nextProps.rendered;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.renderCount++;

        if (typeof this.$render === 'boolean') {
            return this.$render;
        }
        else if (Array.isArray(this.$render)) {
            return this.$render.indexOf(this.renderCount) > -1;
        }
        else if (typeof this.$render === 'number') {
            return !(this.renderCount >= this.$render);
        }
    }

    render() {
        const { children = null, rendered, element, ...rest } = this.props;

        console.log('render:', this.n++);

        if (this.$render === false) return null;
        if (element === null) {
            return children;
        }
        return React.createElement(element, rest, children);
    }
}

StaticView.defaultProps = {
    rendered: 1,
    element: null,
}

export default StaticView;