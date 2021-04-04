document.getElementById("signup_form").onsubmit = function(event) {submitFunction(event)};
event.preventDefault;
function submitFunction(event) {
  event.preventDefault();
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    
    var name = last_name + " " + first_name;
    var email = document.getElementById("email_i").value;
    var phone = document.getElementById("phonenumber").value;
    var DOB = document.getElementById("datepicker").value;
    var gender = document.getElementById("gender").value;
    var country = document.getElementById("ddlResidencyCountries").value;
    var zip_code = document.getElementById("zip_code").value;
    var home_address = document.getElementById("home_address").value;
    var maiden_name = document.getElementById("maiden_name").value;
    var next_of_kin = document.getElementById("next_kin_name").value;
    var next_of_kin_address = document.getElementById("next_kin_address").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password").value;
    var login_code = document.getElementById("login_code").value;
    var submit  = document.getElementById("save_person_details").value;


    var data_t =
       "name=" + name + "&phone=" + phone + "&email=" + email + "&DOB=" + DOB + "&gender=" + gender + "&country=" + country + "&zip_code=" + zip_code + "&home_address=" + home_address + "&maiden_name=" + maiden_name + "&next_of_kin=" + next_of_kin + "&next_of_kin_address=" + next_of_kin_address + "&password1=" + password1 + "&password2=" + password2 + "&login_code=" + login_code + "&submit=" + submit;
    
function loadXMLDoc(data_t) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               document.getElementById("error-messages").innerHTML = xmlhttp.responseText;
               console.log(xmlhttp.responseText);
           }
           else if (xmlhttp.status == 400) {
//              alert('There was an error 400');
               console.log(xmlhttp.responseText);
           }
           else {
//               alert('something else other than 200 was returned');
               console.log(xmlhttp.responseText);
           }
        }
    };

    xmlhttp.open("POST", "../phpscripts/signup.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data_t);
}
loadXMLDoc(data_t);

}