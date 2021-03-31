   <?php  
    
  include("../phpscripts/connection.php");  
  $sql = "SELECT * FROM `admin` WHERE `id` = 1" ;
          if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_array($result, MYSQLI_ASSOC)){
                     $id = $row['id'];
    $support_email =$row['support email'];  
    $support_phone =$row['support_phone'];  
    $our_users =$row['our_users'];  
    $active_users =$row['active_users'];  
    $news =$row['news'];  
      

        }
        //close the result set
        mysqli_free_result($result);

    }
}  
  

?> 
<!DOCTYPE html>
<html lang="en" style="height: 100%;"><script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript" async="" src="https://certify-js.alexametrics.com/atrk.js"></script>
 <head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="theme-color" content="#141322">
<title>SKIP BANK</title>
<meta name="“description”" content="“Arkadmining" is="" the="" next="" generation="" online="" business="" network.="" we="" work="" with="" largest="" industries="" and="" best="" companies="" in="" e-commerce,="" travel,="" gaming="" more.“="">
     <link rel="apple-touch-icon" sizes="120x120" href="../apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
<link rel="manifest" href="../site.webmanifest">
<link rel="mask-icon" href="../safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#fff7f7">
<meta name="theme-color" content="#ffffff">

<link rel="stylesheet" href="../Stylesheets/bootstrap-reboot.min.css">
<link rel="stylesheet" href="../Stylesheets/bootstrap-grid.css">
<link rel="stylesheet" href="../Stylesheets/layout1new.css">
<link rel="stylesheet" href="../Stylesheets/page_home.css">
<script type="text/javascript" src="https://d2t77mnxyo7adj.cloudfront.net/v1/c.js?727567311123134"></script><link type="text/css" rel="stylesheet" charset="UTF-8" href="https://translate.googleapis.com/translate_static/css/translateelement.css"><script type="text/javascript" charset="UTF-8" src="https://translate.googleapis.com/translate_static/js/element/main.js"></script><script type="text/javascript" charset="UTF-8" src="https://translate.googleapis.com/element/TE_20200506_00/e/js/element/element_main.js"></script>
    <style>
     .skiptranslate:nth-child(2) {
            display:none;
                    }
    
     </style>

    </head>
    
<body bis_register="W3sibWFzdGVyIjp0cnVlLCJleHRlbnNpb25JZCI6ImVwcGlvY2VtaG1ubGJoanBsY2drb2ZjaWllZ29tY29uIiwiYWRibG9ja2VyU3RhdHVzIjp7IkRJU1BMQVkiOiJkaXNhYmxlZCIsIkZBQ0VCT09LIjoiZGlzYWJsZWQiLCJUV0lUVEVSIjoiZGlzYWJsZWQifSwidmVyc2lvbiI6IjEuNy4yIiwic2NvcmUiOjEwNzAyfV0=" data-gr-c-s-loaded="true" style="position: relative; min-height: 100%; top: 0px;">
<header class="" style="height:100px !important">
<div class="container" bis_skin_checked="1">
<div class="header__content" bis_skin_checked="1">
<div class="logo-wrapper" bis_skin_checked="1">
<a href="../" class="logo" bis_skin_checked="1"><img src="../Images/ARK344.png" width="157" height="21" alt=""></a>
</div>
<div class="mobile-toggler-wrapper d-md-none" bis_skin_checked="1">
<a href="javascript:void(0);" class="mobile-toggler" bis_skin_checked="1">
<span></span>
<span></span>
<span class="shorter"></span>
</a>
</div>
<nav class="navbar">
<ul class="nav">
<li><a href="../signup" bis_skin_checked="1">Register</a></li>
<li><a href="../login" bis_skin_checked="1">Login</a></li>
<li><a href="../our_services" bis_skin_checked="1">Our Services</a></li>
<li><a href="../about" bis_skin_checked="1">About</a></li>


<li><span id="google_translate_element"><div class="skiptranslate goog-te-gadget" dir="ltr" style="" bis_skin_checked="1"><div id=":0.targetLanguage" bis_skin_checked="1" style="display: inline;"></div></div></span></li>
</ul>
</nav>
</div>
</div>
    <div style="height:40px;">
