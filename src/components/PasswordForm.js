import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordForm = ({ onPasswordSubmit }) => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === '991155') {
            onPasswordSubmit();
            navigate('/', { replace: true }); // Use { replace: true } to replace the current entry in the history
        } else {
            alert('Incorrect password. Please try again.');
        }
    };

    return (
        <form onSubmit={handlePasswordSubmit}>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PasswordForm;
