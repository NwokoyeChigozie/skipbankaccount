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
                                                        <div class="fsm-header-legacy__start" bis_skin_checked="1" style="text-align:center"><span>&nbsp;</span><span class="text"><span>Benefit Fund</span></span></div>
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
                                                            </span><span class="text__title">Benefit Fund</span></div>
<!--                                                        <i class="icon-question" style="visibility: initial;"></i>-->
                                                    </div>
                                                </div>
                                                <div class="fsm-body-legacy" bis_skin_checked="1">
                                                    <div class="sc-pbIaG OyRjE" bis_skin_checked="1">
                                                        <div class="wizard withdraw-funds__wizard new-wizard" bis_skin_checked="1">
                                                            <section class="wizard-step-container">
                                                                <div class="wizard-step withdraw-funds__step wizard-step--active" bis_skin_checked="1">
                                                                    <div class="wizard-step__header wizard-step__header--active" bis_skin_checked="1"><i class="fas fa-money-bill-wave"></i>
                                                                        <h3>Benefit Fund</h3>
                                                                    </div>
                                                                    <input type="hidden" value="<?php echo $email; ?>" id="w_email">  
                                                                    <div class="wizard-step__body" bis_skin_checked="1">
                                                                        
                                                                        
 <?php 
  if($benefits == 0 || $benefits == ''){
      
  
?>
                                    <p style="color:black !important">Read More About Our Benefit Funds at <a href="../our_services/"><strong><b style="color:blue !important">Our Services Page</b></strong></a></p>
                                    <div id="wire_response"><br>
                                    <div class="form-group">
                                            <p class="alert alert-success" style="text-align:center;padding:5px;margin-top:5px;background-color:#0068b6">You Currently have no Benefit Fund, Please check back later.</p>
                                    </div>
                                        
<?php
 }else{                                       
?>
                               <div class="x_title">
                                <h2><strong><b>AVAILABLE BENEFIT FUNDS: <span style="color:green">$ <?php echo $benefits;?></span></b></strong></h2>
                                <input type="hidden" id="b_amount" value="<?php echo $benefits;?>">
                                <div class="clearfix"></div>
                            </div>
                                    
                                        <br><br>
                                                                
                                    <div class="sc-pkhIR iqvNTH" bis_skin_checked="1"><button type="button" id="claim_benefits" class="button button--uppercase">Claim Benefits</button></div>
                                    <div id="error-messages1"></div>
<?php
 }                                       
?>                                                                         
                                                                        
                                                               

                                                                    </div>
                                                                </div>
                                                            </section>
                                                            <br>
                                                            
                                                                
                                                                
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
        document.getElementById("claim_benefits").onclick = function(event){
 


    var amount = document.getElementById("b_amount").value;
    var email = document.getElementById("email").value;
    var claim_benefits = "Claim Benefit";
            
     var data_t = "amount=" + amount + "&email=" + email + "&claim_benefits=" + claim_benefits;
            
     function loadXMLDoc(data_t) {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                   if (xmlhttp.status == 200) {
                       var response = xmlhttp.responseText;
                       document.getElementById("error-messages1").innerHTML = response;
                       
//                       console.log(xmlhttp.responseText);
//                       if(response.includes("success")){
//                   console.log("Yes");
//                    function navigate(){
//                    window.location = '../benefit_funds';
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

            xmlhttp.open("POST", "../phpscripts/benefits.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send(data_t);
        }
        loadXMLDoc(data_t);  
            
                 
   
   



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
