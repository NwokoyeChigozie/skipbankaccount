            </div>

            <div class="footer" id="footer">
                <a href="" target="_blank">
                    <span id="lblFooterAllRights">© 2030 Skip Bank, All Rights Reserved</span></a> 
            </div>
            <div class="PageFooter"></div>
        </div>
        <script type="text/javascript">
            //<![CDATA[
            window.widgetEntryRoute = '/dashboard';
            var wlh = window.location.hash.replace(window.widgetEntryRoute, '').replace('#', '');
            var nwlh = '#' + window.widgetEntryRoute + wlh;
            if (window.widgetEntryRoute.includes('?') && wlh[0] === '?') {
                var nwlh = '#' + window.widgetEntryRoute + '&' + wlh.substring(1);
            } else {
                var nwlh = '#' + window.widgetEntryRoute + wlh;
            }
            window.location.hash = nwlh;
            window.WidgetParameters = {
                referrerSourceId: 1,
                isPostBack: 0
            };
            if (typeof HandleWidgetHashKeys === 'function') {
                HandleWidgetHashKeys();
            } //]]>

        </script>
        <script type="text/javascript">
            /* <![CDATA[ */
            if (top != self) {
                try {
                    if (parent != top && (!top.document || !parent.document || top.document.domain != parent.document.domain)) {
                        throw 1;
                    }
                    var allow = ['payoneer.com', ];
                    var href = document.referrer.toLowerCase();
                    var passOK = false;
                    for (var i = 0; i < allow.length; i++) {
                        if (href.indexOf(allow[i]) >= 0) {
                            passOK = true;
                        }
                    }
                    if (!passOK) {
                        throw 1;
                    }
                } catch (e) {
                    try {
                        window.document.getElementsByTagName('head')[0].innerHTML = '';
                    } catch (e) {
                        /* IE */
                        var htmlEl = document.getElementsByTagName('html')[0];
                        htmlEl.removeChild(document.getElementsByTagName('head')[0]);
                        var el = document.createElement('head');
                        htmlEl.appendChild(el);
                    }
                    window.location = 'https://www.payoneer.com/Oops/ErrorPage.html?err=124';
                }
            } /* ]]> */

        </script>
    </form>
    <link type="text/css" rel="stylesheet" href='Stylesheets/main-style-1cd7169ce6f8fcbce5fd.css' />
    <script type="text/javascript" src='Scripts/runtime-9f32c6e80e34003c8ae8.js'></script>
    <script type="text/javascript" src='Scripts/auth-666057ffc0084fbd582e.js'></script>
    <script type="text/javascript" src='Scripts/core-vendors-8d03bbcc0796f54cb7c9.js'></script>
    <script type="text/javascript" src='Scripts/vendors-7ec0ac209997600b85c4.js'></script>
    <script type="text/javascript" src='Scripts/infra-594c8b1e690aef6d3146.js'></script>
    <script type="text/javascript" src='Scripts/main-db41e6b70ecc4f408c89.js'></script>
</body>

</html>
