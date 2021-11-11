export const getPrincipal = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'principal',
            payload: amount,
        });
    };
};
export const getInterest = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'interest',
            payload: amount,
        });
    };
};
export const getYears = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'years',
            payload: amount,
        });
    };
};
export const getResults = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'results',
            payload: amount,
        });
    };
};
