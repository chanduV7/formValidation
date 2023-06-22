var userinp = document.getElementById("userinp");
var submitbtn = document.getElementById("submitbtn");
var emailinp = document.getElementById("emailinp")
var chkboxinp = document.getElementById("chkbox")
submitbtn.addEventListener("click",(event)=>{
  event.preventDefault();
  validateform();

});
function validateform(){
    var userinpValue = userinp.value.trim();

    var emailinpvalue = emailinp.value.trim();
    var chkboxvalue = chkboxinp.value;
    console.log(userinpValue)
    if(userinpValue === ""){
        invalid(userinp,"Please enter the username");
    }
    else if(userinpValue.length<6){
        invalid(userinp,"please enter atleast 6 characters");
    }
    else{
        valid(userinp)
    }

   if(emailinpvalue == ""){
    invalid(emailinp,"enter valid email Address")
   }
   else if(!checkemail(emailinpvalue)){
       invalid(emailinp,"enter a valid address")
   }
   else{
    valid(emailinp)
   }

   if(chkboxvalue == ""){
    invalid(chkboxinp,"please tick the box")
   }
   else{
    valid(chkboxinp)
   }
}

function invalid(a,error){
    var parentEle = a.parentElement;
    console.log(parentEle)
    var paratag = parentEle.querySelector("p");
   
    paratag.innerHTML=error;
    console.log(paratag)
    parentEle.classList.add("error");
    parentEle.classList.remove("success");
}
function valid(a)
{
    var parentEle =a.parentElement;
    parentEle.classList.add("success");
    parentEle.classList.remove("error");
}

function checkemail(result){
    var chk = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var finaloutput = chk.test(result);
    console.log(finaloutput)
    return finaloutput;
}