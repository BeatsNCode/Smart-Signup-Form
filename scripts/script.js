'use-strict';

function logSentence() {
    event.preventDefault()
    console.log('recorded a click')

    let email = document.getElementById('emailAddress').value;
    console.log(email)

    let phone = document.getElementById('phoneNumber').value;
    if (phone) {
        console.log(phone)
    }

}

// on submit, collect email address, and if applicable, phone number
// Run email through kicbox 
// run phone number through Twilio lookup
// if email not deliverable, collect IP and lookup results
// if phone number not mobile, collect IP and lookup results
// pass information to a db
// report IP if more than 10 unique emails/phone numbers submitted from that IP in the last 60 minutes
// Disable Submit button