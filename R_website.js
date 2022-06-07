function submit_form(){  
    var em=document.getElementById("user").value;   
    var pwd1=document.getElementById("pwd").value;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
    if(em==''||pwd1==''){  
        alert("Enter your complete details carefully");  
    }  
    else if (!em.match(email_val))  
    {  
        alert('Invalid email format please enter valid email id');  
    }  
else if(document.getElementById("pwd").value.length > 18)  
{  
alert("Password maximum length is 18");  
}  
else if(document.getElementById("pwd").value.length < 8)  
{  
alert("Password minimum length is 8");  
}  
else{
alert("Login successfully");  
}
}  
function create(){  
    window.location="signup.html";  
}  
function create_account(){  
    var n=document.getElementById("n1").value;  
    var e=document.getElementById("e1").value;  
    var p=document.getElementById("p1").value;  
    var cp=document.getElementById("p2").value;  
            var letters = /^[A-Za-z]+$/;  
            var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]\.{2,4})+$/;   
    if(n==''||e==''||p==''||cp==''){  
    alert("Enter your complete details carefully");  
    }  
    else if(!n.match(letters))  
            {  
                alert('Name is incorrect must contain alphabets only');  
            }  
    else if (!e.match(email_val))  
            {  
                alert('Invalid email format please enter valid email id');  
            }  
    else if(p!=cp)  
    {  
    alert("Passwords not matching");  
    }  
    else if(document.getElementById("p1").value.length > 18)  
    {  
    alert("Password maximum length is 18");  
    }  
    else if(document.getElementById("p1").value.length < 8)  
    {  
    alert("Password minimum length is 8");  
    }  
    else{  
    alert("Your account has been created successfully");    
    }  
    }  
    /*function addElement() {
        intTextBox++;
        var objNewDiv = document.createElement("div");
        objNewDiv.setAttribute("id", "div_" + intTextBox);
        objNewDiv.innerHTML = 'Textbox ' +' intTextBox ' :<input type="text" id="tb_" + intTextBox + '" name=”tb_' + intTextBox + '"/>';
        document.getElementById("content").appendChild(objNewDiv);
        }
        
        /**
        * Function to remove textbox element dynamically
        * check if counter is more than zero then remove the div element with the counter id and reduce the counter
        * if counter is zero then show alert as no existing textboxes are there
        
        function removeElement() {
        if(0 < intTextBox) {
        document.getElementById("content").removeChild(document.getElementById("div_" + intTextBox));
        intTextBox-;
        } else {
        alert("No textbox to remove");
        }
        }*/
        
        
       