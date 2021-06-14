const rightsReducer =(state = false, action) => {
    switch (action.type){
        case 'ACCESS':
        return action.payload;
        default:
            return state;
        };
    

    }
    
    export default rightsReducer;