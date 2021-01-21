import React, {useState} from 'react';


const EventPractice = () => {
    // const [username, setUsername] = useState('');
    // const [message, setMessage] = useState('');
    // const onChangeUsername = e => setUsername(e.target.value);
    // const onChangeMessage = e => setMessage(e.target.value);
    const [form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username, message} = form;
    const onChange = e => {
        const nextForm = {
            ...form, //기존의 form 내용 복사
            [e.target.name]: e.target.value //복사한 form의 값 변경
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        });
        // setUsername('');
        // setMessage('');
    };
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    };

    return (
    <div>
        <h1>이벤트 연습</h1>
        <input type="text" 
        name="username" 
        placeholder="username" 
        value={username} 
        onChange={onChange}></input>
        <input type="text" 
        name="message" 
        placeholder="message" 
        value={message} 
        onChange={onChange} 
        onKeyPress={onKeyPress}></input>
        <button onClick={onClick}>submit</button>
    </div>
    );
}

// class EventPractice extends Component {

//     state = {
//         username: '',
//         message: ''
//     };

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleClick = () => {
//         alert(this.state.username + ': ' + this.state.message);
//         this.setState({
//             username: '', 
//             message: ''
//         });
//     }

//     handleKeyPress = (e) => {
//         if(e.key === 'Enter') {
//             this.handleClick();
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input type="text" 
//                 name="username" 
//                 placeholder="username" 
//                 value={this.state.username} 
//                 onChange={this.handleChange}>
//                 </input>
//                 <input type="text" 
//                 name="message" 
//                 placeholder="write anything you want" 
//                 value={this.state.message}
//                 onChange={this.handleChange}
//                 onKeyPress={this.handleKeyPress}>
//                 </input>
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

export default EventPractice;