import * as actionTypes from '../../constants/actionTypes';

export default function(state = {}, action){
    switch (action.type) {
        case actionTypes.APP_CLICK:
            return { ...state, 'app_click_message': action.payload.app_click_message };
        default:
            return {'app_click_message': 'default message'};
    }
}
