/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/userForm';
import { activeNote, startDeleting } from '../actions/notes';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const { active: note } = useSelector(state => state.notes);

    const [formValues, handleInputChanges, reset] = useForm(note);

    const {body, title, id} = formValues;

    const activeId = useRef(note.id);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    useEffect(() => {
        if(note.id !== activeId.current) {
            reset(note); activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch( activeNote(formValues.id, {...formValues}) )
    }, [dispatch, formValues]);

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input 
                    type="text"
                    placeholder="Title"
                    className="notes__title-input"
                    autoComplete="off"
                    name = 'title'
                    value={ title }
                    onChange={ handleInputChanges }
                />
                <textarea 
                    rows="" 
                    cols="" 
                    placeholder="What happened today?"
                    className="notes__textarea"
                    name = 'body'
                    value={ body }
                    onChange={ handleInputChanges }

                ></textarea>
                {
                    (note.url) 
                    && (
                        <div className="notes__image">
                            <img src="data:image/webp;base64,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"/>
                        </div>
                    )
                }
            </div>

            <button clasName="btn btn-danger" onClick={ handleDelete }>
                Delete
            </button>

        </div>
    )
}
