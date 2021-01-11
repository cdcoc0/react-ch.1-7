import React from 'react';

const MyComponent = props => {
    return (
        <div>
            My name is {props.name}😀 <br />
            children: {props.children}
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'default'
};

export default MyComponent;