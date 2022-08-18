window.onload = function()
{
    document.getElementById("btn").addEventListener("click", contact);
}

function contact(){
    var valid=true;
    var name;
    var lastName;
    var eMail;
    var message;

    name=document.getElementById("name").value;
    lastName=document.getElementById("lastname").value;
    eMail=document.getElementById("email").value;
    message=document.getElementById("message").value;

    var nameLastNameRegex;
    var eMailRegex;
    var messageRegex;

    nameLastNameRegex=/^[A-ZČĆŽŠĐ][A-Za-zčćžšđ\s]{3,15}$/;
    eMailRegex=/^[a-z0-9]+(\.[a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,3})$/;
    messageRegex=/^[A-ZČĆŽŠĐ][a-zčćžšđ\s\.,!?]{10,300}$/; 

    var errorName;
    var errorLastName;
    var errorEmail;
    var errorMessage;

    errorName=document.getElementById("errorName");
    errorLastName=document.getElementById("errorLastName");
    errorEmail=document.getElementById("errorEmail");
    errorMessage=document.getElementById("errorMessage");
    //name
    if(name == "")
    {
		valid= false;
        errorName.innerHTML="This field is required";
    }
    else
    {
        if(!nameLastNameRegex.test(name))
        {
			
           errorName.innerHTML="Name is not in a good format - it must have first letter upper and at least 3 characters";
        }
        else{
            errorName.innerHTML="";
        }
    }
    //lastname
    if(lastName == "")
    {
		 vallid = false;
        errorLastName.innerHTML="This field is required";
    }
    else
    {
        if(!nameLastNameRegex.test(lastName))
        {
           errorLastName.innerHTML="Lastname is not in a good format - it must have first letter upper and at least 3 characters";
        }
        else{
            errorLastName.innerHTML="";
        }
    }
    //mail
    if(eMail == "")
    {
		 valid = false;
        errorEmail.innerHTML="This field is required";
    }
    else
    {
        if(!eMailRegex.test(eMail))
        {
           errorEmail.innerHTML="Please enter a valid email address";
        }
        else{
            errorEmail.innerHTML="";
        }
    }
    //message
    if(message == "")
    {
		 valid = false;
        errorMessage.innerHTML="This field is required";
    }
    else
    {
        if(!messageRegex.test(message))
        {
           errorMessage.innerHTML="Message is not in a good format-it must have at least 12 characters!";
        }
        else{
            errorMessage.innerHTML="";
        }
    }
	
	if(valid)
	{
        errorMessage.innerHTML="Your message has been sent - Thank you for your time";
    }


}

