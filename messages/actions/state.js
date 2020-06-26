export default [
    {
        action: "check_oracle",
        message: 'You selected the *State* option: \n\n Kindly input your Oracle number:',
        feedback_type: 'input',
        // feedback: [
        //     {
        //         input: "no",
        //         next_action: "no_oracle",
        //     },
        //     {
        //         input: "yes",
        //         next_action: "oracle",
        //     },
        // ],
        actionService: 'saveUserIppis()',
        next_action: "net_pay" 
        // next_action: "oracle" 
    },
    // {
    //     action: "oracle",
    //     message: "Kindly input your Oracle number",
    //     feedback_type: 'input',
    //     actionService: 'saveUserIppis()',
    //     next_action: "net_pay" 
    // },
    // {
    //     action: "no_oracle",
    //     message: "Kindly avail us your name and email address. One of our customer service agents will get in touch with you shortly.",
    //     feedback_type: 'input',
    //     actionService: 'saveUserNameEmail()',
    //     next_action: "close_session"
    // },
    {
        action: "net_pay",
        message: "What is your average monthly net pay?",
        feedback_type: 'input',
        actionService: 'saveUserNetPay()',
        next_action: "loan_amount"
    },
    {
        action: "loan_amount",
        message: "How much do you need as loan?",
        feedback_type: 'input',
        actionService: 'checkUserLoanAmount()',
        next_action: "loan_tenor"
    },
    {
        action: "loan_tenor",
        message: "Loan tenor (maximum tenor is 18 months)",
        feedback_type: 'input',
        actionService: 'saveLoanTenor()',
        next_action: "full_name"
    },        
    {
        action: "full_name",
        message: "Kindly confirm your name and surname:",
        feedback_type: 'input',
        actionService: 'saveFullName()',
        next_action: "close_session_success"
    },        
    {
        action: "close_session",
        message: "Thank you for reaching out. \n\n One of our relationship officers will get in touch with you shortly. Do have a great day!",
    },
    {
        action: "close_session_success",
        message: "Thank you for reaching out. \n\nOne of our relationship officers will get in touch with you shortly. Kindly have the following available: \nPayslip \nProof of ID ( National ID card/Drivers License/International Passport) \nBVN details \nPassport photograph. \n\nThank You.\n\nDo have a great day!"
    }
]