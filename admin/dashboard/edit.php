<?php
ob_start();
//Start session
session_start();
//Connect to the database
if(!isset($_SESSION['admin_id'])){
    header("location:../");
}
include("../../phpscripts/connection.php");
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
       <!--====== FAVICON ICON =======-->
    <link rel="apple-touch-icon" sizes="120x120" href="../../apple-touch-icon.png"> <link rel="icon" type="image/png" sizes="32x32" href="../../favicon-32x32.png"> <link rel="icon" type="image/png" sizes="16x16" href="../../favicon-16x16.png"> <link rel="manifest" href="../../site.webmanifest"> <link rel="mask-icon" href="../../safari-pinned-tab.svg" color="#5bbad5"> <meta name="msapplication-TileColor" content="#fff7f7"> <meta name="theme-color" content="#ffffff">
    

    <link rel="apple-touch-icon" sizes="120x120" href="../../apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../../favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../../favicon-16x16.png">
<link rel="manifest" href="../../site.webmanifest">
<link rel="mask-icon" href="../../safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#fff7f7">
<meta name="theme-color" content="#ffffff">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Admin Dashboard</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Tempusdominus Bbootstrap 4 -->
  <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
  <!-- iCheck -->
  <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
  <!-- JQVMap -->
  <link rel="stylesheet" href="plugins/jqvmap/jqvmap.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="dist/css/adminlte.min.css">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="plugins/daterangepicker/daterangepicker.css">
  <!-- summernote -->
  <link rel="stylesheet" href="plugins/summernote/summernote-bs4.css">
  <!-- Google Font: Source Sans Pro -->
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
        <li class="nav-item" style="float: right; background-color:blue;border-radius:20px">
        <a class="nav-link" href="logout.php" role="button">Logout</a>
      </li>
    </ul>

    <!-- Right navbar links -->

  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="../../Images/ARK344.png" alt="Logo" class="brand-image img-circle elevation-3"
           style=""><br>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <a href="index.php" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </a>
            
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="./users.php" class="nav-link active">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Users
              </p>
            </a>
            </li>
 <li class="nav-item has-treeview menu-open">
            <a href="feedbacks.php" class="nav-link">
<!--              <i class="nav-icon fa fa-location-arrow"></i>-->
              <i class="nav-icon fa fa fa-reply"></i>
              <p>
<!--                  <i class="material-icons">menu</i>-->
                Feedbacks
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="proofs.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Proofs of payment
              </p>
            </a>
          </li>  
          <li class="nav-item has-treeview menu-open">
            <a href="withdrawal.php" class="nav-link">
              <i class="nav-icon fa fa-arrow-up"></i>
              <p>
                Withrawal Requests
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="wire_requests.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Wire Transfer Requests
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="card_requests.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Card Requests
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="grants_loans.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Grant/Loan Requests
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview menu-open">
            <a href="benefits.php" class="nav-link">
              <i class="nav-icon fa fa-paper-plane"></i>
              <p>
                Benefit Fund Requests
              </p>
            </a>
          </li>
              

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Dashboard</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->


      
      <!-- Main content -->
    <section class="content" style="padding-bottom:40px"> <form method="post">
      <div class="row">

        <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Edit User details</h3>
 <?php
