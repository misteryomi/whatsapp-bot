import { initializeRequest, updateRecord } from '../models/Federal';
import { updateSessionCurrentAction, updateSessionNextAction, endSession } from '../models/Session';

export const initialize = (phone_no, action, next_action, ippis, session_hash) => {


    initializeRequest(phone_no, ippis, session_hash);
    // updateSessionCurrentAction(action);
    // updateSessionNextAction(next_action);
}

export const saveIppisNumber = (phone_no, action, next_action, value, session_hash) => {

    updateRecord(phone_no, action, value, session_hash);
}



export const saveUserNetPay = (phone_no, action, next_action, value, session_hash) => {

    updateRecord(phone_no, action, value, session_hash);
}

export const checkUserLoanAmount = (phone_no, action, next_action, value, session_hash) => {

    updateRecord(phone_no, action, value, session_hash);
}

export const saveLoanTenor = (phone_no, action, next_action, value, session_hash) => {

    updateRecord(phone_no, action, value, session_hash);
}

export const saveFullName = (phone_no, action, next_action, value, session_hash) => {

    updateRecord(phone_no, action, value, session_hash);
    endSession(phone_no, session_hash);
}
