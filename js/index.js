var submitBtn = document.querySelector('#submitBtn');

function recaptchaCallback()
{
   jQuery('#submitBtn').prop('disabled', false);
}