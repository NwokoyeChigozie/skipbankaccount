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
                                                        <div class="fsm-header-legacy__start" bis_skin_checked="1" style="text-align:center"><span>&nbsp;</span><span class="text"><span>Feedback</span></span></div>
                                                        <div class="fsm-header-legacy__end" bis_skin_checked="1">
<!--                                                            <i class="icon-question"></i>-->
                                                        </div>
                                                    </div>
                                                    <style>
                                                        
                                                    </style>
                                                    <div class="fsm-header-legacy__desktop" bis_skin_checked="1">
<!--                                                        <i class="icon-triangle-left" style="visibility: hidden;"></i>-->
                                                        <div class="text" bis_skin_checked="1"><span class="text__icon"><i class="icon-withdraw-to-bank__new"></i></span><span class="text__title">Feedback</span></div>
<!--                                                        <i class="icon-question" style="visibility: initial;"></i>-->
                                                    </div>
                                                </div>
                                                <div class="fsm-body-legacy" bis_skin_checked="1">
                                                    <div class="sc-pbIaG OyRjE" bis_skin_checked="1">
                                                        <div class="wizard withdraw-funds__wizard new-wizard" bis_skin_checked="1">
                                                            <section class="wizard-step-container">
                                                                <div class="wizard-step withdraw-funds__step wizard-step--active" bis_skin_checked="1">
                                                                    <div class="wizard-step__header wizard-step__header--active" bis_skin_checked="1"><i class="fas fa-money-bill-wave"></i>
                                                                        <h3>Send Feedback</h3>
                                                                    </div>
                                                                    <div class="wizard-step__body" bis_skin_checked="1">
                                                                        <div class="sc-qQmou imnfNV withdraw-funds__details-step-edit" bis_skin_checked="1">
<!--                                                                            <div class="sc-qYiqT ctdwUB withdraw-funds__details_step_description" bis_skin_checked="1">Withdraw to your personal or company bank account. <a target="blank">Add new account</a></div>-->
                                                                            <form action="#" autocomplete="off" novalidate="" class="withdraw-funds__details-step-form">                      
                                                                                
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            
<!--
                                                                                            <input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW focus_e kQnzLj withdraw-funds__input-source-amount label" type="password" value="" id="password" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)">
-->
                                                                                            
                                                                                            
                                                                                            <textarea id="feedback" class="sc-fzokvW focus_e kQnzLj withdraw-funds__input-source-amount label"
                                                                                            maxlength="200" rows="3" onclick="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"></textarea>
                                                                                            
                                                                                            
                                                                                            <label for="description" class="sc-fznXWL lflnnT"></label>
                                                                                        </div>
<!--                                                                                        <div class="sc-fzoxnE dhHCKo" bis_skin_checked="1">This description will appear in Transactions</div>-->
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
                                                                                        

                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <br>
                                                            <div class="sc-pkhIR iqvNTH" bis_skin_checked="1"><button type="button" id="send_feedback" class="button button--uppercase">Send</button></div>
                                                                <div id="error-messages"></div>
                                                                
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                        <input type="hidden" value="<?php echo $password; ?>" id="main_password">
                                        <input type="hidden" value="<?php echo $savings_balance; ?>" id="savings_balance">
                                        <input type="hidden" value="<?php echo $email; ?>" id="email">
                                        <input type="hidden" value="<?php echo $user_withdrawable; ?>" id="user_withdrawable">
                                        <input type="hidden" value="<?php echo $username; ?>" id="user_username">
<script>
        document.getElementById("send_feedback").onclick = function(event){
              document.getElementById("send_feedback").value = "...";    


    var description = document.getElementById("feedback").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("user_username").value;
    var submit  = "Submit";
     
var data_t = "description=" + description + "&email=" + email + "&username=" + username + "&submit=" + submit;
            

                 
                  function loadXMLDoc(data_t) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                   if (xmlhttp.status == 200) {
                       var response = xmlhttp.responseText;
                       document.getElementById("error-messages").innerHTML = response;
                       
//                       console.log(xmlhttp.responseText);
                       if(response.includes("success")){
                   console.log("Yes");
                    function navigate(){
                    window.location = '../feedback';
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

            xmlhttp.open("POST", "../phpscripts/feedback.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(data_t);
        }
        loadXMLDoc(data_t);

        document.getElementById("send_feedback").value = "Send";       
   










    }
</script>
                            <div class="" bis_skin_checked="1">
                                <div class="notification-list" bis_skin_checked="1"></div>
                            </div>
                        </div>
                    </div>
                </div>

<?php include("../phpscripts/bottom.php");?>
