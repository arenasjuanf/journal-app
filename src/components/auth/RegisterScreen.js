import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/userForm'
import  validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { startRegisterEithEmailPasswordName } from '../actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: "juan felipe arenas",
        email: "juanfa107@gmail.com",
        password: "Juanf123*",
        password2: "Juanf123*"
    });

    const {name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault()
        isValidForm() && dispatch(startRegisterEithEmailPasswordName(email, password, name));
    } 

    const isValidForm = () => {
        if(!name){
            dispatch(setError("name is required"));
            return false;
        }else if( !validator.isEmail(email) ){
            dispatch(setError("email is not valid"));
            return false;
        }
        else if( password !== password2 ||  (password.length < 5)){
            dispatch(setError("password should be at least 6 characters and match each other"));
            return false;
        }

        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister }>
                {
                    msgError && (
                        <div className="auth__alert-error" >
                            { msgError }
                        </div>    
                    )   
                }

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={ handleInputChange }
                    value={ name }    
                />

                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={ email }    
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={ handleInputChange }
                    value={ password }    
                />

                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={ handleInputChange }
                    value={ password2 }    
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
