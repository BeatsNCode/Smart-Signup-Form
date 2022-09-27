'use-strict';

// on submit, collect email address, and if applicable, phone number
function logSentence() {

    let submission = {}

    let email = document.getElementById('emailAddress').value;

    let phone = document.getElementById('phoneNumber').value;
    
    event.preventDefault()

    submission = {
        'email': email,
        'phone': phone
    }

    console.log(submission)
    return submission
}

// Collect IP address on submit




// Run email through kicbox 
// run phone number through Twilio lookup
// if email not deliverable, collect IP and lookup results
// if phone number not mobile, collect IP and lookup results
// pass information to a db
// report IP if more than 10 unique emails/phone numbers submitted from that IP in the last 60 minutes
// Disable Submit button