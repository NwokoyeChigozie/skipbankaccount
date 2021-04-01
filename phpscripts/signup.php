<?php
include('connection.php');
 function test_input($data){
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
if(isset($_POST['submit'])){ 
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $email = $_POST['email'];
  $password1 = $_POST['password1'];
  $password2 = $_POST['password2'];
  $country = $_POST['country'];
  $username = $email;
  $dob = $_POST['DOB'];
  $gender = $_POST['gender'];
  $zip_code = $_POST['zip_code'];
  $home_address = $_POST['home_address'];
  $maiden_name = $_POST['maiden_name'];
  $next_of_kin = $_POST['next_of_kin'];
  $next_of_kin_address = $_POST['next_of_kin_address'];
  $login_code = $_POST['login_code'];
    
  $errorEmpty = false;
  $errorEmail = false;
   $error = false; 
//   if(empty($name)){
//       echo "Testing one two";
//   }      
      

    
//    <div style='text-align:center;color:#fff;background-color:red;padding:5px'>Name is required</div>
  if (empty($name)) {
        $name_error = "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Full name is required<p>";
      echo $name_error;
      $error = true;
      $id = "#name";
    } else {
        $name = test_input($name);
//        if (!preg_match("/^[a-za-Z]*$/" ,$name)) {
//            $name_error = "Only letters and white spaces allowed";
        
      
       if (empty($email)) {
        $email_error = "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Email is required<p>";
           echo $email_error;
           $error = true;
      $id = "#email";
    } else {
        $email = test_input($email);
            $username = $email;
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $email_error = "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Please enter a valid email<p>";
            echo $email_error;
            $error = true;
      $id = "#email";
            exit();
        }
           
           
  if (empty($phone)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Phone number is required<p>";
      $error = true;
      $id = "#phone";
    } else {
        $phone = test_input($phone);
      
      if (empty($country)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Country is required<p>";
          $error = true;
      $id = "#country";
    } else {
        $country = test_input($country);
      
          
       if (empty($dob)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Date of birth is required<p>";
           $error = true;
      $id = "#username";
    } else {
        $dob = test_input($dob);
      

                    
     if (empty($gender)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Select Gender<p>";
         $error = true;
      $id = "#type";
    } else {
        $gender = test_input($gender);
      


      

      
                  
    if (empty($zip_code)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Enter Zip Code<p>";
        $error = true;
      $id = "#currency";
    } else {
        $zip_code = test_input($zip_code);
      

        if (empty($home_address)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Enter Home Address<p>";
        $error = true;
      $id = "#currency";
    } else {
        $home_address = test_input($home_address);
      
    if (empty($maiden_name)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Enter Mother's maiden name<p>";
        $error = true;
      $id = "#currency";
    } else {
        $maiden_name = test_input($maiden_name);
      
    if (empty($next_of_kin)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Enter next of kin<p>";
        $error = true;
      $id = "#currency";
    } else {
        $next_of_kin = test_input($next_of_kin);
      
    if (empty($next_of_kin_address)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Enter Address of next of kin<p>";
        $error = true;
      $id = "#currency";
    } else {
        $next_of_kin_address = test_input($next_of_kin_address);

      
  
                                    
     if (empty($password1)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Password is required<p>";
         $error = true;
      $id = "#password1";
    } else {
        $password1 = test_input($password1);
      

         
          if (empty($password2)) {
        echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Confirm your password<p>";
              $error = true;
      $id = "#password2";
    } else {
        $password2 = test_input($password2);
        
      if($password1 != $password2){
         echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Passwords do not match<p>";
          $error = true;
      $id = "#password1, #password2";
      }else{
          $password1 = hash('sha256', $password1);
//          echo $name . "<br>" . $phone . "<br>" . $email . "<br>" . $password1 . "<br>" . $password2 . "<br>" . $country . "<br>" . $username . "<br>" . $type . "<br>" . $currency;
       
          
          
           $sql = "SELECT * FROM users WHERE email='$email'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger" style="text-align:center;color:#fff;background-color:red;padding:5px">Error occurred </div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count >= 1){
    echo '<div class="alert alert-danger" style="text-align:center;color:#fff;background-color:red;padding:5px">Email already Exists</div>';
}
else {
    
    
    
    
    
           $sql = "SELECT * FROM users WHERE username='$username'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="error" style="text-align:center;color:#fff;background-color:red;padding:5px">Error occurred!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count >= 1){
    echo '<div class="error" style="text-align:center;color:#fff;background-color:red;padding:5px">Username already Exists</div>';
}
else {
    
    
                $sql= "CREATE TABLE `$username` ( `id` INT NOT NULL AUTO_INCREMENT , `transaction` VARCHAR(100) NOT NULL , `account` VARCHAR(100) NOT NULL, `currency` VARCHAR(100) NOT NULL  , `amount` VARCHAR(150) NOT NULL , `date` VARCHAR(100) NOT NULL , `comment` VARCHAR(100) NOT NULL, `status` VARCHAR(100) NOT NULL, PRIMARY KEY (`id`)) ENGINE = InnoDB";      
                mysqli_query($link1, $sql);
    
                $sql= "INSERT INTO `users`(`name`, `email`,`phone`, `dob`,`password`, `login_code`,`country`, `zip_code`,`home_address`, `maiden_name`, `next_of_kin`, `next_of_kin_address`, `gender`, `username`, `account_status`) VALUES ('$name','$email','$phone','$dob','$password1','$login_code','$country','$zip_code','$home_address','$maiden_name','$next_of_kin','$next_of_kin_address','$gender','$username','Pending')";

        if(mysqli_query($link, $sql)){
        
            $resultMessage = "<p class='success' style='text-align:center;color:#fff;background-color:green;padding:5px'>Registration successful</p>";
            echo $resultMessage;
            header("Refresh:3; url=../dashboard");
            
            
           
            
            
        }else{ echo "<p class='error' style='text-align:center;color:#fff;background-color:red;padding:5px'>Error occurred while creating user<p>";} 
    

    
    
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
     }
                        } 
                    } 

                }   
            }   
       }      
  }

?>


