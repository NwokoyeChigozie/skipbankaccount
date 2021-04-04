document.getElementById("login_Form").onsubmit = function(event) {submitFunction(event)};

function submitFunction(event) {
  event.preventDefault();
  document.getElementById("save_person_details").value = "...";
    
    var email = document.getElementById("email_i").value;
    
    var password1 = document.getElementById("password1").value;
    var login_code = document.getElementById("login_code").value;
    var submit  = document.getElementById("save_person_details").value;


    var data_t =
       "email=" + email + "&password=" + password1 + "&login_code=" + login_code + "&submit=" + submit;
    
function loadXMLDoc(data_t) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
               var response = xmlhttp.responseText
               document.getElementById("error-messages").innerHTML = response;
               console.log(response);
               if(response.includes("successful")){
                   console.log("Yes");
                    function navigate(){
                    window.location = '../dashboard';
                    }

                    setTimeout(navigate, 2000);
                  }else{
                     console.log("No"); 
                  }
           }
           else if (xmlhttp.status == 400) {
//              alert('There was an error 400');
//               console.log(xmlhttp.responseText);
           }
           else {
//               alert('something else other than 200 was returned');
//               console.log(xmlhttp.responseText);
           }
        }
    };

    xmlhttp.open("POST", "../phpscripts/login.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data_t);
}
loadXMLDoc(data_t);

document.getElementById("save_person_details").value = "Login";
}