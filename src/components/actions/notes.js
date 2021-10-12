export const startNewNote = () => {
    return ( dispatch, getState ) => {
        const state = getState();
        console.log(state);
    }
}