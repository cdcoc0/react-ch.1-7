import React, {useState} from 'react';

const IterationSample = () => {

    const [names, setNames] = useState([
        {id: 0, text: 'snowman'},
        {id: 1, text: 'ice'},
        {id: 2, text: 'snow'},
        {id: 3, text: 'wind'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(4);

    const nameList = names.map(name => <li key={name.id}>{name.text}</li>);

    return(
        <ul>
            {nameList}
        </ul>
    );
}

export default IterationSample;