import { initializeSession } from '../models/Session';


export default function(phone_no) {
    return initializeSession(phone_no)
}