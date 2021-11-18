import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/userForm'
import { startGoogleLogin, startLoginEmailPassword } from '../actions/auth'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);
    const [ formValues, handleInputChange ] = useForm({
        email:'juanfa107@gmail.com',
        password: 'Juanf123*'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault(); 
        dispatch(startLoginEmailPassword(email, password));
    };

    const handleGoogeLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title animate__animated animate__jackInTheBox" >Login</h3>
            <form onSubmit={handleLogin} className="animate__animated animate__jackInTheBox">
                <input
                    className="auth__input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <button 
                    disabled={ loading }
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Enter
                </button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                        onClick={ handleGoogeLogin }
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                    <Link 
                        to="/auth/register"
                        className="link"
                    >
                        Create new account
                    </Link>
                </div>
            </form>
        </>
    )
}
