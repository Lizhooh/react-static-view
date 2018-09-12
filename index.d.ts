import * as React from 'react';

interface IProps {
    element?: any,
    rendered?: number | boolean | Array<number>,

    children?: React.ReactChild,
}

export default class ReactStaticView extends React.Component<IProps> {

}