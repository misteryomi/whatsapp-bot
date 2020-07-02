import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const { 
    DB_HOST: host, 
    DB_DATABASE: database,
    DB_USER: user, 
    DB_PASSWORD: password, 
} = process.env;

const db = mysql.createConnection({
    host, user, password, database
});

console.log({host, user, password, database});

// db.connect(err => {
//     if(err) throw err;

//     console.log('connected to db');
// })

export default db;

