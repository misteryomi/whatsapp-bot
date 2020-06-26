export default [
    {
        action: "check_location",
        message: 'You selected the *Lagos* option: \n\nWhat industry do you work?',
        feedback_type: 'input',
        actionService: 'saveUserIppis()',

        // feedback: [
        //     {
        //         input: "no",
        //         next_action: "no",
        //     },
        //     {
        //         input: "yes",
        //         next_action: "yes",
        //     },
        // ],
        next_action: "confirmed_staff" 
    },
    // {
    //     action: "yes",
    //     message: "What industry do you work?",
    //     feedback_type: 'input',
    //     actionService: 'saveUserIppis()',
    //     next_action: "confirmed_staff" 
    // },
    {
        action: "no",
        message: "Unfortunately, we only give loans to individuals withing Lagos state",
    },
    {
        action: "confirmed_staff",
        message: "Are you a confirmed staff?",
        feedback_type: 'input',
        actionService: 'saveUserNetPay()',
        next_action: "full_name"
    },
      
    {
        action: "full_name",
        message: "Kindly confirm your name and surname:",
        feedback_type: 'input',
        actionService: 'saveFullName()',
        next_action: "close_session"
    },        
    {
        action: "close_session",
        message: "Thank you for reaching out. \n\n One of our relationship officers will get in touch with you shortly. Kindly have the following available: \nPayslip \nProof of ID ( National ID card/Drivers License/International Passport) \nBVN details \nPassport photograph. \n\nThank You.\n Do have a great day!"
    }
]