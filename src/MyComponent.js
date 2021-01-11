import React from 'react';

const MyComponent = ({name, children}) => {
    //const {name, children} = props;
    return (
        <div>
            My name is {name}😀 <br />
            children: {children}
        </div>
    );
};

MyComponent.defaultProps = {
    name: 'default'
};

export default MyComponent;