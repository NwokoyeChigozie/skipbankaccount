<?php 
 function test_input($data){
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
 if($_POST){
     include('connection.php');
     if(isset($_POST['p_submit'])){
         
         $id= $_POST['id'];
    $name = $_POST['name']; $name = mysqli_real_escape_string($link, $name);
    $phone = $_POST['phone']; $phone = mysqli_real_escape_string($link, $phone);
    $dob = $_POST['dob']; $dob = mysqli_real_escape_string($link, $dob);
    $zip_code = $_POST['zip_code']; $zip_code = mysqli_real_escape_string($link, $zip_code);
    $home_address = $_POST['home_address']; $home_address = mysqli_real_escape_string($link, $home_address);
    $maiden_name = $_POST['maiden_name']; $maiden_name = mysqli_real_escape_string($link, $maiden_name);
    $next_of_kin = $_POST['next_of_kin']; $next_of_kin = mysqli_real_escape_string($link, $next_of_kin);
    $next_of_kin_address = $_POST['next_of_kin_address']; $next_of_kin_address = mysqli_real_escape_string($link, $next_of_kin_address);
     
     
 $sql = "UPDATE `users` SET `name` = '$name',`phone` = '$phone', `dob` = '$dob', `zip_code` = '$zip_code', `home_address` = '$home_address', `maiden_name` = '$maiden_name', `next_of_kin` = '$next_of_kin', `next_of_kin_address` = '$next_of_kin_address' WHERE `users`.`id` = $id";   
     
     
    if(mysqli_query($link, $sql)){
        
            $resultMessage = "<div class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Successfully updated</div>";
            echo $resultMessage;
            echo "<script>
function navigate(){
window.location = '../update_profile';
}

setTimeout(navigate, 2000);
</script>";
//        echo "`name` = '$name',`phone` = '$phone', `dob` = '$dob', `zip_code` = '$zip_code', `home_address` = '$home_address', `maiden_name` = '$maiden_name', `next_of_kin` = '$next_of_kin', `next_of_kin_address` = '$next_of_kin_address'";
//        header("Refresh:1; url=users.php");
        
        }else{ 
        $resultMessage = "<div class='alert alert-error' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Error occured while updating details</div>";
            echo $resultMessage;
//        header("Refresh:1; url=users.php");
    } 
     }elseif(isset($_POST['pass_submit'])){
         
         
          $id = $_POST['pu_id'];
  $old_pass =  mysqli_real_escape_string($link, $_POST['old_pass']);

  $new_pass = mysqli_real_escape_string($link, $_POST['new_pass']);
  $password = mysqli_real_escape_string($link, $_POST['password']);
  $confirm_pass = mysqli_real_escape_string($link, $_POST['confirm_pass']);
 $old_pass = test_input($old_pass); 
   $error = false; 

       if (empty($new_pass)) {
        $password1_error = "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Enter new password<p>";
           echo $password1_error;
    } else {
        $new_pass = test_input($new_pass);        
 
                                    
     if (empty($confirm_pass)) {
        echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Confirm your password<p>";
        
    } else {
        $confirm_pass = test_input($confirm_pass);
         
if($new_pass != $confirm_pass){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Passwords do not match<p>";
}else{
    
    
    
if(hash('sha256', $old_pass) != $password){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'> Old password is incorrect<p>";
}else{
    
if(hash('sha256', $new_pass) == $password){
    echo "<p class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>New password cannot be thesame as the old one<p>";
}else{
    
        $new_pass = hash('sha256', $new_pass);
    
    
  $sql = "SELECT * FROM users WHERE id ='$id'";
$result = mysqli_query($link, $sql);
//echo "id: $id";
//print_r($result);
if(!$result){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error running the query!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count !== 1){
    echo '<div class="alert alert-danger" style="background-color:red;padding:5px;margin-top:5px;text-align:center">Error occured while updating password</div>';
}
else {

    
    
   $sql = "UPDATE `users` SET 
`password`='$new_pass' WHERE `id`= $id";    
 
    if(mysqli_query($link, $sql)){
        
            $resultMessage = "<div class='alert alert-success' style='background-color:green;padding:5px;margin-top:5px;text-align:center'>Password successfully changed</div>";
            echo $resultMessage;
        }else{     
 $resultMessage = "<div class='alert alert-danger' style='background-color:red;padding:5px;margin-top:5px;text-align:center'>Error ocurred, try again later.</div>";
            echo $resultMessage;
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