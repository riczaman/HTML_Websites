/* JavaScript for registration.html
   Name: Ricky Zaman
   Student ID: 121942171
   Email: rzaman: 6 @myseneca
   Date: April 6, 2018
   registration.js
*/   

/* Function used to validate password. Criteria includes: password must begin
   with a character, must be at least 8 characters long, must have one 
   uppercase character, must have one numeric character and check 
   if password and repassword match */

function passwordCheck(form){
    var p1=signup.pass.value.trim();
    var p2=signup.repass.value.trim();
    var errors= document.querySelector(".errmessage");
    var charstring ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var chars= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numstring ="0123456789";
    var passAlpha=false; 
    var passNum=false; 
    var passChar=false; 


    if(p1.length<8){
        clear();
        errors.innerHTML+= "<p>* Password must be at least 8 characters long. <p>";
        signup.pass.focus();
        return false; 
    }

    if(chars.indexOf(p1.substr(0,1))>=0){
        passChar=true;
    }
    if(!passChar){
        clear();
        errors.innerHTML+= "<p>* Password must begin with a character. <p>";
        signup.pass.focus();
        return false; 
    }

    for(var i=0; i<p1.length; i++){
        clear(); 
        if(charstring.indexOf(p1.substr(i,1))>=0){
            passAlpha=true;
        }
    }

    if(!passAlpha){
        errors.innerHTML+= "<p>* Password must have at least one upper case letter. <p>";
        signup.pass.focus();
        return false; 
        }

    for(var i=0; i<p1.length; i++){
        clear(); 
        if(numstring.indexOf(p1.substr(i,1))>=0){
            passNum=true;
        }
    }
    if(!passNum){
        errors.innerHTML+= "<p>* Password must have at least one number. <p>";
        signup.pass.focus();
        return false; 
        }
    
    if(p2!="" && p1!=p2){
        clear(); 
        errors.innerHTML+= "<p>* Passwords do not match! <p>";
        signup.repass.focus();
        return false; 
    }

    return true; 
}

/*Used to clear error messages in side panel */
function clear(){
    var errors= document.querySelector(".errmessage");
    errors.innerHTML=""; 
}

/* Function used to validate username entered. Criteria includes username 
   must begin with a character and username must be at least 6 characters
   long */ 

function userCheck(){
    var user= signup.user.value.trim(); 
    var errors= document.querySelector(".errmessage");
    var chars= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    var passChar=false; 

    if(chars.indexOf(user.substr(0,1))>=0){
        passChar=true;
    }
    if(!passChar){
        clear();
        errors.innerHTML+= "<p>* Username must begin with a character. <p>";
        signup.user.focus();
        return false; 
    }
    if(user.length<6){
        clear();
        errors.innerHTML+= "<p>* Username must be at least 6 characters long. <p>";
        signup.user.focus();
        return false; 
    }
 
    return true; 
    
}

/* Function used to validate the streetname entered. Streetname cannot contain
   numbers */

function checkStreet(){
    var strt=signup.street.value.trim(); 
    var errors= document.querySelector(".errmessage");
    var nums="1234567890"; 
    var numCheck = true; 

    for(var i=0; i<strt.length; i++){
        if(nums.indexOf(strt.substr(i,1))>=0){
            numCheck=false;
        }
    }

    if(numCheck===false){
        clear(); 
        errors.innerHTML+= "<p>* Street name cannot contain numbers. <p>";
        signup.street.focus();
        return false; 
        }

    return true;

}

/* Function used to validate city entered. City must not contain any numbers */

function checkCity(){

    var cty=signup.city.value.trim(); 
    var errors= document.querySelector(".errmessage");
    var nums="1234567890"; 
    var numCheck = true; 

    for(var i=0; i<cty.length; i++){
        if(nums.indexOf(cty.substr(i,1))>=0){
            numCheck=false;
        }
    }

    if(numCheck===false){
        clear(); 
        errors.innerHTML+= "<p>* City name cannot contain numbers. <p>";
        signup.city.focus();
        return false; 
        }

    return true;
}

/* Master validation function used right before submission. If all of the functions 
   return true with no errors then a congratulations alert will pop up and 
   successfully submit the form. If there are errors then submission will 
   be cancelled. */
   
function Validate(){
    clear(); 
    if(passwordCheck()===true && userCheck()===true&&checkCity()===true&&checkStreet()===true){
        alert("Congratulations! You have successfully registered.");
        return true;
    }else{
        return false; 
    }
}