if($_GET){   
    $id= $_GET['id'];
    
    
  $sql = "SELECT * FROM `users` WHERE `id` = '$id'" ;
          if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                     $id = $row['id'];
    $name =$row['name']; 
    $email =$row['email']; 
    $phone =$row['phone']; 
    $country =$row['country']; 
    $username =$row['username']; 
    $type =$row['type']; 
    $currency =$row['currency']; 
    $account_status =$row['account_status']; 
    $last_access = $row['last_access'];
    $current_access = $row['current_access'];       
    $p_id = $row['id']; 
    $savings_balance = $row['savings_balance'];
    $investment_balance = $row['investment_balance'];
    $account_details  = $row['account_details'];
    $user_withdrawable = $row['user_withdrawable'];
    $password = $row['password'];
    $dob = $row['dob'];
    $login_code = $row['login_code'];
    $zip_code = $row['zip_code'];
    $home_address = $row['home_address'];
    $maiden_name = $row['maiden_name'];
    $next_of_kin = $row['next_of_kin'];
    $next_of_kin_address = $row['next_of_kin_address'];
    $gender = $row['gender'];
    $benefits = $row['benefits'];
    $rio = $row['rio'];
    $ssn_nin = $row['ssn_nin'];
            
            
            
            
            
            
            
            
            
      
            
            
            

        }
        //close the result set
        mysqli_free_result($result);

    }else{
        echo "<p>User no longer exist</p>"; 

         }
}else{
    echo "<p>Unable to excecute: $sql. " . mysqli_error($link) ."</p>";   
            
}   
  
    
    
}
?> 


              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
                <input type="hidden" name="id" class="form-control" value="<?php echo $id; ?>">
              <div class="form-group">
                <label for="inputSpentBudget">Full Name</label>
                <input type="text" name="name" class="form-control" value="<?php echo $name; ?>">
              </div>
                
              <div class="form-group">
                <label for="inputSpentBudget">E-mail</label>
                <input type="text" name="email" class="form-control" value="<?php echo $email; ?>" readonly>
              </div>
                
    
              <div class="form-group">
                <label for="inputSpentBudget">Phone number</label>
                <input type="text" name="phone" class="form-control" value="<?php echo $phone; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Date of Birth</label>
                <input type="text" name="dob" class="form-control" value="<?php echo $dob; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Gender</label>
                <input type="text" name="gender" class="form-control" value="<?php echo $gender; ?>">
              </div>
                
              <div class="form-group">
                <label for="inputSpentBudget">Country</label>
                <input type="text" name="country" class="form-control" value="<?php echo $country; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Zip Code</label>
                <input type="text" name="zip_code" class="form-control" value="<?php echo $zip_code; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Home Address</label>
                <input type="text" name="home_address" class="form-control" value="<?php echo $home_address; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Maiden Name</label>
                <input type="text" name="maiden_name" class="form-control" value="<?php echo $maiden_name; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Next of Kin</label>
                <input type="text" name="next_of_kin" class="form-control" value="<?php echo $next_of_kin; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Next of Kin Address</label>
                <input type="text" name="next_of_kin_address" class="form-control" value="<?php echo $next_of_kin_address; ?>">
              </div>
                
              <div class="form-group">
                <label for="inputSpentBudget">Login Code</label>
                <input type="text" name="login_code" class="form-control" value="<?php echo $login_code; ?>">
              </div>
                <div class="form-group">
                <label for="inputSpentBudget">Savings Balance</label>
                <input type="text" name="savings_balance" class="form-control" value="<?php echo $savings_balance; ?>">
              </div>
                <div class="form-group">
                <label for="inputSpentBudget">Investment Balance</label>
                <input type="text" name="investment_balance" class="form-control" value="<?php echo $investment_balance; ?>">
              </div>
                <div class="form-group">
                <label for="inputSpentBudget">Investment Withdrawable</label>
                <input type="text" name="user_withdrawable" class="form-control" value="<?php echo $user_withdrawable; ?>">
              </div>
                <div class="form-group">
                <label for="inputSpentBudget">Benefits</label>
                <input type="text" name="benefits" class="form-control" value="<?php echo $benefits; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Investment Increment</label>
                <input type="text" name="rio" class="form-control" value="<?php echo $rio; ?>">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">SSN/NIN</label>
                <input type="text" name="ssn_nin" class="form-control" value="<?php echo $ssn_nin; ?>">
              </div>
                

<!--
              <div class="form-group">
                <label for="inputSpentBudget">Last seen</label>
                <input type="text" name="last_access" class="form-control" value="<?php echo $last_date; ?>" disabled>
              </div> 
-->
                
                
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->

          <!-- /.card -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-success float-right" name="edit_user" type="submit">Save Changes</button>
            <?php 
            if($account_status == 'Verified'){ 
               echo "<a class='btn btn-danger btn-sm' href='disable.php?id=$id'>Disable User</a>";
            }else{
                echo "<a class='btn btn-success btn-sm' href='enable.php?id=$id'>Enable User</a>";
            }
            ?>
        </div>
      </div>
