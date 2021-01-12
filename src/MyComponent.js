import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;
        return (
            <div>Hey {name}😁! <br />
            There is a {favoriteNumber}-dollar bill right in front of you! <br />
            children: {children}
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: 'default name'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;

// const MyComponent = ({name, favoriteNumber, children}) => {
//     return (
//         <div>
//             My name is {name}😀 <br />
//             children: {children} <br />
//             My favorite number is {favoriteNumber}
//         </div>
//     );
// };

// MyComponent.defaultProps = {
//     name: 'default'
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// };

// export default MyComponent;