<!--        <iframe src="../https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=light&amp;pref_coin_id=1505&amp;invert_hover=no" scrolling="auto" marginwidth="0" marginheight="0" border="0" style="border:0;margin:0;padding:0;" width="100%" height="36" frameborder="0"></iframe>-->
        <marquee style="background-color:#fff;color:#000; font-size:15px !important"><p style="padding-bottom:0px !important;margin-bottom:0px !important;"><span style="color:red">Our Users:</span><span style="color:green"> <?php echo $our_users; ?></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style="color:red">Active Online Users:</span><span style="color:green"> <?php echo $active_users; ?></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:red">News:</span><span style="color:green"> <?php echo $news; ?></span></p></marquee>
    </div>
<!--    Create an account with US, Click on Credit Account and choose what account to fund, Choose your preferred funding platform or method, Get the funding details, Make Payment, Upload your proof of Payment to our official Contact email: .................-->
</header>

<br><br>
<main class="container">
<section class="block" id="why">
<h3 class="subtitle1">ALL ABOUT RETURNS</h3>
<!--<h5 class="subtitle1">ALL ABOUT RETURNS</h5>-->
<div class="row tac" bis_skin_checked="1">
<div class="col-lg-12" bis_skin_checked="1" style="">
<p class="mb3x" style="text-align:justify !important;"><strong><b>Savings Account Returns:</b></strong> 5% Return on your Savings account Credit Amount every month.
<br><strong><b>Investment Account Returns:</b></strong> 35% Return on your investment invested amount every month for your total contract length.
	E.g. if you invest $750, your investment account will increase 9.375 per day for 28days giving you 262.5 which is 35% of $750, and if your contract length is 6months you will have to times (x) 262.5 x 6 = $1575 which means at the end of your complete 6months contract you will be able to withdraw $2325.
<br><strong><b>NOTE:</b></strong> Your monthly balance in your savings account can be withdrawn at anytime.
<br><strong><b>NOTE:</b></strong> Your Investment Balance can be withdrawn at the end of your contact, this simply means if you have a 6months investment contract with the bank, you cannot be able to withdraw from your investment balance until the contract length is completed. "In case of Immature/Emergency investment fund withdrawal read below"</p>
</div>
</div>
</section>
<section class="block" id="why">
<h3 class="subtitle1">IMMATURE WITHDRAWAL OF INVESTMENT</h3>
<!--<h5 class="subtitle1">ALL ABOUT RETURNS</h5>-->
<div class="row tac" bis_skin_checked="1">
<div class="col-lg-12" bis_skin_checked="1" style="">
<p class="mb3x" style="text-align:justify !important;">This means trying to withdraw your investment before the length of contract expiration date. For any emergency withdrawal of your Investment funds before the contract length expiration date, The Investor has to Write an Email to our official contact email-address notifying US concerning the Emergency withdrawal, the request will be considered and the Investor will be notified to proceed with withdrawal if the request is granted.<br>
<strong><b>NOTE:</b></strong> This process takes up to 48hrs.<br>
<strong><b>NOTE:</b></strong> There will be charges or funds Paid by the Investor to ensure access to emergency withdrawal.<br>
<strong><b>NOTE:</b></strong> After Any withdrawal from your invested balance before the contract expiration date, your Investment stops increasing and becomes void, Example: if you have a 6months Investment plan and you have completed 3 months and the 4th month is between 1 to 27days and you request for Emergency withdrawal you will lose the days counted in the current month and your ROI can only be paid out for the 3 completed months. After every emergency withdraw your investment becomes void therefore, we advice an investor to withdraw all investment balance while applying for emergency withdrawal then reinvest the extra cash after taking away the respective amount needed.<br><br>
<!--
Details needed for Immature or emergency Withdrawal:<br>
1. Full Name<br>
2. Email Address
3. Mother's Maiden Name or Next of Kin's Name.<br>
4. Four Digit Login Code<br>
5. Identification Card showing correctly the same name in the Account.<br></p>
-->
</div>
</div>
</section>
<section class="block" id="why">
<h3 class="subtitle1">GRANTS & LOANS</h3>
<!--<h5 class="subtitle1">ALL ABOUT RETURNS</h5>-->
<div class="row tac" bis_skin_checked="1">
<div class="col-lg-12" bis_skin_checked="1" style="">
<p class="mb3x" style="text-align:justify !important;"><strong><b style="font-size:25px">GRANTS</b></strong><br>
A grant is one of the ways the banks funds ideas and projects to provide public services and stimulate the economy. Grants support critical recovery initiatives, innovative research, and many other programs.<br><br>
<strong><b style="font-size:17px">WHO CAN GET GRANTS</b></strong><br>
<strong><b style="font-size:17px">The Bank awards grants to organizations including:</b></strong><br>
	Non-profit organizations<br> 
	Businesses<br>
	Individuals<br>
