<?php
ob_start();
//Start session
session_start();
include('connection.php');
 function test_input($data){
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
if(isset($_POST['submit'])){ 
//print_r($_POST);
  $email = $_POST['email'];
  $password1 = $_POST['password'];
  $login_code = $_POST['login_code'];
 
   $error = false; 
//   if(empty($name)){
//       echo "Testing one two";
//   }   
      
      

       if (empty($email)) {
        $email_error = "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Email is required<p>";
           echo $email_error;
           $error = true;
      $id = "#email";
    } else {
        $email = test_input($email);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $email_error = "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Invalid email format<p>";
            echo $email_error;
            $error = true;
      $id = "#email";
        }
           
 
                                    
     if (empty($password1)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Password is required<p>";
         $error = true;
      $id = "#password1";
    } else {
        $password1 = test_input($password1);
      $password = hash('sha256', $password1);

     if (empty($login_code)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Enter Login Code<p>";
         $error = true;
      $id = "#password1";
    } else {
        $login_code = test_input($login_code);
         
         
 $sql = "SELECT * FROM users WHERE email='$email' AND password='$password' AND login_code='$login_code'";
$result = mysqli_query($link, $sql);
//         print_r($result);
if(!$result){
    echo '<div class="error" style="text-align:center;color:#fff;background-color:red;padding:5px">Error running the query!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count !== 1){
    echo '<div class="error" style="text-align:center;color:#fff;background-color:red;padding:5px">Wrong Email, Password, or Login Code</div>';
}
else {
   $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $account_status = $row['account_status'];
if($account_status == "Disabled"){
 echo '<div class="error" style="text-align:center;color:#fff;background-color:red;padding:5px">We have noticed suspicious activities and your account has been disabled. Please contact Admin </div>';
}else{
if($account_status == "Pending"){
 echo '<div class="error" style="text-align:center;color:#fff;background-color:red;padding:5px;font-size:13px">Your Account is currently under verification, this process might take up to 24hrs. You will receive an email notification if your Account is Successfully Verified, Thanks</div>';
}else{
        //log the user in: Set session variables
//    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $_SESSION['id']=$row['id'];
    $_SESSION['name']=$row['name'];
            echo '<div class="success" style="text-align:center;color:#fff;background-color:green;padding:5px">Login successful!</div>';
//        header("Refresh:3; url=dashboard");
    
//    echo "<script>
//function navigate(){
//window.location = '../dashboard';
//}
//
//setTimeout(navigate, 2000);
//</script>";
    
    
    
    
    
}
    
    
    
    
    
}

    



}        
         
          
          
          
          
          
          
          
          
          
                                            
                                        }
     }
            }   
        
  }

//php ob_end_flush(); 

?>
