<?php
include('connection.php');
if($_POST){ 
if(isset($_POST['p_submit'])){ 
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $card_type = $_POST['card_type'];
  $home_address = $_POST['home_address'];
  $postal_code = $_POST['postal_code'];
    




        
           $sql = "SELECT * FROM card_requests WHERE email='$email'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger">Error occurred!</div>';
    exit;
}
    
$count = mysqli_num_rows($result);
if($count >= 1){
    echo "<p class='alert alert-danger' style='text-align:center'>You've already made a request<p>";
}
else {
    
                $sql= "INSERT INTO `card_requests`(`email`, `phone`,`card_type`,`home_address`,`postal_code`,`status`) VALUES ('$email','$phone','$card_type','$home_address','$postal_code','pending')";    
        if(mysqli_query($link, $sql)){
        
            $resultMessage = "<p class='alert alert-success'>Your request is currently being processed, We will get back to you via Email.</p>";
            echo $resultMessage;
        }else{ echo "<p class='alert alert-danger'>Error occurred while sending request<p>";
             }      
    
    
} 
          
          
          
          
          
      
      
      
}
                         
      
                    }else{echo "Access Denied";}

  

?>