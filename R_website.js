function foe(){
    var us=document.getElementById("user");
    us.style.backgroundColor="grey";   
    var pwd2=document.getElementById("pwd");
    pwd2.style.backgroundColor="grey";
}
function blu(){
    var us=document.getElementById("user");
    us.style.backgroundColor="white";   
    var pwd2=document.getElementById("pwd");
    pwd2.style.backgroundColor="white";
}
function ChangeColor()
{
  document.getElementById("color").style.backgroundColor = "orange";
}
function ChangeColor1()
{
  document.getElementById("color").style.backgroundColor = "Black";
}
var i = 1;
function addkid() {
  i++;
  var div = document.createElement('div');
  var id = i;
  div.innerHTML+="<input type='text' name='others_' class='inp'>"
  document.getElementById('others').appendChild(div);
}
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
            var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
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
   
        
       