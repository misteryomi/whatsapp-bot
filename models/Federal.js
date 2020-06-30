
import crypto from 'crypto';
import db from '../db';

export const initializeRequest = (phone_no, ippis_number) => {

    let query = "INSERT into `federal_requests` (phone_no, ippis_number) VALUES ('" + phone_no + "', '" + ippis_number + "')";

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

export const updateRecord = (phone_no, field, value) => {

    let query = "UPDATE `federal_requests` SET `"+ field +"` = '"+ value+"', `updated_at` = NOW() WHERE `phone_no` = '" + phone_no + "' ";

    db.query(query, (err, res) => {
        // console.log({err, res})
        if(err) {
            console.log(err);
            return false;
        };

        return true;
    })    
}

