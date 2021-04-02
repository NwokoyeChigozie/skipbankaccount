<?php include("../phpscripts/headscript.php");?>
<?php $page = "fund"; ?>
<!DOCTYPE html>
<?php
 if($_GET){ 
     $type= $_GET['type'];
     $duration= $_GET['duration'];
//     echo $type .' '. $duration;
 }
?>
<html class=" " lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Triple Coin Options || Binary Brokers || CFD || Crypto Traders">

    <title>SKIP BANK</title>

    <!-- Bootstrap core CSS -->

    <link href="../dashboard/Stylesheets/bootstrap.css" rel="stylesheet">

    <link href="../dashboard/Stylesheets/font-awesome.css" rel="stylesheet">
    <link href="../dashboard/Stylesheets/animate.css" rel="stylesheet">
<!--
    <link rel="stylesheet" href="../login/Fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../login/Fonts/font-awesome-4.7.0/css/font-awesome.css">
-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="apple-touch-icon" sizes="120x120" href="../apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
    <link rel="manifest" href="../site.webmanifest">
    <link rel="mask-icon" href="../safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#fff7f7">
    <meta name="theme-color" content="#ffffff">
    <!-- Custom styling plus plugins -->
    <link href="../dashboard/Stylesheets/custom.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../dashboard/Stylesheets/jquery-jvectormap-2.css">
    <link href="../dashboard/Stylesheets/green.css" rel="stylesheet">
    <link href="../dashboard/Stylesheets/floatexamples.css" rel="stylesheet" type="text/css">

    <script async="" src="../dashboard/Scripts/default.js" charset="UTF-8" crossorigin="*"></script>
    <script src="../dashboard/Scripts/jquery_006.js"></script>
    <script src="../dashboard/Scripts/nprogress.js"></script>

    <!--[if lt IE 9]>
        <script src="../assets/js/ie8-responsive-file-warning.js"></script>
        <![endif]-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
          <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

    <style type="text/css">
        <?php 
        include("../phpscripts/nav_mobile.php");
        ?>
        @keyframes tawkMaxOpen {
            0% {
                opacity: 0;
                transform: translate(0, 30px);
                ;
            }

            to {
                opacity: 1;
                transform: translate(0, 0px);
            }
        }

        @-moz-keyframes tawkMaxOpen {
            0% {
                opacity: 0;
                transform: translate(0, 30px);
                ;
            }

            to {
                opacity: 1;
                transform: translate(0, 0px);
            }
        }

        @-webkit-keyframes tawkMaxOpen {
            0% {
                opacity: 0;
                transform: translate(0, 30px);
                ;
            }

            to {
                opacity: 1;
                transform: translate(0, 0px);
            }
        }

        #oTyJEHT-1570635865410 {
            outline: none !important;
            visibility: visible !important;
            resize: none !important;
            box-shadow: none !important;
            overflow: visible !important;
            background: none !important;
            opacity: 1 !important;
            filter: alpha(opacity=100) !important;
            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity1) !important;
            -moz-opacity: 1 !important;
            -khtml-opacity: 1 !important;
            top: auto !important;
            right: 10px !important;
            bottom: 90px !important;
            left: auto !important;
            position: fixed !important;
            border: 0 !important;
            min-height: 0 !important;
            min-width: 0 !important;
            max-height: none !important;
            max-width: none !important;
            padding: 0 !important;
            margin: 0 !important;
            -moz-transition-property: none !important;
            -webkit-transition-property: none !important;
            -o-transition-property: none !important;
            transition-property: none !important;
            transform: none !important;
            -webkit-transform: none !important;
            -ms-transform: none !important;
            width: auto !important;
            height: auto !important;
            display: none !important;
            z-index: 2000000000 !important;
            background-color: transparent !important;
            cursor: auto !important;
            float: none !important;
            border-radius: unset !important;
            pointer-events: auto !important
        }

        #qADMEna-1570635865412.open {
            animation: tawkMaxOpen .25s ease !important;
        }
          @media (max-width: 480px) and (min-width: 320px) {
            .text-font{
                font-size: 15px !important; 
            }
            .min-text-font{
             font-size: 10px !important;    
            }
            .min-text-font2{
             font-size: 9px !important;    
            }
}
    </style>
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600">
    <link rel="stylesheet" href="css/global.css">
</head>

<body class="nav-md">

    <div class="container body">

        <div class="main_container">
<?php include("../phpscripts/usernav.php"); ?>

                </div>
                <!-- /top tiles -->

                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                            <div class="x_title">
                                <h2>Pay and Submit Proof of Payment </h2>

                                <div class="clearfix"></div>
                            </div>
                            <!--                  <h4>Bitcoin: <?php echo $bitcoin_address; ?> &nbsp;&nbsp;&nbsp;&nbsp;Ethereum: <?php echo $eth_address; ?></h4>-->
                            
                            <div class="x_content">
                                <div class="col-md-8 col-md-offset-2">

                            <div class="x_title">
                                <h2><strong><b>BANK WIRE TRANSFER</b></strong></h2>

                                <div class="clearfix"></div>
                            </div>
                                    <div id="wire_response">
