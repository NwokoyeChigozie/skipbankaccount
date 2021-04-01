 <?php
 function test_input($data){  
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
if(isset($_POST['submit'])){ 
  $account_details = $_POST['account_details'];
  $withdrawal_amount = $_POST['withdrawal_amount'];
  $password1 = $_POST['password'];
  $currency = $currency;
   $error = false; 

       if (empty($account_details)) {
        $account_details_error = "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Enter account details<p>";
           echo $account_details_error;
    } else {
        $account_details = test_input($account_details);
           $account_details = mysqli_real_escape_string($link, $account_details);
 
                                    
     if (empty($withdrawal_amount) || $withdrawal_amount <= 0) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Amount is too small<p>";
        
    } else {
        $withdrawal_amount = $withdrawal_amount;
    
    
    
if(hash('sha256', $password1) != $password){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'> Password is incorrect<p>";
}else{
    
if($withdrawal_amount > $user_withdrawable){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>You cannot withdraw more than your Withdrawal Amount<p>";
}else{
    
    
  $sql = "SELECT * FROM users WHERE id ='$id'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error running the query!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count !== 1){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while initiating withdrawal, please try agsin in a while, or send feedback</div>';
}
else {

    $time_of_action = time();
    
   $sql = "UPDATE `users` SET 
`account_details`='$account_details' WHERE `id`= $id";    
 
    if(mysqli_query($link, $sql)){
        

        
         $sql= "INSERT INTO `withdrawal`(`username`, `email`, `withdrawal_amount`, `time`, `account_details`, `currency`, `status`) VALUES ('$username','$email','$withdrawal_amount','$time_of_action','$account_details','$currency','pending')";    
        if(mysqli_query($link, $sql)){
            
                     $sql= "INSERT INTO `$username`(`transaction`, `amount`, `date`, `status`) VALUES ('Withdrawal','$withdrawal_amount','$time_of_action', 'pending')";    
        if(mysqli_query($link1, $sql)){
               
            $resultMessage = "<div class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Successfully initiated withdrawal</div>";
            echo $resultMessage;
            echo "<script>
            function navigate(){
            window.location = '../withdraw';
            }

            setTimeout(navigate, 2000);
            </script>";
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured, please try agsin in a while, or send feedback</div>';
        }
            
         
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while initiating withdrawal, please try agsin in a while, or send feedback</div>';
        }     
        
        
        
        
        
        
        
        
        
        }else{     
 $resultMessage = "<div class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Error ocurred, try again later.</div>";
            echo $resultMessage;
    }  
    
    
    
    

    }    
    
    
    
    
}
}    
    

  
         
          
          
          
          
          
          
          
          
          
                                            
                                        }
                                    
            }   
        
  }





