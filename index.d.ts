import * as React from 'react';

interface IProps {
    element: React.ReactHTMLElement<HTMLElement | any>,
    rendered: number | boolean | Array<number>,
}

export default class ReactStaticView extends React.Component<IProps> { }