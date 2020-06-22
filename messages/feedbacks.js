import { 
    welcomeText, 
    savingsText, 
    stateText,
    smeText,
    othersText,
    lagosText,
    loanText,
    complaintText,
    privateText,
} from './messageTexts';

import {
    federalAction,
} from './actions';

export default [
    {
        keywords: ['hi', 'hello', "good morning", "good afternoon", "good evening", 'home'],
        message: welcomeText
    },
    {
        keywords: ['1'],
        message: loanText
    },
    {
        keywords: ['2'],
        message: loanText
    },
    {
        keywords: ['3'],
        message: savingsText
    },
    {
        keywords: ['4'],
        message: complaintText,
    },
    {
        keywords: ['federal'],
        // message: federalText,
        action: federalAction,
        intent: 'check_ippis'
    },
    {
        keywords: ['state'],
        message: stateText,
        type: 'input',
        input_type: 'ippis'
    },
    {
        keywords: ['lagos'],
        message: lagosText,
        type: 'input',
        input_type: 'ippis'
    },
    {
        keywords: ['private'],
        message: privateText,
        type: 'input',
        input_type: 'ippis'
    },
    {
        keywords: ['sme'],
        message: smeText,
        type: 'input',
        input_type: 'ippis'
    },
    {
        keywords: ['others', 'other'],
        message: othersText,
        type: 'input',
        input_type: 'ippis'
    },

]