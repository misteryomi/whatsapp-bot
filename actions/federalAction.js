import { initializeRequest, updateRecord } from '../models/Federal';
import { updateSessionCurrentAction, updateSessionNextAction } from '../models/Session';

export const initialize = (phone_no, action, next_action, ippis) => {


    initializeRequest(phone_no, ippis);
    // updateSessionCurrentAction(action);
    // updateSessionNextAction(next_action);
}

export const saveIppisNumber = (phone_no, action, next_action, value) => {

    updateRecord(phone_no, action, value);
}



export const saveUserNetPay = (phone_no, action, next_action, value) => {

    updateRecord(phone_no, action, value);
}

export const checkUserLoanAmount = (phone_no, action, next_action, value) => {

    updateRecord(phone_no, action, value);
}

export const saveLoanTenor = (phone_no, action, next_action, value) => {

    updateRecord(phone_no, action, value);
}

export const saveFullName = (phone_no, action, next_action, value) => {

    updateRecord(phone_no, action, value);
}
