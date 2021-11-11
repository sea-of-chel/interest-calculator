const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'interest':
            return (state = action.payload);
        default:
            return state;
    }
};
export default reducer;
