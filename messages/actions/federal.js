export default [
    {
        action: "check_ippis",
        message: 'You selected the *Federal* option: \n\n Do you have an IPPIS number?',
        feedback_type: 'options',
        feedback: {
            "no" : { next_action: "no_ippis"},
            "yes" : { next_action: "ippis"}
        },
        next_action: "ippis" 
    },
    {
        action: "ippis",
        message: "Kindly input your IPPIS number",
        feedback_type: 'input',
        actionService: 'saveUserIppis()',
        next_action: "net_pay" 
    },
    {
        action: "no_ippis",
        message: "Kindly avail us your name and email address. One of our customer service agents will get in touch with you shortly.",
        feedback_type: 'input',
        actionService: 'saveUserNameEmail()',
        next_action: "close_session"
    },
    {
        action: "net_pay",
        message: "What is your current Net-Pay?",
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
        next_action: "close_session"
    },        
    {
        action: "close_session",
        message: "Thank you for reaching out. \n\n One of our relationship officers will get in touch with you shortly. Do have a great day!",
    }
]