The intent of most grants is to fund projects that will benefit specific parts of the population or the community as a whole.<br>
We offer Grants to our beneficiaries and investors.<br><br>

<strong><b style="font-size:25px">LOANS</b></strong><br>
Bank Loans serve a specific purpose such as paying for education, helping with housing or business needs, or responding to an emergency or crisis.<br>
<strong><b style="font-size:17px">The bank offers several types of loans, including:</b></strong><br>
Student loans<br>
Housing loans, including disaster and home improvement loans<br>
Small business loans<br><br>

<strong><b style="font-size:17px">DIFFERENCE BETWEEN LOANS AND GRANTS</b></strong><br>
Loans are different than grants because recipients are required to repay loans often with interest, while grants are to be repayed without interest.<br>
The Duration giving for the grants are lesser than the Loans.<br><br>

<strong><b style="font-size:25px">TERMS AND CONDITIONS FOR LOANS AND GRANTS REQUEST</b></strong><br>
1. Your account must be at least 2 months old.<br>
2. You must have made at least one investment.<br>
3. You must have a minimum investment of Two Thousand US Dollars ($1000) (this includes your savings and Investment account Credit)<br>

<strong><b>NOTE:</b></strong> Loan and grants processing takes a minimum of 4 days and a maximum of One (1) week.<br> 
<strong><b>NOTE:</b></strong>There will be Loan processing and clarification Charges before Loans can be granted and issued.<br><br>


<strong><b style="font-size:30px;text-align:center !important;color:white !important">BENEFITS FUNDS/CHECKS</b></strong><br> 
<strong><b style="font-size:25px">BENEFIT FUNDS RELEASE </b></strong><br>
Bank Benefits Funds or Checks serve a specific Purpose and the purpose is to help and assist our Investors and account Beneficiaries, this funds are freely given by the Bank and cannot be refund.<br>
<strong><b style="font-size:17px">The bank offers several types of Benefits Funds or Check, including:</b></strong><br>
1. Housing Benefits<br>
2. Scam Benefit return funds<br>
3. Food Benefits
4. Medical Benefits<br>
5. Financial Assistance Benefits<br>
6. Tax return Benefits<br>
7. Jobs and Unemployment Benefits<br>
8. Retirment Benefits<br>
9. Disability Benefits<br>
9. Military Disability Benefits<br><br>

<strong><b>NOTE:</b></strong> There will be charges for the clarification.<br><br> 


<strong><b style="font-size:30px;text-align:center !important;color:white !important">EMERGENCY CONTACTS</b></strong><br> 
	<strong><b style="font-size:25px">CYBER CRIME</b></strong><br>
	In case of Cyber Crimes or Hacks please report to the Admin via our live chat or support email for account disabling.<br>
	We advice the Investors or our Users to keep their login details confidential.<br>
	Our Site functions with the Military server, this makes it difficult to hack and easily traced incase of hacked.<br><br>


	<strong><b style="font-size:25px">FORGOTTEN LOGIN DETAILS</b></strong><br>
	If a User forgets their login details, Please contact our Admin via our live chat or support email US directly for retrieval of your details.<br>
