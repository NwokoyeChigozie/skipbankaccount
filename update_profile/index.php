<?php include("../phpscripts/top.php");?>
<?php $page = "pay"; ?>
<link type="text/css" rel="stylesheet" href='../withdraw/Stylesheets/withdraw.css' />

                <div id="LeftContent" class="" bis_skin_checked="1">
                    <div id="widgetContainer" class="widgetContainer" bis_skin_checked="1">
                        <div class="myaccount" bis_skin_checked="1">
                            <div class="myaccount__container legacy" bis_skin_checked="1">
                                <div class="myaccount__container__outlet" bis_skin_checked="1">
                                    <div class="myaccount__container__wrapper" bis_skin_checked="1">
                                        <div class="sc-prorn fpBoEr" bis_skin_checked="1">
                                            <div class="full-screen-modal-new--legacy withdraw-funds__fsm" bis_skin_checked="1">
                                                <div class="fsm-header-legacy" bis_skin_checked="1">
                                                    <div class="fsm-header-legacy__mobile" bis_skin_checked="1">
                                                        <div class="fsm-header-legacy__start" bis_skin_checked="1" style="text-align:center"><span>&nbsp;</span><span class="text"><span>Update Profile</span></span></div>
                                                        <div class="fsm-header-legacy__end" bis_skin_checked="1">
<!--                                                            <i class="icon-question"></i>-->
                                                        </div>
                                                    </div>
                                                    <style>
                                                        
                                                    </style>
                                                    <div class="fsm-header-legacy__desktop" bis_skin_checked="1">
<!--                                                        <i class="icon-triangle-left" style="visibility: hidden;"></i>-->
                                                        <div class="text" bis_skin_checked="1"><span class="text__icon"><i class="icon-withdraw-to-bank__new"></i></span><span class="text__title">Update Profile</span></div>
<!--                                                        <i class="icon-question" style="visibility: initial;"></i>-->
                                                    </div>
                                                </div>
                                                <div class="fsm-body-legacy" bis_skin_checked="1">
                                                    <div class="sc-pbIaG OyRjE" bis_skin_checked="1">
                                                        <div class="wizard withdraw-funds__wizard new-wizard" bis_skin_checked="1">
                                                            <section class="wizard-step-container">
                                                                <div class="wizard-step withdraw-funds__step wizard-step--active" bis_skin_checked="1">
                                                                    <div class="wizard-step__header wizard-step__header--active" bis_skin_checked="1"><i class="fas fa-money-bill-wave"></i>
                                                                        <h3>Change Password</h3>
                                                                    </div>
                                                                    <div class="wizard-step__body" bis_skin_checked="1">
                                                                        <div class="sc-qQmou imnfNV withdraw-funds__details-step-edit" bis_skin_checked="1">
<!--                                                                            <div class="sc-qYiqT ctdwUB withdraw-funds__details_step_description" bis_skin_checked="1">Withdraw to your personal or company bank account. <a target="blank">Add new account</a></div>-->
                                                                            <input type="hidden" id="p_id" value="<?php echo $p_id; ?>">
                                                                            <form action="#" autocomplete="off" novalidate="" class="withdraw-funds__details-step-form">                                                                  
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="password" value="" id="old_password" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Old Password</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="password" value="" id="new_password" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">New Password</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                    
                                                                         
                                                                                
                                                                                
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            
                                                                                            <input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW focus_e kQnzLj withdraw-funds__input-source-amount label" type="password" value="" id="confirm_password" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Confirm Password</label>
                                                                                        </div>
<!--                                                                                        <div class="sc-fzoxnE dhHCKo" bis_skin_checked="1">This description will appear in Transactions</div>-->

                                                                                        

                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <br>
                                                            <div class="sc-pkhIR iqvNTH" bis_skin_checked="1"><button type="button" id="password_change" class="button button--uppercase">Change Password</button></div>
                                                                <div id="error-messages1"></div>
                                                                
                                                        </div>
                                                        
                                                        
                                                        <div class="wizard withdraw-funds__wizard new-wizard" bis_skin_checked="1">
                                                            <section class="wizard-step-container">
                                                                <div class="wizard-step withdraw-funds__step wizard-step--active" bis_skin_checked="1">
                                                                    <div class="wizard-step__header wizard-step__header--active" bis_skin_checked="1"><i class="fas fa-money-bill-wave"></i>
                                                                        <h3>Update Profile Information</h3>
                                                                    </div>
                                                                    <div class="wizard-step__body" bis_skin_checked="1">
                                                                        <div class="sc-qQmou imnfNV withdraw-funds__details-step-edit" bis_skin_checked="1">
