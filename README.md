# Smart Signup Form

IP address lookup tools to consider:
https://www.abstractapi.com/api/ip-geolocation-api#pricing
https://ipdata.co/pricing.html


IP Blacklist reporting:
https://docs.abuseipdb.com/#report-endpoint


Leverage Twilio's Lookup API for phone number validation
https://www.twilio.com/docs/lookup/api

Leverage the Kickbox Email Verification API for email validation
https://app.kickbox.com/accounts/i0IpN6oN/verify/api

This Solution will:
- Collect Email, Phone Number and IP address when applicable at signup
- Run Email address through the Kickbox Email Verification API
- if Email is 'undeliverable', add to Database
- Run Phone number through Twilio's Lookup API
- If Phone is not 'mobile', add to Database
- Collect IP, Email and Phone for submission in Database
- If more than 10 submissions from IP, disable form

Stretch Step (Most likely to bse used in a real life setting, and not in development):
- Report IP to blacklist



