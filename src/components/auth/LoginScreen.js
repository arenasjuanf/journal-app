import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/userForm'

export const LoginScreen = () => {

    const [ formValues, handleIinputChange ] = useForm({
        email:'juanfa107@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form>
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={ email }
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                />
                <button 
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Enter
                </button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
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
