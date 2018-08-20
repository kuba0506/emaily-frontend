const regExpJS = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const regExpHTML = /^ [a - zA - Z0 - 9.!#$ %&’* +/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default (emails) => {
    // split strings into array of emails
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim())
        // search for bad emails, if invalid returns true
        .filter(email => regExpJS.test(email) === false);

    if (invalidEmails.length) {
        return `These emails are invalid ${invalidEmails}`
    }
    
    return;
};