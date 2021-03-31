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
    <a href="index.php" class="brand-link">
      <img src="../../Images/ARK344.png" alt="Logo" class="brand-image img-circle elevation-3"
           style="">
      <span class="brand-text font-weight-light"></span><br>
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
            <a href="users.php" class="nav-link">
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
            <a href="./proofs.php" class="nav-link active">
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
    <section class="content">

      <!-- Default box -->
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Proof of payments</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i class="fas fa-minus"></i></button>
          </div>
        </div>
        <div class="card-body p-0">
          <table class="table table-striped projects">
               <thead>
                  <tr>

                      <th style="width: 15%">
                          Amount
                      </th>
                      <th style="width: 15%">
                         E-mail
                      </th>

                      <th style="width: 42%" class="text-center">
                          Hash codes
                      </th>
                      <th style="width: 8%" class="text-center">
                          Time sent
                      </th>
                      <th style="width: 20%">
                           <a class='btn btn-info btn-sm' href='payment-proofs.php'>
<!--
                              <i class='fas fa-pencil-alt'>
                              </i>
-->
                              All Submitted proofs
                          </a>
                      </th>
                  </tr>
              </thead>
              <tbody>

<?php 
$sql = "SELECT * FROM `paymentproof` WHERE status = 'pending' ORDER BY id DESC" ;
          if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                                 $proofid = $row['id'];
    $paid_amount =$row['paid_amount']; 
    $username =$row['username']; 
    $email =$row['email'];
    $hashcodes =$row['hashcode'];
    $time =$row['time'];
    $status =$row['status'];
    $currency =$row['currency'];
            
            
            $hashcodes  = explode(' ', $hashcodes);
// $file_links = '';           


//    $last_date = date("F d, Y h:i:s", $last_access);
    $proof_time = $time;
                   echo " <tr>";
                   echo "
                   <td>$currency $paid_amount</td>
                   <td>$email</td>
                   <td style='max-width:120px; text-align:center'>";
                    
            foreach($hashcodes as $hashcode_n){
    echo $hashcode_n . "<br>";
}
                    
                        
                    echo "</td>   
                   <td>$proof_time</td>
                   
                   <td class='project-actions text-right'>

                          <a class='btn btn-info btn-sm' href='confirm.php?id=$proofid&username=$username&paid_amount=$paid_amount&time=$time&email=$email&currency=$currency'>
                              <i class='fas fa-pencil-alt'>
                              </i>
                              Confirm
                          </a>
                          <a class='btn btn-danger btn-sm' href='deleteproof.php?id=$proofid&status=$status&username=$username&time=$time'>
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