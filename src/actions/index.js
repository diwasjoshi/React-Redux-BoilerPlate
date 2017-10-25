import * as actionTypes from '../constants/actionTypes';

export function appClickAction(){
    console.log('clicking...');
    return{
        type: actionTypes.APP_CLICK,
        payload: {'app_click_message': 'App clicked'}
    }
}
