import React, { useReducer }    from 'react';
import contactContext           from './contactContext';
import contactReducer           from './contactReducer';
import Swal                     from 'sweetalert2';
import clientAxios              from '../../config/axios';
import { 
    FORM_CONTACT, 
    GET_CONTACT, 
    INSERT_CONTACT, 
    VALIDATE_FORM,
    VISUALIZE_CONTACT,
    DESACTIVE_CONTACT,
    ERROR_CONTACT,
} from '../../types';



const ContactState = props => {
    

    const initialState = {
        errorForm           : false,
        formNewContact      : false,
        contacts            : [],
        contactVisualize    : null,
        msg                 : null,
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);


    const viewForm = () => {
        dispatch({
            type: FORM_CONTACT,
        })
    }

    const viewContacts = async ( ) =>{
        try {
            const response = await clientAxios.get('/api/contacts');
            console.log(response);
            dispatch({
                type    : GET_CONTACT,
                payload : response.data.contacts
            })
        } catch (error) {
            console.error(error);
        }
    }

    const insertContact = async( contact ) => {
      
        try{
            const response = await clientAxios.post('/api/contacts', contact );
            dispatch({
                type: INSERT_CONTACT,
                payload: response.data
            })
         
            Swal.fire({
                position            : 'center',
                icon                : 'success',
                title               : response.data.msg,
                width               : '40rem',
                showConfirmButton   : true
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                position            : 'center',
                icon                : 'error',
                title               : 'Hubo un problema al crear al usuario',
                width               : '40rem',
                showConfirmButton   : true
            });
        }
        
    }

    const viewFormError = () =>{
        dispatch({
            type: VALIDATE_FORM
        })
    }

    const viewFormContact = ( contactId ) =>{
        dispatch({
            type: VISUALIZE_CONTACT,
            payload : contactId,
        })
    }

    const desactiveContact = async ( contactId ) => {

        const alert = {
            msg         : "Hubo un error",
            categoria   : "alerta-error"
        }

        try{
            const response = await clientAxios.put(`/api/contacts/active/${contactId}` );

            if (response.data === 500 ){
                dispatch({
                    type    : ERROR_CONTACT,
                    payload : alert
                })
                return;
            }

            dispatch({
                type : DESACTIVE_CONTACT,
                payload : response.data
            })
        } catch (error) {
            console.log(error);
            
            dispatch({
                type    : ERROR_CONTACT,
                payload : alert
            })
        }
        
    }


    return(
        <contactContext.Provider
            value = {{
                errorForm           : state.errorForm,
                contacts            : state.contacts,
                contactVisualize    : state.contactVisualize,
                formNewContact      : state.formNewContact,
                msg                 : state.msg,
                viewForm,
                viewContacts,
                insertContact,
                viewFormError,
                viewFormContact,
                desactiveContact,
            }}
        >
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;