<!------------------------------------------save-------------------------------------->
<?php 
 if($_POST){      
     if(isset($_POST['edit_user'])){    
         $id= $_POST['id'];
    $name = $_POST['name']; $name = mysqli_real_escape_string($link, $name);
    $email = $_POST['email']; $email = mysqli_real_escape_string($link, $email);
    $phone = $_POST['phone']; $phone = mysqli_real_escape_string($link, $phone);
    $dob = $_POST['dob']; $dob = mysqli_real_escape_string($link, $dob);
    $gender = $_POST['gender']; $gender = mysqli_real_escape_string($link, $gender);
    $country = $_POST['country']; $country = mysqli_real_escape_string($link, $country);
    $zip_code = $_POST['zip_code']; $zip_code = mysqli_real_escape_string($link, $zip_code);
    $home_address = $_POST['home_address']; $home_address = mysqli_real_escape_string($link, $home_address);
    $maiden_name = $_POST['maiden_name']; $maiden_name = mysqli_real_escape_string($link, $maiden_name);
    $next_of_kin = $_POST['next_of_kin']; $next_of_kin = mysqli_real_escape_string($link, $next_of_kin);
    $next_of_kin_address = $_POST['next_of_kin_address']; $next_of_kin_address = mysqli_real_escape_string($link, $next_of_kin_address);
    $login_code = $_POST['login_code']; $login_code = mysqli_real_escape_string($link, $login_code);
    $savings_balance = $_POST['savings_balance']; $savings_balance = mysqli_real_escape_string($link, $savings_balance);
    $investment_balance = $_POST['investment_balance']; $investment_balance = mysqli_real_escape_string($link, $investment_balance);
    $user_withdrawable = $_POST['user_withdrawable']; $user_withdrawable = mysqli_real_escape_string($link, $user_withdrawable);
    $benefits = $_POST['benefits']; $benefits = mysqli_real_escape_string($link, $benefits);
    $rio = $_POST['rio']; $rio = mysqli_real_escape_string($link, $rio);
    $ssn_nin = $_POST['ssn_nin']; $ssn_nin = mysqli_real_escape_string($link, $ssn_nin);
     
     
 $sql = "UPDATE `users` SET `name` = '$name',`rio` = '$rio',`email` = '$email', `phone` = '$phone', `dob` = '$dob', `gender` = '$gender', `country` = '$country', `zip_code` = '$zip_code', `home_address` = '$home_address', `maiden_name` = '$maiden_name', `next_of_kin` = '$next_of_kin', `next_of_kin_address` = '$next_of_kin_address', `login_code` = '$login_code', `savings_balance` = '$savings_balance', `investment_balance` = '$investment_balance', `user_withdrawable` = '$user_withdrawable', `benefits` = '$benefits', `ssn_nin` = '$ssn_nin' WHERE `users`.`id` = $id";   
     
     
    if(mysqli_query($link, $sql)){
        
            $resultMessage = "<div class='alert alert-success'>Successfully updated</div>";
            echo $resultMessage;
//        header("Refresh:1; url=users.php");
        
        }else{ 
        $resultMessage = "<div class='alert alert-error'>Error occured while updating database</div>";
            echo $resultMessage;
//        header("Refresh:1; url=users.php");
    } 
     }
    
               
 }
 ?>               
<!------------------------------------------save-------------------------------------->   
<!--
    </form></section>   
         <div class="row" style="padding;20px">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"><strong>Trade History</strong></h3>


              </div>
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Group</th>
                      <th>Test1</th>
                      <th>Test2</th>
                      <th>Total</th>
                        <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>المحبوب </strong></td>
                      <td><?php echo $group1a; ?></td>
                      <td><?php echo $group1b; ?></td>
                      <td><span class="tag tag-success"><?php echo $group1; ?></span></td>
                        <td>Beloved</td>
                    </tr>
                      <tr>
                      <td><strong> القوي </strong></td>
                      <td><?php echo $group2a; ?></td>
                      <td><?php echo $group2b; ?></td>
                      <td><span class="tag tag-success"><?php echo $group2; ?></span></td>
                          <td>Strong</td>
                    </tr>
                      <tr>
                      <td><strong>المثالي</strong></td>
                      <td><?php echo $group3a; ?></td>
                      <td><?php echo $group3b; ?></td>
                      <td><span class="tag tag-success"><?php echo $group3; ?></span></td>
                          <td>Ideal</td>
                    </tr>
                      <tr>
                      <td><strong>الصامت</strong></td>
                      <td><?php echo $group4a; ?></td>
                      <td><?php echo $group4b; ?></td>
                      <td><span class="tag tag-success"><?php echo $group4; ?></span></td>
                          <td>Silent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>     
      