<?php 
$sql = "SELECT * FROM wire_requests WHERE email='$email'";
$result = mysqli_query($link, $sql);
if(!$result){
    echo '<div class="alert alert-danger">Error occurred!</div>';
    exit;
}
        //If email & password don't match print error
$count = mysqli_num_rows($result);
if($count >= 1){
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $w_status = $row['status'];
    $w_name = $row['name'];
    $w_account_number = $row['account_number'];
    $w_address = $row['address'];
    $w_bank_name = $row['bank_name'];
    $w_swift_code = $row['swift_code'];
    $w_routine_number = $row['routine_number'];
    $w_comment = $row['comment'];
    
    if($w_status == ''){
?>
                                    
                                    <div class="form-group">
                                            <p class="alert alert-success" style="text-align:center">Request is currently being processed... Check back later for payment information</p>
                                    </div>
                                    
                                    
                                    
<?php   
    }else{
?>
                                    <div class="form-group">
                                            <label>Full Name</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_name; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Account Number</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_account_number; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_address; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Bank Name</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_bank_name; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Swift Code</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_swift_code; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <label>Routine Number</label>
                                            <input type="text" name="currency" class="form-control" value="<?php echo $w_routine_number; ?>" readonly>
                                    </div>
                                    <div class="form-group">
                                            <p class="alert alert-success"><?php echo $w_comment; ?></p>
                                    </div>
                                    
                                    
<?php   
    }
}
else {
    
?>
                                    <div class="form-group">
                                            <button type="submit" id="wire_button" class="btn btn-success btn-flat btn-block">
                                                <i class="fa fa-pencil"></i> Request Bank Transfer Info
                                            </button>
                                    </div>     
<?php
}
?>
                                    

                                       </div> 
                                    
 <input type="hidden" value="<?php echo $email; ?>" id="w_email">                                   
 <input type="hidden" value="<?php echo $type; ?>" id="w_type">                                   
 <input type="hidden" value="<?php echo $duration; ?>" id="w_duration">                                   
                                    
                                    
                                    
                                    
                                    
                                    <br><br>
                            <div class="x_title">
                                <h2><strong><b>BTC Payment </b></strong></h2>

                                <div class="clearfix"></div>
                            </div>
                                    <h4>
                                        <strong>Ensure Payment details are correct</strong>
                                    </h4>
                                    <h4><?php 
//                      define("ether_symbol", "Welcome to W3Schools.com!", true);
                      $ether_symbol = 'Ξ';
                      if($currency == $ether_symbol){
                          echo "Ethereum address for payment: ".$eth_address;
                      }else{
                          echo "Bitcoin address for payment: ".$bitcoin_address; 
                      }
                      ?></h4>
                                    <form method="post">
<!--
                                        <div class="form-group">
                                            <label>Payment Currency</label>
                                            <input type="text" name="currency" class="form-control" value="&#8383;" readonly>
                                        </div>
-->
                                        <div class="form-group">
                                            <label>Payment Currency</label>
                                            <input type="text" name="currency" class="form-control" value="BTC" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label>Enter Bitcoin Hashcode</label>
                                            <input type="text" name="hashcode" class="form-control" value="" required="">
                                        </div>

                                        <div class="form-group">
                                            <label>Amount Paid</label>
                                            <input type="number" step="any" min="0" name="paid_amount" class="form-control">
                                        </div>

                                        <div class="form-group">
                                            <button type="submit" name="submit" class="btn btn-success btn-flat btn-block">
                                                <i class="fa fa-pencil"></i> Submit
                                            </button>
                                        </div>
                                        <p style="text-align:center">
                                            <?php
 function test_input($data){  
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
 }