<!--                                                                            <div class="sc-qYiqT ctdwUB withdraw-funds__details_step_description" bis_skin_checked="1">Withdraw to your personal or company bank account. <a target="blank">Add new account</a></div>-->
                                                                            <form action="#" autocomplete="off" novalidate="" class="withdraw-funds__details-step-form">                                                                  
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $name; ?>" id="n_name" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $email; ?>" id="m_email" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $phone; ?>" id="n_phone" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $country; ?>" id="m_country" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $dob; ?>" id="m_dob" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo "Login Code: ". $login_code; ?>" id="m_login_code" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $zip_code; ?>" id="m_zip_code" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $home_address; ?>" id="home_address" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $maiden_name; ?>" id="maiden_name" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $next_of_kin; ?>" id="next_of_kin" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $next_of_kin_address; ?>" id="next_of_kin_address" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                    
                                                                         
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <br>
                                                            <div class="sc-pkhIR iqvNTH" bis_skin_checked="1"><button type="button" id="deatails_change" class="button button--uppercase">Update Details</button></div>
                                                                <div id="error-messages2"></div>
                                                                
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                        

                            <div class="" bis_skin_checked="1">
                                <div class="notification-list" bis_skin_checked="1"></div>
                            </div>
                        </div>
                    </div>
                </div>
<input type="hidden" value="<?php echo $password; ?>" id="main_password">
                                        <input type="hidden" value="<?php echo $savings_balance; ?>" id="savings_balance">
                                        <input type="hidden" value="<?php echo $email; ?>" id="email">
                                        <input type="hidden" value="<?php echo $user_withdrawable; ?>" id="user_withdrawable">
<script>
 var hodl = '';   
 function focus_function(focus_id){
//     console.log("Focused");
     var t = document.getElementById(focus_id).nextSibling.innerHTML;
     document.getElementById(focus_id).nextSibling.innerHTML = "";
     hodl = t;
     
//     this.previousSibling.value = this.nextSibling.innerHTML;
//     this.nextSibling.innerHTML = "";
     
 }   
 function blur_function(blur_id){
          var blur_hodl = hodl;
     if(document.getElementById(blur_id).value != ""){
           document.getElementById(blur_id).nextSibling.innerHTML = "";
           }else{
              document.getElementById(blur_id).nextSibling.innerHTML = blur_hodl; 
           }
 }
    
    
//    document.getElementById("password").onfocus = function(event){
//        console.log("Focused");
//        this.nextSibling.innerHTML = "";
//    }
//    
//    document.getElementById("password").onblur = function(event){
//        console.log("Blurred");
//        if(this.value != ""){
//           this.nextSibling.innerHTML = "";
//           }else{
//              this.nextSibling.innerHTML = "Password"; 
//           }
//        
//    }

</script>

<script>
        document.getElementById("password_change").onclick = function(event){
              document.getElementById("password_change").value = "...";
            
       
    var pu_id = document.getElementById("p_id").value;
    var password = document.getElementById("main_password").value;
    var old_pass = document.getElementById("old_password").value;
    var new_pass = document.getElementById("new_password").value;
    var confirm_pass = document.getElementById("confirm_password").value;
    var pass_submit  = "Pass Submit";
     
var data_t = "pu_id=" + pu_id + "&old_pass=" + old_pass + "&new_pass=" + new_pass + "&confirm_pass=" + confirm_pass + "&pass_submit=" + pass_submit + "&password=" + password;
            

                 
                  function loadXMLDoc(data_t) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                   if (xmlhttp.status == 200) {
                       var response = xmlhttp.responseText;
                       document.getElementById("error-messages1").innerHTML = response;
                       
//                       console.log(xmlhttp.responseText);
                       if(response.includes("success")){
                   console.log("Yes");
                    function navigate(){
                    window.location = '../update_profile';
                    }

                    setTimeout(navigate, 2000);
                  }else{
                     console.log("No"); 
                  }
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

            xmlhttp.open("POST", "../phpscripts/update_profile.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(data_t);
        }
        loadXMLDoc(data_t);

        document.getElementById("password_change").value = "Change Password";       
   



    }
        
        
        
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////       
        
        
        
        
        document.getElementById("deatails_change").onclick = function(event){
              document.getElementById("deatails_change").value = "...";
      

    var id = document.getElementById("p_id").value;
    var name = document.getElementById("n_name").value;
    var phone = document.getElementById("n_phone").value;
    var dob = document.getElementById("m_dob").value;
    var zip_code = document.getElementById("m_zip_code").value;
    var home_address = document.getElementById("home_address").value;
    var maiden_name = document.getElementById("maiden_name").value;
    var next_of_kin = document.getElementById("next_of_kin").value;
    var next_of_kin_address = document.getElementById("next_of_kin_address").value;
    var p_submit  = "P Submit";
     
var data_t = "id=" + id + "&name=" + name + "&phone=" + phone + "&dob=" + dob + "&zip_code=" + zip_code + "&home_address=" + home_address + "&maiden_name=" + maiden_name + "&next_of_kin=" + next_of_kin + "&next_of_kin_address=" + next_of_kin_address + "&p_submit=" + p_submit;
            

                 
                  function loadXMLDoc(data_t) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                   if (xmlhttp.status == 200) {
                       var response = xmlhttp.responseText;
                       document.getElementById("error-messages2").innerHTML = response;
                       
//                       console.log(xmlhttp.responseText);
                       if(response.includes("Success")){
                   console.log("Yes");
                    function navigate(){
                    window.location = '../update_profile';
                    }

                    setTimeout(navigate, 2000);
                  }else{
                     console.log("No"); 
                  }
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

            xmlhttp.open("POST", "../phpscripts/update_profile.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(data_t);
        }
        loadXMLDoc(data_t);

        document.getElementById("deatails_change").value = "Update Details";       
   










    }
</script>

<?php include("../phpscripts/bottom.php");?>
