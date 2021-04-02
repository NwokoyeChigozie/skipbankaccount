<?php include("../phpscripts/top.php");?>
<?php $page = "request_card"; ?>
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
                                                        <div class="fsm-header-legacy__start" bis_skin_checked="1" style="text-align:center"><span>&nbsp;</span><span class="text"><span>Request Card</span></span></div>
                                                        <div class="fsm-header-legacy__end" bis_skin_checked="1">
<!--                                                            <i class="icon-question"></i>-->
                                                        </div>
                                                    </div>
                                                    <style>
                                                        
                                                    </style>
                                                    <div class="fsm-header-legacy__desktop" bis_skin_checked="1">
<!--                                                        <i class="icon-triangle-left" style="visibility: hidden;"></i>-->
                                                        <div class="text" bis_skin_checked="1"><span class="text__icon">
<!--                                                            <i class="icon-withdraw-to-bank__new"></i>-->
                                                            </span><span class="text__title">Request Card
</span></div>
<!--                                                        <i class="icon-question" style="visibility: initial;"></i>-->
                                                    </div>
                                                </div>
                                                <div class="fsm-body-legacy" bis_skin_checked="1">
                                                    <div class="sc-pbIaG OyRjE" bis_skin_checked="1">
                                                        <div class="wizard withdraw-funds__wizard new-wizard" bis_skin_checked="1">
                                                            <section class="wizard-step-container">
                                                                <div class="wizard-step withdraw-funds__step wizard-step--active" bis_skin_checked="1">
                                                                    <div class="wizard-step__header wizard-step__header--active" bis_skin_checked="1"><i class="fas fa-money-bill-wave"></i>
                                                                        <h3>Request Debit/Credit Card.</h3>
                                                                    </div>
                                                                    <div class="wizard-step__body" bis_skin_checked="1">
                                                                        
                                                                        <div class="sc-qQmou imnfNV withdraw-funds__details-step-edit" bis_skin_checked="1">
                                                                           
                                                                            <form action="#" autocomplete="off" novalidate="" class="withdraw-funds__details-step-form">               
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $email; ?>" id="m_email" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div> 
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            <select id="card_type" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label">
                                                                                                <option value="" selected="">Select Card Type</option>
                                                                                               <option value="Debit Card">Debit Card</option>
                                                                                               <option value="Credit Card">Credit Card</option>
                                                                                            </select>     
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $phone; ?>" id="m_phone" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div> 
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo $home_address; ?>" id="n_address" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div> 
                                                                               
                                                                             <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="password" value="" id="m_zip_code" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT">Enter Zip/Postal Code</label></div>

                                                                                    </div>
                                                                                </div>   
                                                                                    
                                                                         
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <br>
                                                            <div class="sc-pkhIR iqvNTH" bis_skin_checked="1"><button type="button" id="card_request" class="button button--uppercase">Request Card</button></div>
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
                                        <input type="hidden" value="<?php echo $username; ?>" id="username">
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
        document.getElementById("card_request").onclick = function(event){
            
           

            var email = document.getElementById("email").value;
            var phone = document.getElementById("m_phone").value;
            var card_type = document.getElementById("card_type").value;
            var home_address = document.getElementById("n_address").value;
            var postal_code = document.getElementById("m_zip_code").value;
            var p_submit = " ";
            
            if(card_type == ""){
                document.getElementById("error-messages2").innerHTML = '<div style="background-color:red;margin-top:5px;padding:5px;text-align:center">Select Card Type</div>';
            }else{
                data_t = "email=" + email + "&phone=" + phone + "&card_type=" + card_type + "&home_address=" + home_address + "&postal_code=" + postal_code + "&p_submit=" + p_submit;
                function loadXMLDoc(data_t) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                   if (xmlhttp.status == 200) {
                       var response = xmlhttp.responseText;
                       document.getElementById("error-messages2").innerHTML = response;
                       
                       console.log(xmlhttp.responseText);
//                       if(response.includes("process")){
////                   console.log("Yes");
//                    function navigate(){
//                    window.location = '../request_card';
//                    }
//
//                    setTimeout(navigate, 2000);
//                  }else{
////                     console.log("No"); 
//                  }
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

            xmlhttp.open("POST", "../phpscripts/card.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(data_t);
        }
        loadXMLDoc(data_t); 
                
                
            }
      



    }
        
        
        
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////       
        
        
        
        
        document.getElementById("btc_submit").onclick = function(event){

    var currency = "BTC";
    var hashcode = document.getElementById("hascode").value;
    var paid_amount = document.getElementById("paid_amount").value;
    var type = document.getElementById("account_type2").value;
    var username = document.getElementById("username").value;
    var email  = document.getElementById("email").value;
    var submit  = "Submit";
    
     
var data_t = "currency=" + currency + "&hashcode=" + hashcode + "&paid_amount=" + paid_amount + "&type=" + type + "&username=" + username + "&email=" + email + "&submit=" + submit;
            

                 
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
                    window.location = '../fund';
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

            xmlhttp.open("POST", "../phpscripts/fund.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(data_t);
        }
        loadXMLDoc(data_t);       
   










    }
</script>
<script>







    document.getElementById("l_type").onchange = function(){
//        console.log("changed");
        var v = this.value;
        if (v === 'Loans') {
            document.getElementById("loan_block").style.display = "Block";
            document.getElementById("grant_block").style.display = "None";
        }
        if(v === 'Grants'){
            document.getElementById("loan_block").style.display = "None";
            document.getElementById("grant_block").style.display = "Block";
        }
        if(v === ''){
            document.getElementById("loan_block").style.display = "None";
            document.getElementById("grant_block").style.display = "None";
        }
    }
    

</script>

<?php include("../phpscripts/bottom.php");?>