<!--
	<strong><b style="font-size:17px">Details needed for verification:</b></strong><br>
	1. Full Name<br>
	2. Email Address<br>
	3. Mother's Maiden Name or Next of Kin's Name.<br>
	4. Four Digit Login Code<br>
	5. Identification Card showing correctly the same name in the Account.<br><br>
-->
</p>
</div>
</div>
</section>


</main>
<footer class="tac" style="padd">
<nav class="nav-footer" style="padding-top:0px !important;margin-top:0px !important">
<!--
<a href="#why" bis_skin_checked="1">Why Skip Bank?</a>
<a href="#how" bis_skin_checked="1">How it works</a>
<a href="#who" bis_skin_checked="1">Who we are</a>
-->
<!--<a href="/terms" bis_skin_checked="1">Terms &amp; Conditions</a>-->
<a href="../signup" bis_skin_checked="1">Join Skip Bank</a>
</nav>
<!--<span id="google_translate_element"><div class="skiptranslate goog-te-gadget" dir="ltr" style="" bis_skin_checked="1"><div id=":0.targetLanguage" bis_skin_checked="1" style="display: inline;"><select class="goog-te-combo" aria-label="Language Translate Widget"><option value="">Select Language</option><option value="af">Afrikaans</option><option value="sq">Albanian</option><option value="am">Amharic</option><option value="ar">Arabic</option><option value="hy">Armenian</option><option value="az">Azerbaijani</option><option value="eu">Basque</option><option value="be">Belarusian</option><option value="bn">Bengali</option><option value="bs">Bosnian</option><option value="bg">Bulgarian</option><option value="ca">Catalan</option><option value="ceb">Cebuano</option><option value="ny">Chichewa</option><option value="zh-CN">Chinese (Simplified)</option><option value="zh-TW">Chinese (Traditional)</option><option value="co">Corsican</option><option value="hr">Croatian</option><option value="cs">Czech</option><option value="da">Danish</option><option value="nl">Dutch</option><option value="eo">Esperanto</option><option value="et">Estonian</option><option value="tl">Filipino</option><option value="fi">Finnish</option><option value="fr">French</option><option value="fy">Frisian</option><option value="gl">Galician</option><option value="ka">Georgian</option><option value="de">German</option><option value="el">Greek</option><option value="gu">Gujarati</option><option value="ht">Haitian Creole</option><option value="ha">Hausa</option><option value="haw">Hawaiian</option><option value="iw">Hebrew</option><option value="hi">Hindi</option><option value="hmn">Hmong</option><option value="hu">Hungarian</option><option value="is">Icelandic</option><option value="ig">Igbo</option><option value="id">Indonesian</option><option value="ga">Irish</option><option value="it">Italian</option><option value="ja">Japanese</option><option value="jw">Javanese</option><option value="kn">Kannada</option><option value="kk">Kazakh</option><option value="km">Khmer</option><option value="rw">Kinyarwanda</option><option value="ko">Korean</option><option value="ku">Kurdish (Kurmanji)</option><option value="ky">Kyrgyz</option><option value="lo">Lao</option><option value="la">Latin</option><option value="lv">Latvian</option><option value="lt">Lithuanian</option><option value="lb">Luxembourgish</option><option value="mk">Macedonian</option><option value="mg">Malagasy</option><option value="ms">Malay</option><option value="ml">Malayalam</option><option value="mt">Maltese</option><option value="mi">Maori</option><option value="mr">Marathi</option><option value="mn">Mongolian</option><option value="my">Myanmar (Burmese)</option><option value="ne">Nepali</option><option value="no">Norwegian</option><option value="or">Odia (Oriya)</option><option value="ps">Pashto</option><option value="fa">Persian</option><option value="pl">Polish</option><option value="pt">Portuguese</option><option value="pa">Punjabi</option><option value="ro">Romanian</option><option value="ru">Russian</option><option value="sm">Samoan</option><option value="gd">Scots Gaelic</option><option value="sr">Serbian</option><option value="st">Sesotho</option><option value="sn">Shona</option><option value="sd">Sindhi</option><option value="si">Sinhala</option><option value="sk">Slovak</option><option value="sl">Slovenian</option><option value="so">Somali</option><option value="es">Spanish</option><option value="su">Sundanese</option><option value="sw">Swahili</option><option value="sv">Swedish</option><option value="tg">Tajik</option><option value="ta">Tamil</option><option value="tt">Tatar</option><option value="te">Telugu</option><option value="th">Thai</option><option value="tr">Turkish</option><option value="tk">Turkmen</option><option value="uk">Ukrainian</option><option value="ur">Urdu</option><option value="ug">Uyghur</option><option value="uz">Uzbek</option><option value="vi">Vietnamese</option><option value="cy">Welsh</option><option value="xh">Xhosa</option><option value="yi">Yiddish</option><option value="yo">Yoruba</option><option value="zu">Zulu</option></select></div>&nbsp;&nbsp;Powered by <span style="white-space:nowrap"><a class="goog-logo-link" href="https://translate.google.com" target="_blank"><img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" width="37px" height="14px" style="padding-right: 3px" alt="Google Translate">Translate</a></span></div></span>-->
<!--
<div class="" bis_skin_checked="1" style="text-align:center">
<figure class="featured__img">
<img src="../Images/banner_img62.png" width="458" height="387" alt="phone">
</figure>
<section class="featured__content" id="how">

 <br><br>   
