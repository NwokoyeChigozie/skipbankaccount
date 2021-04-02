<?php
 function test_input($data){
     $data = trim($data);
//     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
include('connection.php');
if(isset($_POST['submit'])){ 

  $email = mysqli_real_escape_string($link, $_POST['email']);
  $message = $_POST['description'];$message = mysqli_real_escape_string($link, $message);
  $time = date("F d, Y h:i:s", time());
  $username = mysqli_real_escape_string($link, $_POST['username']);

   $error = false; 
      
      

  if (empty($message)) {
        $message_error = "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>The feedback text field is empty<p>";
      echo $message_error;
    } else {
        $message = test_input($message);
       
          
          
           $sql = "SELECT * FROM feedback WHERE message='$message'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occurred!</div>';
    exit;
}
    
$count = mysqli_num_rows($result);
if($count >= 1){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Message has already been sent</div>';
}
else {
    
                $sql= "INSERT INTO `feedback`(`username`, `time`,`email`, `message`) VALUES ('$username','$time','$email','$message')";    
        if(mysqli_query($link, $sql)){
        
            $resultMessage = "<p class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Feedback sent successfully</p>";
            echo $resultMessage;
        }else{ echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Error occurred while sending feedback<p>";}      
    
    
} 
          
          
          
          
          
      
      
      
      
                         
      
                        } 
                    } 

  

?>
