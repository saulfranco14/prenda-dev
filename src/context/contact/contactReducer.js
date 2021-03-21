import { 
    FORM_CONTACT, 
    GET_CONTACT, 
    INSERT_CONTACT, 
    VALIDATE_FORM,
    VISUALIZE_CONTACT,
    DESACTIVE_CONTACT,
    ERROR_CONTACT,
} from '../../types';

export default ( state, action ) => {
switch( action.type ) {

    case FORM_CONTACT: 
        return{
            ...state,
            formNewContact : true,
        }

    case GET_CONTACT: 
        return{
            ...state,
            contacts : action.payload,
        }
   
    case INSERT_CONTACT: 
        return{
            ...state,
            contacts        : [...state.contacts, action.payload],
            formNewContact  : false,
            errorForm       : false,
        }
    
    
    case VALIDATE_FORM: 
        return{
            ...state,
            errorForm : true,
        }
    
    case VISUALIZE_CONTACT: 
        return{
            ...state,
            contactVisualize : state.contacts.filter( contact =>
                contact._id === action.payload  
            ),
        }
    
    case DESACTIVE_CONTACT:
        return{
            ...state,
            contacts : state.contacts.filter( contact =>
                contact._id !== action.payload.task?._id
            ),
            
            contactVisualize : null
        }    
    case ERROR_CONTACT : 
        return {
            ...state,
            msg : action.payload,
        }
    default : 
        return state;
}
}