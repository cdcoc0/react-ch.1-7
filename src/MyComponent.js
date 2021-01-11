import React from 'react';

const MyComponent = props => {
    return (
        <div>My name is {props.name}😀</div>
    );
};

MyComponent.defaultProps = {
    name: 'default'
};

export default MyComponent;