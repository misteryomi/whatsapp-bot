import dotenv from 'dotenv';
import twilio from 'twilio';
import feedbacks from '../messages/feedbacks';
import defaultMessage from '../messages/default';
import { response } from 'express';

dotenv.config();

const { 
    SID: accountSid,
    KEY: TwilioAuthToken,
    APIKEY: googleApiKey,
    CX: cx
} = process.env;

var next_action;
var action_feedbacks;
var feedback;
var count;


twilio(accountSid, TwilioAuthToken);
const { MessagingResponse } = twilio.twiml;

function getFeedback(keyword) {
    const response = feedbacks.filter(
        (feedback) =>
            feedback.keywords.includes(keyword.toLowerCase())
        )[0];

        if(response.action) {

        }

    return response;
    // return response ? response.message : defaultMessage;
}


function getActionFeedback(_feedback, action, q, last_opt) {
   console.log('checking oooo', _feedback, next_action, action, last_opt);

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
        console.log(response, 'action');
    }

    console.log('action_response', response);
    // console.log('new resp', q, next_action, response)
    return response
    // next_action = response.next_action

}


class WhatsAppBot {

    static async googleSearch(req, res, next) {

        const twiml = new MessagingResponse();
        const q = req.body.Body;
        const options = { cx, q, auth: googleApiKey}

        try {
            let response;


            // console.log({next_action});
            
            if(next_action) {
                feedback = getActionFeedback(action_feedbacks, next_action, q, 'noooo');
                next_action = feedback.next_action;
    
            } else {                
                feedback = getFeedback(q);
                
                if(feedback.action) {
                    action_feedbacks = feedback.action;
                }
            }

          

            // console.log({feedback})
            if(feedback.intent) {
                response = getActionFeedback(feedback, feedback.intent, q, 'yesss');
                next_action = response.next_action
                console.log({response});
            } else {
                response = feedback;
                console.log('backup response', response.message)
            }


            // console.log({response})

            twiml.message(`${response ? response.message : defaultMessage}`);
            count++;
            res.set('Content-Type', 'text/xml');

            return res.status(200).send(twiml.toString());
        } catch(error) {
            return next(error);
        }
    }


}

export default WhatsAppBot;