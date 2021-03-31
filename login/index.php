<?php 
ob_start();
session_start();
if(isset($_SESSION['id'])){
    header("Location: ../dashboard/");
}?>
<!DOCTYPE html>
   <?php  
    
  include("../phpscripts/connection.php");  
  $sql = "SELECT * FROM `admin` WHERE `id` = 1" ;
          if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                     $id = $row['id'];
    $support_email =$row['support email'];   
      

        }
        //close the result set
        mysqli_free_result($result);

    }
}  
  

?> 
<html>
<head>
<title>SKIP BANK</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="keywords" content="Slide Login Form template Responsive, Login form web template, Flat Pricing tables, Flat Drop downs Sign up Web Templates, Flat Web Templates, Login sign up Responsive web template, SmartPhone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />

	 <script>
        addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);

        function hideURLbar() {
            window.scrollTo(0, 1);
        }
    </script>

	<!-- Custom Theme files -->
	<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
	<link href="css/font-awesome.min.css" rel="stylesheet" type="text/css" media="all" />
    <link href="alert.css" rel="stylesheet" type="text/css" media="all" />
	<!-- //Custom Theme files -->

	<!-- web font -->
	<link href="//fonts.googleapis.com/css?family=Hind:300,400,500,600,700" rel="stylesheet">
	<!-- //web font -->
    <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5f61cc81f0e7167d0010bf8f/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
</head>
<body>

<!-- main -->
<div class="w3layouts-main"> 
	<div class="bg-layer">
		<h1>User Login</h1>
		<div class="header-main">
<!--
			<div class="main-icon">
				<span class="fa fa-eercast"></span>
			</div>
-->
			<div class="header-left-bottom">
				<form method="post">
					<div class="icon1">
						<span class="fa fa-user"></span>
						<input type="email" placeholder="Email Address" id="email">
					</div>
					<div class="icon1">
						<span class="fa fa-lock"></span>
						<input type="password" placeholder="Password" id="password">
					</div>
                    <div class="icon1">
						<span class="fa fa-lock"></span>
						<input type="text" placeholder="Enter Four Digit Login code" id="login_code">
					</div>
<!--
					<div class="login-check">
						 <label class="checkbox"><input type="checkbox" name="checkbox" checked=""><i> </i> Keep me logged in</label>
					</div>
-->
					<div class="bottom">
						<button class="btn" id="submit">Log In</button>
					</div>
                    <p class="error_message" style="width: 200% !important;"></p>
					<div class="links">
<!--						<p><a href="#">Forgot Password?</a></p>-->
						<p class="right" style="float: left; width:inherit"><a href="../signup/">New User? <span style="color:blue">Register</span></a></p>
						<div class="clear"></div>
					</div>
                    <div class="links">
<!--						<p><a href="#">Forgot Password?</a></p>-->
						<p class="right" style="float: left; width:inherit;padding-bottom:0px !important;margin-bottom:0px !important;"><a>Forgot login details? Contact Admin via live</a></p>
                        <p class="right" style="text-align:center;width:inherit;padding-top:0px !important;margin-top:0px !important;"><a >chat or <?php echo $support_email;?></a></p>
						<div class="clear"></div>
					</div>
				</form>	
			</div>
<!--
			<div class="social">
				<ul>
					<li>or login using : </li>
					<li><a href="#" class="facebook"><span class="fa fa-facebook"></span></a></li>
					<li><a href="#" class="twitter"><span class="fa fa-twitter"></span></a></li>
					<li><a href="#" class="google"><span class="fa fa-google-plus"></span></a></li>
				</ul>
			</div>
-->
		</div>
		
		<!-- copyright -->
		<div class="copyright">
<!--			<p>© 2019 All rights reserved | </p>-->
		</div>
		<!-- //copyright --> 
	</div>
</div>	
<!-- //main -->
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  
<script>
    $(document).ready(function(){
     $("form").submit(function(event){
         
      event.preventDefault();
         $("#submit").html('<div class="an_container"><div class="yellow"></div><div class="red"></div><div class="blue"></div><div class="violet"></div></div>');
//         $("#submitp").html('...');
//         $("#submit").hide("slide", { direction: "left" });
    setTimeout(function(){

      var email = $("#email").val();
      var password = $("#password").val();
      var submit =    $("#submit").val();
      var login_code =    $("#login_code").val();
//        $("#email").val('');
        $("#password").val('');
        $("#login_code").val('');
      $(".error_message").load("../phpscripts/login.php", {
       
      email : email,
      password : password,
      login_code : login_code,
      submit : submit
      });
       $("#submit").html('Log in'); 
      },2500);

     });   
    });
</script>

</body>
    
</html>