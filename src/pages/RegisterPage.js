import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerInitiate } from '../redux/reducers/usersReducer';
import { useNavigate } from 'react-router-dom';


const  RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
        navigate('home')
    }
    

    return (
        <div class="register_box">
            <h2>
                Регистрация
            </h2>
            <form onSubmit={handleSubmit}>
                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} class="register_box_input"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} class="register_box_input"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} class="register_box_input"/>
                <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} class="register_box_input"/>
                <button type={'submit'} class="register_box_button">Зарегистрироваться</button>
            </form>

        </div>
    );
};


export default  RegisterPage;