if(isset($_POST['submit'])){ 

  $currency = $_POST['currency'];
  $hashcode = $_POST['hashcode'];
  $paid_amount = $_POST['paid_amount'];
// $t_details = "Your " . ucfirst($type) . " Account has been Credited with " . $paid_amount . "btc via btc payment method";
 $t_details = $paid_amount . "btc Credit Request to " . ucfirst($type) . " Account";
   $error = false; 
    
    if (empty($currency)) {
        $currency_error = "<p class='alert alert-danger' style='text-align:center'>Choose a currency<p>";
           echo $currency_error;
    } else {
        $currency = test_input($currency);
           $currency = mysqli_real_escape_string($link, $currency);
            if (empty($hashcode)) {
        $hashcode_error = "<p class='alert alert-danger' style='text-align:center'>Enter payment hashcode<p>";
           echo $hashcode_error;
    } else {
        $hashcode = test_input($hashcode);
           $hashcode = mysqli_real_escape_string($link, $hashcode);
                if (empty($paid_amount) || $paid_amount <= 0) {
                    echo "<p class='alert alert-danger' style='text-align:center'>Please enter correct amount<p>";
                
                } else {
                    
                    $paid_amount = $paid_amount;
                    $time_of_action = time();
            $time_of_action = date("F d, Y h:i:s", $time_of_action);
                    
                             $sql= "INSERT INTO `paymentproof`(`username`, `email`, `paid_amount`, `time`, `hashcode`, `currency`, `status`) VALUES ('$username','$email','$paid_amount','$time_of_action','$hashcode','$currency','pending')";    
        if(mysqli_query($link, $sql)){
                                       $sql= "INSERT INTO `$username`(`transaction`,`currency`, `amount`, `date`, `status`) VALUES ('$t_details','$currency','$paid_amount','$time_of_action', 'pending')";    
        if(mysqli_query($link1, $sql)){
            $resultMessage = "<div class='alert alert-success' style='text-align:center'>Successful</div>";
            echo $resultMessage;
        }else{
            echo '<div class="alert alert-danger" style="text-align:center">Error occured, please try again in a while, or send feedback</div>';
        }
            
        }else{
            echo '<div class="alert alert-danger" style="text-align:center">Error occured, please try again in a while, or send feedback</div>';
        } 
        
 
                    
                }
            }
        
    }
 
        
        
        
        

        
  }


?>
                                        </p>




                                    </form>


                                    <!--
                      
                    <p>
                      All information will be stored safely and not redistribuate. Due to the GPRD, all information can be deleted on your needs.
                    </p>
                                                       <form method="post" action="" enctype="multipart/form-data">
                      
                      <div class="form-group">
                        <label>Valid Document/ID</label>
                        <input type="file" name="image" class="custom-file-input" required="">
                      </div>
                      <div class="form-group">
                        <label>Address</label>
                        <textarea rows="3" required="" name="address" class="form-control" placeholder="All information will be stored safely and not redistribuate" maxlength="200"></textarea>
                      </div>
                      <div class="form-group">
                        <button type="submit" name="feedback" class="btn btn-primary btn-flat btn-block">
                          <i class="fa fa-send"></i> Send 
                        </button>
                      </div>
                    </form>
