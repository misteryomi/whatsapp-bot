import dotenv from 'dotenv';
import twilio from 'twilio';
import feedbacks from '../messages/feedbacks';
import defaultMessage from '../messages/default';
import { updateSessionCurrentAction, updateSessionNextAction, getUserSession } from '../models/Session';

dotenv.config();

const { 
    SID: accountSid,
    KEY: TwilioAuthToken,
    APIKEY: googleApiKey,
    CX: cx,
    APP_ENV: environment,
} = process.env;

// var next_action;
var action_feedbacks;
var feedback;
var count;
var active_intent = '';

twilio(accountSid, TwilioAuthToken);
const { MessagingResponse } = twilio.twiml;


function getFeedback(keyword, phone) {
    let response;

    // console.log({active_intent});

    for(let i = 0; i <= feedbacks.length; i++) {
        let feedback = feedbacks[i];
        // console.log(feedback);
    // feedbacks.forEach((feedback) => {
        if(active_intent == 'loan' && feedback.sub && feedback.sub.length > 0) {
            let sub = feedback.sub.filter((f) => {
                console.log(f.keywords.includes(keyword.toLowerCase()), f.keywords)
                return f.keywords.includes(keyword.toLowerCase())
            })[0];
            // console.log({sub});
            response = sub;
            break;
            // return;
        } else {
            if(feedback.keywords.includes(keyword.toLowerCase())) {
                // console.log('checking here tooo?')
                response = feedback;
                break;
                // return;
            } else {
                //set a default response to tell the user we cannot find an appropriate feedback, but they can reach out to a customer care rep
            }
        }
    }
    //)

    if(response.initial_intent) {
        //update with the current initial intent
        active_intent = response.initial_intent;
    }

    if(response.initial_action) {
        response.initial_action(phone)
    }

    // const response = feedbacks.filter(
    //     (feedback) => 
    //     {

    //     }        
    //         // feedback.keywords.includes(keyword.toLowerCase())
    //     )[0];

    //     console.log({active_intent})
    //     console.log({response});
    //     if(response.initial_intent) {
    //         active_intent = response.initial_intent;
    //     }

    // console.log({response})

    return response;
    // return response ? response.message : defaultMessage;
}


function getActionFeedback(_feedback, action, q, phone, session_hash) {
    console.log({_feedback})
//    console.log('checking oooo', _feedback, next_action, action, last_opt);

    // console.log('action', action, count,last_opt)

    let response;

    if(_feedback.action && Array.isArray(_feedback.action)) {
         response = _feedback.action.filter(
                (fb) => {
                    // let ac = fb.action ? fb.action : fb;
                    // console.log({ac}, action);
                    // console.log('act=>', ac == action && action)
                return fb.action == action;
                }
            )[0];

        // if(response.feedback) {
        //     console.log({q})
        //     _next_action = response.feedback.filter(fb => { 
        //         console.log({fb})
        //        return fb.input == q
        //     })[0];

        //     if(_next_action) {
        //         response.next_action = _next_action;
        //     }
        // }
        // console.log(response, 'me');
    } else {
        response = _feedback.filter((fb) => fb.action == action)[0];
        // console.log(response, 'action');
    }

    if(response.actionService) {
        console.log(response)
        response.actionService(phone, response.previous_action, response.next_action, q, session_hash);
    }

    updateSessionCurrentAction(phone, response.action);
    updateSessionNextAction(phone, response.next_action);

    // console.log('action_response', response);
    // console.log('new resp', q, next_action, response)
    return response
    // next_action = response.next_action

}


class WhatsAppBot {

    static async googleSearch(req, res, next) {
        console.log(req.body);
        const twiml = new MessagingResponse();
        const q = req.body.Body;
        const phone = req.body.From ? req.body.From.replace('whatsapp:', '') : null;
        const options = { cx, q, auth: googleApiKey}

        try {
            let response;
            let feedback;
            let next_action;
            
            const session = await getUserSession(phone);
            if(session && session.next_action !== 'undefined') {
                next_action = session.next_action;                
            }


            console.log({next_action})

            if(next_action) {
                feedback = getActionFeedback(action_feedbacks, next_action, q, phone, session.session_hash);
                console.log({feedback});
                // next_action = feedback.next_action;
                updateSessionNextAction(feedback.next_action);
    
            } else {                
                feedback = getFeedback(q, phone);
                // console.log({feedback})

                if(feedback.action) {
                    action_feedbacks = feedback.action;
                }
            }



            if(feedback.intent) {
                response = getActionFeedback(feedback, feedback.intent, q, phone, session.session_hash);
                // next_action = response.next_action
                 updateSessionNextAction(feedback.next_action);
                // console.log({response});
            } else {
                response = feedback;
                // console.log('backup response', response.message)
            }


            let message = `${response ? response.message : defaultMessage}`;

            count++;

            if(environment == 'production') {
               twiml.message(message);
     
               res.set('Content-Type', 'text/xml');
               return res.status(200).send(twiml.toString());
            } else {
    
                res.set('Content-Type', 'application/json');
                return res.status(200).send({message});
            }

            // let next_action = getUserSession(phone).next_action;


            // console.log({next_action});
            

        } catch(error) {
            return next(error);
        }
    }


}

export default WhatsAppBot;