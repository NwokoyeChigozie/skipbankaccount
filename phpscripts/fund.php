<?php
 function test_input($data){  
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
include('connection.php');
if(isset($_POST['submit'])){ 

  $currency = $_POST['currency'];
  $hashcode = $_POST['hashcode'];
  $paid_amount = $_POST['paid_amount'];
  $type = $_POST['type'];
  $email = $_POST['email'];
  $username = $_POST['username'];
// $t_details = "Your " . ucfirst($type) . " Account has been Credited with " . $paid_amount . "btc via btc payment method";
 $t_details = $paid_amount . "btc Credit Request to " . ucfirst($type) . " Account";
   $error = false; 
    
    if (empty($currency)) {
        $currency_error = "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Choose a currency<p>";
           echo $currency_error;
    } else {
        $currency = test_input($currency);
           $currency = mysqli_real_escape_string($link, $currency);
            if (empty($hashcode)) {
        $hashcode_error = "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Enter payment hashcode<p>";
           echo $hashcode_error;
    } else {
        $hashcode = test_input($hashcode);
           $hashcode = mysqli_real_escape_string($link, $hashcode);
                if (empty($paid_amount) || $paid_amount <= 0) {
                    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please enter correct amount<p>";
                
                } else {
                    
                    if (empty($type)) {
                    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please select account type<p>";
                
                } else {
                    
                    $paid_amount = $paid_amount;
                    $time_of_action = time();
            $time_of_action = date("F d, Y h:i:s", $time_of_action);
                    
                             $sql= "INSERT INTO `paymentproof`(`username`, `email`, `paid_amount`, `time`, `hashcode`, `currency`, `status`) VALUES ('$username','$email','$paid_amount','$time_of_action','$hashcode','$currency','pending')";    
        if(mysqli_query($link, $sql)){
                                       $sql= "INSERT INTO `$username`(`transaction`,`currency`, `amount`, `date`, `status`) VALUES ('$t_details','$currency','$paid_amount','$time_of_action', 'pending')";    
        if(mysqli_query($link1, $sql)){
            $resultMessage = "<div class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Successfully Sent Proof</div>";
            echo $resultMessage;
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured, please try again in a while, or send feedback</div>';
        }
            
        }else{
            echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured, please try again in a while, or send feedback</div>';
        } 
        
 
                }
                }
            }
        
    }
 
        
        
        
        

        
  }


?>