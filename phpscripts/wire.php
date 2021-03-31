<?php
include('connection.php');
if($_POST){ 

  $email = $_POST['email'];
  $account_type = $_POST['account_type'];
  $duration = $_POST['duration'];
    
  if($duration == '2_months'){
      $duration = '2 months';
  }elseif($duration == '3_months'){
      $duration = '3 months';
  }elseif($duration == '5_months'){
      $duration = '5 months';
  }elseif($duration == '8_months'){
      $duration = '8 months';
  }elseif($duration == '1_year'){
      $duration = '1 Year';
  }else{
      $duration = $duration;
  } 
          
          
           $sql = "SELECT * FROM wire_requests WHERE email='$email'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger">Error occurred!</div>';
    exit;
}
    
$count = mysqli_num_rows($result);
if($count >= 1){
    echo '<div class="form-group"><p class="alert alert-success" style="text-align:center">Request is currently being processed... Check back later for payment information</p></div>';
}
else {
    
                $sql= "INSERT INTO `wire_requests`(`email`, `account_type`,`duration`) VALUES ('$email','$account_type','$duration')";    
        if(mysqli_query($link, $sql)){
        
            $resultMessage = '<div class="form-group"><p class="alert alert-success" style="text-align:center">Request is currently being processed... Check back later for payment information</p></div>';
            echo $resultMessage;
        }else{ echo "<p class='alert alert-danger'>Error occurred while sending request<p>";}      
    
    
} 
          
          
          
          
          
      
      
      
      
                         
      
                    }else{echo "Access Denied";}

  

?>