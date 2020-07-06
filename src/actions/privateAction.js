import { initializeRequest, updateRecord } from '../models/Private';
import { endSession } from '../models/Session';

export const initialize = (phone_no, action, next_action, oracle, session_hash) => {


    initializeRequest(phone_no, oracle, session_hash);
}

export const saveIndustry = (phone_no, action, next_action, value, session_hash) => {

    updateRecord(phone_no, action, value, session_hash);
}


export const saveIsConfirmed = (phone_no, action, next_action, value, session_hash) => {

    updateRecord(phone_no, action, value, session_hash);
    endSession(phone_no, session_hash);
}
