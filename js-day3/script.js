function fnvalidateloginform(e) {
    e.preventDefault();
    console.log(e)
    let formdata = e.target;
    let fname = formdata.fname.value;
    console.log(fname)
    let lname = formdata.lname.value;
    console.log(lname)
    
    let Password = document.getElementById("Password").value;
    let ConfirmPassword = document.getElementById("confirmpassword").value;
    let container = document.getElementsByClassName("container")

    let email = formdata.email.value
    const emailpattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"; 
    
    
}