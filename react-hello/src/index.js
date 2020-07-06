import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld() {
    //JSX
    return [<Hello/>, <World/>];

    // JS
    // return React.createElement(
    //     'div',
    //     '{}',
    //     'Sup',
    //     ', world'
    // );
}

function Hello() {
    return (
        <span>Hello</span>
    );
}

function World() {
    return (
        <span>World</span>
    )
}

ReactDom.render(
    <HelloWorld/>,
    document.querySelector('#root')
);