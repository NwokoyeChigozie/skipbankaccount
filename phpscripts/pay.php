<?php
 function test_input($data){  
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
if($_POST){
    include('connection.php');
//     function test_input($data){  
//     $data = trim($data);
//     $data = stripslashes($data);
//     $data = htmlspecialchars($data);
//     return $data;
// }
    if(isset($_POST['pay_submit'])){
$pay_amount = $_POST['amount'];
$receiver_email = $_POST['receiver_email'];
$password1 = $_POST['password'];
$password = $_POST['main_password'];
$savings_balance = $_POST['savings_balance'];
$email = $_POST['email'];
$balance_check = $savings_balance;        
      
        

      if (empty($pay_amount) || $pay_amount <= 0) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Amount is too small<p>";
        
    } else {
        $pay_amount = test_input($pay_amount);
          
                if (empty($receiver_email)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please Enter Receiver's E-mail<p>";
                    $receiver_email = test_input($receiver_email);
        
        
    } else {
                    
        if (!filter_var($receiver_email, FILTER_VALIDATE_EMAIL)) {
            $email_error = "<p class='error' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Please enter a valid email<p>";
            echo $email_error;
            $error = true;
      $id = "#email";
            exit();
        }
//        $btc_address = test_input($btc_address);
      
              
                    
             
if(hash('sha256', $password1) != $password){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'> Password is incorrect<p>";
}else{
    
if($pay_amount > $balance_check){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>You cannot Pay more than available amount<p>";
}else{
    
 $sql = "SELECT * FROM users WHERE email='$receiver_email'";
$receiver_result = mysqli_query($link, $sql);
//         print_r($result);
if(!$receiver_result){
    echo '<div class="error" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error running the query!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($receiver_result);
if($count !== 1){
    echo '<div class="error" style="background-color:red;padding:5px;margin-top:5px;text-align:center">E-mail does not belong to Skip Bank user';
}else{

    $time_of_action = date("F d, Y h:i:s", time());
    
                $sql_i = "SELECT * FROM users WHERE email='$email'";
                $result_i = mysqli_query($link, $sql_i);
                $user_row_i = mysqli_fetch_array($result_i, MYSQLI_ASSOC);
                $receiver_row = mysqli_fetch_array($receiver_result, MYSQLI_ASSOC);
                $receiver_balance = $receiver_row['savings_balance'];
                $user_balance = $user_row_i['savings_balance'];
                if($receiver_balance == ""){
                    $receiver_balance = 0;
                }
    $receiver_new_balance = $receiver_balance + $pay_amount;
    $user_new_balance = $user_balance - $pay_amount;
    
// $sql = "UPDATE `users` SET `name` = '$name',`phone` = '$phone', `dob` = '$dob', `zip_code` = '$zip_code', `home_address` = '$home_address', `maiden_name` = '$maiden_name', `next_of_kin` = '$next_of_kin', `next_of_kin_address` = '$next_of_kin_address' WHERE `users`.`id` = $id";
    
     $sql = "UPDATE `users` SET `savings_balance` = '$user_new_balance' WHERE `users`.`email` = '$email'";   
    if(mysqli_query($link, $sql)){
                 $sql = "UPDATE `users` SET `savings_balance` = '$receiver_new_balance' WHERE `users`.`email` = '$receiver_email'";   
            if(mysqli_query($link, $sql)){
                    
                
                    $t_data = $pay_amount . "usd Payment to $receiver_email was successful";
                     $sql= "INSERT INTO `$email`(`transaction`,`currency`, `amount`, `date`, `status`) VALUES ('$t_data','$','$pay_amount','$time_of_action', 'Completed')"; 
                    if(mysqli_query($link1, $sql)){
                    
                        
                         $t_data = $pay_amount . "usd Received from $email";
                     $sql= "INSERT INTO `$receiver_email`(`transaction`,`currency`, `amount`, `date`, `status`) VALUES ('$t_data','$','$pay_amount','$time_of_action', 'Completed')"; 
                        if(mysqli_query($link1, $sql)){
                            
                                $resultMessage = "<div class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Successfully Made Payment $receiver_email</div>";
                                    echo $resultMessage;
                                    echo "<script>
                                    function navigate(){
                                    window.location = '../pay';
                                    }

                                    setTimeout(navigate, 2000);
                                    </script>";


                                }else{ 
                                $resultMessage = '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while initiating payment, please try again in a while, or send feedback....</div>';
                                    echo $resultMessage;
                            } 
                
                        }else{ 
                        $resultMessage = '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while initiating payment, please try again in a while, or send feedback...</div>';
                            echo $resultMessage;
                    } 
                
                }else{ 
                $resultMessage = '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while initiating payment, please try again in a while, or send feedback..</div>';
                    echo $resultMessage;
            } 
        
        
        }else{ 
        $resultMessage = '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while initiating payment, please try again in a while, or send feedback.</div>';
            echo $resultMessage;
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