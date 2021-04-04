<?php include("../phpscripts/top.php");?>
<?php $page = "fund"; ?>
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
                                                        <div class="fsm-header-legacy__start" bis_skin_checked="1" style="text-align:center"><span>&nbsp;</span><span class="text"><span>Receive Payment</span></span></div>
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
                                                            </span><span class="text__title">Pay and Submit Proof of Payment</span></div>
<!--                                                        <i class="icon-question" style="visibility: initial;"></i>-->
                                                    </div>
                                                </div>
                                                <div class="fsm-body-legacy" bis_skin_checked="1">
                                                    <div class="sc-pbIaG OyRjE" bis_skin_checked="1">
                                                        <div class="wizard withdraw-funds__wizard new-wizard" bis_skin_checked="1">
                                                            <section class="wizard-step-container">
                                                                <div class="wizard-step withdraw-funds__step wizard-step--active" bis_skin_checked="1">
                                                                    <div class="wizard-step__header wizard-step__header--active" bis_skin_checked="1"><i class="fas fa-money-bill-wave"></i>
                                                                        <h3>Wire Transfer</h3>
                                                                    </div>
                                                                    <input type="hidden" value="<?php echo $email; ?>" id="w_email">  
                                                                    <div class="wizard-step__body" bis_skin_checked="1">
                                                                        <div id="wire_response">
