<?php include("../phpscripts/top.php");?>
<?php $page = "withdraw"; ?>
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
                                                        <div class="fsm-header-legacy__start" bis_skin_checked="1" style="text-align:center"><span>&nbsp;</span><span class="text"><span>Withdraw to bank</span></span></div>
                                                        <div class="fsm-header-legacy__end" bis_skin_checked="1">
<!--                                                            <i class="icon-question"></i>-->
                                                        </div>
                                                    </div>
                                                    <style>
                                                        
                                                    </style>
                                                    <div class="fsm-header-legacy__desktop" bis_skin_checked="1">
<!--                                                        <i class="icon-triangle-left" style="visibility: hidden;"></i>-->
                                                        <div class="text" bis_skin_checked="1"><span class="text__icon"><i class="icon-withdraw-to-bank__new"></i></span><span class="text__title">WITHDRAW</span></div>
<!--                                                        <i class="icon-question" style="visibility: initial;"></i>-->
                                                    </div>
                                                </div>
                                                <div class="fsm-body-legacy" bis_skin_checked="1">
                                                    <div class="sc-pbIaG OyRjE" bis_skin_checked="1">
                                                        <div class="wizard withdraw-funds__wizard new-wizard" bis_skin_checked="1">
                                                            <section class="wizard-step-container">
                                                                <div class="wizard-step withdraw-funds__step wizard-step--active" bis_skin_checked="1">
                                                                    <div class="wizard-step__header wizard-step__header--active" bis_skin_checked="1"><i class="fas fa-money-bill-wave"></i>
                                                                        <h3>Investment Withdrawable Amount: $ <?php echo $user_withdrawable; ?></h3>
                                                                    </div>
                                                                    <div class="wizard-step__body" bis_skin_checked="1">
                                                                        <div class="sc-qQmou imnfNV withdraw-funds__details-step-edit" bis_skin_checked="1">
<!--                                                                            <div class="sc-qYiqT ctdwUB withdraw-funds__details_step_description" bis_skin_checked="1">Withdraw to your personal or company bank account. <a target="blank">Add new account</a></div>-->
                                                                            <form action="#" autocomplete="off" novalidate="" class="withdraw-funds__details-step-form">                                                                  
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="number" value="" id="amount" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Amount ($)</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            <select id="account_type" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label">
                                                                                                <option value="" selected="">Select Acount Type</option>
                                                                                               <option value="Savings">Savings</option>
                                                                                               <option value="Investment">Investment</option>
                                                                                            </select>
<!--                                                                                            <label for="description" class="sc-fznXWL lflnnT">Acount Type</label></div>-->
                                                                                        
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                
                                                                                
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            <select id="medium" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label">
                                                                                                   <option value="" selected="">Select Withdrawal Medium</option>
                                                                                                   <option value="BTC" id="c_btc">BTC</option>
                                                                                                   <option value="Wire Transfer" id="c_wire">Bank(Wire) Transfer</option>
                                                                                            </select>
<!--                                                                                            <label for="description" class="sc-fznXWL lflnnT">Withdrawal Medium</label>-->
                                                                                        </div>
                                                                                        
                                                                                    </div>
                                                                                </div>
                                                                        <div id="btc_block" style="display:None">
                                                                            <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="" id="btc_address" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">BTC Address</label></div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div id="wire_block" style="display:None">
                                                                               <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="" id="full_name" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Full Name</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="" id="account_number" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Account Number</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="" id="address" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Address</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="" id="bank_name" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Bank Name</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="" id="swift_code" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Swift Code</label></div>

                                                                                    </div>
                                                                                </div>
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1"><input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW kQnzLj withdraw-funds__input-source-amount label" type="text" value="" id="routine_number" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Routine Number</label></div>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                                
                                                                                
                                                                                
                                                                                <div class="sc-oTbqq gcrTHe optional-input" bis_skin_checked="1">
                                                                                    <div class="sc-fzoMdx jflLGv" bis_skin_checked="1">
                                                                                        <div class="sc-fznLxA legPSK" bis_skin_checked="1">
                                                                                            
                                                                                            <input name="description" autocomplete="off" label="Description (optional)" class="sc-fzokvW focus_e kQnzLj withdraw-funds__input-source-amount label" type="password" value="" id="password" onfocus="focus_function(this.id)"
                                                                                                   onblur="blur_function(this.id)"><label for="description" class="sc-fznXWL lflnnT">Password</label>
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
                                                                                        
                                                                                        
<script>
    document.getElementById("medium").onchange = function(){
        console.log("changed");
        var v = this.value;
        if (v === 'BTC') {
            console.log("BTC")
            document.getElementById("btc_block").style.display = "Block";
            document.getElementById("wire_block").style.display = "None";
        }
        if(v === 'Wire Transfer'){
            document.getElementById("btc_block").style.display = "None";
            document.getElementById("wire_block").style.display = "Block";
        }
        if(v === ''){
            document.getElementById("btc_block").style.display = "None";
            document.getElementById("wire_block").style.display = "None";
        }
    }
    

