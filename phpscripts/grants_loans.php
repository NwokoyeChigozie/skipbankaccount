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
        $account_details_error = "<p class='alert alert-danger' style='text-align:center'>Enter account details<p>";
           echo $account_details_error;
    } else {
        $account_details = test_input($account_details);
           $account_details = mysqli_real_escape_string($link, $account_details);
 
                                    
     if (empty($withdrawal_amount) || $withdrawal_amount <= 0) {
        echo "<p class='alert alert-danger' style='text-align:center'>Amount is too small<p>";
        
    } else {
        $withdrawal_amount = $withdrawal_amount;
    
    
    
if(hash('sha256', $password1) != $password){
    echo "<p class='alert alert-danger' style='text-align:center'> Password is incorrect<p>";
}else{
    
if($withdrawal_amount > $user_withdrawable){
    echo "<p class='alert alert-danger' style='text-align:center'>You cannot withdraw more than your Withdrawal Amount<p>";
}else{
    
    
  $sql = "SELECT * FROM users WHERE id ='$id'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger" style="text-align:center">Error running the query!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count !== 1){
    echo '<div class="alert alert-danger" style="text-align:center">Error occured while initiating withdrawal, please try agsin in a while, or send feedback</div>';
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
               
            $resultMessage = "<div class='alert alert-success' style='text-align:center'>Successfully initiated withdrawal</div>";
            echo $resultMessage;
        }else{
            echo '<div class="alert alert-danger" style="text-align:center">Error occured, please try agsin in a while, or send feedback</div>';
        }
            
         
        }else{
            echo '<div class="alert alert-danger" style="text-align:center">Error occured while initiating withdrawal, please try agsin in a while, or send feedback</div>';
        }     
        
        
        
        
        
        
        
        
        
        }else{     
 $resultMessage = "<div class='alert alert-danger' style='text-align:center'>Error ocurred, try again later.</div>";
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
    if(isset($_POST['l_submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $postal_code = $_POST['postal_code'];
        $phone = $_POST['phone'];
        $amount = $_POST['amount'];
        $password = $_POST['main_password'];
        $l_type = $_POST['l_type'];
        $l_duration = $_POST['l_duration'];
        $password1 = $_POST['l_password'];      
        $ssn_nin = $_POST['ssn_nin'];      
        
      if (empty($name)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Enter Your Full Name!<p>";
        
    } else {
      if (empty($amount) || $amount <= 0) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Amount is too small<p>";
        
    } else {
        $amount = test_input($amount);
          
    if (empty($address)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Enter your Address<p>";
        
    } else {
        $address = test_input($address);
     if (empty($postal_code)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Enter your Postal/Zip Code<p>";
        
    } else {
        $postal_code = test_input($postal_code);
     if (empty($phone)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Enter your Phone Number<p>";
        
    } else {
        $phone = test_input($phone);
         
      if (empty($ssn_nin)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Enter your Social Security Number/ National Identity Number<p>";
        
    } else {
        $ssn_nin = test_input($ssn_nin);
     if (empty($l_duration)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Select Duration<p>";
        
    } else {
        $l_duration = test_input($l_duration);
      
              
                    
             
if(hash('sha256', $password1) != $password){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'> Password is incorrect<p>";
}else{
    

$sql = "SELECT * FROM grants_loans WHERE email='$email'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occurred!</div>';
    exit;
}
    
$count = mysqli_num_rows($result);
if($count >= 1){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>You've already made a request<p>";
}else{








            $time_of_action = date("F d, Y h:i:s", time());
          $sql= "INSERT INTO `grants_loans`(`name`, `address`, `email`, `type`, `phone`, `amount`, `duration`, `postal_code`, `ssn_nin`, `status`) VALUES ('$name','$address','$email','$l_type','$phone','$amount','$l_duration','$postal_code','$ssn_nin','pending')";    
        if(mysqli_query($link, $sql)){
            
            $t_data = $l_type . " Request";
                     $sql= "INSERT INTO `$email`(`transaction`,`currency`, `amount`, `date`, `status`) VALUES ('$t_data','$','$amount','$time_of_action', 'pending')";    
        if(mysqli_query($link1, $sql)){
               
            $resultMessage = "<div class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Successfully Requested $l_type, we will contact you via E-mail</div>";
            echo $resultMessage;
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured, please try again in a while, or send feedback</div>';
        }
            
         
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while initiating withdrawal, please try again in a while, or send feedback</div>';
        }    
    
    
}
    

    

}           
                  
                    
                    
                    
                }
        }
      }
      }
        }
      }
    }
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        


    }elseif(isset($_POST['g_submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $address = $_POST['address'];
        $postal_code = $_POST['postal_code'];
        $phone = $_POST['phone'];
        $amount = $_POST['amount'];
        $password = $_POST['main_password'];
        $l_type = $_POST['l_type'];
        $l_duration = $_POST['g_duration'];
        $password1 = $_POST['g_password']; 
        $ssn_nin = $_POST['ssn_nin'];
        
      if (empty($name)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Enter Your Full Name!<p>";
        
    } else {
      if (empty($amount) || $amount <= 0) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Amount is too small<p>";
        
    } else {
        $amount = test_input($amount);
          
    if (empty($address)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Enter your Address<p>";
        
    } else {
        $address = test_input($address);
     if (empty($postal_code)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Enter your Postal/Zip Code<p>";
        
    } else {
        $postal_code = test_input($postal_code);
     if (empty($phone)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Enter your Phone Number<p>";
        
    } else {
        $phone = test_input($phone);
        if (empty($ssn_nin)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Enter your Social Security Number/ National Identity Number<p>";
        
    } else {
     if (empty($l_duration)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Select Duration<p>";
        
    } else {
        $l_duration = test_input($l_duration);
      
              
                    
             
if(hash('sha256', $password1) != $password){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'> Password is incorrect<p>";
}else{
    

$sql = "SELECT * FROM grants_loans WHERE email='$email'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occurred!</div>';
    exit;
}
    
$count = mysqli_num_rows($result);
if($count >= 1){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>You've already made a request<p>";
}else{








            $time_of_action = date("F d, Y h:i:s", time());
          $sql= "INSERT INTO `grants_loans`(`name`, `address`, `email`, `type`, `phone`, `amount`, `duration`, `postal_code`, `status`, `ssn_nin`, `date`) VALUES ('$name','$address','$email','$l_type','$phone','$amount','$l_duration','$postal_code','pending','$ssn_nin','$time_of_action')";    
        if(mysqli_query($link, $sql)){
            
            $t_data = $l_type . " Request";
                     $sql= "INSERT INTO `$email`(`transaction`,`currency`, `amount`, `date`, `status`) VALUES ('$t_data','$','$amount','$time_of_action', 'pending')";    
        if(mysqli_query($link1, $sql)){
               
            $resultMessage = "<div class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Successfully Requested $l_type, we will contact you via E-mail</div>";
            echo $resultMessage;
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured, please try again in a while, or send feedback</div>';
        }
            
         
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while initiating withdrawal, please try again in a while, or send feedback</div>';
        }    
    
    
}
    

    

}           
                  
                    
                    
                    
                }
       }
      }
      }
        }
      }
    }
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
    
}


?>