<?php 
$sql = "SELECT * FROM wire_requests WHERE email='$email'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger">Error occurred!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count >= 1){
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $w_status = $row['status'];
    $w_name = $row['name'];
    $w_account_number = $row['account_number'];
    $w_address = $row['address'];
    $w_bank_name = $row['bank_name'];
    $w_swift_code = $row['swift_code'];
    $w_routine_number = $row['routine_number'];
    $w_comment = $row['comment'];
    
    if($w_status == ''){
?>
                                    
                                    <div class="form-group">
                                            <p class="alert alert-success" style="text-align:center;padding:5px;margin-top:5px;background-color:#0068b6">Request is currently being processed... Check back later for payment information</p>
                                    </div>
                                    
                                    
                                    
<?php   
    }else{
?>
                                    
                                    <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                        <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                            <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo "Full Name: $w_name"; ?>" id="m_country" onfocus="focus_function(this.id)"
                                                       onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                        </div>
                                    </div>
                                    <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                        <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                            <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo "Account Number: $w_account_number"; ?>" id="m_country" onfocus="focus_function(this.id)"
                                                       onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                        </div>
                                    </div>
                                    <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                        <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                            <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo "Address: $w_address"; ?>" id="m_country" onfocus="focus_function(this.id)"
                                                       onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                        </div>
                                    </div>
                                    <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                        <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                            <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo "Bank Name: $w_bank_name"; ?>" id="m_country" onfocus="focus_function(this.id)"
                                                       onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                        </div>
                                    </div>
                                    <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                        <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                            <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo "Swift Code: $w_swift_code"; ?>" id="m_country" onfocus="focus_function(this.id)"
                                                       onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                        </div>
                                    </div>
                                    <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                        <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                            <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="<?php echo "Routine Number: $w_routine_number"; ?>" id="m_country" onfocus="focus_function(this.id)"
                                                       onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                        </div>
                                    </div>
                                    <div class="form-group">
                                            <p class="alert alert-success" style="text-align:center;padding:5px;margin-top:5px;background-color:#0068b6"><?php echo $w_comment; ?></p>
                                    </div>
<!--
                                    <div class="form-group">
                                            <label>Full Name</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_name; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Account Number</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_account_number; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_address; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Bank Name</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_bank_name; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Swift Code</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_swift_code; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Routine Number</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_routine_number; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <p class="alert alert-success"><?php echo $w_comment; ?></p>
                                    </div>
                                    
-->
                                    
<?php   
    }
}
else {
    
?>                                                          <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            <select id="account_type" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label">
                                                                                                <option value="" selected="">Select Acount Type</option>
                                                                                               <option value="savings">Savings</option>
                                                                                               <option value="investment">Investment</option>
                                                                                            </select>     
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="investment_duration" style="display:none">
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            <select id="w_duration" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label">
                                                                                                <option value="" selected="">Select Investment Duration</option>
                                                                                               <option value="2_months">2 Months</option>
                                                                                               <option value="3_months">3 Months</option>
                                                                                               <option value="5_months">5 Months</option>
                                                                                               <option value="8_months">8 Months</option>
                                                                                               <option value="1_year">1 Year</option>
                                                                                            </select>     
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            </div><br><br>
                                                                
                                    <div class="sc-pkhIR iqvNTH" bis_skin_checked="1"><button type="button" id="wire_button" class="button button--uppercase">Request Bank Transfer Information</button></div>
                                    <div id="error-messages1"></div>
                                                                            
<?php
}
?>
                                    

                                       </div> 
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <br>
                                                            
                                                                
                                                                
                                                        </div>
                                                        
                                                        
                                                        <div class="wizard withdraw-funds__wizard new-wizard" bis_skin_checked="1">
                                                            <section class="wizard-step-container">
                                                                <div class="wizard-step withdraw-funds__step wizard-step--active" bis_skin_checked="1">
                                                                    <div class="wizard-step__header wizard-step__header--active" bis_skin_checked="1"><i class="fas fa-money-bill-wave"></i>
                                                                        <h3>BTC Payment</h3>
                                                                    </div>
                                                                     <h2 style="font-weight:20px;color:red"><strong><b>Ensure Payment details are correct!!!</b></strong></h2>
                                                                            <h2 style="font-weight:20px;color:red"><?php 
                                                                                  $ether_symbol = 'Ξ';
                                                                                  if($currency == $ether_symbol){
                                                                                      echo "Ethereum address for payment: "."<span style='color:blue'>$eth_address</span>";
                                                                                  }else{
                                                                                      echo "Bitcoin address for payment: "."<span style='color:blue'>$bitcoin_address</span>"; 
                                                                                  }
                                                                                  ?></h2>
                                                                    <div class="wizard-step__body" bis_skin_checked="1">
                                                                        
                                                                        <div class="sc-qQmou imnfNV withdraw-funds__details-step-edit" bis_skin_checked="1">
                                                                           
                                                                            <form action="#" autocomplete="off" novalidate="" class="withdraw-funds__details-step-form">                                                    
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="Payment Currency: BTC" id="n_name" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" readonly><label for="description" class="sc-fznXWL lflnnT"></label></div>

                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="" id="hascode" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT">Enter Bitcoin Hashcode</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="number" step="any" min="0" value="" id="paid_amount" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)" ><label for="description" class="sc-fznXWL lflnnT">Amount Paid</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            <select id="account_type2" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label">
                                                                                                <option value="" selected="">Select Acount Type</option>
                                                                                               <option value="savings">Savings</option>
                                                                                               <option value="investment">Investment</option>
                                                                                            </select>     
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="investment_duration2" style="display:none">
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            <select id="p_duration" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label">
                                                                                                <option value="" selected="">Select Investment Duration</option>
                                                                                               <option value="2_months">2 Months</option>
                                                                                               <option value="3_months">3 Months</option>
                                                                                               <option value="5_months">5 Months</option>
                                                                                               <option value="8_months">8 Months</option>
                                                                                               <option value="1_year">1 Year</option>
                                                                                            </select>     
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                                    
                                                                         
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <br>
                                                            <div class="sc-pkhIR iqvNTH" bis_skin_checked="1"><button type="button" id="btc_submit" class="button button--uppercase">Send</button></div>
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
        document.getElementById("wire_button").onclick = function(event){
 
    var email = document.getElementById("w_email").value;
    var account_type = document.getElementById("account_type").value;
    var duration = document.getElementById("w_duration").value;
     
     if(account_type == ""){
         document.getElementById("error-messages1").innerHTML = '<div style="background-color:red;margin-top:5px;padding:5px;text-align:center">Select Account Type</div>';
     }else if(duration == "" && account_type == "investment"){
          document.getElementById("error-messages1").innerHTML = '<div style="background-color:red;margin-top:5px;padding:5px;text-align:center">Select Investment Duration</div>';    
    }else{
        if(account_type == "savings"){
            duration = "unlimited";
           var data_t = "email=" + email + "&account_type=" + account_type + "&duration=" + duration; 
        }else if(account_type == "investment"){
           var data_t = "email=" + email + "&account_type=" + account_type + "&duration=" + duration; 
        }
        
                          function loadXMLDoc(data_t) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                   if (xmlhttp.status == 200) {
                       var response = xmlhttp.responseText;
                       document.getElementById("wire_response").innerHTML = response;
                       
//                       console.log(xmlhttp.responseText);
//                       if(response.includes("success")){
//                   console.log("Yes");
//                    function navigate(){
//                    window.location = '../fund';
//                    }
//
//                    setTimeout(navigate, 2000);
//                  }else{
//                     console.log("No"); 
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

            xmlhttp.open("POST", "../phpscripts/wire.php", true);
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



    document.getElementById("account_type").onchange = function(){
//        console.log("changed");
        var v = this.value;
        if (v === 'savings') {
            document.getElementById("investment_duration").style.display = "None";
        }
        if(v === 'investment'){
            document.getElementById("investment_duration").style.display = "Block";
        }
        if(v === ''){
            document.getElementById("investment_duration").style.display = "None";
        }
    }

    document.getElementById("account_type2").onchange = function(){
//        console.log("changed");
        var v = this.value;
        if (v === 'savings') {
            document.getElementById("investment_duration2").style.display = "None";
        }
        if(v === 'investment'){
            document.getElementById("investment_duration2").style.display = "Block";
        }
        if(v === ''){
            document.getElementById("investment_duration2").style.display = "None";
        }
    }
    

</script>

<?php include("../phpscripts/bottom.php");?>
