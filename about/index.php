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
<h3 class="subtitle1" style="padding-bottom:0px !important;margin-bottom:10px !important;">OUR HISTORY</h3>
<!--<h5 class="subtitle1">ALL ABOUT RETURNS</h5>-->
<div class="row tac" bis_skin_checked="1">
<div class="col-lg-12" bis_skin_checked="1" style="">
<p class="mb3x" style="text-align:justify !important;">
Skip  Financial Institute (“SkipBank”), established in 1890, is the premier Bank in United States, One of the banks in partnership with the "United States  Military Banks and Credit Unions" and one of the best financial services solutions provider in World. The Bank was founded by Sir Mark Williams in 1890 after the United States Navy Claims in 1775, The bank has helped manage the fund of the Military personnel’s  active and inactive, deployed and undeployed personnel’s. A shipping magnate from Washington, DC. With its head office originally in Washington, DC. the Bank commenced business on a modest scale in United States under the name, Mil Bank (MBK).<br><br>

In 1912, the Bank acquired its first competitor, the Bank of Vista Bank (Visa Bank) which was established in 1899 by the Royal Navy Company. In 1957, the Bank changed its name from Bank of Mil Bank (MBK) to Military Fund Management Bank (MFMB). In 1966, following its merger with Standard Bank, UK.<br><br>

Changes in the name of the Bank also occurred in 1979 and 1991 to Skip Military Fund Management Bank, respectively. In 2012, the Bank changed its name again to Skip Bank of The United States as part of a restructuring resulting in SKIP (“SKP BANK”), having detached its commercial business from other businesses in the Skip-Bank Group, in compliance with new regulation by the Military Multi Saving Bank (MMSB). Skip Bank had 3million account-holders globally, where it was one of the most capitalized companies and also had an unlisted Global Depository Receipt (GDR) program, all of which were transferred to its Holding Company, in December 2012.<br><br>

In 2016, Skip Bank decided to broad their investment and enhance their business by making the bank generally accessible by the Civilians and Militaries but still functions and operates/manages under the Miltary force.</p>
</div>
</div>
</section>
<section class="block" id="why">
<h3 class="subtitle1" style="padding-bottom:0px !important;margin-bottom:10px !important;">OUR GROWTH</h3>
<!--<h5 class="subtitle1">ALL ABOUT RETURNS</h5>-->
<div class="row tac" bis_skin_checked="1">
<div class="col-lg-12" bis_skin_checked="1" style="">
<p class="mb3x" style="text-align:justify !important;">
The Skip Bank has been accessible since the enhancement and expansion in 2012, where we have 12million savings account-holders and  globally and an estimate of over 5.9million Investment Account. The bank has no branches in any but it's headquarters can be located in Washington DC.</p>
</div>
</div>
</section>
<section class="block" id="why">
<h3 class="subtitle1" style="padding-bottom:0px !important;margin-bottom:10px !important;">OUR INVESTMENT</h3>
<!--<h5 class="subtitle1">ALL ABOUT RETURNS</h5>-->
<div class="row tac" bis_skin_checked="1">
<div class="col-lg-12" bis_skin_checked="1" style="">
<p class="mb3x" style="text-align:justify !important;">
Skip Banks supports the Premier League Supports, some local Betting platforms and other inestments and supports other banks, this helps keep our income and banking running since the enhancement date and making us one of the Leading Online Banks.</p>
</div>
</div>
</section>
<section class="block" id="why">
<h3 class="subtitle1" style="padding-bottom:0px !important;margin-bottom:10px !important;">OUR RECOGNITIONS AND AWARDS</h3>
<!--<h5 class="subtitle1">ALL ABOUT RETURNS</h5>-->
<div class="row tac" bis_skin_checked="1">
<div class="col-lg-12" bis_skin_checked="1" style="">
<p class="mb3x" style="text-align:justify !important;">
In our Multiple years of uninterrupted operations, SkipBank’s outstanding services have attracted innumerable recognitions and awards. The Bank was first listed on The the Military Funds management Board as the 4th Leading financial institute, in March 1971 and won the FMB’s Annual President’s Merit Award for the best financial report in the banking industry a record seven times. This subsisting feat received additional impetus when the Bank in 2018 was bestowed with the “Best Online Financial Reporting Institute” award by global Investor, one of World’s most respected multimedia investment news and information publishers quoted.<br><br>

In the same period, Skip Bank was named the “Most Innovative Online Bank in the world” by Online Banker Awards. This highly coveted award goes to the Online bank that has demonstrated original and practical uses of technology to provide customer convenience, better and cheaper services, and greater access to the financial services industry in the world. The award, therefore, represents a global recognition of the giant strides the Bank has made over the years in deploying technology to power its operations and services, and ultimately making banking services more convenient, accessible and faster. These are major feats in the Bank’s customer-oriented and innovative financial services that confirm the Bank’s interest in promoting its customers’ lifestyles and businesses.</p>
</div>
</div>
</section>
<section class="block" id="why">
<h3 class="subtitle1" style="padding-bottom:0px !important;margin-bottom:10px !important;">OUR NEW OBJECTIVE</h3>
<!--<h5 class="subtitle1">ALL ABOUT RETURNS</h5>-->
<div class="row tac" bis_skin_checked="1">
<div class="col-lg-12" bis_skin_checked="1" style="">
<p class="mb3x" style="text-align:justify !important;">
Our new objective is to link the bank to all the Military stations all over the world, allowing access to create headquarters all over the world for faster and better management.<br>
We currently have an ATM Card which can grant access and help the users and investors to withdraw their funds directly from the Automated Teller Machines for easier access to their funds.<br>
We are currently working on the bank mobile applications to help create easy access and easy management by mobile users.</p>
</div>
</div>
</section>
<section class="block" id="why">
<h3 class="subtitle1" style="padding-bottom:0px !important;margin-bottom:10px !important;">OUR PROMISE</h3>
<!--<h5 class="subtitle1">ALL ABOUT RETURNS</h5>-->
<div class="row tac" bis_skin_checked="1" >
<div class="col-lg-12" bis_skin_checked="1" style="" >
<p class="mb3x" style="text-align:justify !important;">
<strong><b style="font-size:24px">In putting “You First” we promise to be:</b></strong><br><br>

There for you, and committed to you, our customers and stakeholders<br>
A financial solutions group that listens, understands and connects with you as people<br>
A financial solutions group that will deliver the relevant experiences that exceed your expectations<br>
A financial solutions group that has the products and services that meet the diverse needs of modern banking system<br>
A financial solutions group that you can trust and rely upon</p>
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