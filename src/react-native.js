import React, { Component } from 'react';
import { View } from 'react-native';

/**
 * @param{Number|Boolean|Array} render
 */
export default class StaticView extends Component {

    static defaultProps = {
        render: 1,
    }

    constructor(props) {
        super(props);
        this._render = this.props.render || 1;
        this.renderCount = 0;   // 计数器
    }

    componentWillReceiveProps(nextProps) {
        this._render = nextProps.render;
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
        const { children = null, render, ...props } = this.props;
        return (
            <View {...props}>
                {children}
            </View>
        );
    }
}