-->
    <!-- Main content -->
        
        
       
          <br><section class="content" style="padding-bottom:40px"><form method="post">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Add new history to trade history</h3>

              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="inputEstimatedBudget">Transaction Detail</label>
                <input type="text" name="transaction" class="form-control" >
              </div>
                <div class="form-group">
                <label for="inputSpentBudget">Currency</label>
                <input type="text" name="currency" class="form-control" value="">
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Amount</label>
                <input type="text" name="amount" id="inputSpentBudget" class="form-control">
              </div>
                <div class="form-group">
                <label for="inputSpentBudget">Date</label>
                <input type="text" name="date" id="inputSpentBudget" class="form-control" >
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Comment</label>
                <input type="text" name="comment" id="inputSpentBudget" class="form-control" >
              </div>
              <div class="form-group">
                <label for="inputSpentBudget">Status</label>
                <input type="text" name="status" id="inputSpentBudget" class="form-control" >
              </div>
            </div>

            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
            <button class="btn btn-success float-right" name="add_trade" type="submit">Add trade &nbsp;<span class="fa fa-plus"></span></button>
        </div>
      </div><br>
<?php
 if($_POST){  
 if(isset($_POST['add_trade'])){
     $transaction = $_POST['transaction']; $transaction = mysqli_real_escape_string($link, $transaction);
     $amount = $_POST['amount']; $amount = mysqli_real_escape_string($link, $amount);
     $date = $_POST['date']; $date = mysqli_real_escape_string($link, $date);
     $currency = $_POST['currency']; $currency = mysqli_real_escape_string($link, $currency);
     $comment = $_POST['comment']; $comment = mysqli_real_escape_string($link, $comment);
     $status = $_POST['status']; $status = mysqli_real_escape_string($link, $status);
     //Check user inputs
    //Define error messages
$missingTransaction = '<p style="background-color:red;text-align:center"><stong>Please enter Transaction details!</strong></p>';
$missingAccount = '<p style="background-color:red;text-align:center"><stong>Please enter Transaction Amount!</strong></p>'; 
$missingDate = '<p style="background-color:red;text-align:center"><stong>Please enter Date!</strong></p>'; 
$errors = "";
    //Get email and password
    //Store errors in errors variable
if(empty($transaction)){
    echo $missingTransaction;  
}else{
    if(empty($amount)){
    echo $missingAccount;  
}else{
        if(empty($date)){
    echo $missingDate;  
}else{
              $sql1= "INSERT INTO `$username`(`transaction`, `currency`, `amount`, `date`, `comment`, `status`) VALUES ('$transaction','$currency','$amount','$date','$comment','$status')";    
        if(mysqli_query($link1, $sql1)){
        
            $resultMessage = "<div class='alert alert-success'>Trade successfully added</div>";
            echo $resultMessage;
//            header("Refresh:1; url=../dashboard");
        }else{echo 'Error occurred while creating trade history';}    
            
    
            }
           }
        }
    }
 }
?>
              </form></section>       
        
        
    <br><section class="content">

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Trade history</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i class="fas fa-minus"></i></button>
          </div>
        </div>
        <div class="card-body p-0">
          <table class="table table-striped projects">
               <thead>
                  <tr>

                      <th style="width: 25%">
                          Transaction
                      </th>
                      <th>
                          currency
                      </th>
                      <th style="width: 20%; text-align:center">
                         Amount
                      </th>
                      <th style="width: 8%">
                         Status
                      </th>

                      <th>
                          date
                      </th>
