
import crypto from 'crypto';
import db from '../db';

export const initializeSession = (phone_no) => {

    let session =  getUserSession(phone_no);

    if(!session) {
        let session_hash = crypto.randomBytes(20).toString('hex');

        let query = "INSERT into `sessions` (phone_no, session_hash) VALUES ('" + phone_no + "', '" + session_hash + "')";
    
        db.query(query, (err, res) => {
            console.log({err, res})
            // if(err) res.status(500).send(err);
    
            // res.status(200);
    
            if(err) {
                console.log(err);
                return false;
            };
    
            return true;        
        })    
    }

}


export const getUserSession = (phone_no) => {


    let query = "SELECT * FROM `sessions` WHERE `phone_no` = '" + phone_no + "' AND `status` = 1 LIMIT 1";

    db.query(query, (err, res) => {
        console.log({err, res})

        if(err) {
            console.log(err);
            throw err;
        };

        return res[0];        
    })    
}




export const updateSessionNextAction = (phone_no, next_action) => {

    let query = "UPDATE `sessions` SET `next_action` = '"+ next_action+"', `updated_at` = NOW() WHERE `phone_no` = '" + phone_no + "' and `status` = 1 ";

    db.query(query, (err, res) => {
        // console.log({err, res})
        if(err) {
            console.log(err);
            return false;
        };

        return true;
    })    
}

export const updateSessionCurrentAction = (phone_no, current_action) => {

    let query = "UPDATE `sessions` SET `current_action` = '"+ current_action+"', `updated_at` = NOW() WHERE `phone_no` = '" + phone_no + "' and `status` = 1 ";

    db.query(query, (err, res) => {
        // console.log({err, res})
        if(err) {
            console.log(err);
            return false;
        };

        return true;
    })    
}


export const endSession = (phone_no) => {

    let query = "UPDATE `sessions` SET `status` = 0, `updated_at` = NOW() WHERE `phone_no` = '" + phone_no + "' and `status` = 1 ";

    db.query(query, (err, res) => {
        // console.log({err, res})
        if(err) {
            console.log(err);
            return false;
        };

        return true;
    })    
}