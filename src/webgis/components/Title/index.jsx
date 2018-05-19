import React from 'react';

export default function Title(props) {
    return (
        <span {...props}>{props.children}</span>
    );
}