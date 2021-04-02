<?php
include('connection.php');
if($_POST){ 
if(isset($_POST['p_submit'])){ 
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $card_type = $_POST['card_type'];
  $home_address = $_POST['home_address'];
  $postal_code = $_POST['postal_code'];
    

if(empty($phone)){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Enter Phone Number</div>';
    
}else{
    
if(empty($home_address)){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Enter Your Address</div>';
    
}else{
    
if(empty($postal_code)){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Enter Postal/Zip Code</div>';
    
}else{
    



        
           $sql = "SELECT * FROM card_requests WHERE email='$email'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occurred!</div>';
    exit;
}
    
$count = mysqli_num_rows($result);
if($count >= 1){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>You've already made a request<p>";
}
else {
    
                $sql= "INSERT INTO `card_requests`(`email`, `phone`,`card_type`,`home_address`,`postal_code`,`status`) VALUES ('$email','$phone','$card_type','$home_address','$postal_code','pending')";    
        if(mysqli_query($link, $sql)){
        
            $resultMessage = "<p class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Your request is currently being processed, We will get back to you via Email.</p>";
            echo $resultMessage;
        }else{ echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Error occurred while sending request<p>";
             }      
    
    
} 
}
}
}
          
          
          
      
      
      
}
                         
      
                    }else{echo "Access Denied";}

  

?>