-->


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="clearfix"></div>
                <!-- footer content -->

            </div>


        </div>
    </div>
    <br>
    <footer>
        <div class="copyright-info">
            <p class="pull-right">© THE SKIP BANK
            </p>
        </div>
        <div class="clearfix"></div>
    </footer>
    <!-- /footer content -->
    </div>
    <!-- /page content -->

    </div>

    </div>

    <div id="custom_notifications" class="custom-notifications dsp_none">
        <ul class="list-unstyled notifications clearfix" data-tabbed_notifications="notif-group">
        </ul>
        <div class="clearfix"></div>
        <div id="notif-group" class="tabbed_notifications"></div>
    </div>
    <script src="js/upload.js"></script>
    <script src="js/upload.js"></script>
    <script src="js/global.js"></script>
    <script src="../dashboard/Scripts/bootstrap.js"></script>

    <!-- gauge js -->
    <script type="text/javascript" src="../dashboard/Scripts/gauge.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/gauge_demo.js"></script>
    <!-- bootstrap progress js -->
    <script src="../dashboard/Scripts/bootstrap-progressbar.js"></script>
    <script src="../dashboard/Scripts/jquery_007.js"></script>
    <!-- icheck -->
    <script src="../dashboard/Scripts/icheck.js"></script>
    <!-- daterangepicker -->
    <script type="text/javascript" src="../dashboard/Scripts/moment.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/daterangepicker.js"></script>
    <!-- chart js -->
    <script src="../dashboard/Scripts/chart.js"></script>

    <script src="../dashboard/Scripts/custom.js"></script>

    <!-- flot js -->
    <!--[if lte IE 8]><script type="text/javascript" src="js/excanvas.min.js"></script><![endif]-->
    <script type="text/javascript" src="../dashboard/Scripts/jquery_003.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_008.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_009.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/date.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_005.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_002.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/curvedLines.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery_004.js"></script>
    <script>
        $(document).ready(function() {
            // [17, 74, 6, 39, 20, 85, 7]
            //[82, 23, 66, 9, 99, 6, 2]
            var data1 = [
                [gd(2012, 1, 1), 17],
                [gd(2012, 1, 2), 74],
                [gd(2012, 1, 3), 6],
                [gd(2012, 1, 4), 39],
                [gd(2012, 1, 5), 20],
                [gd(2012, 1, 6), 85],
                [gd(2012, 1, 7), 7]
            ];

            var data2 = [
                [gd(2012, 1, 1), 82],
                [gd(2012, 1, 2), 23],
                [gd(2012, 1, 3), 66],
                [gd(2012, 1, 4), 9],
                [gd(2012, 1, 5), 119],
                [gd(2012, 1, 6), 6],
                [gd(2012, 1, 7), 9]
            ];
            $("#canvas_dahs").length && $.plot($("#canvas_dahs"), [
                data1, data2
            ], {
                series: {
                    lines: {
                        show: false,
                        fill: true
                    },
                    splines: {
                        show: true,
                        tension: 0.4,
                        lineWidth: 1,
                        fill: 0.4
                    },
                    points: {
                        radius: 0,
                        show: true
                    },
                    shadowSize: 2
                },
                grid: {
                    verticalLines: true,
                    hoverable: true,
                    clickable: true,
                    tickColor: "#d5d5d5",
                    borderWidth: 1,
                    color: '#fff'
                },
                colors: ["rgba(38, 185, 154, 0.38)", "rgba(3, 88, 106, 0.38)"],
                xaxis: {
                    tickColor: "rgba(51, 51, 51, 0.06)",
                    mode: "time",
                    tickSize: [1, "day"],
                    //tickLength: 10,
                    axisLabel: "Date",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 10
                    //mode: "time", timeformat: "%m/%d/%y", minTickSize: [1, "day"]
                },
                yaxis: {
                    ticks: 8,
                    tickColor: "rgba(51, 51, 51, 0.06)",
                },
                tooltip: false
            });

            function gd(year, month, day) {
                return new Date(year, month - 1, day).getTime();
            }
        });

    </script>

    <!-- worldmap -->
    <script type="text/javascript" src="../dashboard/Scripts/jquery-jvectormap-2.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/gdp-data.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery-jvectormap-world-mill-en.js"></script>
    <script type="text/javascript" src="../dashboard/Scripts/jquery-jvectormap-us-aea-en.js"></script>
    <!-- pace -->
    <script src="../dashboard/Scripts/pace.html"></script>

    <script type="text/javascript">
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            alert("Address Copied");
            $temp.remove();
        }

    </script>
    <script>
        $(function() {
            $('#world-map-gdp').vectorMap({
                map: 'world_mill_en',
                backgroundColor: 'transparent',
                zoomOnScroll: false,
                series: {
                    regions: [{
                        values: gdpData,
                        scale: ['#E6F2F0', '#149B7E'],
                        normalizeFunction: 'polynomial'
                    }]
                },
                onRegionTipShow: function(e, el, code) {
                    el.html(el.html() + ' (GDP - ' + gdpData[code] + ')');
                }
            });
        });

    </script>
    <!-- skycons -->
    <script src="../dashboard/Scripts/skycons.js"></script>
    <script>
        var icons = new Skycons({
                "color": "#73879C"
            }),
            list = [
                "clear-day", "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;

        for (i = list.length; i--;)
            icons.set(list[i], list[i]);

        icons.play();

    </script>

    <!-- dashbord linegraph -->
    <script>
        Chart.defaults.global.legend = {
            enabled: false
        };

        var data = {
            labels: [
                "Crypto",
                "EUR",
                "USD",
                "Nasdaq",
                "Others"
            ],
            datasets: [{
                data: [20, 25, 30, 15, 10],
                backgroundColor: [
                    "#BDC3C7",
                    "#9B59B6",
                    "#455C73",
                    "#26B99A",
                    "#3498DB"
                ],
                hoverBackgroundColor: [
                    "#CFD4D8",
                    "#B370CF",
                    "#34495E",
                    "#36CAAB",
                    "#49A9EA"
                ]

            }]
        };

        var canvasDoughnut = new Chart(document.getElementById("canvas1"), {
            type: 'doughnut',
            tooltipFillColor: "rgba(51, 51, 51, 0.55)",
            data: data
        });

    </script>
    <!-- /dashbord linegraph -->

    <script type="text/javascript">
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            alert("Address Copied");
            $temp.remove();
        }

    </script>
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
<script>
    $(document).ready(function(){
     $("#wire_button").click(function(event){
         
      event.preventDefault();

      var email = $("#w_email").val();
      var account_type = $("#w_type").val();
      var duration =    $("#w_duration").val();
         console.log(email + ' ' + account_type + ' ' + duration);
                $.ajax({
            type: "POST",
            url: "../phpscripts/wire.php/",
                data: {  
                  email : email,
                  account_type : account_type,
                  duration : duration
    },
            success: function(response) {
      $("#wire_response").html(response);
//      console.log(response);
//      console.log("Done");  
            },
            error: function(response) {
//         console.log(response);
             }      
                    });

     });   
    });
</script>




</body>

</html>


<?php ob_end_flush(); ?>