</script>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <br>
                                                            <div class="sc-pkhIR iqvNTH" bis_skin_checked="1"><button type="button" id="withdraw_button" class="button button--uppercase">Initiate Withdrawal</button></div>
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
<script>
        document.getElementById("withdraw_button").onclick = function(event){
              document.getElementById("withdraw_button").value = "...";
            
    var amount = document.getElementById("amount").value;
    var account_type = document.getElementById("account_type").value;
    var medium = document.getElementById("medium").value;
    var btc_address = document.getElementById("btc_address").value;
    var full_name = document.getElementById("full_name").value;
    var account_number = document.getElementById("account_number").value;
    var address = document.getElementById("address").value;
    var bank_name = document.getElementById("bank_name").value;
    var swift_code = document.getElementById("swift_code").value;
    var routine_number = document.getElementById("routine_number").value;
    var password = document.getElementById("password").value;
    var main_password = document.getElementById("main_password").value;
    var savings_balance = document.getElementById("savings_balance").value;
    var email = document.getElementById("email").value;
    var user_withdrawable = document.getElementById("user_withdrawable").value;
    var submit  = document.getElementById("withdraw_button").value;

            
    if(medium == ""){
        document.getElementById("error-messages").innerHTML = '<div style="background-color:red;padding:5px;margin-top:5px">Please select Withdrawal Medium</div>';
    }else{
        
                  
    if (medium === 'BTC') {
            var btc_submit = "submit";
        var data_t = "amount=" + amount + "&account_type=" + account_type + "&btc_address=" + btc_address + "&password=" + password + "&main_password=" + main_password + "&savings_balance=" + savings_balance + "&email=" + email + "&user_withdrawable=" + user_withdrawable + "&btc_submit=" + btc_submit;
        
        }else if(medium === 'Wire Transfer'){
         var wire_submit = "submit";
         var data_t = "amount=" + amount + "&account_type=" + account_type + "&password=" + password + "&full_name=" + full_name + "&account_number=" + account_number + "&address=" + address + "&bank_name=" + bank_name + "&swift_code=" + swift_code + "&routine_number=" + routine_number + "&main_password=" + main_password + "&savings_balance=" + savings_balance + "&email=" + email + "&user_withdrawable=" + user_withdrawable + "&wire_submit=" + wire_submit;
                 }
                 
                  function loadXMLDoc(data_t) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                   if (xmlhttp.status == 200) {
                       var response = xmlhttp.responseText;
                       document.getElementById("error-messages").innerHTML = response;
                       
//                       console.log(xmlhttp.responseText);
                       if(response.includes("Success")){
                   console.log("Yes");
                    function navigate(){
                    window.location = '../withdraw';
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

            xmlhttp.open("POST", "../phpscripts/withdraw.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(data_t);
        }
        loadXMLDoc(data_t);

               
        
    }


document.getElementById("withdraw_button").value = "Initiate Withdrawal";







    }
</script>
                            <div class="" bis_skin_checked="1">
                                <div class="notification-list" bis_skin_checked="1"></div>
                            </div>
                        </div>
                    </div>
                </div>

<?php include("../phpscripts/bottom.php");?>
