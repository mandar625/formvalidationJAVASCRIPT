console.log("this is from validation");

function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}

function seterror(id,error){

    /** set error inside tag of id */
   let elememt = document.getElementById(id)
   elememt.getElementsByClassName("formerror")[0].innerHTML = error
 
}

function validateForm(){
    var returnval= true;
    clearErrors();
    var name = document.forms['myForm']["fname"].value
    if (name.length <5) {

        seterror("name","*length of name is too short")
        returnval =false
        
    }
   
    if (name.length==0) {

        seterror("name","*length of name can not be zero")
        returnval =false
        
    }
    

    var email = document.forms['myForm']["femail"].value
   
  
    if (email.length >30) {

        seterror("email","*email length is too long")
        returnval =false
        
    }

    var phone = document.forms['myForm']["fphone"].value
   
  
    if (phone.length!=10) {

        seterror("phone","*phone no must be 10 digit")
        returnval =false
        
    }
    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6 ){

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    return returnval
}