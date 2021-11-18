import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active }  = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch(startSaveNote(active));
    }

    const handlePicture = (e) => {
        e.preventDefault();
        document.getElementById('imagenInput').click();
    }

    const handleFileChange = (e) => {
        const [img] = e.target.files;
        if(img){
            alert("'Imagen Subida'");
        }
    }

    return (
        <div className="notes__appbar">
            <span>28 de agosto 2020</span>
            <input 
                hidden
                type="file"
                id="imagenInput"
                onChange={ handleFileChange }
                name="file"
                accept="image/png, image/gif, image/jpeg"
            />
            <div>
                <button 
                    className="btn"
                    onClick={ handlePicture }    
                >
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
