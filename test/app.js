import React, { Component } from 'react';
import StaticView from './t';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                <StaticView rendered={false}>
                    <h3>{count} - rendered = false</h3>
                </StaticView>
                <StaticView rendered={true}>
                    <h3>{count} - rendered = true</h3>
                </StaticView>
                <StaticView>
                    <h3>{count} - rendered = default</h3>
                </StaticView>
                <StaticView rendered={3}>
                    <h3>{count} - rendered = 3</h3>
                </StaticView>
                <StaticView rendered={[1, 2, 5, 9]}>
                    <h3>{count} - rendered = [1, 2, 5, 9]</h3>
                </StaticView>

                <h3>{count}</h3>
                <button onClick={e => this.setState({ count: count + 1 })}>更新</button>
            </div>
        );
    }
}