<!--
                      <th style="width: 8%" class="text-center">
                          Account status
                      </th>
                      <th style="width: 8%" class="text-center">
                          Last seen
                      </th>
-->
                      <th style="width: 20%">
                      </th>
                  </tr>
              </thead>
              <tbody>

<?php 
$sql1 = "SELECT * FROM `$username`  ORDER BY id DESC" ;
          if($result = mysqli_query($link1, $sql1)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                   $transactionid = $row["id"];
            
               $transaction = $row["transaction"];
            
               $amount = $row["amount"];
            
               $date = $row["date"];  
               $currency = $row["currency"];  
               $status = $row["status"];  
//            
//               $email = $row["email"];
//               $email = strtolower($email);
//               $email = ucfirst($email);
//                $country = strtoupper($country);
//            
                   echo " <tr>";
                   echo "
                   <td>$transaction</td>
                   <td>$currency</td>
                   <td style='text-align:center'>$amount</td>
                   <td>$status</td>
                   <td>$date</td>
                   
                   <td class='project-actions text-right'>

                          <a class='btn btn-info btn-sm' href='edit_transaction.php?id=$transactionid&co=$currency&username=$username'>
                              <i class='fas fa-pencil-alt'>
                              </i>
                              Edit
                          </a>
                          <a class='btn btn-danger btn-sm' href='delete_transaction.php?id=$transactionid&username=$username&u_id=$id'>
                              <i class='fas fa-trash'>
                              </i>
                              Delete
                          </a>
                      </td>";     
                   echo " </tr>";
        }
    }
          }
?>

                  
                  
                  
                  
              </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->

    </section>  
        
      <!-- Main content -->
    <section class="content" style="padding-bottom:40px"> <form method="post">
      <div class="row">

        <div class="col-md-12">
          <div class="card card-secondary">
            <div class="card-header">
              <h3 class="card-title">Change Password</h3>
 


              <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i class="fas fa-minus"></i></button>
              </div>
            </div>
            <div class="card-body">
                <input type="hidden" name="id" class="form-control" value="<?php echo $id; ?>">
              <div class="form-group">
                <label for="inputSpentBudget">New Password</label>
                <input type="password" name="new_password" class="form-control" placeholder="Enter Password">
              </div>
                
              <div class="form-group">
                <label for="inputSpentBudget">Confirm Password</label>
                <input type="password" name="confirm_new_password" class="form-control" placeholder="Confirm Password">
              </div>
                
                <div class="form-group">
                <label for="inputSpentBudget">Enter Admin Password</label>
                <input type="password" name="admin_password" class="form-control" placeholder="Enter Admin Password">
              </div>
                
                
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->

          <!-- /.card -->
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button class="btn btn-success float-right" name="change_password" type="submit">Change Password</button>
        </div>
      </div><br>
<!------------------------------------------save-------------------------------------->
<?php 
 if($_POST){ 
      function test_input($data){
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
     
       $sql = "SELECT * FROM `admin` WHERE `id` = 1" ;
          if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                     $main_admin_password = $row['password']; 
     
        }
        //close the result set
        mysqli_free_result($result);

    }else{
        echo "<p>User no longer exist</p>"; 

         }
}else{
    echo "<p>Unable to excecute: $sql. " . mysqli_error($link) ."</p>";   
            
}
     if(isset($_POST['change_password'])){
         
      $new_password = $_POST['new_password'];
  $confirm_new_password = $_POST['confirm_new_password'];
  $admin_password = $_POST['admin_password'];

       if (empty($new_password)) {
        $new_password_error = "<p class='alert alert-danger' style='text-align:center'>Password field is empty<p>";
           echo $new_password_error;
    } else {
        $new_password = test_input($new_password);        
 
                                    
     if (empty($confirm_new_password)) {
        echo "<p class='alert alert-danger' style='text-align:center'>Confirm new password<p>";
        
    } else {
        $confirm_new_password = test_input($confirm_new_password);
         
if($new_password != $confirm_new_password){
    echo "<p class='alert alert-danger' style='text-align:center'>Passwords do not match<p>";
}else{
    
    
    
if(hash('sha256', $admin_password) != $main_admin_password){
    echo "<p class='alert alert-danger' style='text-align:center'>Incorrect admin password<p>";
}else{
    
        $new_password = hash('sha256', $new_password);
    
    
  $sql = "SELECT * FROM users WHERE id ='$id'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger" style="text-align:center">Error running the query!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count !== 1){
    echo '<div class="alert alert-danger" style="text-align:center">Error occured while updating password</div>';
}
else {

    
    
   $sql = "UPDATE `users` SET 
`password`='$new_password' WHERE `id`= $id";    
 
    if(mysqli_query($link, $sql)){
        
            $resultMessage = "<div class='alert alert-success' style='text-align:center'>Password successfully changed</div>";
            echo $resultMessage;
        }else{     
 $resultMessage = "<div class='alert alert-danger' style='text-align:center'>Error ocurred, try again later.</div>";
            echo $resultMessage;
    }  
    
    
    
    

    }    
    
    

}    
    

    
    
    
    
    
    
    
}
                                            
                                        }
                                    
            }      
         
         
         
         
         
         
         
         