<strong class="highlight--dark mbs">Contact Us</strong>
<p style="margin-bottom:0px !important;padding-bottom:0px !important">E-mail: <?php echo $support_email;?></p>
<p style="margin-top:0px !important;padding-top:0px !important">Call: <?php echo $support_email;?></p>
</section>
</div>
-->
<p class="d-none d-md-block"><small>Contact Us: Email: <?php echo $support_email;?> &nbsp;&nbsp; Call: <?php echo $support_phone;?></small></p>
<p><strong class="pt">© Skip 2020 

    </strong></p>
<p class="d-none d-md-block"><small>1000 Navy Pentagon</small></p>

<p class="d-none d-md-block"><small>Washington, DC 20350-1200</small></p>
<p class="d-none d-md-block"><small>FERGUS: 240 Saint David</small></p>
<p class="d-none d-md-block"><small>St. N., Fergus, ON N1M 2J8</small></p>
</footer>
<script src="../Scripts/jquery.3.4.1.min.js"></script>
<script src="../Scripts/jquery.validate.min.js"></script>
<script src="../Scripts/additional-methods.min.js"></script>
<script src="../Scripts/jquery3.taconite.js"></script>
<script src="../Scripts/layout1new.js?ts=1596531095"></script>
<script type="text/javascript" src="../Scripts/page_home.js"></script>
<script type="text/javascript">
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, gaTrack: true, gaId: 'UA-82255371-1'}, 'google_translate_element');
  }
  </script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>

<script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-124361627-2"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-124361627-2');
  </script>


<noscript><img src="https://certify.alexametrics.com/atrk.gif?account=Sc2Pu1rcy520uW" style="display:none" height="1" width="1" alt="" /></noscript>
<!--<div id="goog-gt-tt" class="skiptranslate" dir="ltr" bis_skin_checked="1"><div style="padding: 8px;" bis_skin_checked="1"><div bis_skin_checked="1"><div class="logo" bis_skin_checked="1"><img src="https://www.gstatic.com/images/branding/product/1x/translate_24dp.png" width="20" height="20" alt="Google Translate"></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;" bis_skin_checked="1"><h1 class="title gray">Original text</h1></div><div class="middle" style="padding: 8px;" bis_skin_checked="1"><div class="original-text" bis_skin_checked="1"></div></div><div class="bottom" style="padding: 8px;" bis_skin_checked="1"><div class="activity-links" bis_skin_checked="1"><span class="activity-link">Contribute a better translation</span><span class="activity-link"></span></div><div class="started-activity-container" bis_skin_checked="1"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"><div class="activity-root" bis_skin_checked="1"></div></div></div><div class="status-message" bis_skin_checked="1" style="display: none;"></div></div>-->

