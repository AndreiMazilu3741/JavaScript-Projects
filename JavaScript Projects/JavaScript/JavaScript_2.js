inputText = document.getElementById("email").value;
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
// alert("Valid email address!");
document.form_id.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form_id.email.focus();
return false;
}
}
