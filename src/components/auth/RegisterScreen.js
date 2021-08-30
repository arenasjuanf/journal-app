import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                />

                <button 
                    type="submit"
                    className="btn btn-primary btn-block mt-5 mb-5"
                >
                    Sign Up
                </button>

                <Link 
                    to="/auth/login"
                    className="link mt-1"
                >
                    Already registered?
                    
                </Link>

            </form>
        </>
    )
}
