import { initializeRequest, updateRecord } from '../models/State';
import { endSession } from '../models/Session';

export const initialize = (phone_no, action, next_action, oracle, session_hash) => {


    initializeRequest(phone_no, oracle, session_hash);
}

export const saveOracleNumber = (phone_no, action, next_action, value, session_hash) => {

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
