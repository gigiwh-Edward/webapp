import React from 'react';

export default (props) => {
    return (
        <span {...props}>{props.children}</span>
    );
}