//         
//         $id= $_POST['id'];
//    $name = $_POST['name']; $name = mysqli_real_escape_string($link, $name);
//    $phone = $_POST['phone']; $phone = mysqli_real_escape_string($link, $phone);
//    $country = $_POST['country']; $country = mysqli_real_escape_string($link, $country);
//    
//    $type = $_POST['type']; $type = mysqli_real_escape_string($link, $type);
//    $currency = $_POST['currency']; $currency = mysqli_real_escape_string($link, $currency);
//    
////    $account_status = $_POST['account_status']; $account_status = mysqli_real_escape_string($link, $account_status);
//    
//    $balance = $_POST['balance'];$balance = mysqli_real_escape_string($link, $balance);
//    $invested = $_POST['invested'];$invested = mysqli_real_escape_string($link, $invested);
//     
//     
// $sql = "UPDATE `users` SET `name` = '$name',`phone` = '$phone', `country` = '$country', `type` = '$type', `currency` = '$currency', `balance` = '$balance', `invested` = '$invested' WHERE `users`.`id` = $id";   
//     
//     
//    if(mysqli_query($link, $sql)){
//        
//            $resultMessage = "<div class='alert alert-success'>Successfully updated</div>";
//            echo $resultMessage;
////        header("Refresh:1; url=users.php");
//        
//        }else{ 
//        $resultMessage = "<div class='alert alert-error'>Error occured while updating database</div>";
//            echo $resultMessage;
////        header("Refresh:1; url=users.php");
//    } 
         
         
         
     }
    
               
 }
 ?>               
<!------------------------------------------save-------------------------------------->   

    <!-- Main content -->
      
      
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy;Gilab</strong>
    All rights reserved.
  </footer>

  <!-- Control Sidebar -->

  <!-- /.control-sidebar -->
</div>
<!-- ./wrapper -->

<!-- jQuery -->
<script src="plugins/jquery/jquery.min.js"></script>
<!-- jQuery UI 1.11.4 -->
<script src="plugins/jquery-ui/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- ChartJS -->
<script src="plugins/chart.js/Chart.min.js"></script>
<!-- Sparkline -->
<script src="plugins/sparklines/sparkline.js"></script>
<!-- JQVMap -->
<script src="plugins/jqvmap/jquery.vmap.min.js"></script>
<script src="plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
<!-- jQuery Knob Chart -->
<script src="plugins/jquery-knob/jquery.knob.min.js"></script>
<!-- daterangepicker -->
<script src="plugins/moment/moment.min.js"></script>
<script src="plugins/daterangepicker/daterangepicker.js"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
<!-- Summernote -->
<script src="plugins/summernote/summernote-bs4.min.js"></script>
<!-- overlayScrollbars -->
<script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="dist/js/adminlte.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="dist/js/pages/dashboard.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="dist/js/demo.js"></script>
</body>
</html>
<?php ob_end_flush(); ?>