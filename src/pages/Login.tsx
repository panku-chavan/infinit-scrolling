import { useContext, useState } from 'react'
import "../styles/login.css"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    // console.log('authState: ', authState);
    const navigate = useNavigate()
    const [info, setInfo] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e: any) => {
        const { id, value } = e.target;
        setInfo({ ...info, [id]: value })
    }

    const { username, password } = info;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (username === "user" && password === "pass") {
            loginUser()
            navigate('/home')
        }
    }
    return (
        <div className='main' >
            <div>
                <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <br />
                <input type="text"
                    placeholder='Enter your Username'
                    id="username" value={username}
                    onChange={(e) => handleChange(e)}
                />
                <br />
                <label>Password</label>
                <br />
                <input type="password"
                    placeholder='Enter your password'
                    id="password" value={password}
                    onChange={(e) => handleChange(e)} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