if($_POST){
    include('connection.php');
//     function test_input($data){  
//     $data = trim($data);
//     $data = stripslashes($data);
//     $data = htmlspecialchars($data);
//     return $data;
// }
    if(isset($_POST['btc_submit'])){
$withdrawal_amount = $_POST['amount'];
$account_type = $_POST['account_type'];
$btc_address = $_POST['btc_address'];
$password1 = $_POST['password'];
$password = $_POST['main_password'];
$savings_balance = $_POST['savings_balance'];
$email = $_POST['email'];
$user_withdrawable = $_POST['user_withdrawable'];
if($account_type == "Savings"){
    $balance_check = $savings_balance;
}elseif($account_type == "Investment"){
    $balance_check = $user_withdrawable;
}else{
    $balance_check = $savings_balance;
}       
        
      if (empty($account_type)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Select Account to withdraw from!<p>";
        
    } else {
      if (empty($withdrawal_amount) || $withdrawal_amount <= 0) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Amount is too small<p>";
        
    } else {
        $withdrawal_amount = test_input($withdrawal_amount);
          
                if (empty($btc_address)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please enter bitcoin wallet address<p>";
        
    } else {
        $btc_address = test_input($btc_address);
      
              
                    
             
if(hash('sha256', $password1) != $password){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'> Password is incorrect<p>";
}else{
    
if($withdrawal_amount > $balance_check){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>You cannot withdraw more than available amount<p>";
}else{
    


    $time_of_action = date("F d, Y h:i:s", time());
         $sql= "INSERT INTO `withdrawal`(`email`, `withdrawal_amount`, `time`, `account_type`, `currency`, `status`, `btc_address`) VALUES ('$email','$withdrawal_amount','$time_of_action','$account_type','$','pending','$btc_address')";    
        if(mysqli_query($link, $sql)){
            
//            $t_data = "Your " . ucfirst($account_type) . " Account has been Debited with " . $withdrawal_amount . "usd via btc payment method";
            
            $t_data = $withdrawal_amount . "usd Debit Request from " . ucfirst($account_type) . " Account";
                     $sql= "INSERT INTO `$email`(`transaction`,`currency`, `amount`, `date`, `status`) VALUES ('$t_data','$','$withdrawal_amount','$time_of_action', 'pending')";    
        if(mysqli_query($link1, $sql)){
               
            $resultMessage = "<div class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Successfully initiated withdrawal</div>";
            echo $resultMessage;
            echo "<script>
            function navigate(){
            window.location = '../withdraw';
            }

            setTimeout(navigate, 2000);
            </script>";
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured, please try again in a while, or send feedback</div>';
        }
            
         
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while initiating withdrawal, please try agsin in a while, or send feedback</div>';
        }     
        

    
    
}
}           
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
        }
      }
    }
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////       
    }elseif(isset($_POST['wire_submit'])){
        $withdrawal_amount = $_POST['amount'];
$account_type = $_POST['account_type'];
$password1 = test_input($_POST['password']);
$password = $_POST['main_password'];
$savings_balance = $_POST['savings_balance'];
$email = $_POST['email'];
$user_withdrawable = $_POST['user_withdrawable'];
$full_name = test_input($_POST['full_name']);
$account_number = test_input($_POST['account_number']);
$address = test_input($_POST['address']);
$bank_name = test_input($_POST['bank_name']);
$swift_code = test_input($_POST['swift_code']);
$routine_number = test_input($_POST['routine_number']);

if($account_type == "Savings"){
    $balance_check = $savings_balance;
}elseif($account_type == "Investment"){
    $balance_check = $user_withdrawable;
}else{
    $balance_check = $savings_balance;
}

      
       if (empty($account_type)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'  >Select Account to withdraw from!<p>";
        
    } else {
      if (empty($withdrawal_amount) || $withdrawal_amount <= 0) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'  >Amount is too small<p>";
        
    } else {
      
            if (empty($full_name)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'  >Enter Full Name<p>";
        
    } else {
      
                  if (empty($account_number)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'  >Enter Account Number<p>";
        
    } else {
      
                              if (empty($address)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'  >Enter Address<p>";
        
    } else {
      
                        if (empty($bank_name)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'  >Enter Bank Name<p>";
        
    } else {
      
                         
                            
                            
  if(hash('sha256', $password1) != $password){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'  > Password is incorrect<p>";
}else{
    
if($withdrawal_amount > $balance_check){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'  >You cannot withdraw more than available amount<p>";
}else{
    


    $time_of_action = date("F d, Y h:i:s", time());
         $sql= "INSERT INTO `withdrawal`(`email`, `withdrawal_amount`, `time`, `account_type`, `currency`, `status`, `full_name`, `account_number`, `address`, `bank_name`, `swift_code`, `routine_number`) VALUES ('$email','$withdrawal_amount','$time_of_action','$account_type','$','pending','$full_name','$account_number','$address','$bank_name','$swift_code','$routine_number')";    
        if(mysqli_query($link, $sql)){

            
//            $t_data = "Your " . ucfirst($account_type) . " Account has been Debited with " . $withdrawal_amount . "usd via Bank Transfer";
            $t_data = $withdrawal_amount . "usd Debit Request from " . ucfirst($account_type) . " Account";
                     $sql= "INSERT INTO `$email`(`transaction`,`currency`, `amount`, `date`, `status`) VALUES ('$t_data','$','$withdrawal_amount','$time_of_action', 'pending')";    
        if(mysqli_query($link1, $sql)){
               
            $resultMessage = "<div class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'  >Successfully initiated withdrawal</div>";
            echo $resultMessage;
            echo "<script>
            function navigate(){
            window.location = '../withdraw';
            }

            setTimeout(navigate, 2000);
            </script>";
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center"  >Error occured, please try again in a while, or send feedback</div>';
        }
            
         
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center"  >Error occured while initiating withdrawal, please try again in a while, or send feedback</div>';
        }     
        

    
    
}
}                           
                       
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
      
                }
      
      
           }
      
         }
      
       }
      
      }
    }
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
    }
    
}


?>