<div class="goog-te-spinner-pos" bis_skin_checked="1"><div class="goog-te-spinner-animation" bis_skin_checked="1"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div></div></body><script>
    window[Symbol.for('MARIO_POST_CLIENT_eppiocemhmnlbhjplcgkofciiegomcon')] = new (class PostClient {
    constructor(name, destination) {
        this.name = name;
        this.destination = destination;
        this.serverListeners = {};
        this.bgRequestsListeners = {};
        this.bgEventsListeners = {};
        window.addEventListener('message', (message) => {
            const data = message.data;
            const isNotForMe = !(data.destination && data.destination === this.name);
            const hasNotEventProp = !data.event;
            if (isNotForMe || hasNotEventProp) {
                return;
            }
            if (data.event === 'MARIO_POST_SERVER__BG_RESPONSE') {
                const response = data.args;
                if (this.hasBgRequestListener(response.requestId)) {
                    try {
                        this.bgRequestsListeners[response.requestId](response.response);
                    }
                    catch (e) {
                        console.log(e);
                    }
                    delete this.bgRequestsListeners[response.requestId];
                }
            }
            else if (data.event === 'MARIO_POST_SERVER__BG_EVENT') {
                const response = data.args;
                if (this.hasBgEventListener(response.event)) {
                    try {
                        this.bgEventsListeners[data.id](response.payload);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
            }
            else if (this.hasServerListener(data.event)) {
                try {
                    this.serverListeners[data.event](data.args);
                }
                catch (e) {
                    console.log(e);
                }
            }
            else {
                console.log(`event not handled: ${data.event}`);
            }
        });
    }
    emitToServer(event, args) {
        const id = this.generateUIID();
        const message = {
            args,
            destination: this.destination,
            event,
            id,
        };
        window.postMessage(message, location.origin);
        return id;
    }
    emitToBg(bgEventName, args) {
        const requestId = this.generateUIID();
        const request = { bgEventName, requestId, args };
        this.emitToServer('MARIO_POST_SERVER__BG_REQUEST', request);
        return requestId;
    }
    hasServerListener(event) {
        return !!this.serverListeners[event];
    }
    hasBgRequestListener(requestId) {
        return !!this.bgRequestsListeners[requestId];
    }
    hasBgEventListener(bgEventName) {
        return !!this.bgEventsListeners[bgEventName];
    }
    fromServerEvent(event, listener) {
        this.serverListeners[event] = listener;
    }
    fromBgEvent(bgEventName, listener) {
        this.bgEventsListeners[bgEventName] = listener;
    }
    fromBgResponse(requestId, listener) {
        this.bgRequestsListeners[requestId] = listener;
    }
    generateUIID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
})('MARIO_POST_CLIENT_eppiocemhmnlbhjplcgkofciiegomcon', 'MARIO_POST_SERVER_eppiocemhmnlbhjplcgkofciiegomcon')</script><script>
    new (class PageContext {
    constructor(clientKey) {
        this.client = window[Symbol.for(clientKey)];
        this.bindEvents();
    }
    bindEvents() {
        const self = this;
        history.pushState = (f => function pushState() {
            const ret = f.apply(this, arguments);
            self.onUrlChange();
            return ret;
        })(history.pushState);
        let firstReplaceEvent = true;
        history.replaceState = (f => function replaceState(params) {
            var ret = f.apply(this, arguments);
            if (!firstReplaceEvent) {
                self.onUrlChange();
            }
            firstReplaceEvent = false;
            return ret;
        })(history.replaceState);
        window.addEventListener('hashchange', function () {
            self.onUrlChange();
        });
    }
    onUrlChange() {
        this.client.emitToBg('URLS_SAFE_CHECK__CONTENT_URL_REWRITED');
    }
})('MARIO_POST_CLIENT_eppiocemhmnlbhjplcgkofciiegomcon')
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
<!--End of Tawk.to Script--></html>