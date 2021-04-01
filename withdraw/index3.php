<?php include("../phpscripts/headscript.php");?>
<?php $page = "withdraw"; ?>

<!DOCTYPE html>
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
    <link href="../dashboard/Stylesheets/bootstrap.css" rel="stylesheet">

    <link href="../dashboard/Stylesheets/font-awesome.css" rel="stylesheet">
    <link href="../dashboard/Stylesheets/animate.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="../images/favicon2.png" sizes="32x32">
<link rel="icon" type="image/png" href="../images/favicon2.png" sizes="16x16">
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
                                <h2><i class=""></i> Make Withdrawal</h2>
                                <div class="clearfix"></div>
                            </div>
                            <h4 ><span style="color:inherit;padding:5px">Investment Withdrawable Amount: <span style="color:green">$ <?php echo $user_withdrawable; ?></span></span></h4>
                            <div class="x_content">
                                <div class="col-md-8 col-md-offset-2">
                                    <p>
                                        <strong>Ensure account details are correct</strong>
                                    </p>
                                    <p style="text-align:center">
                                        
                                        
                                    <form method="post" id="withdraw_form">
                                        <div class="form-group" >
                                            <label>Amount($)</label>
                                            <input type="number" id="amount" name="amount" class="form-control" placeholder="Amount">
                                        </div>
                                        
                                        <input type="hidden" value="<?php echo $password; ?>" id="main_password">
                                        <input type="hidden" value="<?php echo $savings_balance; ?>" id="savings_balance">
                                        <input type="hidden" value="<?php echo $email; ?>" id="email">
                                        <input type="hidden" value="<?php echo $user_withdrawable; ?>" id="user_withdrawable">
                                        
                                        <div class="form-group">
                                            <label>Account Type</label>
                                                <select id="account_type" name="gender"  class="form-control" dropdown="100" >
                                                   <option value="" selected="">Select Account</option>
                                                   <option value="Savings">Savings</option>
                                                   <option value="Investment">Investment</option>
                                                </select>
                                        </div>
                                        
                                        <div class="form-group">
                                            <label>Withdrawal Medium</label>
                                                <select id="medium" name="gender"  class="form-control" dropdown="100" >
                                                   <option value="" selected="">Select medium</option>
                                                   <option value="BTC" id="c_btc">BTC</option>
                                                   <option value="Wire Transfer" id="c_wire">Bank(Wire) Transfer</option>
                                                </select>
                                        </div>
                                        
                                        
                                        <div id="btc_block" style="display:None">
                                        <div class="form-group" >
                                            <label>BTC Address</label>
                                            <input type="text" id="btc_address" name="btc_address" class="form-control" placeholder="BTC Address">
                                        </div>
                                        </div>
                                        
                                        
                                        
                                        <div id="wire_block" style="display:None">
                                            <div class="form-group">
                                            <label>Full Name</label>
                                            <input type="text" id="full_name" name="full_name" class="form-control" value="" >
                                            </div>
                                            <div class="form-group">
                                                    <label>Account Number</label>
                                                    <input type="text" id="account_number" name="account_number" class="form-control" value="" >
                                            </div>
                                            <div class="form-group">
                                                    <label>Address</label>
                                                    <input type="text" id="address" name="address" class="form-control" value="" >
                                            </div>
                                            <div class="form-group">
                                                    <label>Bank Name</label>
                                                    <input type="text" id="bank_name" name="bank_name" class="form-control" value="" >
                                            </div>
                                            <div class="form-group">
                                                    <label>Swift Code</label>
                                                    <input type="text" id="swift_code" name="swift_code" class="form-control" value="" >
                                            </div>
                                            <div class="form-group">
                                                    <label>Routine Number</label>
                                                    <input type="text" id="routine_number" name="routine_number" class="form-control" value="" >
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        
                                        
                                        <div class="form-group" >
                                            <label>Password</label>
                                            <input type="password" id="password" name="password" class="form-control" placeholder="password">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" name="submit" class="btn btn-success btn-flat btn-block">
                                                <i class="fa fa-pencil"></i> Initiate Withdrawal
                                            </button>
                                       </div>
                                      
                                        
                                        
                                       <p class="r_message"></p>  
                                        
                                    </form>

