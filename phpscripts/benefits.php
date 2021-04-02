<?php
include('connection.php');
if($_POST){ 
if(isset($_POST['claim_benefits'])){ 
  $email = $_POST['email'];
  $amount = $_POST['amount'];

        
           $sql = "SELECT * FROM benefits WHERE email='$email'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occurred!</div>';
    exit;
}
    
$count = mysqli_num_rows($result);
if($count >= 1){
    echo "<p class='alert alert-danger'  style='background-color:red;padding:5px;margin-top:5px;text-align:center'>You've already made a request<p>";
}
else {
    
                $sql= "INSERT INTO `benefits`(`email`, `amount`,`status`) VALUES ('$email','$amount','pending')";    
        if(mysqli_query($link, $sql)){
        
            $resultMessage = "<p class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>You've successfully claimed your Benefits, your savings balance will be updated soon.</p>";
            echo $resultMessage;
        }else{ echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Error occurred while sending request<p>";
             }      
    
    
} 
          
          
          
          
          
      
      
      
}
                         
      
                    }else{echo "Access Denied";}

  

?>