<!--
                                    <form method="post">
                                        <div class="form-group">
                                            <label>Account details</label>
                                            <input type="text" name="account_details" class="form-control" value="<?php echo $account_details; ?>" required="" placeholder="">
                                            
                                            <textarea rows="3" name="account_details" class="form-control" placeholder="e.g Bank Name: HSBC, Account name: Mark Stanley, Account Number: 0047858785
(max: 200 words)" maxlength="200"><?php echo $account_details; ?></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label>Amount in <?php echo $currency; ?></label>
                                            <input type="hidden" name="currency" class="form-control" value="<?php echo $currency; ?>">
                                            <input type="number" name="withdrawal_amount" class="form-control" value="<?php echo $user_withdrawable; ?>" readonly>
                                        </div>
                                        <div class="form-group" >
                                            <label>Password</label>
                                            <input type="password" name="password" class="form-control" placeholder="password">
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" name="submit" class="btn btn-primary btn-flat btn-block">
                                                <i class="fa fa-pencil"></i> Initiate Withdrawal
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
                <!-- footer content 


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

</body>
<script>
$(document).ready(function(){
    $('#medium').change(function() {
    if ($(this).val() === 'BTC') {
        $("#btc_block").css("display", "Block");
        $("#wire_block").css("display", "None");
    }
    if($(this).val() === 'Wire Transfer'){
        $("#btc_block").css("display", "None");
        $("#wire_block").css("display", "Block");
    }
    if($(this).val() === ''){
        $("#btc_block").css("display", "None");
        $("#wire_block").css("display", "None");
    }
});
    
  $("#withdraw_form").submit(function(event){
      event.preventDefault();
/////////////////////////////////////////////////////////////////////////////
      if($("#medium").val() == "BTC"){
          
          var amount = $("#amount").val();
          var account_type = $("#account_type").val();
          var btc_address = $("#btc_address").val();
          var password = $("#password").val();
          var main_password = $("#main_password").val();
          var savings_balance = $("#savings_balance").val();
          var email = $("#email").val();
          var user_withdrawable = $("#user_withdrawable").val();
          var btc_submit = "submit";
          



                $.ajax({
            type: "POST",
            url: "../phpscripts/withdraw.php/",
                data: {  
                  amount : amount,
                  account_type : account_type,
                  btc_address : btc_address,
                  password : password,
                  main_password : main_password,
                  savings_balance : savings_balance,
                  email : email,
                  user_withdrawable : user_withdrawable,
                  btc_submit : btc_submit
    },
            success: function(response) {
      $(".r_message").html(response);
//      console.log(response);
//      console.log("Done");  
            },
            error: function(response) {
         console.log(response);
             }      
                    });
          
      }
      
/////////////////////////////////////////////////////////////////////////////
      if($("#medium").val() == "Wire Transfer"){
          var amount = $("#amount").val();
          var account_type = $("#account_type").val();
          var password = $("#password").val();
          var full_name = $("#full_name").val();
          var account_number = $("#account_number").val();
          var address = $("#address").val();
          var bank_name = $("#bank_name").val();
          var swift_code = $("#swift_code").val();
          var routine_number = $("#routine_number").val();
          var main_password = $("#main_password").val();
          var savings_balance = $("#savings_balance").val();
          var email = $("#email").val();
          var user_withdrawable = $("#user_withdrawable").val();
          var wire_submit = "submit";
                          $.ajax({
            type: "POST",
            url: "../phpscripts/withdraw.php/",
                data: {  
                  amount : amount,
                  account_type : account_type,
                  password : password,
                  full_name : full_name,
                  account_number : account_number,
                  address : address,
                  bank_name : bank_name,
                  swift_code : swift_code,
                  routine_number : routine_number,
                  main_password : main_password,
                  savings_balance : savings_balance,
                  email : email,
                  user_withdrawable : user_withdrawable,
                  wire_submit : wire_submit
    },
            success: function(response) {
      $(".r_message").html(response);
//      console.log(response);
//      console.log("Done");  
            },
            error: function(response) {
         console.log(response);
             }      
                    });

      }
////////////////////////////////////////////////////////////////////////////
            if($("#medium").val() == ""){
          
              $(".r_message").html("<p class='alert alert-danger' style='text-align:center'>Please select Payment Medium<p>");
              console.log("<p class='alert alert-danger' style='text-align:center'>Please select Withdrawal Medium<p>");
      }
      });
    
    
    });
</script>

</html>
<?php ob_end_flush(); ?>