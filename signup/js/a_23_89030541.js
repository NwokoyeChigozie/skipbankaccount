/*! ~/ClientLocalization.payoneer?langid=1 */
var ClientLocalization = new function () {
    var t = 1;
    typeof $.datepicker != "undefined" && $.datepicker.setDefaults($.datepicker.regional[""]);
    this.GetCurrentLanguage = function () {
        return t
    };
    this.IsCurrentLanguageRTL = !1;
    this.SetMoneyResourceFormat = function (n) {
        n && (this.MoneyResourceFormat = n)
    };
    this.GetMoneyResource = function (n, t) {
        try {
            if (!n) {
                if (t) return "";
                n = "0"
            }
            var i = this.MoneyResourceFormat;
            return i.replace("{{Amount}}", parseFloat(n).toFixed(2))
        } catch (r) {
            return ""
        }
    };

    function n(n) {
        return typeof n[t] == "undefined" ? n[1] : n[t]
    }
    var i = [];
    i[1] = "Please fill in all required details.";
    this.MissingRequiredFieldsError = function () {
        return n(i)
    };
    var r = [];
    r[1] = "You must mark the Agreement check boxes";
    this.OrderCardAgreementCBMandatory = function () {
        return n(r)
    };
    var u = [];
    u[1] = "Legal company name";
    this.GBTCompanyName = function () {
        return n(u)
    };
    var f = [];
    f[1] = "Contact person's full name";
    this.GBTContactPersonName = function () {
        return n(f)
    };
    var e = [];
    e[1] = "Contact person email address";
    this.GBTContactEmailAddress = function () {
        return n(e)
    };
    var o = [];
    o[1] = "Operation address";
    this.GBTOperationAddress = function () {
        return n(o)
    };
    var s = [];
    s[1] = "First name";
    this.GBTFirstName = function () {
        return n(s)
    };
    var h = [];
    h[1] = "Last name";
    this.GBTLastName = function () {
        return n(h)
    };
    var c = [];
    c[1] = "E-mail address";
    this.BankTransfer_EmailAddress = function () {
        return n(c)
    };
    var l = [];
    l[1] = "Address";
    this.BankTransfer_Address = function () {
        return n(l)
    };
    var a = [];
    a[1] = "Date of birth:";
    this.DateOfBirth = function () {
        return n(a)
    };
    var v = [];
    v[1] = "Date of incorporation";
    this.IncorporationDate = function () {
        return n(v)
    };
    var y = [];
//    y[1] = "Your session with the server has been lost. Please log in again.";
//    this.ConnectionLostMessage = function () {
//        return n(y)
//    };
    var p = [];
    p[1] = "Connection Lost";
    this.ConnectionLostTitle = function () {
        return n(p)
    };
    var w = [];
    w[1] = "OK";
    this.OK = function () {
        return n(w)
    }
};
/*! payoneer.theme.js */
PayoneerTheme = {
    _name: null,
    _isRightToLeft: null,
    name: function () {
        return this._name ? this._name : this._name = document.body.attributes["data-theme"] ? document.body.attributes["data-theme"].value : "avocado"
    },
    isRightToLeft: function () {
        return this._isRightToLeft ? this._isRightToLeft : this._isRightToLeft = ~document.body.className.indexOf("rtl") || typeof ClientLocalization != "undefined" && ClientLocalization.IsCurrentLanguageRTL || typeof jQuery != "undefined" && (jQuery('[Payoneer="Localization"]').data("rtl") || !1)
    },
    isMobile: function () {
        var n = navigator.userAgent || navigator.vendor || window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(n) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0, 4))
    },
    isAvocado: function () {
        return this.name() === "avocado"
    },
    isBanana: function () {
        return this.name() === "banana"
    },
    ToggleDisabledEventHandler: function (n) {
        var t = n.type == "disable";
        $(n.target).prop("disabled", t).toggleClass("disabled", t)
    },
    encodeHTML: function (n) {
        return n.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&apos;")
    },
    renderInput: function (n, t, i, r, u, f, e, o) {
        var s = "";
        s = n != "button" ? "<" + n : '<input payoneer="Button" type="button" ';
        t && (s = s + ' id="' + this.encodeHTML(t) + '" name="' + this.encodeHTML(t) + '"');
        i != undefined && n != "select" && (s = s + ' value="' + this.encodeHTML(i) + '"');
        u && (s = s + ' class="' + this.encodeHTML(u) + '"');
        e && (s = s + ' style="' + this.encodeHTML(e) + '"');
        var c;
        if (r && r.Rules && r.Messages && r.MoreData) {
            s = s + ' validate="validate"';
            for (var h in r.Rules) r.Rules.hasOwnProperty(h) && (s = s + " data-rule-" + h + '="' + this.encodeHTML(r.Rules[h]) + '"', h == "maxlength" && (c = r.Rules[h]));
            for (h in r.Messages) r.Messages.hasOwnProperty(h) && (s = s + " data-msg-" + h + '="' + this.encodeHTML(r.Messages[h]) + '"');
            for (h in r.MoreData) r.MoreData.hasOwnProperty(h) && (s = s + " data-" + h + '="' + this.encodeHTML(r.MoreData[h]) + '"')
        }
        if (n == "input" && c && (s = s + ' maxlength="' + this.encodeHTML(c) + '"'), s = f ? n == "input" ? s + ' placeholder="' + this.encodeHTML(f) + '">' : n == "select" ? s + "><option" + (!i || !i.length ? ' selected="selected"' : "") + ' value="">' + this.encodeHTML(f) + "<\/option>" : s + ">" : s + ">", n == "select" && o != undefined)
            for (var l in o) s = s + "<option" + (l == i ? ' selected="selected"' : "") + ' value="' + this.encodeHTML(l) + '">' + this.encodeHTML(o[l]) + "<\/option>";
        return n != "button" ? s + "<\/" + n + ">" : s + "<\/input>"
    }
};
(function (n) {
    if (n) {
        PayoneerTheme.ClientValidation = {
            highlight: function (t) {
                this.settings.debug && console.info("[" + (new Date).toLocaleString() + "] validation FAIL for element " + t.element.id);
                var i = n.isFunction(t.message) ? t.message() : t.message,
                    r = n(t.element).closest(".form-object");
                r.addClass("error").children(".error-message").html(i).delay(200);
                n.payoneerValidation.settings.onHighlight && n.payoneerValidation.settings.onHighlight.call(t.element)
            },
            unhighlight: function (t) {
                this.settings.debug && console.info("[" + (new Date).toLocaleString() + "] validation success for element  " + t.id);
                var i = n(t).closest(".form-object");
                i.removeClass("error").children(".error-message").html("").delay(200);
                n.payoneerValidation.settings.onUnhighlight && n.payoneerValidation.settings.onUnhighlight.call(t)
            }
        };
        PayoneerTheme.renderInput = function (n, t, i, r, u, f, e, o) {
            var s = "";
            s = '<div class="form-object ' + this.encodeHTML(u || "") + '">';
            s = n != "button" ? s + '<span class="error-star"><\/span><div class="field"><' + n : s + '<span class="btn"><input payoneer="Button" type="button" class="button"';
            n == "input" && (s = s + ' payoneer="TextBox" type="text"');
            t && (s = s + ' id="' + this.encodeHTML(t) + '" name="' + this.encodeHTML(t) + '"');
            i != undefined && n != "select" && (s = s + ' value="' + this.encodeHTML(i) + '"');
            n != "button" && (s = s + ' class="field-data' + (n == "select" ? " selectCustom" : "") + (f ? " watermark" : "") + '"');
            e && (s = s + ' style="' + this.encodeHTML(e) + '"');
            var c;
            if (r && r.Rules && r.Messages && r.MoreData) {
                s = s + ' validate="validate"';
                for (var h in r.Rules) r.Rules.hasOwnProperty(h) && (s = s + " data-rule-" + h + '="' + this.encodeHTML(r.Rules[h]) + '"', h == "maxlength" && (c = r.Rules[h]));
                for (h in r.Messages) r.Messages.hasOwnProperty(h) && (s = s + " data-msg-" + h + '="' + this.encodeHTML(r.Messages[h]) + '"');
                for (h in r.MoreData) r.MoreData.hasOwnProperty(h) && (s = s + " data-" + h + '="' + this.encodeHTML(r.MoreData[h]) + '"')
            }
            if (n == "input" && c && (s = s + ' maxlength="' + this.encodeHTML(c) + '"'), s = f ? s + ' placeholder="' + this.encodeHTML(f) + '">' : s + ">", n == "select" && o != undefined)
                for (var l in o) s = s + "<option" + (l == i ? ' selected="selected"' : "") + ' value="' + this.encodeHTML(l) + '">' + this.encodeHTML(o[l]) + "<\/option>";
            return s = n != "button" ? s + "<\/" + n + ">" : s + "<\/input>", n == "select" && (s = s + '<span class="selectCustomBox input-placeholder"><span class="selectCustomBoxInner">&nbsp;<\/span><\/span>'), n != "button" ? s + '<\/div><div class="error-message"><\/div><div class="clearfix"><\/div><\/div>' : s + '<div class="clearfix"><\/div><\/span><\/div>'
        };
        PayoneerTheme.ToggleDisabledEventHandler = function (t, i) {
            var u = n(t.target),
                r = t.type == "disable";
            u.prop("disabled", r).closest(".form-object").toggleClass("disabled", r == !0).toggleClass("wait", i == !0)
        };
        var t = navigator.appName === "Microsoft Internet Explorer" || navigator.userAgent.indexOf("Safari/") > 0 && navigator.userAgent.indexOf("(Windows") > 0 && !(navigator.userAgent.indexOf("Chrome/") > 0);
        n.fn.payoneerThemeFields = function () {
            return this.each(function () {
                var i = n(this);

                function f(n, t, i) {
                    n.toggleClass("field-description-show", t, i)
                }
                if (i.attr("payoneer") === "TextBox") i.on("disable", PayoneerTheme.ToggleDisabledEventHandler).on("enable", PayoneerTheme.ToggleDisabledEventHandler);
                i.on("focusin", function () {
                    i.closest(".field").addClass("highlight")
                }).on("focusout", function () {
                    i.closest(".field").removeClass("highlight")
                });
                var u = i.data("watermarkPassword");
                if (u && u.length) u.on("focusin", function () {
                    u.closest(".field").addClass("highlight")
                }).on("focusout", function () {
                    u.closest(".field").removeClass("highlight")
                });
                var s = i.parents(".form-object"),
                    r = i.closest(".field").prev(".field-description"),
                    h = n.trim(r.text()),
                    e = i.attr("placeholder");
                if (!r.length || !e || !e.length) {
                    h.length && f(r, !0);
                    return
                }
                if (h.length && h !== e) {
                    f(r, !0);
                    return
                }
                var o = i.hasClass("selectCustom");
                o && r.addClass("styled");
                r.text(e);
                var c = function () {
                        var e = i.val();
                        u && u.length && (e = u.val());
                        (!t || o) && e && e.length && r.is(":hidden") ? (f(r, !0, 250), n.fn.effect && s.effect("transfer", {
                            to: r
                        }, 250)) : e && e.length || !r.is(":visible") || (n.fn.effect && r.effect("transfer", {
                            to: s
                        }, 250), f(r, !1))
                    },
                    v = function () {
                        setTimeout(c, 0)
                    };
                i.on(t ? "focusout change empty" : "keyup focusout input paste change empty", o ? v : c);
                if (u && u.length) u.on(t ? "focusout change empty" : "keyup focusout input paste change empty", c);
                if (t && !o) {
                    var l = function () {
                        r.is(":hidden") && (r.show(250), n.fn.effect && s.effect("transfer", {
                            to: r
                        }, 250))
                    };
                    i.on("focusin", l);
                    if (u && u.length) u.on("focusin", l)
                }
                var a = i.val();
                a && a.length && i.trigger("change")
            }), this
        };
        n(function () {
            n(".field-data").payoneerThemeFields();
            n("a").on("focusin", function () {
                n(this).addClass("highlight")
            }).on("focusout", function () {
                n(this).removeClass("highlight")
            })
        })
    }
})(window.jQuery);
/*! RSA.AC_OETags.js */
var isIE = navigator.appVersion.indexOf("MSIE") != -1 ? !0 : !1,
    isWin = navigator.appVersion.toLowerCase().indexOf("win") != -1 ? !0 : !1,
    isOpera = navigator.userAgent.indexOf("Opera") != -1 ? !0 : !1;

function ControlVersion() {
    var n, t;
    try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        n = t.GetVariable("$version")
    } catch (i) {}
    if (!n) try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
        n = "WIN 6,0,21,0";
        t.AllowScriptAccess = "always";
        n = t.GetVariable("$version")
    } catch (i) {}
    if (!n) try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
        n = t.GetVariable("$version")
    } catch (i) {}
    if (!n) try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
        n = "WIN 3,0,18,0"
    } catch (i) {}
    if (!n) try {
        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        n = "WIN 2,0,0,11"
    } catch (i) {
        n = -1
    }
    return n
}

function GetSwfVer() {
    var t = -1;
    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var u = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "",
                f = navigator.plugins["Shockwave Flash" + u].description,
                i = f.split(" "),
                r = i[2].split("."),
                e = r[0],
                o = r[1],
                n = i[3];
            n == "" && (n = i[4]);
            n[0] == "d" ? n = n.substring(1) : n[0] == "r" && (n = n.substring(1), n.indexOf("d") > 0 && (n = n.substring(0, n.indexOf("d"))));
            var t = e + "." + o + "." + n
        }
    } else navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1 ? t = 4 : navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1 ? t = 3 : navigator.userAgent.toLowerCase().indexOf("webtv") != -1 ? t = 2 : isIE && isWin && !isOpera && (t = ControlVersion());
    return t
}

function DetectFlashVer(n, t, i) {
    if (versionStr = GetSwfVer(), versionStr == -1) return !1;
    if (versionStr != 0) {
        isIE && isWin && !isOpera ? (tempArray = versionStr.split(" "), tempString = tempArray[1], versionArray = tempString.split(",")) : versionArray = versionStr.split(".");
        var r = versionArray[0],
            u = versionArray[1],
            f = versionArray[2];
        return r > parseFloat(n) ? !0 : r == parseFloat(n) && (u > parseFloat(t) || u == parseFloat(t) && f >= parseFloat(i)) ? !0 : !1
    }
}

function AC_AddExtension(n, t) {
    return n.indexOf("?") != -1 ? n.replace(/\?/, t + "?") : n + t
}

function AC_Generateobj(n, t, i) {
    var r = "";
    if (isIE && isWin && !isOpera) {
        r += "<object ";
        for (var u in n) r += u + '="' + n[u] + '" ';
        for (var u in t) r += '><param name="' + u + '" value="' + t[u] + '" /> ';
        r += "><\/object>"
    } else {
        r += "<embed ";
        for (var u in i) r += u + '="' + i[u] + '" ';
        r += "> <\/embed>"
    }
    $("body").append(r)
}

function AC_FL_RunContent() {
    var n = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
    AC_Generateobj(n.objAttrs, n.params, n.embedAttrs)
}

function AC_GetArgs(n, t, i, r, u) {
    var e = {};
    e.embedAttrs = {};
    e.params = {};
    e.objAttrs = {};
    for (var f = 0; f < n.length; f = f + 2) {
        var o = n[f].toLowerCase();
        switch (o) {
            case "classid":
                break;
            case "pluginspage":
                e.embedAttrs[n[f]] = n[f + 1];
                break;
            case "src":
            case "movie":
                n[f + 1] = AC_AddExtension(n[f + 1], t);
                e.embedAttrs.src = n[f + 1];
                e.params[i] = n[f + 1];
                break;
            case "onafterupdate":
            case "onbeforeupdate":
            case "onblur":
            case "oncellchange":
            case "onclick":
            case "ondblClick":
            case "ondrag":
            case "ondragend":
            case "ondragenter":
            case "ondragleave":
            case "ondragover":
            case "ondrop":
            case "onfinish":
            case "onfocus":
            case "onhelp":
            case "onmousedown":
            case "onmouseup":
            case "onmouseover":
            case "onmousemove":
            case "onmouseout":
            case "onkeypress":
            case "onkeydown":
            case "onkeyup":
            case "onload":
            case "onlosecapture":
            case "onpropertychange":
            case "onreadystatechange":
            case "onrowsdelete":
            case "onrowenter":
            case "onrowexit":
            case "onrowsinserted":
            case "onstart":
            case "onscroll":
            case "onbeforeeditfocus":
            case "onactivate":
            case "onbeforedeactivate":
            case "ondeactivate":
            case "type":
            case "codebase":
                e.objAttrs[n[f]] = n[f + 1];
                break;
            case "id":
            case "width":
            case "height":
            case "align":
            case "vspace":
            case "hspace":
            case "class":
            case "title":
            case "accesskey":
            case "name":
            case "tabindex":
                e.embedAttrs[n[f]] = e.objAttrs[n[f]] = n[f + 1];
                break;
            default:
                e.embedAttrs[n[f]] = e.params[n[f]] = n[f + 1]
        }
    }
    return e.objAttrs.classid = r, u && (e.embedAttrs.type = u), e
}
/*! RSA.rsa.js */
function Hashtable() {
    var n = {
            __indexToValue: [],
            __indexToKeys: []
        },
        t = [],
        i = 0,
        r = this;

    function u(u) {
        for (var e = null, f = 0; typeof t[f] == "number";) f += 1;
        t[f] = 0;
        this.hasNext = this.hasMoreElements = function () {
            return t[f] < i ? !0 : (typeof t[f] == "number" && (t[f] = null), !1)
        };
        this.next = this.nextElement = function () {
            return this.hasNext ? (e = t[f], n[u][t[f]++]) : null
        };
        this.remove = function () {
            typeof e == "number" && (r.remove(n.__indexToKeys[e]), e = null)
        }
    }
    this.get = function (t) {
        return typeof n[t] == "number" ? n.__indexToValue[n[t]] : null
    };
    this.put = function (t, r) {
        typeof n[t] == "number" ? n.__indexToValue[n[t]] = r : (n[t] = i, n.__indexToValue[i] = r, n.__indexToKeys[i++] = t)
    };
    this.remove = function (r) {
        var f = n[r];
        if (typeof f == "number") {
            var u = 0;
            for (delete n[r], i -= 1, u = f; u < i; u++) n.__indexToValue[u] = n.__indexToValue[u + 1], n[n.__indexToKeys[u] = n.__indexToKeys[u + 1]] = u;
            for (u = 0; u < t.length; u++) t[u] && f < t[u] && (t[u] -= 1)
        }
    };
    this.size = function () {
        return i
    };
    this.__enumerate = function (n) {
        return new u(n)
    };
    Hashtable.prototype.elements = function () {
        return this.__enumerate("__indexToValue")
    };
    Hashtable.prototype.keys = function () {
        return this.__enumerate("__indexToKeys")
    };
    Hashtable.prototype.clear = function () {
        for (var n = this.keys(); n.hasNext();) this.remove(n.next())
    };
    Hashtable.prototype.toString = function () {
        for (var n, t = this.keys(), i = ""; t.hasNext();) n = t.next(), i += n + " =&gt; " + this.get(n) + "\r\n";
        return i
    };
    Hashtable.prototype.contains = function (n) {
        for (var t = this.elements(); t.hasNext();)
            if (t.next() == n) return !0;
        return !1
    };
    Hashtable.prototype.containsValue = Hashtable.prototype.contains;
    Hashtable.prototype.containsKey = function (n) {
        return this.get(n) !== null
    };
    Hashtable.prototype.isEmpty = function () {
        return this.size() === 0
    };
    Hashtable.prototype.putAll = function (n) {
        if (n.constructor == Hashtable)
            for (var t, i = n.keys(); i.hasNext();) t = i.next(), this.put(t, n.get(t))
    };
    Hashtable.prototype.clone = function () {
        var n = new Hashtable;
        return n.putAll(this), n
    };
    Hashtable.prototype.equals = function (n) {
        return n == this
    }
}

function startsWith(n, t) {
    return n.indexOf(t) === 0
}

function DomDataCollection(n) {
    var t = this;
    t.config = {
        recursion_level: 1,
        collection_mode: "partial",
        functionsToExclude: [],
        function_list_size: 1024,
        json_script: n ? n : "json2.js"
    };
    t.emptyDomData = function () {
        t.dom_data = {
            functions: {
                names: [],
                excluded: {
                    size: 0,
                    count: 0
                },
                truncated: !1
            },
            inputs: [],
            iFrames: [],
            scripts: [],
            collection_status: DomDataCollection.NotStarted
        }
    };
    t.startInspection = function () {
        var n = !1,
            i = !0;
        if (BrowserDetect.init(), BrowserDetect.browser === "Explorer") t.dom_data.functions = [], (t.dom_data.functions === undefined || t.dom_data.functions.names === undefined) && (t.dom_data.functions = {
            names: [],
            excluded: {
                size: 0,
                count: 0
            },
            truncated: !1
        });
        else try {
            t.inspectJSFunctions();
            i = !1
        } catch (r) {
            n = n || !0
        }
        try {
            t.inspectFrames();
            i = !1
        } catch (r) {
            n = n || !0
        }
        try {
            t.inspectScripts();
            i = !1
        } catch (r) {
            n = n || !0
        }
        try {
            t.inspectInputFields();
            i = !1
        } catch (r) {
            n = n || !0
        }
        t.dom_data.collection_status = n ? i ? DomDataCollection.Fail : DomDataCollection.Partial : DomDataCollection.Success;
        BrowserDetect.browser === "Explorer" || t.handleSizeLimit()
    };
    t.domDataAsJSON = function () {
        return stripIllegalChars(JSON.stringify(t.dom_data))
    };
    t.recursiveGetAllFunctionNamesUnderElement = function (n, i, r) {
        var c, o, l, a = t.config,
            p = a.recursion_level,
            w = a.collection_mode;
        (t.dom_data.functions === undefined || t.dom_data.functions.names === undefined) && (t.dom_data.functions = {
            names: [],
            excluded: {
                size: 0,
                count: 0
            },
            truncated: !1
        });
        var s = t.dom_data.functions,
            v = s.excluded;
        for (var h in i) try {
            var e = i[h];
            if (c = "" + e, prefix = n.length > 0 ? n + "." : "", o = prefix + h, f(e))
                if (t.functionShouldBeCollected(e, h)) {
                    var y = s.names;
                    l = y.length;
                    y[l] = o
                } else w == "partial" && (v.size += c.length, v.count++);
            r + 1 < p ? t.recursiveGetAllFunctionNamesUnderElement(o, e, r + 1) : s.names.sort()
        } catch (b) {
            window.console || (window.console = {}, window.console.info = u, window.console.log = u, window.console.warn = u, window.console.error = u);
            console && console.log && console.log("error counting functions: " + b.toString())
        }
    };

    function u() {}

    function f(n) {
        return typeof n == "function"
    }
    var r = new Hashtable;
    t.initFunctionsToExclude = function () {
        r && r.clear();
        for (var n = t.config.functionsToExclude, i = n.length; i--;) r.put(n[i], "")
    };
    t.functionShouldBeCollected = function (n, i) {
        return t.config.collection_mode == "full" ? !0 : (r.size() === 0 && t.initFunctionsToExclude(), r.containsKey(i) ? !1 : !0)
    };
    t.inspectJSFunctions = function () {
        t.dom_data.functions = [];
        t.recursiveGetAllFunctionNamesUnderElement("", window, 0)
    };
    t.handleSizeLimit = function () {
        var n = t.dom_data,
            s = t.config,
            u = s.function_list_size,
            i = n.functions;
        i.names.sort();
        var h = JSON.stringify(n);
        u < 0 && (u = 0);
        var c = 0;
        if (s.colllection_mode != "full" && h.length > u) {
            for (var e = i.names, o = e.toString(), l = h.length - JSON.stringify(e).length + 2, f = !1, r = e.length; !f;) c++ == 1e3 && (f = !0), lastComma = o.lastIndexOf(","), lastComma >= 0 && r > 0 ? (quotation_marks = r * 2, l + lastComma + quotation_marks > u ? (o = o.substring(0, lastComma - 1), r--) : f = !0) : f = !0;
            r > 1 ? (i.truncated = !0, i.names = i.names.slice(0, r - 1), n.functions.truncated = !0) : (t.emptyDomData(), n = t.dom_data, n.collection_status = DomDataCollection.Partial, n.functions.truncated = !0)
        }
    };
    t.inspectFrames = function () {
        t.countElements("iframe")
    };
    t.countElements = function (n) {
        var u = document.getElementsByTagName(n);
        t.dom_data.iFrames === undefined && (t.dom_data.iFrames = []);
        var r = t.dom_data.iFrames,
            f = r.length;
        for (i = 0; i < u.length; i++) r[f + i] = "" + u[i].src;
        r.sort()
    };
    t.inspectScripts = function () {
        var i = document.getElementsByTagName("script");
        t.dom_data.scripts = [];
        for (var n = 0; n < i.length; n++) t.dom_data.scripts[n] = i[n].text.length
    };
    t.collectFields = function (n) {
        var e = document.getElementsByTagName(n);
        t.dom_data.inputs === undefined && (t.dom_data.inputs = []);
        for (var i = t.dom_data.inputs, s = i.length, r = e.length; r--;) {
            var o = e[r],
                u = o.name,
                f = o.id;
            element_name = u && u.length > 0 ? u : f && f.length > 0 ? f : "NO_NAME";
            i[s + r] = element_name
        }
        i.sort()
    };
    t.inspectInputFields = function () {
        t.collectFields("input");
        t.collectFields("textarea");
        t.collectFields("select");
        t.collectFields("button")
    };
    loadJSON = function () {
        if (!window.JSON) {
            var i = document.getElementsByTagName("head")[0],
                n = document.createElement("script");
            n.type = "text/javascript";
            n.src = t.config.json_script;
            i.appendChild(n)
        }
    };
    t.emptyDomData();
    loadJSON()
}
DomDataCollection.Success = 0;
DomDataCollection.Fail = 1;
DomDataCollection.Partial = 2;
DomDataCollection.NotStarted = 3;

function IE_FingerPrint() {
    this.deviceprint_browser = function () {
        var n = navigator.userAgent.toLowerCase();
        return t = n + SEP + navigator.appVersion + SEP + navigator.platform, t += SEP + navigator.appMinorVersion + SEP + navigator.cpuClass + SEP + navigator.browserLanguage, t += SEP + ScriptEngineBuildVersion()
    };
    this.deviceprint_software = function () {
        var t = "",
            f = !0;
        try {
            document.body.addBehavior("#default#clientCaps");
            var u, o = n.length;
            for (i = 0; i < o; i++) {
                u = activeXDetect(n[i]);
                var e = r[i];
                u ? f === !0 ? (t += e + PAIR + u, f = !1) : t += SEP + e + PAIR + u : (t += "", f = !1)
            }
        } catch (s) {}
        return t
    };
    var r = ["abk", "wnt", "aol", "arb", "chs", "cht", "dht", "dhj", "dan", "dsh", "heb", "ie5", "icw", "ibe", "iec", "ieh", "iee", "jap", "krn", "lan", "swf", "shw", "msn", "wmp", "obp", "oex", "net", "pan", "thi", "tks", "uni", "vtc", "vnm", "mvm", "vbs", "wfd"],
        n = ["7790769C-0471-11D2-AF11-00C04FA35D02", "89820200-ECBD-11CF-8B85-00AA005B4340", "47F67D00-9E55-11D1-BAEF-00C04FC2D130", "76C19B38-F0C8-11CF-87CC-0020AFEECF20", "76C19B34-F0C8-11CF-87CC-0020AFEECF20", "76C19B33-F0C8-11CF-87CC-0020AFEECF20", "9381D8F2-0288-11D0-9501-00AA00B911A5", "4F216970-C90C-11D1-B5C7-0000F8051515", "283807B5-2C60-11D0-A31D-00AA00B92C03", "44BBA848-CC51-11CF-AAFA-00AA00B6015C", "76C19B36-F0C8-11CF-87CC-0020AFEECF20", "89820200-ECBD-11CF-8B85-00AA005B4383", "5A8D6EE0-3E18-11D0-821E-444553540000", "630B1DA0-B465-11D1-9948-00C04F98BBC9", "08B0E5C0-4FCB-11CF-AAA5-00401C608555", "45EA75A0-A269-11D1-B5BF-0000F8051515", "DE5AED00-A4BF-11D1-9948-00C04F98BBC9", "76C19B30-F0C8-11CF-87CC-0020AFEECF20", "76C19B31-F0C8-11CF-87CC-0020AFEECF20", "76C19B50-F0C8-11CF-87CC-0020AFEECF20", "D27CDB6E-AE6D-11CF-96B8-444553540000", "2A202491-F00D-11CF-87CC-0020AFEECF20", "5945C046-LE7D-LLDL-BC44-00C04FD912BE", "22D6F312-B0F6-11D0-94AB-0080C74C7E95", "3AF36230-A269-11D1-B5BF-0000F8051515", "44BBA840-CC51-11CF-AAFA-00AA00B6015C", "44BBA842-CC51-11CF-AAFA-00AA00B6015B", "76C19B32-F0C8-11CF-87CC-0020AFEECF20", "76C19B35-F0C8-11CF-87CC-0020AFEECF20", "CC2A9BA0-3BDD-11D0-821E-444553540000", "3BF42070-B3B1-11D1-B5C5-0000F8051515", "10072CEC-8CC1-11D1-986E-00A0C955B42F", "76C19B37-F0C8-11CF-87CC-0020AFEECF20", "08B0E5C0-4FCB-11CF-AAA5-00401C608500", "4F645220-306D-11D2-995D-00C04F98BBC9", "73FA19D0-2D75-11D2-995D-00C04F98BBC9"]
}
IE_FingerPrint.prototype = new FingerPrint;

function Mozilla_FingerPrint() {}
Mozilla_FingerPrint.prototype = new FingerPrint;

function Opera_FingerPrint() {}
Opera_FingerPrint.prototype = new FingerPrint;

function Timer() {
    this.startTime = (new Date).getTime()
}
Timer.prototype.start = function () {
    this.startTime = (new Date).getTime()
};
Timer.prototype.duration = function () {
    return (new Date).getTime() - this.startTime
};

function getRandomPort() {
    return Math.floor(Math.random() * 6e4 + 4e3)
}
var ProxyCollector = {};
ProxyCollector.internalIP = "127.0.0.1";
ProxyCollector.externalIP;
ProxyCollector.internalPingTime;
ProxyCollector.externalPingTime;
ProxyCollector.setInternalPingTime = function (n) {
    ProxyCollector.internalPingTime = n
};
ProxyCollector.setExternalPingTime = function (n) {
    ProxyCollector.externalPingTime = n
};
ProxyCollector.PROXY_DETECTION_TIMEOUT = 5e3;
ProxyCollector.TIMEOUT_CHECK_FREQUENCY = 1e3;
ProxyCollector.isTimedOut = function (n, t, i) {
    _timer = new Timer;
    t - _timer.duration() <= 0 && (typeof ProxyCollector.internalPingTime == "undefined" && new RegExp("internalPingTime").test(n) || typeof ProxyCollector.externalPingTime == "undefined" && new RegExp("externalPingTime").test(n)) ? (n.call(this, -1), i.abort()) : (typeof ProxyCollector.internalPingTime == "undefined" && new RegExp("internalPingTime").test(n) || typeof ProxyCollector.externalPingTime == "undefined" && new RegExp("externalPingTime").test(n)) && setTimeout(function () {
        ProxyCollector.isTimedOut(n, t - (_timer.duration() + ProxyCollector.TIMEOUT_CHECK_FREQUENCY), i)
    }, ProxyCollector.TIMEOUT_CHECK_FREQUENCY)
};
ProxyCollector.doAjax = function (n, t) {
    var u = document.location.protocol + "//" + n + ":" + getRandomPort() + "/NonExistentImage" + getRandomPort() + ".gif",
        i, r;
    if (window.XDomainRequest) {
        i = new window.XDomainRequest;
        r = new Timer;
        try {
            i.timeout = ProxyCollector.PROXY_DETECTION_TIMEOUT;
            i.ontimeout = function () {
                t.call(this, -1);
                i.abort()
            };
            i.onprogress = function () {
                t.call(this, r.duration());
                i.abort()
            };
            i.onerror = function () {
                t.call(this, r.duration());
                i.abort()
            };
            i.open("GET", u, !0);
            i.send()
        } catch (e) {
            ProxyCollector.doAjaxViaImage(t, u)
        }
    } else {
        i = new XMLHttpRequest;
        var f = "ontimeout" in i;
        r = new Timer;
        try {
            i.onreadystatechange = function () {
                i.readyState == 4 && (typeof ProxyCollector.internalPingTime == "undefined" && new RegExp("internalPingTime").test(t) || typeof ProxyCollector.externalPingTime == "undefined" && new RegExp("externalPingTime").test(t)) && t.call(this, r.duration())
            };
            i.timeout = ProxyCollector.PROXY_DETECTION_TIMEOUT;
            i.ontimeout = function () {
                t.call(this, -1);
                i.abort()
            };
            i.open("GET", u, !0);
            i.send();
            f || ProxyCollector.isTimedOut(t, ProxyCollector.PROXY_DETECTION_TIMEOUT - r.duration(), i)
        } catch (e) {
            ProxyCollector.doAjaxViaImage(t, u)
        }
    }
};
ProxyCollector.doAjaxViaImage = function (n, t) {
    var i = new Image,
        r = new Timer;
    i.onerror = function () {
        n.call(this, r.duration())
    };
    i.src = t
};
ProxyCollector.collect = function () {
    ProxyCollector.doAjax(ProxyCollector.externalIP, ProxyCollector.setExternalPingTime);
    typeof XDomainRequest == "object" ? ProxyCollector.externalPingTime || forceIE89Synchronicity() : ProxyCollector.doAjax(ProxyCollector.internalIP, ProxyCollector.setInternalPingTime)
};
forceIE89Synchronicity = function () {
    ProxyCollector.externalPingTime ? ProxyCollector.doAjax(ProxyCollector.internalIP, ProxyCollector.setInternalPingTime) : setTimeout(forceIE89Synchronicity, 100)
};
ProxyCollector.isValidIPAddress = function (n) {
    if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(n)) {
        var t = n.split(".");
        if (parseInt(parseFloat(t[0])) == 0) return !1;
        for (var i = 0; i < t.length; i++)
            if (parseInt(parseFloat(t[i])) > 255) return !1;
        return !0
    }
    return !1
};
ProxyCollector.initProxyCollection = function () {
    ProxyCollector.isValidIPAddress(ProxyCollector.externalIP) && ProxyCollector.isValidIPAddress(ProxyCollector.internalIP) && ProxyCollector.collect()
};

function BlackberryLocationCollector() {
    var i = this,
        e = null;
    this.getGeolocationWatchId = function () {
        return e
    };
    var t = null;
    this.getGeolocationLastPosition = function () {
        return t
    };
    var r = 4;
    this.getGeolocationStatusCode = function () {
        return r
    };
    var o = "";
    this.getGeolocationErrorMessage = function () {
        return o
    };
    var n = {
            aidMode: 2,
            timeout: 180,
            relevancy: 120,
            expiration: 48,
            alertDebug: !1
        },
        f = -1,
        u = 0;
    this.getInvokeCount = function () {
        return u
    };
    this.handleBlackBerryLocationTimeout = function () {
        f != -1 && (i.stopWatch(), r = 3, u === 0 && n.aidMode !== 0 && (u++, i.startLocationWatch()))
    };
    this.handlePosition = function () {
        clearTimeout(f);
        f = -1;
        var o = !1;
        if (blackberry.location.latitude === 0 && blackberry.location.longitude === 0) n.alertDebug && alert("Got empty position"), t === null && (r = 2);
        else {
            var e = blackberry.location.timestamp ? getTimestampInMillis(blackberry.location.timestamp) : (new Date).getTime();
            var s = (new Date).getTime();
            if (s - e <= n.expiration * 36e5)
                if (t === null || e > t.timestamp) {
                    var h = t === null ? 0 : t.timestamp;
                    n.alertDebug && alert("Saved new position. New timestamp: " + e + " Old: " + h);
                    t = {
                        timestamp: e,
                        coords: {
                            latitude: blackberry.location.latitude,
                            longitude: blackberry.location.longitude
                        }
                    };
                    r = 0
                } else n.alertDebug && alert("New position is not saved. New timestamp: " + e + " Old: " + t.timestamp);
            else n.alertDebug && alert("New position is not saved. It is expired: " + (s - e) * 36e5 + " hours old")
        }
        if (t !== null) {
            var s = (new Date).getTime();
            o = s - t.timestamp < n.relevancy * 1e3
        }
        i.stopWatch();
        n.alertDebug && alert("Relevant position? " + o);
        (u !== 0 || n.aidMode === 0) && o || (u++, i.startLocationWatch())
    };
    this.init = function (t, i, r, u) {
        t >= 0 && t <= 2 && (n.aidMode = t);
        i !== null && i >= 90 && i <= 300 && (n.timeout = i);
        r !== null && r >= 60 && r <= 240 && (n.relevancy = r);
        u !== null && u >= 24 && u <= 60 && (n.expiration = u)
    };
    this.startLocationWatch = function () {
        u === 0 ? blackberry.location.setAidMode(0) : blackberry.location.setAidMode(n.aidMode);
        var t = n.timeout * 1e3;
        f = setTimeout("geoLocator.handleBlackBerryLocationTimeout()", t);
        blackberry.location.onLocationUpdate(i.handlePosition);
        return blackberry.location.refreshLocation(), e = 1, !0
    };
    this.stopWatch = function () {
        try {
            blackberry.location.removeLocationUpdate(i.handlePosition)
        } catch (n) {}
        e = -2
    };
    this.generateGeolocationJSONStruct = function () {
        var n = null;
        if (t !== null) {
            var i = convertTimestampToGMT(t.timestamp);
            n = {
                GeoLocationInfo: [{
                    Status: r,
                    Longitude: t.coords.longitude,
                    Latitude: t.coords.latitude,
                    Timestamp: i
                }]
            }
        } else n = {
            GeoLocationInfo: [{
                Status: r
            }]
        };
        return JSON.stringify(n)
    }
}

function detectFields() {
    var u = document.getElementsByTagName("form"),
        e = u.length,
        n, f, t = [];
    t.push("url=" + window.location.href);
    for (var i = 0; i < e; i++) {
        t.push("form=" + u[i].name);
        n = u[i].getElementsByTagName("input");
        f = n.length;
        for (var r = 0; r < f; r++) n[r].type != "hidden" && t.push("input=" + n[r].name)
    }
    return t.join("|")
}
var SEP = "|",
    PAIR = "=",
    DEV = "~";

function FingerPrint() {
    var t = "3.4.1.0_1",
        n = new Hashtable;
    n.put("npnul32", "def");
    n.put("npqtplugin6", "qt6");
    n.put("npqtplugin5", "qt5");
    n.put("npqtplugin4", "qt4");
    n.put("npqtplugin3", "qt3");
    n.put("npqtplugin2", "qt2");
    n.put("npqtplugin", "qt1");
    n.put("nppdf32", "pdf");
    n.put("NPSWF32", "swf");
    n.put("NPJava11", "j11");
    n.put("NPJava12", "j12");
    n.put("NPJava13", "j13");
    n.put("NPJava32", "j32");
    n.put("NPJava14", "j14");
    n.put("npoji600", "j61");
    n.put("NPJava131_16", "j16");
    n.put("NPOFFICE", "mso");
    n.put("npdsplay", "wpm");
    n.put("npwmsdrm", "drm");
    n.put("npdrmv2", "drn");
    n.put("nprjplug", "rjl");
    n.put("nppl3260", "rpl");
    n.put("nprpjplug", "rpv");
    n.put("npchime", "chm");
    n.put("npCortona", "cor");
    n.put("np32dsw", "dsw");
    n.put("np32asw", "asw");
    this.deviceprint_version = function () {
        return t
    };
    this.deviceprint_browser = function () {
        var n = navigator.userAgent.toLowerCase();
        return n + SEP + navigator.appVersion + SEP + navigator.platform
    };
    this.deviceprint_software = function () {
        var u = "",
            r = !0,
            f = "",
            t = "",
            o = navigator.plugins,
            s = navigator.mimeTypes;
        if (o.length > 0) {
            var e = "",
                h = o.length;
            for (i = 0; i < h; i++) plugin = o[i], e = stripFullPath(plugin.filename, "Plugins", "."), r === !0 ? (t = n.containsKey(e), t ? (f += n.get(e), r = !1) : (f = "", r = !1)) : (t = n.containsKey(e), f += t ? SEP + n.get(e) : "");
            u = stripIllegalChars(f)
        } else if (s.length > 0)
            for (t = "", i = 0; i < s.length; i++) mimeType = s[i], r === !0 ? (t = n.containsKey(mimeType), t ? (u += n.get(mimeType) + PAIR + mimeType, r = !1) : (u += "unknown" + PAIR + mimeType, r = !1)) : (t = n.containsKey(mimeType), t ? u += SEP + n.get(mimeType) + PAIR + mimeType : f += "");
        return u
    };
    this.deviceprint_display = function () {
        var n = "";
        return self.screen && (n += screen.colorDepth + SEP + screen.width + SEP + screen.height + SEP + screen.availHeight), n
    };
    this.deviceprint_all_software = function () {
        var r = "",
            u = !0,
            f = navigator.plugins,
            e = f.length;
        if (e > 0) {
            var t = "",
                n = "";
            for (i = 0; i < e; i++) {
                var o = f[i];
                n = o.filename;
                n = stripFullPath(n, "Plugins", ".");
                u === !0 ? (t += n, u = !1) : t += SEP + n
            }
            r = stripIllegalChars(t)
        }
        return r
    };
    this.deviceprint_timezone = function () {
        var n = (new Date).getTimezoneOffset() / -60,
            t = new Date;
        return t.deviceprint_dst() && n--, n
    };
    Date.prototype.deviceprint_stdTimezoneOffset = function () {
        var n = new Date(this.getFullYear(), 0, 1),
            t = new Date(this.getFullYear(), 6, 1);
        return Math.max(n.getTimezoneOffset(), t.getTimezoneOffset())
    };
    Date.prototype.deviceprint_dst = function () {
        return this.getTimezoneOffset() < this.deviceprint_stdTimezoneOffset()
    };
    this.deviceprint_language = function () {
        var n, t = navigator.language,
            i = navigator.browserLanguage,
            r = navigator.systemLanguage,
            u = navigator.userLanguage;
        return n = typeof t != "undefined" ? "lang" + PAIR + t + SEP : typeof i != "undefined" ? "lang" + PAIR + i + SEP : "lang" + PAIR + "" + SEP, n += typeof r != "undefined" ? "syslang" + PAIR + r + SEP : "syslang" + PAIR + "" + SEP, n + (typeof u != "undefined" ? "userlang" + PAIR + u : "userlang" + PAIR + "")
    };
    this.deviceprint_java = function () {
        return navigator.javaEnabled() ? 1 : 0
    };
    this.deviceprint_cookie = function () {
        var n = navigator.cookieEnabled ? 1 : 0;
        return typeof navigator.cookieEnabled != "undefined" || n || (document.cookie = "testcookie", n = document.cookie.indexOf("testcookie") !== -1 ? 1 : 0), n
    };
    this.deviceprint_appName = function () {
        var n = navigator.appName;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_appCodeName = function () {
        var n = navigator.appCodeName;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_online = function () {
        var n = navigator.onLine;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_opsProfile = function () {
        var n = navigator.opsProfile;
        return typeof n != "undefined" && n !== null ? n : ""
    };
    this.deviceprint_userProfile = function () {
        var n = navigator.userProfile;
        return typeof n != "undefined" && n !== null ? n : ""
    };
    this.deviceprint_screen_availWidth = function () {
        var n = screen.availWidth;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_screen_pixelDepth = function () {
        var n = screen.pixelDepth;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_screen_bufferDepth = function () {
        var n = screen.bufferDepth;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_screen_deviceXDPI = function () {
        var n = screen.deviceXDPI;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_screen_deviceYDPI = function () {
        var n = screen.deviceYDPI;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_screen_logicalXDPI = function () {
        var n = screen.logicalXDPI;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_screen_logicalYDPI = function () {
        var n = screen.logicalYDPI;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_screen_fontSmoothingEnabled = function () {
        var n = screen.fontSmoothingEnabled;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_screen_updateInterval = function () {
        var n = screen.updateInterval;
        return typeof n != "undefined" ? n : ""
    };
    this.deviceprint_ping_in = function () {
        return ProxyCollector && ProxyCollector.internalPingTime ? ProxyCollector.internalPingTime : ""
    };
    this.deviceprint_ping_ex = function () {
        return ProxyCollector && ProxyCollector.externalPingTime ? ProxyCollector.externalPingTime : ""
    }
}

function urlEncode(n) {
    return encodeURIComponent(n).replace(/\~/g, "%7E").replace(/\!/g, "%21").replace(/\*/g, "%2A").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\'/g, "%27").replace(/\-/g, "%2D").replace(/\_/g, "%5F").replace(/\./g, "%2E")
}

function encode_deviceprint() {
    var n = add_deviceprint();
    return urlEncode(n)
}

function decode_deviceprint() {
    var n = encode_deviceprint;
    return decodeURIComponent(urlEncode(n))
}

function post_deviceprint() {
    return document.forms[0].pm_fp.value = encode_deviceprint(), !0
}

function post_fingerprints(n) {
    n.deviceprint.value = encode_deviceprint()
}

function add_deviceprint() {
    BrowserDetect.init();
    var n;
    switch (BrowserDetect.browser) {
        case "Explorer":
            n = new IE_FingerPrint;
            break;
        case "Firefox":
            n = new Mozilla_FingerPrint;
            break;
        case "Opera":
            n = new Opera_FingerPrint;
            break;
        default:
            n = new FingerPrint
    }
    var t = "version=" + n.deviceprint_version() + "&pm_fpua=" + n.deviceprint_browser() + "&pm_fpsc=" + n.deviceprint_display() + "&pm_fpsw=" + n.deviceprint_software() + "&pm_fptz=" + n.deviceprint_timezone() + "&pm_fpln=" + n.deviceprint_language() + "&pm_fpjv=" + n.deviceprint_java() + "&pm_fpco=" + n.deviceprint_cookie();
    return t = t + "&pm_fpasw=" + n.deviceprint_all_software(), t = t + "&pm_fpan=" + n.deviceprint_appName() + "&pm_fpacn=" + n.deviceprint_appCodeName() + "&pm_fpol=" + n.deviceprint_online() + "&pm_fposp=" + n.deviceprint_opsProfile() + "&pm_fpup=" + n.deviceprint_userProfile() + "&pm_fpsaw=" + n.deviceprint_screen_availWidth() + "&pm_fpspd=" + n.deviceprint_screen_pixelDepth() + "&pm_fpsbd=" + n.deviceprint_screen_bufferDepth() + "&pm_fpsdx=" + n.deviceprint_screen_deviceXDPI() + "&pm_fpsdy=" + n.deviceprint_screen_deviceYDPI() + "&pm_fpslx=" + n.deviceprint_screen_logicalXDPI() + "&pm_fpsly=" + n.deviceprint_screen_logicalYDPI() + "&pm_fpsfse=" + n.deviceprint_screen_fontSmoothingEnabled() + "&pm_fpsui=" + n.deviceprint_screen_updateInterval(), t = t + "&pm_os=" + BrowserDetect.OS + "&pm_brmjv=" + parseInt(BrowserDetect.version, 10) + "&pm_br=" + BrowserDetect.browser, t + "&pm_inpt=" + n.deviceprint_ping_in() + "&pm_expt=" + n.deviceprint_ping_ex()
}

function form_add_data(n, t, i) {
    return n && n.length > 0 ? n += "&" : n = "", n + (t + "=" + escape(i.toString()))
}

function form_add_deviceprint(n, t, i) {
    return form_add_data(n, t + "d", i)
}
var HTML5 = "HTML5",
    BLACKBERRY = "blackberry",
    UNDEFINED = "undefined",
    GEO_LOCATION_DEFAULT_STRUCT = '{"GeoLocationInfo":[{"Status":4}]}',
    geoLocator = null,
    geoLocatorStatus = !1;

function detectDeviceCollectionAPIMode() {
    return typeof navigator.geolocation != UNDEFINED ? HTML5 : typeof blackberry != UNDEFINED && blackberry.location.GPSSupported ? BLACKBERRY : UNDEFINED
}

function init(n, t, i, r, u) {
    var f = detectDeviceCollectionAPIMode();
    return f == HTML5 ? (geoLocator = new HTML5LocationCollector, geoLocator.init(n, t, i, r), !0) : f == BLACKBERRY ? (geoLocator = new BlackberryLocationCollector, geoLocator.init(u, t, i, r), !0) : !1
}

function startCollection(n, t, i, r, u) {
    return geoLocatorStatus = init(n, t, i, r, u), geoLocatorStatus ? geoLocator.startLocationWatch() : !1
}

function stopCollection() {
    geoLocatorStatus && geoLocator.stopWatch()
}

function getGeolocationStruct() {
    return geoLocatorStatus ? geoLocator.generateGeolocationJSONStruct() : GEO_LOCATION_DEFAULT_STRUCT
}

function HTML5LocationCollector() {
    var f = this,
        r = -1;
    this.getGeolocationWatchId = function () {
        return r
    };
    var n = null;
    this.getGeolocationLastPosition = function () {
        return n
    };
    var i = 4;
    this.getGeolocationStatusCode = function () {
        return i
    };
    var u = "";
    this.getGeolocationErrorMessage = function () {
        return u
    };
    var t = {
        accuracy: 100,
        timeout: 180,
        relevancy: 120,
        expiration: 48
    };
    this.getGeolocationConfig = function () {
        return t
    };
    this.startLocationWatch = function () {
        var n = {
            enableHighAccuracy: !0,
            timeout: t.timeout * 1e3,
            maximumAge: t.expiration
        };
        return navigator.geolocation ? (r = navigator.geolocation.watchPosition(this.handlePosition, this.handleError, n), !0) : (i = 4, !1)
    };
    this.init = function (n, i, r, u) {
        n !== null && n >= 0 && n <= 200 && (t.accuracy = n);
        i !== null && i >= 90 && i <= 300 && (t.timeout = i);
        r !== null && r >= 60 && r <= 240 && (t.relevancy = r);
        u !== null && u >= 24 && u <= 60 && (t.expiration = u)
    };
    this.handlePosition = function (r) {
        var u = (new Date).getTime(),
            e = getTimestampInMillis(r.timestamp);
        if (u - e <= t.expiration * 36e5 && (n === null || r.timestamp > n.timestamp || r.coords.accuracy < n.coords.accuracy) && (n = r, i = 0), n !== null) {
            var o = u - n.timestamp;
            o <= t.relevancy * 1e3 && n.coords.accuracy <= t.accuracy && f.stopWatch()
        }
    };
    this.generateGeolocationJSONStruct = function () {
        var t = null;
        if (n !== null) {
            var r = convertTimestampToGMT(n.timestamp);
            t = {
                GeoLocationInfo: [{
                    Status: i,
                    Longitude: n.coords.longitude,
                    Latitude: n.coords.latitude,
                    Altitude: Math.round(n.coords.altitude),
                    HorizontalAccuracy: Math.round(n.coords.accuracy),
                    AltitudeAccuracy: Math.round(n.coords.altitudeAccuracy),
                    Heading: Math.round(n.coords.heading),
                    Speed: Math.round(n.coords.speed),
                    Timestamp: r
                }]
            }
        } else t = {
            GeoLocationInfo: [{
                Status: i
            }]
        };
        return JSON.stringify(t)
    };
    this.handleError = function (n) {
        switch (n.code) {
            case n.TIMEOUT:
                f.stopWatch();
                i = 3;
                break;
            case n.POSITION_UNAVAILABLE:
                i = 2;
                u = n.message;
                break;
            case n.PERMISSION_DENIED:
                i = 1;
                break;
            case n.UNKNOWN_ERROR:
                i = 2;
                u = n.message
        }
    };
    this.stopWatch = function () {
        navigator.geolocation.clearWatch(r);
        r = -2
    }
}
var UIEventCollector = function () {
    var t = null,
        r = null,
        i = null,
        u = null,
        o = ["output_size_limit"];
    s();
    a();

    function s(n) {
        if (u = {
                output_size_limit: 1024,
                collection_mode: "partial"
            }, n)
            for (p in n)
                if (!(p._config === undefined)) {
                    for (var f = o.length - 1; f >= 0; f--)
                        if (o[f] == p) {
                            found = !0;
                            continue
                        }! 1 || (u[p] = n[p])
                } i = !1;
        r = d();
        t = {
            elements: new UIElementList,
            events: [],
            collection_status: 0,
            toString: function () {
                return "RecordedData: {elements: " + this.elements + ", events: " + this.events + "}"
            }
        };
        a()
    }

    function b() {
        for (var t = k(), n = 0, i = t.length; n < i; n++) f(t[n])
    }

    function k() {
        for (var t = [], i = document.getElementsByTagName("input"), n = 0, u = i.length; n < u; n++) {
            var r = i[n];
            h(r) && t.push(r)
        }
        return t
    }

    function h(n) {
        if (n.tagName && n.tagName.toLowerCase() == "input") {
            var t = n.getAttribute("type");
            if (t == "text" || t == "checkbox" || t == "checkbox") return !0
        }
        return !1
    }

    function d() {
        var t = document.createEvent ? document.createEvent("Event") : document.createEventObject(),
            n = t.timeStamp || new Date;
        return n = new Date(n), n.getYear() > 2100 && (n = new Date(n / 1e3)), n.getTime()
    }

    function f(n) {
        var i = null,
            r = t.elements,
            f = r.size(),
            u = w(n);
        return t.elements.containsKey(u) ? i = r.get(u) : (i = new InteractionElement, i.id(u), i.type(y(n)), i.length(n.value ? n.value.length : 0), r.put(i)), i
    }

    function e(n) {
        var u = n || window.event,
            e = l(u);
        if (h(e)) {
            var o = f(e);
            o.incrementEventCount();
            var i = new UIEvent;
            i.index(o.index());
            i.type(v(u));
            var s = nt(u);
            i.offset(s - r);
            t.events.push(i)
        }
        return !0
    }

    function c(n) {
        var t = n || window.event;
        if (g(t)) {
            var i = {
                target: l(t),
                type: "paste"
            };
            return e(i)
        }
        return e(t)
    }

    function g(n) {
        if (n.type == "keydown") {
            var t = n.which || n.charCode || n.keyCode,
                i = typeof KeyboardEvent != "undefined" && t == KeyboardEvent.DOM_VK_V || t == 118 || t == 86;
            if (i && (n.ctrlKey || n.metaKey)) return !0
        }
        return !1
    }

    function l(n) {
        return n.target ? n.target : n.srcElement
    }

    function nt(n) {
        var t;
        return n.timeStamp && n.timeStamp !== 0 ? (t = n.timeStamp, new Date(t).getYear() > 2100 && (t = t / 1e3)) : t = (new Date).getTime(), t
    }

    function n() {}

    function tt() {
        b();
        for (var r = t.elements, i = r.size(); i >= 1; i--) {
            var u = r.getByIndex(i),
                f = u.id(),
                n = document.getElementById(f);
            if (!n) {
                var e = document.getElementsByName(f);
                e.length > 0 && (n = e[0])
            }
            n && n.value && u.length(n.value.length)
        }
    }

    function a() {
        var t = e,
            n = document;
        n.addEventListener ? (n.addEventListener("keydown", c, !1), n.addEventListener("paste", t, !1), n.addEventListener("focus", t, !0), n.addEventListener("blur", t, !0)) : n.attachEvent && (n.onkeydown = c, n.onfocusin = t, n.onfocusout = t)
    }

    function v(n) {
        return n.type == "keydown" ? UIEvent.KeyDown : n.type == "submit" ? UIEvent.Submit : n.type == "paste" ? UIEvent.Paste : n.type == "focus" || n.type == "focusin" ? UIEvent.Focus : n.type == "blur" || n.type == "focusout" ? UIEvent.Blur : UIEvent.Unknown
    }

    function it(n) {
        return n == UIEvent.KeyDown ? "keydown" : n == UIEvent.Submit ? "submit" : n == UIEvent.Focus ? "focus" : n == UIEvent.Blur ? "blur" : n == UIEvent.Paste ? "paste" : "unknown"
    }

    function y(n) {
        return n.nodeName + (n.type ? ":" + n.type : "")
    }

    function w(n) {
        return n.id ? n.id : n.name ? n.name : n.nodeName
    }
    return {
        addElement: function (n) {
            return f(n)
        },
        getEventType: function (n) {
            return v(n)
        },
        getEventCode: function (n) {
            return it(n)
        },
        getRecordedData: function () {
            return t
        },
        getElementType: function (n) {
            return y(n)
        },
        getElementId: function (n) {
            return w(n)
        },
        initEventCollection: function (n) {
            s(n)
        },
        getConfig: function () {
            return u
        },
        serialize: function () {
            tt();
            for (var l = this.getRecordedData(), s = l.elements, h = [], a = 0; a < s.length; a++) h[a] = !1;
            var k = l.events,
                ft = l.collection_status,
                d = this.getConfig().collection_mode == "partial",
                g = this.getConfig().output_size_limit,
                nt = k.length,
                v = "@",
                y = ";",
                p = ",",
                f = 2 * v.length,
                it = "" + r + p + ("" + ft);
            f += 1;
            f += p.length;
            f += it.length;
            var t = "";
            n("serializing elements ");
            for (var w = s.size(); w > 0; w--) {
                var o = s.getByIndex(w),
                    e = o.serialize() + y;
                if (n("elementsStr.length: " + t.length), d && f + t.length + e.length > g) {
                    i = !0;
                    break
                }
                var et = o.type().match("INPUT:checkbox");
                et == null && o.length() > 0 && o.eventCount() == 0 && (n("collecting element without input: " + o), t = e + t)
            }
            f += t.length;
            var u = "";
            for (n("serializing events "); nt--;) {
                var b = k[nt],
                    c = b.index(),
                    rt = b.serialize() + y,
                    e = s.getByIndex(c).serialize() + y,
                    ut = rt.length;
                if (h[c] || (ut += e.length), n("eventsStr.length: " + u.length), d && f + u.length + ut > g) {
                    i = !0;
                    break
                }
                n("collecting event: " + b);
                h[c] || (t = e + t, f += e.length, n("also adding element event: " + e));
                h[c] = !0;
                u = rt + u
            }
            t.length > 0 && (t = t.substring(0, t.length - 1));
            u.length > 0 && (u = u.substring(0, u.length - 1));
            var ot = i ? 1 : 0;
            return t + v + u + v + ot + p + it
        }
    }
}();

function UIEvent() {
    var n = this === window ? {} : this;
    n.index = function () {
        if (arguments.length === 0) return n._index;
        n._index = arguments[0]
    };
    n.offset = function () {
        if (arguments.length === 0) return n._offset;
        n._offset = arguments[0]
    };
    n.type = function () {
        if (arguments.length === 0) return n._type;
        n._type = arguments[0]
    };
    n.serialize = function () {
        var t = ",";
        return n.index() + t + n.type() + t + "0"
    };
    n.toString = function () {
        return "UIEvent: [index: " + n.index() + ", type: " + n.type() + ", offset: " + n.offset() + "]"
    }
}
UIEvent.Unknown = 0;
UIEvent.KeyDown = 1;
UIEvent.Submit = 2;
UIEvent.Focus = 3;
UIEvent.Blur = 4;
UIEvent.Paste = 5;

function InteractionElement() {
    var n = this === window ? {} : this;
    n._eventCount = 0;
    n.id = function () {
        if (arguments.length === 0) return n._id;
        n._id = arguments[0]
    };
    n.index = function () {
        if (arguments.length === 0) return n._index;
        n._index = arguments[0]
    };
    n.length = function () {
        if (arguments.length === 0) return n._length;
        n._length = arguments[0]
    };
    n.type = function () {
        if (arguments.length === 0) return n._type;
        n._type = arguments[0]
    };
    n.incrementEventCount = function () {
        n._eventCount++
    };
    n.eventCount = function () {
        return n._eventCount
    };
    n.serialize = function () {
        var t = ",",
            i = n.index();
        return n.index() + t + i + t + n.type() + t + n.length()
    };
    n.toString = function () {
        return "InteractionElement: [id: " + n.id() + ", index: " + n.index() + ", length: " + n.length() + ", type: " + n.type() + "]"
    }
}

function UIElementList() {
    var t = this === window ? {} : this,
        n = new Hashtable,
        i = new Hashtable;
    t.get = function (t) {
        return n.get(t)
    };
    t.getByIndex = function (n) {
        return i.get(n)
    };
    t.containsKey = function (t) {
        return n.containsKey(t)
    };
    t.indexByKey = function (n) {
        return get(n).index()
    };
    t.size = function () {
        return n.size()
    };
    t.put = function (t) {
        var r = t.id();
        if (!n.containsKey(r)) {
            n.put(r, t);
            var u = n.size();
            t.index(u);
            i.put(u, t)
        }
    };
    t.toString = function () {
        return "[size: " + n.size() + ", names: [" + n + "], indexes: [" + i + "]]"
    }
}

function activeXDetect(n) {
    var t = null;
    try {
        t = document.body.getComponentVersion("{" + n + "}", "ComponentID")
    } catch (i) {}
    return t !== null ? t : !1
}

function stripIllegalChars(n) {
    t = "";
    n = n.toLowerCase();
    for (var u = n.length, r = 0; r < u; r++) {
        var i = n.charAt(r);
        i != "\n" && i != "/" && i != "\\" ? t += i : i == "\n" && (t += "n")
    }
    return t
}

function stripFullPath(n, t, i) {
    var u = t,
        o = i,
        r = n,
        f = r.lastIndexOf(u);
    f >= 0 && (filenameLen = r.length, r = r.substring(f + u.length, filenameLen));
    var e = r.indexOf(o);
    return e >= 0 && (r = r.slice(0, e)), r
}
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "an unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS"
    },
    searchString: function (n) {
        for (var f = n.length, i = 0; i < f; i++) {
            var t = n[i],
                u = t.string,
                e = t.prop,
                r = t.identity;
            if (this.versionSearchString = t.versionSearch || r, u) {
                if (u.toLowerCase().indexOf(t.subString.toLowerCase()) !== -1) return r
            } else if (e) return r
        }
    },
    searchVersion: function (n) {
        var i = n.toLowerCase().indexOf(this.versionSearchString.toLowerCase());
        if (i !== -1) {
            var t = n.substring(i + this.versionSearchString.length);
            return (t.indexOf(" ") === 0 || t.indexOf("/") === 0) && (t = t.substring(1)), parseFloat(t)
        }
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.userAgent.toLowerCase(),
        subString: "opera",
        identity: "Opera",
        versionSearch: "version"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        string: navigator.userAgent,
        subString: "mobile safari",
        identity: "Mobile Safari",
        versionSearch: "mobile safari"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, {
        string: navigator.userAgent.toLocaleLowerCase(),
        subString: "blackberry",
        identity: "BlackBerry",
        versionSearch: "0/"
    }, {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.userAgent,
        subString: "BlackBerry",
        identity: "BlackBerry"
    }, {
        string: navigator.userAgent.toLowerCase(),
        subString: "android",
        identity: "Android"
    }, {
        string: navigator.userAgent,
        subString: "Symbian",
        identity: "Symbian"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }, {
        string: navigator.userAgent,
        subString: "Windows CE",
        identity: "Windows CE"
    }, {
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }]
};

function convertTimestampToGMT(n) {
    var t = n;
    return n instanceof Date || (t = new Date(n)), offsetFromGmt = t.getTimezoneOffset() * 6e4, t.getTime() + offsetFromGmt
}

function getTimestampInMillis(n) {
    var t = n;
    return n instanceof Date && (t = n.getTime()), t
}

function debug() {}
(function (n, t) {
    var u = 0,
        f = /^ui-id-\d+$/;
    n.ui = n.ui || {};
    n.extend(n.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    n.fn.extend({
        focus: function (t) {
            return function (i, r) {
                return typeof i == "number" ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        n(t).focus();
                        r && r.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(n.fn.focus),
        scrollParent: function () {
            var t;
            return t = n.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(n.css(this, "position")) && /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(n.css(this, "overflow") + n.css(this, "overflow-y") + n.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? n(document) : t
        },
        zIndex: function (i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var r = n(this[0]), u, f; r.length && r[0] !== document;) {
                    if (u = r.css("position"), (u === "absolute" || u === "relative" || u === "fixed") && (f = parseInt(r.css("zIndex"), 10), !isNaN(f) && f !== 0)) return f;
                    r = r.parent()
                }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++u)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                f.test(this.id) && n(this).removeAttr("id")
            })
        }
    });

    function i(t, i) {
        var u, f, e, o = t.nodeName.toLowerCase();
        return "area" === o ? (u = t.parentNode, f = u.name, !t.href || !f || u.nodeName.toLowerCase() !== "map") ? !1 : (e = n("img[usemap=#" + f + "]")[0], !!e && r(e)) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && r(t)
    }

    function r(t) {
        return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function () {
            return n.css(this, "visibility") === "hidden"
        }).length
    }
    n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function (t) {
            return function (i) {
                return !!n.data(i, t)
            }
        }) : function (t, i, r) {
            return !!n.data(t, r[3])
        },
        focusable: function (t) {
            return i(t, !isNaN(n.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var r = n.attr(t, "tabindex"),
                u = isNaN(r);
            return (u || r >= 0) && i(t, !u)
        }
    });
    n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function (i, r) {
        var o = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            u = r.toLowerCase(),
            f = {
                innerWidth: n.fn.innerWidth,
                innerHeight: n.fn.innerHeight,
                outerWidth: n.fn.outerWidth,
                outerHeight: n.fn.outerHeight
            };

        function e(t, i, r, u) {
            return n.each(o, function () {
                i -= parseFloat(n.css(t, "padding" + this)) || 0;
                r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
            }), i
        }
        n.fn["inner" + r] = function (i) {
            return i === t ? f["inner" + r].call(this) : this.each(function () {
                n(this).css(u, e(this, i) + "px")
            })
        };
        n.fn["outer" + r] = function (t, i) {
            return typeof t != "number" ? f["outer" + r].call(this, t) : this.each(function () {
                n(this).css(u, e(this, t, !0, i) + "px")
            })
        }
    });
    n.fn.addBack || (n.fn.addBack = function (n) {
        return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
    });
    n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
        }
    }(n.fn.removeData));
    n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    n.support.selectstart = "onselectstart" in document.createElement("div");
    n.fn.extend({
        disableSelection: function () {
            return this.bind((n.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (n) {
                n.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    });
    n.extend(n.ui, {
        plugin: {
            add: function (t, i, r) {
                var u, f = n.ui[t].prototype;
                for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
            },
            call: function (n, t, i) {
                var r, u = n.plugins[t];
                if (u && n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11)
                    for (r = 0; r < u.length; r++) n.options[u[r][0]] && u[r][1].apply(n.element, i)
            }
        },
        hasScroll: function (t, i) {
            if (n(t).css("overflow") === "hidden") return !1;
            var r = i && i === "left" ? "scrollLeft" : "scrollTop",
                u = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
        }
    })
})(jQuery);
(function (n, t) {
    n.extend(n.ui, {
        datepicker: {
            version: "1.10.4"
        }
    });
    var i = "datepicker",
        u;

    function f() {
        this._curInst = null;
        this._keyEvent = !1;
        this._disabledInputs = [];
        this._datepickerShowing = !1;
        this._inDialog = !1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        n.extend(this._defaults, this.regional[""]);
        this.dpDiv = e(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
    }
    n.extend(f.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (n) {
            return r(this._defaults, n || {}), this
        },
        _attachDatepicker: function (t, i) {
            var r, f, u;
            r = t.nodeName.toLowerCase();
            f = r === "div" || r === "span";
            t.id || (this.uuid += 1, t.id = "dp" + this.uuid);
            u = this._newInst(n(t), f);
            u.settings = n.extend({}, i || {});
            r === "input" ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
        },
        _newInst: function (t, i) {
            var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: r,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? e(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, r) {
            var u = n(t);
            (r.append = n([]), r.trigger = n([]), u.hasClass(this.markerClassName)) || (this._attachments(u, r), u.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), n.data(t, i, r), r.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, i) {
            var u, r, f, e = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove();
            e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append));
            t.unbind("focus", this._showDatepicker);
            i.trigger && i.trigger.remove();
            u = this._get(i, "showOn");
            (u === "focus" || u === "both") && t.focus(this._showDatepicker);
            (u === "button" || u === "both") && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                src: f,
                alt: r,
                title: r
            }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                src: f,
                alt: r,
                title: r
            }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function (n) {
            if (this._get(n, "autoSize") && !n.inline) {
                var r, u, f, t, i = new Date(2009, 11, 20),
                    e = this._get(n, "dateFormat");
                e.match(/[DM]/) && (r = function (n) {
                    for (u = 0, f = 0, t = 0; t < n.length; t++) n[t].length > u && (u = n[t].length, f = t);
                    return f
                }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
                n.input.attr("size", this._formatDate(n, i).length)
            }
        },
        _inlineDatepicker: function (t, r) {
            var u = n(t);
            u.hasClass(this.markerClassName) || (u.addClass(this.markerClassName).append(r.dpDiv), n.data(t, i, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, u, f, e, o) {
            var h, c, l, a, v, s = this._dialogInst;
            return s || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), s = this._dialogInst = this._newInst(this._dialogInput, !1), s.settings = {}, n.data(this._dialogInput[0], i, s)), r(s.settings, e || {}), u = u && u.constructor === Date ? this._formatDate(s, u) : u, this._dialogInput.val(u), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, l = document.documentElement.clientHeight, a = document.documentElement.scrollLeft || document.body.scrollLeft, v = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + a, l / 2 - 150 + v]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), s.settings.onSelect = f, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], i, s), this
        },
        _destroyDatepicker: function (t) {
            var r, u = n(t),
                f = n.data(t, i);
            u.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), n.removeData(t, i), r === "input" ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && u.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function (t) {
            var r, u, f = n(t),
                e = n.data(t, i);
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r === "input" ? (t.disabled = !1, e.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : (r === "div" || r === "span") && (u = f.children("." + this._inlineClass), u.children().removeClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function (n) {
                return n === t ? null : n
            }))
        },
        _disableDatepicker: function (t) {
            var r, u, f = n(t),
                e = n.data(t, i);
            f.hasClass(this.markerClassName) && (r = t.nodeName.toLowerCase(), r === "input" ? (t.disabled = !0, e.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : (r === "div" || r === "span") && (u = f.children("." + this._inlineClass), u.children().addClass("ui-state-disabled"), u.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function (n) {
                return n === t ? null : n
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function (n) {
            if (!n) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === n) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return n.data(t, i)
            } catch (r) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function (i, u, f) {
            var o, c, s, h, e = this._getInst(i);
            if (arguments.length === 2 && typeof u == "string") return u === "defaults" ? n.extend({}, n.datepicker._defaults) : e ? u === "all" ? n.extend({}, e.settings) : this._get(e, u) : null;
            o = u || {};
            typeof u == "string" && (o = {}, o[u] = f);
            e && (this._curInst === e && this._hideDatepicker(), c = this._getDateDatepicker(i, !0), s = this._getMinMaxDate(e, "min"), h = this._getMinMaxDate(e, "max"), r(e.settings, o), s !== null && o.dateFormat !== t && o.minDate === t && (e.settings.minDate = this._formatDate(e, s)), h !== null && o.dateFormat !== t && o.maxDate === t && (e.settings.maxDate = this._formatDate(e, h)), "disabled" in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(n(i), e), this._autoSize(e), this._setDate(e, c), this._updateAlternate(e), this._updateDatepicker(e))
        },
        _changeDatepicker: function (n, t, i) {
            this._optionDatepicker(n, t, i)
        },
        _refreshDatepicker: function (n) {
            var t = this._getInst(n);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (n, t) {
            var i = this._getInst(n);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (n, t) {
            var i = this._getInst(n);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var u, e, f, i = n.datepicker._getInst(t.target),
                r = !0,
                o = i.dpDiv.is(".ui-datepicker-rtl");
            if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    n.datepicker._hideDatepicker();
                    r = !1;
                    break;
                case 13:
                    return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
                case 27:
                    n.datepicker._hideDatepicker();
                    break;
                case 33:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 34:
                    n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                    r = t.ctrlKey || t.metaKey;
                    t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                    r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else t.keyCode === 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var i, r, u = n.datepicker._getInst(t.target);
            if (n.datepicker._get(u, "constrainInput")) return i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !i || i.indexOf(r) > -1
        },
        _doKeyUp: function (t) {
            var r, i = n.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal) try {
                r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
            } catch (u) {}
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                var i, o, s, u, f, e, h;
                (i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {}, s !== !1) && (r(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), u = !1, n(t).parents().each(function () {
                    return u |= n(this).css("position") === "fixed", !u
                }), f = {
                    left: n.datepicker._pos[0],
                    top: n.datepicker._pos[1]
                }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, u), i.dpDiv.css({
                    position: n.datepicker._inDialog && n.blockUI ? "static" : u ? "fixed" : "absolute",
                    display: "none",
                    left: f.left + "px",
                    top: f.top + "px"
                }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.zIndex(n(t).zIndex() + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), n.datepicker._shouldFocusInput(i) && i.input.focus(), n.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4;
            u = t;
            t.dpDiv.empty().append(this._generateHTML(t));
            this._attachHandlers(t);
            t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, r = this._getNumberOfMonths(t),
                f = r[1];
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            f > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
            t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            t === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(t) && t.input.focus();
            t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml);
                i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (n) {
            return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
        },
        _checkOffset: function (t, i, r) {
            var u = t.dpDiv.outerWidth(),
                f = t.dpDiv.outerHeight(),
                h = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
                s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
        },
        _findPos: function (t) {
            for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && (t.type === "hidden" || t.nodeType !== 1 || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"];
            return i = n(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (t) {
            var u, e, f, o, r = this._curInst;
            r && (!t || r === n.data(t, i)) && this._datepickerShowing && (u = this._get(r, "showAnim"), e = this._get(r, "duration"), f = function () {
                n.datepicker._tidyDialog(r)
            }, n.effects && (n.effects.effect[u] || n.effects[u]) ? r.dpDiv.hide(u, n.datepicker._get(r, "showOptions"), e, f) : r.dpDiv[u === "slideDown" ? "slideUp" : u === "fadeIn" ? "fadeOut" : "hide"](u ? e : null, f), u || f(), this._datepickerShowing = !1, o = this._get(r, "onClose"), o && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (n) {
            n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (n.datepicker._curInst) {
                var i = n(t.target),
                    r = n.datepicker._getInst(i[0]);
                (i[0].id === n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length !== 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, i, r) {
            var f = n(t),
                u = this._getInst(f[0]);
            this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r === "M" ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
        },
        _gotoToday: function (t) {
            var r, u = n(t),
                i = this._getInst(u[0]);
            this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
            this._notifyChange(i);
            this._adjustDate(u)
        },
        _selectMonthYear: function (t, i, r) {
            var f = n(t),
                u = this._getInst(f[0]);
            u["selected" + (r === "M" ? "Month" : "Year")] = u["draw" + (r === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
            this._notifyChange(u);
            this._adjustDate(f)
        },
        _selectDay: function (t, i, r, u) {
            var f, e = n(t);
            n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        },
        _clearDate: function (t) {
            var i = n(t);
            this._selectDate(i, "")
        },
        _selectDate: function (t, i) {
            var u, f = n(t),
                r = this._getInst(f[0]);
            i = i != null ? i : this._formatDate(r);
            r.input && r.input.val(i);
            this._updateAlternate(r);
            u = this._get(r, "onSelect");
            u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
            r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var i, r, u, f = this._get(t, "altField");
            f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function () {
                n(this).val(u)
            }))
        },
        noWeekends: function (n) {
            var t = n.getDay();
            return [t > 0 && t < 6, ""]
        },
        iso8601Week: function (n) {
            var i, t = new Date(n.getTime());
            return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function (t, i, r) {
            if (t == null || i == null) throw "Invalid arguments";
            if (i = typeof i == "object" ? i.toString() : i + "", i === "") return null;
            for (var a, v, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = typeof y != "string" ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, u, l = function (n) {
                    var i = o + 1 < t.length && t.charAt(o + 1) === n;
                    return i && o++, i
                }, c = function (n) {
                    var r = l(n),
                        u = n === "@" ? 14 : n === "!" ? 20 : n === "y" && r ? 4 : n === "o" ? 3 : 2,
                        e = new RegExp("^\\d{1," + u + "}"),
                        t = i.substring(f).match(e);
                    if (!t) throw "Missing number at position " + f;
                    return f += t[0].length, parseInt(t[0], 10)
                }, k = function (t, r, u) {
                    var e = -1,
                        o = n.map(l(t) ? u : r, function (n, t) {
                            return [[t, n]]
                        }).sort(function (n, t) {
                            return -(n[1].length - t[1].length)
                        });
                    if (n.each(o, function (n, t) {
                            var r = t[1];
                            if (i.substr(f, r.length).toLowerCase() === r.toLowerCase()) return e = t[0], f += r.length, !1
                        }), e !== -1) return e + 1;
                    throw "Unknown name at position " + f;
                }, b = function () {
                    if (i.charAt(f) !== t.charAt(o)) throw "Unexpected literal at position " + f;
                    f++
                }, o = 0; o < t.length; o++)
                if (w) t.charAt(o) !== "'" || l("'") ? b() : w = !1;
                else switch (t.charAt(o)) {
                    case "d":
                        h = c("d");
                        break;
                    case "D":
                        k("D", g, nt);
                        break;
                    case "o":
                        p = c("o");
                        break;
                    case "m":
                        s = c("m");
                        break;
                    case "M":
                        s = k("M", tt, it);
                        break;
                    case "y":
                        e = c("y");
                        break;
                    case "@":
                        u = new Date(c("@"));
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "!":
                        u = new Date((c("!") - this._ticksTo1970) / 1e4);
                        e = u.getFullYear();
                        s = u.getMonth() + 1;
                        h = u.getDate();
                        break;
                    case "'":
                        l("'") ? b() : w = !0;
                        break;
                    default:
                        b()
                }
            if (f < i.length && (v = i.substr(f), !/^\s+/.test(v))) throw "Extra/unparsed characters found in date: " + v;
            if (e === -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= d ? 0 : -100)), p > -1) {
                s = 1;
                h = p;
                do {
                    if (a = this._getDaysInMonth(e, s - 1), h <= a) break;
                    s++;
                    h -= a
                } while (1)
            }
            if (u = this._daylightSavingAdjust(new Date(e, s - 1, h)), u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h) throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 864e9,
        formatDate: function (n, t, i) {
            if (!t) return "";
            var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (i ? i.dayNames : null) || this._defaults.dayNames,
                l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                f = function (t) {
                    var i = u + 1 < n.length && n.charAt(u + 1) === t;
                    return i && u++, i
                },
                e = function (n, t, i) {
                    var r = "" + t;
                    if (f(n))
                        while (r.length < i) r = "0" + r;
                    return r
                },
                s = function (n, t, i, r) {
                    return f(n) ? r[t] : i[t]
                },
                r = "",
                o = !1;
            if (t)
                for (u = 0; u < n.length; u++)
                    if (o) n.charAt(u) !== "'" || f("'") ? r += n.charAt(u) : o = !1;
                    else switch (n.charAt(u)) {
                        case "d":
                            r += e("d", t.getDate(), 2);
                            break;
                        case "D":
                            r += s("D", t.getDay(), h, c);
                            break;
                        case "o":
                            r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            r += e("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            r += s("M", t.getMonth(), l, a);
                            break;
                        case "y":
                            r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            r += t.getTime();
                            break;
                        case "!":
                            r += t.getTime() * 1e4 + this._ticksTo1970;
                            break;
                        case "'":
                            f("'") ? r += "'" : o = !0;
                            break;
                        default:
                            r += n.charAt(u)
                    }
            return r
        },
        _possibleChars: function (n) {
            for (var i = "", r = !1, u = function (i) {
                    var r = t + 1 < n.length && n.charAt(t + 1) === i;
                    return r && t++, r
                }, t = 0; t < n.length; t++)
                if (r) n.charAt(t) !== "'" || u("'") ? i += n.charAt(t) : r = !1;
                else switch (n.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        u("'") ? i += "'" : r = !0;
                        break;
                    default:
                        i += n.charAt(t)
                }
            return i
        },
        _get: function (n, i) {
            return n.settings[i] !== t ? n.settings[i] : this._defaults[i]
        },
        _setDateFromField: function (n, t) {
            if (n.input.val() !== n.lastVal) {
                var f = this._get(n, "dateFormat"),
                    r = n.lastVal = n.input ? n.input.val() : null,
                    u = this._getDefaultDate(n),
                    i = u,
                    e = this._getFormatConfig(n);
                try {
                    i = this.parseDate(f, r, e) || u
                } catch (o) {
                    r = t ? "" : r
                }
                n.selectedDay = i.getDate();
                n.drawMonth = n.selectedMonth = i.getMonth();
                n.drawYear = n.selectedYear = i.getFullYear();
                n.currentDay = r ? i.getDate() : 0;
                n.currentMonth = r ? i.getMonth() : 0;
                n.currentYear = r ? i.getFullYear() : 0;
                this._adjustInstDate(n)
            }
        },
        _getDefaultDate: function (n) {
            return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
        },
        _determineDate: function (t, i, r) {
            var f = function (n) {
                    var t = new Date;
                    return t.setDate(t.getDate() + n), t
                },
                e = function (i) {
                    try {
                        return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                    } catch (h) {}
                    for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                        switch (u[2] || "d") {
                            case "d":
                            case "D":
                                r += parseInt(u[1], 10);
                                break;
                            case "w":
                            case "W":
                                r += parseInt(u[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                e += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                                break;
                            case "y":
                            case "Y":
                                f += parseInt(u[1], 10);
                                r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                        }
                        u = s.exec(i)
                    }
                    return new Date(f, e, r)
                },
                u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
            return u = u && u.toString() === "Invalid Date" ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
        },
        _daylightSavingAdjust: function (n) {
            return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
        },
        _setDate: function (n, t, i) {
            var u = !t,
                f = n.selectedMonth,
                e = n.selectedYear,
                r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
            n.selectedDay = n.currentDay = r.getDate();
            n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
            n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
            f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
            this._adjustInstDate(n);
            n.input && n.input.val(u ? "" : this._formatDate(n))
        },
        _getDate: function (n) {
            return !n.currentYear || n.input && n.input.val() === "" ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
        },
        _attachHandlers: function (t) {
            var r = this._get(t, "stepMonths"),
                i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        n.datepicker._adjustDate(i, -r, "M")
                    },
                    next: function () {
                        n.datepicker._adjustDate(i, +r, "M")
                    },
                    hide: function () {
                        n.datepicker._hideDatepicker()
                    },
                    today: function () {
                        n.datepicker._gotoToday(i)
                    },
                    selectDay: function () {
                        return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function () {
                        return n.datepicker._selectMonthYear(i, this, "M"), !1
                    },
                    selectYear: function () {
                        return n.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (n) {
            var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, f, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
                gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
                e = this._get(n, "isRTL"),
                li = this._get(n, "showButtonPanel"),
                hi = this._get(n, "hideIfNoPrevNext"),
                ni = this._get(n, "navigationAsDateFormat"),
                o = this._getNumberOfMonths(n),
                ai = this._get(n, "showCurrentAtPos"),
                ci = this._get(n, "stepMonths"),
                ti = o[0] !== 1 || o[1] !== 1,
                ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
                w = this._getMinMaxDate(n, "min"),
                v = this._getMinMaxDate(n, "max"),
                t = n.drawMonth - ai,
                r = n.drawYear;
            if (t < 0 && (t += 12, r--), v)
                for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - o[0] * o[1] + 1, v.getDate())), b = w && b < w ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, t < 0 && (t = 11, r--);
            for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (e ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (e ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", f, y = 0; y < o[0]; y++) {
                for (ct = "", this.maxRows = 4, p = 0; p < o[1]; p++) {
                    if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
                        if (u += "<div class='ui-datepicker-group", o[1] > 1) switch (p) {
                            case 0:
                                u += " ui-datepicker-group-first";
                                l = " ui-corner-" + (e ? "right" : "left");
                                break;
                            case o[1] - 1:
                                u += " ui-datepicker-group-last";
                                l = " ui-corner-" + (e ? "left" : "right");
                                break;
                            default:
                                u += " ui-datepicker-group-middle";
                                l = ""
                        }
                        u += "'>"
                    }
                    for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && y === 0 ? e ? ut : rt : "") + (/all|right/.test(l) && y === 0 ? e ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", f = 0; f < 7; f++) vt = (f + c) % 7, at += "<th" + ((f + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                    for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; bt < wt; bt++) {
                        for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", f = 0; f < 7; f++) d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && i < w || v && i > v, kt += "<td class='" + ((f + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!a || g) && d[2] ? " title='" + d[2].replace(/'/g, "&#39;") + "'" : "") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                        u += kt + "<\/tr>"
                    }
                    t++;
                    t > 11 && (t = 0, r++);
                    u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (o[0] > 0 && p === o[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                    ct += u
                }
                nt += ct
            }
            return nt += ri, n._keyEvent = !1, nt
        },
        _generateMonthYearHeader: function (n, t, i, r, u, f, e, o) {
            var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"),
                b = this._get(n, "changeYear"),
                g = this._get(n, "showMonthAfterYear"),
                c = "<div class='ui-datepicker-title'>",
                l = "";
            if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
            else {
                for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; h < 12; h++)(!k || h >= r.getMonth()) && (!d || h <= u.getMonth()) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                l += "<\/select>"
            }
            if (g || (c += l + (f || !(w && b) ? "&#xa0;" : "")), !n.yearshtml)
                if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                else {
                    for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function (n) {
                            var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                            return isNaN(t) ? y : t
                        }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; s <= a; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                    n.yearshtml += "<\/select>";
                    c += n.yearshtml;
                    n.yearshtml = null
                } return c += this._get(n, "yearSuffix"), g && (c += (f || !(w && b) ? "&#xa0;" : "") + l), c + "<\/div>"
        },
        _adjustInstDate: function (n, t, i) {
            var u = n.drawYear + (i === "Y" ? t : 0),
                f = n.drawMonth + (i === "M" ? t : 0),
                e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i === "D" ? t : 0),
                r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
            n.selectedDay = r.getDate();
            n.drawMonth = n.selectedMonth = r.getMonth();
            n.drawYear = n.selectedYear = r.getFullYear();
            (i === "M" || i === "Y") && this._notifyChange(n)
        },
        _restrictMinMax: function (n, t) {
            var i = this._getMinMaxDate(n, "min"),
                r = this._getMinMaxDate(n, "max"),
                u = i && t < i ? i : t;
            return r && u > r ? r : u
        },
        _notifyChange: function (n) {
            var t = this._get(n, "onChangeMonthYear");
            t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
        },
        _getNumberOfMonths: function (n) {
            var t = this._get(n, "numberOfMonths");
            return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
        },
        _getMinMaxDate: function (n, t) {
            return this._determineDate(n, this._get(n, t + "Date"), null)
        },
        _getDaysInMonth: function (n, t) {
            return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (n, t) {
            return new Date(n, t, 1).getDay()
        },
        _canAdjustMonth: function (n, t, i, r) {
            var f = this._getNumberOfMonths(n),
                u = this._daylightSavingAdjust(new Date(i, r + (t < 0 ? t : f[0] * f[1]), 1));
            return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
        },
        _isInRange: function (n, t) {
            var i, f, e = this._getMinMaxDate(n, "min"),
                o = this._getMinMaxDate(n, "max"),
                r = null,
                u = null,
                s = this._get(n, "yearRange");
            return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || t.getFullYear() <= u)
        },
        _getFormatConfig: function (n) {
            var t = this._get(n, "shortYearCutoff");
            return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(n, "dayNamesShort"),
                dayNames: this._get(n, "dayNames"),
                monthNamesShort: this._get(n, "monthNamesShort"),
                monthNames: this._get(n, "monthNames")
            }
        },
        _formatDate: function (n, t, i, r) {
            t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
            var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
            return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
        }
    });

    function e(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function () {
            n(this).removeClass("ui-state-hover");
            this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover");
            this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function () {
            n.datepicker._isDisabledDatepicker(u.inline ? t.parent()[0] : u.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function r(t, i) {
        n.extend(t, i);
        for (var r in i) i[r] == null && (t[r] = i[r]);
        return t
    }
    n.fn.datepicker = function (t) {
        if (!this.length) return this;
        n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0);
        n("#" + n.datepicker._mainDivId).length === 0 && n("body").append(n.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return typeof t == "string" && (t === "isDisabled" || t === "getDate" || t === "widget") ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function () {
            typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
        })
    };
    n.datepicker = new f;
    n.datepicker.initialized = !1;
    n.datepicker.uuid = (new Date).getTime();
    n.datepicker.version = "1.10.4"
})(jQuery);
/*! jquery.payoneer.datetimepicker.js */
(function (n) {
    var t = new Date,
        i = "mm/dd/yy",
        r = "HH:mm",
        o = new RegExp("^\\d{4}\\-(0\\d|1[012])\\-([012]\\d|3[01])$");

    function u(t) {
        if (o.test(t.value)) {
            var r = n.datepicker.parseDate("yy-mm-dd", n(t).val()),
                u = n.datepicker.formatDate(i, r);
            n("#alt_" + t.id).val(u)
        }
    }
    var s = {
            getDate: function () {
                if (e(this.data("mode"))) return this.val();
                var t = n(this.data("datepicker").settings.altField);
                return t.length ? t.val() : this.val()
            }
        },
        h = PayoneerTheme.isMobile();

    function f(n) {
        var t;
        switch (n) {
            case "datetimepicker":
                t = "datetime";
                break;
            case "timepicker":
                t = "time";
                break;
            default:
                t = "date"
        }
        return t
    }
    var c = function (n) {
            var t = f(n);
            return Modernizr.inputtypes[t]
        },
        e = function (n) {
            return h && c(n)
        };
    n.fn.payoneerDateTimePicker = function (o) {
        return typeof o == "string" ? s[o].call(this) : (this.each(function () {
            var o = n(this),
                s = o.data(),
                b = new Date(t);
            if (e(s.mode)) {
                o.removeAttr("readonly");
                this.type = f(s.mode);
                o.off("change.datepicker").on("change.datepicker", function () {
                    o.focusout();
                    u(this)
                });
                u(this)
            } else {
                var a = {
                    altField: "#alt_" + this.id,
                    altFormat: i,
                    altFieldTimeOnly: !1,
                    changeMonth: s.changemonth || !1,
                    changeYear: s.changeyear || !1,
                    yearRange: s.yearrange || 0 - t.getYear() + ":+0",
                    minDate: s.mindate ? new Date(b.setDate(t.getDate() + 1)) : null,
                    maxDate: s.maxdate ? new Date(t) : null,
                    onChangeMonthYear: function (n, t, i) {
                        var r = new Date(n, t - 1, i.selectedDay);
                        r.getMonth() != t - 1 && (r = new Date(n, t - 1, 1));
                        o.datepicker("setDate", r)
                    },
                    showOn: s.showon || "focus",
                    buttonText: "",
                    buttonImage: PayoneerTheme.isAvocado() ? s.buttonimage || "" : "",
                    buttonImageOnly: s.buttonimage !== undefined,
                    onClose: function () {
                        n(this).trigger("keyup")
                    },
                    defaultDate: s.defaultdate ? n.datepicker.parseDate(i, s.defaultdate) : null,
                    timeFormat: r,
                    hourMin: s.hourmin || 0,
                    hourMax: s.hourmax || 23,
                    minuteMin: s.minutemin || 0,
                    minuteMax: s.minutemax || 59
                };
                s.mode === "datetimepicker" && (a.onChangeMonthYear = function (t, i) {
                    var u = n(this),
                        r = u.datetimepicker("getDate");
                    r.setMonth(i - 1);
                    var f = i + "/" + r.getDate() + "/" + t + " " + r.getHours() + ":" + r.getMinutes();
                    u.val(f).datetimepicker("setDate", f)
                });
                var c = o[s.mode];
                c.call(o, a);
                var v = s.mode !== "timepicker" ? o.datepicker("option", "dateFormat") : null;
                o.on("disable", function () {
                    PayoneerTheme.ToggleDisabledEventHandler.call(o, !0);
                    o.prop("disabled", !0);
                    c.call(o, "disable")
                });
                o.on("enable", function () {
                    PayoneerTheme.ToggleDisabledEventHandler.call(o, !1);
                    o.prop("disabled", !1);
                    c.call(o, "enable")
                });
                o.prop("disabled") && c.call(o, "disable");
                var h;
                if (s.setdate) {
                    if (h = s.setdate, h === "now") c.call(o, "setDate", new Date);
                    else if (s.mode === "datepicker") {
                        var y = n.datepicker.parseDate(i, h);
                        o.val(n.datepicker.formatDate(v, y)).datepicker.call(o, "setDate", y)
                    } else if (s.mode === "datetimepicker") {
                        var l = n.datepicker.parseDate(i, h.substring(0, 10)),
                            p = n.datepicker.parseTime(r, h.substring(11));
                        l.setHours(p.hour);
                        l.setMinutes(p.minute);
                        o.val(n.datepicker.formatDate(v, l)).datetimepicker.call(o, "setDate", l)
                    }
                } else if (s.setdateserver) {
                    h = s.setdateserver;
                    var k = new Date(h) - t,
                        d = new Date(t.getTime() + t.getTimezoneOffset() * 6e4 + k);
                    c.call(o, "setDate", d)
                }
                if (PayoneerTheme.isBanana()) {
                    var w = o.parent(".field"),
                        g = w.find("button").outerWidth(!0);
                    w.css("width", "auto").css(PayoneerTheme.isRightToLeft() ? "margin-left" : "margin-right", g)
                }
            }
        }), this)
    }
})(jQuery);
$(document).ready(function () {
    $('[payoneer="DateTimePicker"]').payoneerDateTimePicker()
});
(function (n, t) {
    var r = 0,
        i = Array.prototype.slice,
        u = n.cleanData;
    n.cleanData = function (t) {
        for (var i = 0, r;
            (r = t[i]) != null; i++) try {
            n(r).triggerHandler("remove")
        } catch (f) {}
        u(t)
    };
    n.widget = function (t, i, r) {
        var s, f, u, o, h = {},
            e = t.split(".")[0];
        t = t.split(".")[1];
        s = e + "-" + t;
        r || (r = i, i = n.Widget);
        n.expr[":"][s.toLowerCase()] = function (t) {
            return !!n.data(t, s)
        };
        n[e] = n[e] || {};
        f = n[e][t];
        u = n[e][t] = function (n, t) {
            if (!this._createWidget) return new u(n, t);
            arguments.length && this._createWidget(n, t)
        };
        n.extend(u, f, {
            version: r.version,
            _proto: n.extend({}, r),
            _childConstructors: []
        });
        o = new i;
        o.options = n.widget.extend({}, o.options);
        n.each(r, function (t, r) {
            if (!n.isFunction(r)) {
                h[t] = r;
                return
            }
            h[t] = function () {
                var n = function () {
                        return i.prototype[t].apply(this, arguments)
                    },
                    u = function (n) {
                        return i.prototype[t].apply(this, n)
                    };
                return function () {
                    var i = this._super,
                        f = this._superApply,
                        t;
                    return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
                }
            }()
        });
        u.prototype = n.widget.extend(o, {
            widgetEventPrefix: f ? o.widgetEventPrefix || t : t
        }, h, {
            constructor: u,
            namespace: e,
            widgetName: t,
            widgetFullName: s
        });
        f ? (n.each(f._childConstructors, function (t, i) {
            var r = i.prototype;
            n.widget(r.namespace + "." + r.widgetName, u, i._proto)
        }), delete f._childConstructors) : i._childConstructors.push(u);
        n.widget.bridge(t, u)
    };
    n.widget.extend = function (r) {
        for (var o = i.call(arguments, 1), e = 0, s = o.length, u, f; e < s; e++)
            for (u in o[e]) f = o[e][u], o[e].hasOwnProperty(u) && f !== t && (r[u] = n.isPlainObject(f) ? n.isPlainObject(r[u]) ? n.widget.extend({}, r[u], f) : n.widget.extend({}, f) : f);
        return r
    };
    n.widget.bridge = function (r, u) {
        var f = u.prototype.widgetFullName || r;
        n.fn[r] = function (e) {
            var h = typeof e == "string",
                o = i.call(arguments, 1),
                s = this;
            return e = !h && o.length ? n.widget.extend.apply(null, [e].concat(o)) : e, h ? this.each(function () {
                var i, u = n.data(this, f);
                return u ? !n.isFunction(u[e]) || e.charAt(0) === "_" ? n.error("no such method '" + e + "' for " + r + " widget instance") : (i = u[e].apply(u, o), i !== u && i !== t ? (s = i && i.jquery ? s.pushStack(i.get()) : i, !1) : void 0) : n.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + e + "'")
            }) : this.each(function () {
                var t = n.data(this, f);
                t ? t.option(e || {})._init() : n.data(this, f, new u(e, this))
            }), s
        }
    };
    n.Widget = function () {};
    n.Widget._childConstructors = [];
    n.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (t, i) {
            i = n(i || this.defaultElement || this)[0];
            this.element = n(i);
            this.uuid = r++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
            this.bindings = n();
            this.hoverable = n();
            this.focusable = n();
            i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (n) {
                    n.target === i && this.destroy()
                }
            }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: n.noop,
        _getCreateEventData: n.noop,
        _create: n.noop,
        _init: n.noop,
        destroy: function () {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: n.noop,
        widget: function () {
            return this.element
        },
        option: function (i, r) {
            var o = i,
                u, f, e;
            if (arguments.length === 0) return n.widget.extend({}, this.options);
            if (typeof i == "string")
                if (o = {}, u = i.split("."), i = u.shift(), u.length) {
                    for (f = o[i] = n.widget.extend({}, this.options[i]), e = 0; e < u.length - 1; e++) f[u[e]] = f[u[e]] || {}, f = f[u[e]];
                    if (i = u.pop(), arguments.length === 1) return f[i] === t ? null : f[i];
                    f[i] = r
                } else {
                    if (arguments.length === 1) return this.options[i] === t ? null : this.options[i];
                    o[i] = r
                } return this._setOptions(o), this
        },
        _setOptions: function (n) {
            for (var t in n) this._setOption(t, n[t]);
            return this
        },
        _setOption: function (n, t) {
            return this.options[n] = t, n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (t, i, r) {
            var f, u = this;
            typeof t != "boolean" && (r = i, i = t, t = !1);
            r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
            n.each(r, function (r, e) {
                function o() {
                    if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof e == "string" ? u[e] : e).apply(u, arguments)
                }
                typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                var s = r.match(/^(\w+)\s*(.*)$/),
                    h = s[1] + u.eventNamespace,
                    c = s[2];
                c ? f.delegate(c, h, o) : i.bind(h, o)
            })
        },
        _off: function (n, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            n.unbind(t).undelegate(t)
        },
        _delay: function (n, t) {
            function r() {
                return (typeof n == "string" ? i[n] : n).apply(i, arguments)
            }
            var i = this;
            return setTimeout(r, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t);
            this._on(t, {
                mouseenter: function (t) {
                    n(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (t) {
                    n(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t);
            this._on(t, {
                focusin: function (t) {
                    n(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (t) {
                    n(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, r) {
            var u, f, e = this.options[t];
            if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f)
                for (u in f) u in i || (i[u] = f[u]);
            return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
        }
    };
    n.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, i) {
        n.Widget.prototype["_" + t] = function (r, u, f) {
            typeof u == "string" && (u = {
                effect: u
            });
            var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
            u = u || {};
            typeof u == "number" && (u = {
                duration: u
            });
            o = !n.isEmptyObject(u);
            u.complete = f;
            u.delay && r.delay(u.delay);
            o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function (i) {
                n(this)[t]();
                f && f.call(r[0]);
                i()
            })
        }
    })
})(jQuery);
(function (n) {
    var t = !1;
    n(document).mouseup(function () {
        t = !1
    });
    n.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (n) {
                return t._mouseDown(n)
            }).bind("click." + this.widgetName, function (i) {
                if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            });
            this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName);
            this._mouseMoveDelegate && n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i);
                this._mouseDownEvent = i;
                var r = this,
                    u = i.which === 1,
                    f = typeof this.options.cancel == "string" && i.target.nodeName ? n(i.target).closest(this.options.cancel).length : !1;
                return !u || f || !this._mouseCapture(i) ? !0 : (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    r.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted)) ? (i.preventDefault(), !0) : (!0 === n.data(i.target, this.widgetName + ".preventClickEvent") && n.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (n) {
                    return r._mouseMove(n)
                }, this._mouseUpDelegate = function (n) {
                    return r._mouseUp(n)
                }, n(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)
            }
        },
        _mouseMove: function (t) {
            return n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return n(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (n) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
})(jQuery);
(function (n) {
    n.widget("ui.draggable", n.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            this.options.helper !== "original" || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
            this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var i = this.options;
            return this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), !this.handle) ? !1 : (n(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                n("<div class='ui-draggable-iframeFix' style='background: #fff;'><\/div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(n(this).offset()).appendTo("body")
            }), !0)
        },
        _mouseStart: function (t) {
            var i = this.options;
            return (this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, n.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1) ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, i) {
            if (this.offsetParentCssPosition === "fixed" && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            return this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var r = this,
                i = !1;
            return (n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), this.options.helper === "original" && !n.contains(this.element[0].ownerDocument, this.element[0])) ? !1 : (this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1)
        },
        _mouseUp: function (t) {
            return n("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), n.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function (t) {
            var r = this.options,
                i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" "));
            n.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            });
            "left" in t && (this.offset.click.left = t.left + this.margins.left);
            "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
            "top" in t && (this.offset.click.top = t.top + this.margins.top);
            "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset();
            return this.cssPosition === "absolute" && this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition === "relative") {
                var n = this.element.position();
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var u, t, i, r = this.options;
            if (!r.containment) {
                this.containment = null;
                return
            }
            if (r.containment === "window") {
                this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment === "document") {
                this.containment = [0, 0, n(document).width() - this.helperProportions.width - this.margins.left, (n(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (r.containment.constructor === Array) {
                this.containment = r.containment;
                return
            }(r.containment === "parent" && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], i) && (u = t.css("overflow") !== "hidden", this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (u ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (u ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = t)
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var r = t === "absolute" ? 1 : -1,
                u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: u.scrollTop(),
                left: u.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * r,
                left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * r
            }
        },
        _generatePosition: function (t) {
            var i, e, u, f, r = this.options,
                h = this.cssPosition === "absolute" && !(this.scrollParent[0] !== document && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                o = t.pageX,
                s = t.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: h.scrollTop(),
                left: h.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (e = this.relative_container.offset(), i = [this.containment[0] + e.left, this.containment[1] + e.top, this.containment[2] + e.left, this.containment[3] + e.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (s = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (s = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, s = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, o = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f)), {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = !1
        },
        _trigger: function (t, i, r) {
            return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), n.Widget.prototype._trigger.call(this, t, i, r)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    n.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i) {
            var r = n(this).data("ui-draggable"),
                u = r.options,
                f = n.extend({}, i, {
                    item: r.element
                });
            r.sortables = [];
            n(u.connectToSortable).each(function () {
                var i = n.data(this, "ui-sortable");
                i && !i.options.disabled && (r.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, f))
            })
        },
        stop: function (t, i) {
            var r = n(this).data("ui-draggable"),
                u = n.extend({}, i, {
                    item: r.element
                });
            n.each(r.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, u))
            })
        },
        drag: function (t, i) {
            var r = n(this).data("ui-draggable"),
                u = this;
            n.each(r.sortables, function () {
                var f = !1,
                    e = this;
                this.instance.positionAbs = r.positionAbs;
                this.instance.helperProportions = r.helperProportions;
                this.instance.offset.click = r.offset.click;
                this.instance._intersectsWith(this.instance.containerCache) && (f = !0, n.each(r.sortables, function () {
                    return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== e && this.instance._intersectsWith(this.instance.containerCache) && n.contains(e.instance.element[0], this.instance.element[0]) && (f = !1), f
                }));
                f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = n(u).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    });
    n.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var t = n("body"),
                i = n(this).data("ui-draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor"));
            t.css("cursor", i.cursor)
        },
        stop: function () {
            var t = n(this).data("ui-draggable").options;
            t._cursor && n("body").css("cursor", t._cursor)
        }
    });
    n.ui.plugin.add("draggable", "opacity", {
        start: function (t, i) {
            var r = n(i.helper),
                u = n(this).data("ui-draggable").options;
            r.css("opacity") && (u._opacity = r.css("opacity"));
            r.css("opacity", u.opacity)
        },
        stop: function (t, i) {
            var r = n(this).data("ui-draggable").options;
            r._opacity && n(i.helper).css("opacity", r._opacity)
        }
    });
    n.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var t = n(this).data("ui-draggable");
            t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function (t) {
            var r = n(this).data("ui-draggable"),
                i = r.options,
                u = !1;
            r.scrollParent[0] !== document && r.scrollParent[0].tagName !== "HTML" ? (i.axis && i.axis === "x" || (r.overflowOffset.top + r.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - r.overflowOffset.top < i.scrollSensitivity && (r.scrollParent[0].scrollTop = u = r.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && i.axis === "y" || (r.overflowOffset.left + r.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - r.overflowOffset.left < i.scrollSensitivity && (r.scrollParent[0].scrollLeft = u = r.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && i.axis === "x" || (t.pageY - n(document).scrollTop() < i.scrollSensitivity ? u = n(document).scrollTop(n(document).scrollTop() - i.scrollSpeed) : n(window).height() - (t.pageY - n(document).scrollTop()) < i.scrollSensitivity && (u = n(document).scrollTop(n(document).scrollTop() + i.scrollSpeed))), i.axis && i.axis === "y" || (t.pageX - n(document).scrollLeft() < i.scrollSensitivity ? u = n(document).scrollLeft(n(document).scrollLeft() - i.scrollSpeed) : n(window).width() - (t.pageX - n(document).scrollLeft()) < i.scrollSensitivity && (u = n(document).scrollLeft(n(document).scrollLeft() + i.scrollSpeed))));
            u !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
        }
    });
    n.ui.plugin.add("draggable", "snap", {
        start: function () {
            var t = n(this).data("ui-draggable"),
                i = t.options;
            t.snapElements = [];
            n(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
                var i = n(this),
                    r = i.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function (t, i) {
            for (var e, o, s, h, c, a, l, v, w, r = n(this).data("ui-draggable"), b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--) {
                if (c = r.snapElements[u].left, a = c + r.snapElements[u].width, l = r.snapElements[u].top, v = l + r.snapElements[u].height, k < c - f || y > a + f || d < l - f || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item)) {
                    r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[u].item
                    }));
                    r.snapElements[u].snapping = !1;
                    continue
                }
                b.snapMode !== "inner" && (e = Math.abs(l - d) <= f, o = Math.abs(v - p) <= f, s = Math.abs(c - k) <= f, h = Math.abs(a - y) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                    top: l - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v,
                    left: 0
                }).top - r.margins.top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c - r.helperProportions.width
                }).left - r.margins.left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - r.margins.left));
                w = e || o || s || h;
                b.snapMode !== "outer" && (e = Math.abs(l - p) <= f, o = Math.abs(v - d) <= f, s = Math.abs(c - y) <= f, h = Math.abs(a - k) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - r.margins.top), o && (i.position.top = r._convertPositionTo("relative", {
                    top: v - r.helperProportions.height,
                    left: 0
                }).top - r.margins.top), s && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: c
                }).left - r.margins.left), h && (i.position.left = r._convertPositionTo("relative", {
                    top: 0,
                    left: a - r.helperProportions.width
                }).left - r.margins.left));
                !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                    snapItem: r.snapElements[u].item
                }));
                r.snapElements[u].snapping = e || o || s || h || w
            }
        }
    });
    n.ui.plugin.add("draggable", "stack", {
        start: function () {
            var i, r = this.data("ui-draggable").options,
                t = n.makeArray(n(r.stack)).sort(function (t, i) {
                    return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
                });
            t.length && (i = parseInt(n(t[0]).css("zIndex"), 10) || 0, n(t).each(function (t) {
                n(this).css("zIndex", i + t)
            }), this.css("zIndex", i + t.length))
        }
    });
    n.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i) {
            var r = n(i.helper),
                u = n(this).data("ui-draggable").options;
            r.css("zIndex") && (u._zIndex = r.css("zIndex"));
            r.css("zIndex", u.zIndex)
        },
        stop: function (t, i) {
            var r = n(this).data("ui-draggable").options;
            r._zIndex && n(i.helper).css("zIndex", r._zIndex)
        }
    })
})(jQuery);
(function (n) {
    function i(n) {
        return parseInt(n, 10) || 0
    }

    function t(n) {
        return !isNaN(parseInt(n, 10))
    }
    n.widget("ui.resizable", n.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function () {
            var e, f, r, i, o, u = this,
                t = this.options;
            if (this.element.addClass("ui-resizable"), n.extend(this, {
                    _aspectRatio: !!t.aspectRatio,
                    aspectRatio: t.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; f < e.length; f++) r = n.trim(e[f]), o = "ui-resizable-" + r, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({
                    zIndex: t.zIndex
                }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i);
            this._renderAxis = function (t) {
                var i, r, u, f;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = n(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = n(this.handles[i], this.element), f = /sw|ne|nw|se|n|s/.test(i) ? r.outerHeight() : r.outerWidth(), u = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(u, f), this._proportionallyResize()), !n(this.handles[i]).length
            };
            this._renderAxis(this.element);
            this._handles = n(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function () {
                u.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), u.axis = i && i[1] ? i[1] : "se")
            });
            t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                t.disabled || (n(this).removeClass("ui-resizable-autohide"), u._handles.show())
            }).mouseleave(function () {
                t.disabled || u.resizing || (n(this).addClass("ui-resizable-autohide"), u._handles.hide())
            }));
            this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, i = function (t) {
                n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var r, i, u = !1;
            for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
            return !this.options.disabled && u
        },
        _mouseStart: function (t) {
            var f, e, o, u = this.options,
                s = this.element.position(),
                r = this.element;
            return this.resizing = !0, /absolute/.test(r.css("position")) ? r.css({
                position: "absolute",
                top: r.css("top"),
                left: r.css("left")
            }) : r.is(".ui-draggable") && r.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }), this._renderProxy(), f = i(this.helper.css("left")), e = i(this.helper.css("top")), u.containment && (f += n(u.containment).scrollLeft() || 0, e += n(u.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: f,
                top: e
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: r.width(),
                height: r.height()
            }, this.originalSize = this._helper ? {
                width: r.outerWidth(),
                height: r.outerHeight()
            } : {
                width: r.width(),
                height: r.height()
            }, this.originalPosition = {
                left: f,
                top: e
            }, this.sizeDiff = {
                width: r.outerWidth() - r.width(),
                height: r.outerHeight() - r.height()
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof u.aspectRatio == "number" ? u.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", o === "auto" ? this.axis + "-resize" : o), r.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var i, e = this.helper,
                r = {},
                u = this.originalMousePosition,
                o = this.axis,
                s = this.position.top,
                h = this.position.left,
                c = this.size.width,
                l = this.size.height,
                a = t.pageX - u.left || 0,
                v = t.pageY - u.top || 0,
                f = this._change[o];
            return f ? (i = f.apply(this, [t, a, v]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== s && (r.top = this.position.top + "px"), this.position.left !== h && (r.left = this.position.left + "px"), this.size.width !== c && (r.width = this.size.width + "px"), this.size.height !== l && (r.height = this.size.height + "px"), e.css(r), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || this._trigger("resize", t, this.ui()), !1) : !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var r, u, f, e, o, s, h, c = this.options,
                i = this;
            return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
                width: i.helper.width() - e,
                height: i.helper.height() - f
            }, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
                top: h,
                left: s
            })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (n) {
            var u, f, e, o, i, r = this.options;
            i = {
                minWidth: t(r.minWidth) ? r.minWidth : 0,
                maxWidth: t(r.maxWidth) ? r.maxWidth : Infinity,
                minHeight: t(r.minHeight) ? r.minHeight : 0,
                maxHeight: t(r.maxHeight) ? r.maxHeight : Infinity
            };
            (this._aspectRatio || n) && (u = i.minHeight * this.aspectRatio, e = i.minWidth / this.aspectRatio, f = i.maxHeight * this.aspectRatio, o = i.maxWidth / this.aspectRatio, u > i.minWidth && (i.minWidth = u), e > i.minHeight && (i.minHeight = e), f < i.maxWidth && (i.maxWidth = f), o < i.maxHeight && (i.maxHeight = o));
            this._vBoundaries = i
        },
        _updateCache: function (n) {
            this.offset = this.helper.offset();
            t(n.left) && (this.position.left = n.left);
            t(n.top) && (this.position.top = n.top);
            t(n.height) && (this.size.height = n.height);
            t(n.width) && (this.size.width = n.width)
        },
        _updateRatio: function (n) {
            var i = this.position,
                r = this.size,
                u = this.axis;
            return t(n.height) ? n.width = n.height * this.aspectRatio : t(n.width) && (n.height = n.width / this.aspectRatio), u === "sw" && (n.left = i.left + (r.width - n.width), n.top = null), u === "nw" && (n.top = i.top + (r.height - n.height), n.left = i.left + (r.width - n.width)), n
        },
        _respectSize: function (n) {
            var i = this._vBoundaries,
                r = this.axis,
                u = t(n.width) && i.maxWidth && i.maxWidth < n.width,
                f = t(n.height) && i.maxHeight && i.maxHeight < n.height,
                e = t(n.width) && i.minWidth && i.minWidth > n.width,
                o = t(n.height) && i.minHeight && i.minHeight > n.height,
                s = this.originalPosition.left + this.originalSize.width,
                h = this.position.top + this.size.height,
                c = /sw|nw|w/.test(r),
                l = /nw|ne|n/.test(r);
            return e && (n.width = i.minWidth), o && (n.height = i.minHeight), u && (n.width = i.maxWidth), f && (n.height = i.maxHeight), e && c && (n.left = s - i.minWidth), u && c && (n.left = s - i.maxWidth), o && l && (n.top = h - i.minHeight), f && l && (n.top = h - i.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)
                for (var t, r, u, n, f = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                    if (n = this._proportionallyResizeElements[i], !this.borderDif)
                        for (this.borderDif = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; t < r.length; t++) this.borderDif[t] = (parseInt(r[t], 10) || 0) + (parseInt(u[t], 10) || 0);
                    n.css({
                        height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function () {
            var t = this.element,
                i = this.options;
            this.elementOffset = t.offset();
            this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (n, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function (n, t) {
                var i = this.originalSize,
                    r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: i.width - t
                }
            },
            n: function (n, t, i) {
                var r = this.originalSize,
                    u = this.originalPosition;
                return {
                    top: u.top + i,
                    height: r.height - i
                }
            },
            s: function (n, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function (t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            sw: function (t, i, r) {
                return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            },
            ne: function (t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
            },
            nw: function (t, i, r) {
                return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
            }
        },
        _propagate: function (t, i) {
            n.ui.plugin.call(this, t, [i, this.ui()]);
            t !== "resize" && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    n.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var i = n(this).data("ui-resizable"),
                u = i.options,
                r = i._proportionallyResizeElements,
                f = r.length && /textarea/i.test(r[0].nodeName),
                s = f && n.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                h = f ? 0 : i.sizeDiff.width,
                c = {
                    width: i.size.width - h,
                    height: i.size.height - s
                },
                e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(n.extend(c, o && e ? {
                top: o,
                left: e
            } : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function () {
                    var u = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    r && r.length && n(r[0]).css({
                        width: u.width,
                        height: u.height
                    });
                    i._updateCache(u);
                    i._propagate("resize", t)
                }
            })
        }
    });
    n.ui.plugin.add("resizable", "containment", {
        start: function () {
            var u, e, o, s, h, c, l, t = n(this).data("ui-resizable"),
                a = t.options,
                v = t.element,
                f = a.containment,
                r = f instanceof n ? f.get(0) : /parent/.test(f) ? v.parent().get(0) : f;
            r && (t.containerElement = n(r), /document/.test(f) || f === document ? (t.containerOffset = {
                left: 0,
                top: 0
            }, t.containerPosition = {
                left: 0,
                top: 0
            }, t.parentData = {
                element: n(document),
                left: 0,
                top: 0,
                width: n(document).width(),
                height: n(document).height() || document.body.parentNode.scrollHeight
            }) : (u = n(r), e = [], n(["Top", "Right", "Left", "Bottom"]).each(function (n, t) {
                e[n] = i(u.css("padding" + t))
            }), t.containerOffset = u.offset(), t.containerPosition = u.position(), t.containerSize = {
                height: u.innerHeight() - e[3],
                width: u.innerWidth() - e[1]
            }, o = t.containerOffset, s = t.containerSize.height, h = t.containerSize.width, c = n.ui.hasScroll(r, "left") ? r.scrollWidth : h, l = n.ui.hasScroll(r) ? r.scrollHeight : s, t.parentData = {
                element: r,
                left: o.left,
                top: o.top,
                width: c,
                height: l
            }))
        },
        resize: function (t) {
            var f, o, s, h, i = n(this).data("ui-resizable"),
                a = i.options,
                r = i.containerOffset,
                c = i.position,
                e = i._aspectRatio || t.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                l = i.containerElement;
            l[0] !== document && /static/.test(l.css("position")) && (u = r);
            c.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - u.left), e && (i.size.height = i.size.width / i.aspectRatio), i.position.left = a.helper ? r.left : 0);
            c.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), e && (i.size.width = i.size.height * i.aspectRatio), i.position.top = i._helper ? r.top : 0);
            i.offset.left = i.parentData.left + i.position.left;
            i.offset.top = i.parentData.top + i.position.top;
            f = Math.abs((i._helper ? i.offset.left - u.left : i.offset.left - u.left) + i.sizeDiff.width);
            o = Math.abs((i._helper ? i.offset.top - u.top : i.offset.top - r.top) + i.sizeDiff.height);
            s = i.containerElement.get(0) === i.element.parent().get(0);
            h = /relative|absolute/.test(i.containerElement.css("position"));
            s && h && (f -= Math.abs(i.parentData.left));
            f + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - f, e && (i.size.height = i.size.width / i.aspectRatio));
            o + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - o, e && (i.size.width = i.size.height * i.aspectRatio))
        },
        stop: function () {
            var t = n(this).data("ui-resizable"),
                r = t.options,
                u = t.containerOffset,
                f = t.containerPosition,
                e = t.containerElement,
                i = n(t.helper),
                o = i.offset(),
                s = i.outerWidth() - t.sizeDiff.width,
                h = i.outerHeight() - t.sizeDiff.height;
            t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            });
            t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                left: o.left - f.left - u.left,
                width: s,
                height: h
            })
        }
    });
    n.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var r = n(this).data("ui-resizable"),
                t = r.options,
                i = function (t) {
                    n(t).each(function () {
                        var t = n(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            typeof t.alsoResize != "object" || t.alsoResize.parentNode ? i(t.alsoResize) : t.alsoResize.length ? (t.alsoResize = t.alsoResize[0], i(t.alsoResize)) : n.each(t.alsoResize, function (n) {
                i(n)
            })
        },
        resize: function (t, i) {
            var r = n(this).data("ui-resizable"),
                u = r.options,
                f = r.originalSize,
                e = r.originalPosition,
                s = {
                    height: r.size.height - f.height || 0,
                    width: r.size.width - f.width || 0,
                    top: r.position.top - e.top || 0,
                    left: r.position.left - e.left || 0
                },
                o = function (t, r) {
                    n(t).each(function () {
                        var t = n(this),
                            f = n(this).data("ui-resizable-alsoresize"),
                            u = {},
                            e = r && r.length ? r : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        n.each(e, function (n, t) {
                            var i = (f[t] || 0) + (s[t] || 0);
                            i && i >= 0 && (u[t] = i || null)
                        });
                        t.css(u)
                    })
                };
            typeof u.alsoResize != "object" || u.alsoResize.nodeType ? o(u.alsoResize) : n.each(u.alsoResize, function (n, t) {
                o(n, t)
            })
        },
        stop: function () {
            n(this).removeData("resizable-alsoresize")
        }
    });
    n.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = n(this).data("ui-resizable"),
                i = t.options,
                r = t.size;
            t.ghost = t.originalElement.clone();
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
            t.ghost.appendTo(t.helper)
        },
        resize: function () {
            var t = n(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function () {
            var t = n(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    });
    n.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t = n(this).data("ui-resizable"),
                i = t.options,
                v = t.size,
                o = t.originalSize,
                s = t.originalPosition,
                h = t.axis,
                c = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid,
                f = c[0] || 1,
                e = c[1] || 1,
                l = Math.round((v.width - o.width) / f) * f,
                a = Math.round((v.height - o.height) / e) * e,
                r = o.width + l,
                u = o.height + a,
                y = i.maxWidth && i.maxWidth < r,
                p = i.maxHeight && i.maxHeight < u,
                w = i.minWidth && i.minWidth > r,
                b = i.minHeight && i.minHeight > u;
            i.grid = c;
            w && (r = r + f);
            b && (u = u + e);
            y && (r = r - f);
            p && (u = u - e);
            /^(se|s|e)$/.test(h) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.top = s.top - a) : /^(sw)$/.test(h) ? (t.size.width = r, t.size.height = u, t.position.left = s.left - l) : (u - e > 0 ? (t.size.height = u, t.position.top = s.top - a) : (t.size.height = e, t.position.top = s.top + o.height - e), r - f > 0 ? (t.size.width = r, t.position.left = s.left - l) : (t.size.width = f, t.position.left = s.left + o.width - f))
        }
    })
})(jQuery);
(function (n) {
    var t, i = "ui-button ui-widget ui-state-default ui-corner-all",
        r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        f = function () {
            var t = n(this);
            setTimeout(function () {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        u = function (t) {
            var i = t.name,
                r = t.form,
                u = n([]);
            return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "']") : n("[name='" + i + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), u
        };
    n.widget("ui.button", {
        version: "1.10.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f);
            typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var e = this,
                r = this.options,
                o = this.type === "checkbox" || this.type === "radio",
                s = o ? "" : "ui-state-active";
            r.label === null && (r.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
            this._hoverable(this.buttonElement);
            this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                r.disabled || this === t && n(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                r.disabled || n(this).removeClass(s)
            }).bind("click" + this.eventNamespace, function (n) {
                r.disabled && (n.preventDefault(), n.stopImmediatePropagation())
            });
            this._on({
                focus: function () {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function () {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            });
            o && this.element.bind("change" + this.eventNamespace, function () {
                e.refresh()
            });
            this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (r.disabled) return !1
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (r.disabled) return !1;
                n(this).addClass("ui-state-active");
                e.buttonElement.attr("aria-pressed", "true");
                var t = e.element[0];
                u(t).not(t).map(function () {
                    return n(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                if (r.disabled) return !1;
                n(this).addClass("ui-state-active");
                t = this;
                e.document.one("mouseup", function () {
                    t = null
                })
            }).bind("mouseup" + this.eventNamespace, function () {
                if (r.disabled) return !1;
                n(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (t) {
                if (r.disabled) return !1;
                (t.keyCode === n.ui.keyCode.SPACE || t.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                n(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === n.ui.keyCode.SPACE && n(this).click()
            }));
            this._setOption("disabled", r.disabled);
            this._resetButton()
        },
        _determineButtonType: function () {
            var n, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
            this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass(i + " ui-state-active " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (n, t) {
            if (this._super(n, t), n === "disabled") {
                this.element.prop("disabled", !!t);
                t && this.buttonElement.removeClass("ui-state-focus");
                return
            }
            this._resetButton()
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t);
            this.type === "radio" ? u(this.element[0]).each(function () {
                n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var i = this.buttonElement.removeClass(r),
                e = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
                t = this.options.icons,
                f = t.primary && t.secondary,
                u = [];
            t.primary || t.secondary ? (this.options.text && u.push("ui-button-text-icon" + (f ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (u.push(f ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(e)))) : u.push("ui-button-text-only");
            i.addClass(u.join(" "))
        }
    });
    n.widget("ui.buttonset", {
        version: "1.10.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (n, t) {
            n === "disabled" && this.buttons.button("option", n, t);
            this._super(n, t)
        },
        refresh: function () {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function () {
                return n(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);

(function (n, t) {
    n.ui = n.ui || {};
    var f, r = Math.max,
        i = Math.abs,
        e = Math.round,
        o = /left|center|right/,
        s = /top|center|bottom/,
        h = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        l = /%$/,
        v = n.fn.position;

    function a(n, t, i) {
        return [parseFloat(n[0]) * (l.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (l.test(n[1]) ? i / 100 : 1)]
    }

    function u(t, i) {
        return parseInt(n.css(t, i), 10) || 0
    }

    function y(t) {
        var i = t[0];
        return i.nodeType === 9 ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : n.isWindow(i) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    n.position = {
        scrollbarWidth: function () {
            if (f !== t) return f;
            var u, r, i = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                e = i.children()[0];
            return n("body").append(i), u = e.offsetWidth, i.css("overflow", "scroll"), r = e.offsetWidth, u === r && (r = i[0].clientWidth), i.remove(), f = u - r
        },
        getScrollInfo: function (t) {
            var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth,
                f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: f ? n.position.scrollbarWidth() : 0,
                height: u ? n.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function (t) {
            var i = n(t || window),
                r = n.isWindow(i[0]),
                u = !!i[0] && i[0].nodeType === 9;
            return {
                element: i,
                isWindow: r,
                isDocument: u,
                offset: i.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop(),
                width: r ? i.width() : i.outerWidth(),
                height: r ? i.height() : i.outerHeight()
            }
        }
    };
    n.fn.position = function (t) {
        if (!t || !t.of) return v.apply(this, arguments);
        t = n.extend({}, t);
        var b, f, l, w, p, d, g = n(t.of),
            tt = n.position.getWithinInfo(t.within),
            it = n.position.getScrollInfo(tt),
            k = (t.collision || "flip").split(" "),
            nt = {};
        return d = y(g), g[0].preventDefault && (t.at = "left top"), f = d.width, l = d.height, w = d.offset, p = n.extend({}, w), n.each(["my", "at"], function () {
            var n = (t[this] || "").split(" "),
                i, r;
            n.length === 1 && (n = o.test(n[0]) ? n.concat(["center"]) : s.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
            n[0] = o.test(n[0]) ? n[0] : "center";
            n[1] = s.test(n[1]) ? n[1] : "center";
            i = h.exec(n[0]);
            r = h.exec(n[1]);
            nt[this] = [i ? i[0] : 0, r ? r[0] : 0];
            t[this] = [c.exec(n[0])[0], c.exec(n[1])[0]]
        }), k.length === 1 && (k[1] = k[0]), t.at[0] === "right" ? p.left += f : t.at[0] === "center" && (p.left += f / 2), t.at[1] === "bottom" ? p.top += l : t.at[1] === "center" && (p.top += l / 2), b = a(nt.at, f, l), p.left += b[0], p.top += b[1], this.each(function () {
            var y, d, s = n(this),
                h = s.outerWidth(),
                c = s.outerHeight(),
                rt = u(this, "marginLeft"),
                ut = u(this, "marginTop"),
                ft = h + rt + u(this, "marginRight") + it.width,
                et = c + ut + u(this, "marginBottom") + it.height,
                o = n.extend({}, p),
                v = a(nt.my, s.outerWidth(), s.outerHeight());
            t.my[0] === "right" ? o.left -= h : t.my[0] === "center" && (o.left -= h / 2);
            t.my[1] === "bottom" ? o.top -= c : t.my[1] === "center" && (o.top -= c / 2);
            o.left += v[0];
            o.top += v[1];
            n.support.offsetFractions || (o.left = e(o.left), o.top = e(o.top));
            y = {
                marginLeft: rt,
                marginTop: ut
            };
            n.each(["left", "top"], function (i, r) {
                n.ui.position[k[i]] && n.ui.position[k[i]][r](o, {
                    targetWidth: f,
                    targetHeight: l,
                    elemWidth: h,
                    elemHeight: c,
                    collisionPosition: y,
                    collisionWidth: ft,
                    collisionHeight: et,
                    offset: [b[0] + v[0], b[1] + v[1]],
                    my: t.my,
                    at: t.at,
                    within: tt,
                    elem: s
                })
            });
            t.using && (d = function (n) {
                var u = w.left - o.left,
                    v = u + f - h,
                    e = w.top - o.top,
                    y = e + l - c,
                    a = {
                        target: {
                            element: g,
                            left: w.left,
                            top: w.top,
                            width: f,
                            height: l
                        },
                        element: {
                            element: s,
                            left: o.left,
                            top: o.top,
                            width: h,
                            height: c
                        },
                        horizontal: v < 0 ? "left" : u > 0 ? "right" : "center",
                        vertical: y < 0 ? "top" : e > 0 ? "bottom" : "middle"
                    };
                f < h && i(u + v) < f && (a.horizontal = "center");
                l < c && i(e + y) < l && (a.vertical = "middle");
                a.important = r(i(u), i(v)) > r(i(e), i(y)) ? "horizontal" : "vertical";
                t.using.call(this, n, a)
            });
            s.offset(n.extend(o, {
                using: d
            }))
        })
    };
    n.ui.position = {
            fit: {
                left: function (n, t) {
                    var e = t.within,
                        u = e.isWindow ? e.scrollLeft : e.offset.left,
                        o = e.width,
                        s = n.left - t.collisionPosition.marginLeft,
                        i = u - s,
                        f = s + t.collisionWidth - o - u,
                        h;
                    t.collisionWidth > o ? i > 0 && f <= 0 ? (h = n.left + i + t.collisionWidth - o - u, n.left += i - h) : n.left = f > 0 && i <= 0 ? u : i > f ? u + o - t.collisionWidth : u : i > 0 ? n.left += i : f > 0 ? n.left -= f : n.left = r(n.left - s, n.left)
                },
                top: function (n, t) {
                    var o = t.within,
                        u = o.isWindow ? o.scrollTop : o.offset.top,
                        e = t.within.height,
                        s = n.top - t.collisionPosition.marginTop,
                        i = u - s,
                        f = s + t.collisionHeight - e - u,
                        h;
                    t.collisionHeight > e ? i > 0 && f <= 0 ? (h = n.top + i + t.collisionHeight - e - u, n.top += i - h) : n.top = f > 0 && i <= 0 ? u : i > f ? u + e - t.collisionHeight : u : i > 0 ? n.top += i : f > 0 ? n.top -= f : n.top = r(n.top - s, n.top)
                }
            },
            flip: {
                left: function (n, t) {
                    var r = t.within,
                        y = r.offset.left + r.scrollLeft,
                        c = r.width,
                        o = r.isWindow ? r.scrollLeft : r.offset.left,
                        l = n.left - t.collisionPosition.marginLeft,
                        a = l - o,
                        v = l + t.collisionWidth - c - o,
                        u = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                        f = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                        e = -2 * t.offset[0],
                        s, h;
                    a < 0 ? (s = n.left + u + f + e + t.collisionWidth - c - y, (s < 0 || s < i(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - t.collisionPosition.marginLeft + u + f + e - o, (h > 0 || i(h) < v) && (n.left += u + f + e))
                },
                top: function (n, t) {
                    var r = t.within,
                        y = r.offset.top + r.scrollTop,
                        a = r.height,
                        o = r.isWindow ? r.scrollTop : r.offset.top,
                        v = n.top - t.collisionPosition.marginTop,
                        s = v - o,
                        h = v + t.collisionHeight - a - o,
                        p = t.my[1] === "top",
                        u = p ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                        f = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                        e = -2 * t.offset[1],
                        c, l;
                    s < 0 ? (l = n.top + u + f + e + t.collisionHeight - a - y, n.top + u + f + e > s && (l < 0 || l < i(s)) && (n.top += u + f + e)) : h > 0 && (c = n.top - t.collisionPosition.marginTop + u + f + e - o, n.top + u + f + e > h && (c > 0 || i(c) < h) && (n.top += u + f + e))
                }
            },
            flipfit: {
                left: function () {
                    n.ui.position.flip.left.apply(this, arguments);
                    n.ui.position.fit.left.apply(this, arguments)
                },
                top: function () {
                    n.ui.position.flip.top.apply(this, arguments);
                    n.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function () {
            var t, i, r, u, f, e = document.getElementsByTagName("body")[0],
                o = document.createElement("div");
            t = document.createElement(e ? "div" : "body");
            r = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            };
            e && n.extend(r, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (f in r) t.style[f] = r[f];
            t.appendChild(o);
            i = e || document.documentElement;
            i.insertBefore(t, i.firstChild);
            o.style.cssText = "position: absolute; left: 10.7432222px;";
            u = n(o).offset().left;
            n.support.offsetFractions = u > 10 && u < 11;
            t.innerHTML = "";
            i.removeChild(t)
        }()
})(jQuery);
(function (n) {
    var t = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    n.widget("ui.dialog", {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (t) {
                    var i = n(this).css(t).offset().top;
                    i < 0 && n(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            this.options.title = this.options.title || this.originalTitle;
            this._createWrapper();
            this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
            this._createTitlebar();
            this._createButtonPane();
            this.options.draggable && n.fn.draggable && this._makeDraggable();
            this.options.resizable && n.fn.resizable && this._makeResizable();
            this._isOpen = !1
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var n, t = this.originalPosition;
            this._destroyOverlay();
            this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
            this.uiDialog.stop(!0, !0).remove();
            this.originalTitle && this.element.attr("title", this.originalTitle);
            n = t.parent.children().eq(t.index);
            n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: n.noop,
        enable: n.noop,
        close: function (t) {
            var i, r = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement;
                    i && i.nodeName.toLowerCase() !== "body" && n(i).blur()
                } catch (u) {}
                this._hide(this.uiDialog, this.options.hide, function () {
                    r._trigger("close", t)
                })
            }
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (n, t) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !t && this._trigger("focus", n), i
        },
        open: function () {
            var t = this;
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this._isOpen = !0;
            this.opener = n(this.document[0].activeElement);
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, !0);
            this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable();
                t._trigger("focus")
            });
            this._trigger("open")
        },
        _focusTabbable: function () {
            var n = this.element.find("[autofocus]");
            n.length || (n = this.element.find(":tabbable"));
            n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
            n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
            n.length || (n = this.uiDialog);
            n.eq(0).focus()
        },
        _keepFocus: function (t) {
            function i() {
                var t = this.document[0].activeElement,
                    i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault();
            i.call(this);
            this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) {
                        t.preventDefault();
                        this.close(t);
                        return
                    }
                    if (t.keyCode === n.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"),
                            r = i.filter(":first"),
                            u = i.filter(":last");
                        t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (u.focus(1), t.preventDefault()) : (r.focus(1), t.preventDefault())
                    }
                },
                mousedown: function (n) {
                    this._moveToTop(n) && this._focusTabbable()
                }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
            this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            });
            this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
            this._on(this.uiDialogTitlebarClose, {
                click: function (n) {
                    n.preventDefault();
                    this.close(n)
                }
            });
            t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
            this._title(t);
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function (n) {
            this.options.title || n.html("&#160;");
            n.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
            this._createButtons()
        },
        _createButtons: function () {
            var i = this,
                t = this.options.buttons;
            if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            n.each(t, function (t, r) {
                var u, f;
                r = n.isFunction(r) ? {
                    click: r,
                    text: t
                } : r;
                r = n.extend({
                    type: "button"
                }, r);
                u = r.click;
                r.click = function () {
                    u.apply(i.element[0], arguments)
                };
                f = {
                    icons: r.icons,
                    text: r.showText
                };
                delete r.icons;
                delete r.showText;
                n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet)
            });
            this.uiDialog.addClass("ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function () {
            var t = this,
                r = this.options;

            function i(n) {
                return {
                    position: n.position,
                    offset: n.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (r, u) {
                    n(this).addClass("ui-dialog-dragging");
                    t._blockFrames();
                    t._trigger("dragStart", r, i(u))
                },
                drag: function (n, r) {
                    t._trigger("drag", n, i(r))
                },
                stop: function (u, f) {
                    r.position = [f.position.left - t.document.scrollLeft(), f.position.top - t.document.scrollTop()];
                    n(this).removeClass("ui-dialog-dragging");
                    t._unblockFrames();
                    t._trigger("dragStop", u, i(f))
                }
            })
        },
        _makeResizable: function () {
            var i = this,
                t = this.options,
                u = t.resizable,
                f = this.uiDialog.css("position"),
                e = typeof u == "string" ? u : "n,e,s,w,se,sw,ne,nw";

            function r(n) {
                return {
                    originalPosition: n.originalPosition,
                    originalSize: n.originalSize,
                    position: n.position,
                    size: n.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: t.maxWidth,
                maxHeight: t.maxHeight,
                minWidth: t.minWidth,
                minHeight: this._minHeight(),
                handles: e,
                start: function (t, u) {
                    n(this).addClass("ui-dialog-resizing");
                    i._blockFrames();
                    i._trigger("resizeStart", t, r(u))
                },
                resize: function (n, t) {
                    i._trigger("resize", n, r(t))
                },
                stop: function (u, f) {
                    t.height = n(this).height();
                    t.width = n(this).width();
                    n(this).removeClass("ui-dialog-resizing");
                    i._unblockFrames();
                    i._trigger("resizeStop", u, r(f))
                }
            }).css("position", f)
        },
        _minHeight: function () {
            var n = this.options;
            return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
        },
        _position: function () {
            var n = this.uiDialog.is(":visible");
            n || this.uiDialog.show();
            this.uiDialog.position(this.options.position);
            n || this.uiDialog.hide()
        },
        _setOptions: function (r) {
            var e = this,
                u = !1,
                f = {};
            n.each(r, function (n, r) {
                e._setOption(n, r);
                n in t && (u = !0);
                n in i && (f[n] = r)
            });
            u && (this._size(), this._position());
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f)
        },
        _setOption: function (n, t) {
            var u, r, i = this.uiDialog;
            (n === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t), n !== "disabled") && (this._super(n, t), n === "appendTo" && this.uiDialog.appendTo(this._appendTo()), n === "buttons" && this._createButtons(), n === "closeText" && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), n === "draggable" && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), n === "position" && this._position(), n === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), n === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, i, r, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            n.minWidth > n.width && (n.width = n.minWidth);
            t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight();
            i = Math.max(0, n.minHeight - t);
            r = typeof n.maxHeight == "number" ? Math.max(0, n.maxHeight - t) : "none";
            n.height === "auto" ? this.element.css({
                minHeight: i,
                maxHeight: r,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t));
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = n(this);
                return n("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (t) {
            return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var t = this,
                    i = this.widgetFullName;
                n.ui.dialog.overlayInstances || this._delay(function () {
                    n.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (r) {
                        t._allowInteraction(r) || (r.preventDefault(), n(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                });
                this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                });
                n.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function () {
            this.options.modal && this.overlay && (n.ui.dialog.overlayInstances--, n.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    });
    n.ui.dialog.overlayInstances = 0;
    n.uiBackCompat !== !1 && n.widget("ui.dialog", n.ui.dialog, {
        _position: function () {
            var t = this.options.position,
                i = [],
                r = [0, 0],
                u;
            t ? ((typeof t == "string" || typeof t == "object" && "0" in t) && (i = t.split ? t.split(" ") : [t[0], t[1]], i.length === 1 && (i[1] = i[0]), n.each(["left", "top"], function (n, t) {
                +i[n] === i[n] && (r[n] = i[n], i[n] = t)
            }), t = {
                my: i[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + i[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                at: i.join(" ")
            }), t = n.extend({}, n.ui.dialog.prototype.options.position, t)) : t = n.ui.dialog.prototype.options.position;
            u = this.uiDialog.is(":visible");
            u || this.uiDialog.show();
            this.uiDialog.position(t);
            u || this.uiDialog.hide()
        }
    })
})(jQuery);
/*! payoneer.urlhelper.js */
var tokenName = "qaz",
    csrf_AddTokenToLink = function (n, t) {
        var i;
        if (n.indexOf("#") != -1) {
            var r = n.split("#");
            (r.length = 2) && (n = r[0], i = r[1])
        }
        return n.indexOf(tokenName) == -1 && (n = n.indexOf("?") != -1 ? n + "&" + tokenName + "=" + t : n + "?" + tokenName + "=" + t), i != null && (n = n.concat("#", i)), n
    },
    csrf_isInHost = function (n) {
        return n.indexOf(document.location.host) >= 0 || n.indexOf("http") < 0
    },
    csrf_isHttpLink = function (n) {
        var t = 0;
        return (n.substring(0, 4) == "http" || n.substring(0, 1) == "/" || n.indexOf(":") == -1) && (t = 1), t
    },
    PayoneerRedirect = function (n, t, i) {
        var r = n;
        try {
            if (t != "undefined" && t) return i && parent.open ? parent.open(r) : window.open(r);
            !i && $.isFunction(parent.setParentUrl) ? parent.setParentUrl(r) : i ? parent.location.href = r : document.location.href = r
        } catch (u) {
            document.location.href = r
        }
    },
    csrf_GetLinkWithToken = function (n) {
        return n
    };

function topAllowed(n, t) {
    n = n || window;
    t = t || document.domain;
    try {
        return n != n.parent && t == n.parent.document.domain ? topAllowed(n.parent, t) : n
    } catch (i) {
        return n
    }
}
/*! jquery.payoneer.dialog.js */
(function (n) {
    n.payoneerDialog = function (t) {
        var i = n.extend({}, n.payoneerDialog.defaults, t);
        if (i.type == "ajaxError1") {
            var e = "OK";
            if (typeof ClientLocalization != "undefined") {
                var r = ClientLocalization.ConnectionLostMessage(),
                    u = ClientLocalization.ConnectionLostTitle(),
                    f = ClientLocalization.OK();
                r && r.length && !i.message && (i.message = r);
                u && u.length && !i.title && (i.title = u);
                f && f.length && (e = f)
            }
            i.message || (i.message = "Your session with the server has been lost. Please log in again.");
            i.title || (i.title = "Connection Lost");
            i.autoOpen = !0;
            i.buttons = [{
                text: e,
                click: function () {
                    n(this).payoneerDialog("close")
                }
            }];
            i.closeOnEscape = !1;
            i.open = function () {
                n(this).data("uiDialog").uiDialog.find(".ui-dialog-titlebar-close").remove();
                n(".ui-tooltip").hide()
            };
            i.close = function () {
                i.redirect != null && PayoneerRedirect(i.redirect)
            };
            i.resizable = !1
        } else if (!i.closable) {
            i.closeOnEscape = !1;
            var o = i.open;
            i.open = function (t, i) {
                n(this).data("uiDialog").uiDialog.find(".ui-dialog-titlebar-close").remove();
                n(".ui-tooltip").hide();
                o && o.call(this, t, i)
            }
        }
        var s = n("<div />");
        return i.message != "" && s.html("<p>" + i.message + "<\/p>"), s.dialog(i)
    };
    n.fn.payoneerDialog = function (t, i, r) {
        if (typeof t == "string") this.dialog(t, i, r);
        else {
            var u = n.extend({}, n.payoneerDialog.defaults, t);
            if (!u.closable) {
                u.closeOnEscape = !1;
                var f = u.open;
                u.open = function (t, i) {
                    n(this).data("uiDialog").uiDialog.find(".ui-dialog-titlebar-close").remove();
                    n(".ui-tooltip").hide();
                    f && f.call(this, t, i)
                }
            }
            this.dialog(u)
        }
        return this
    };
    n.payoneerDialog.defaults = {
        appendTo: "form:first",
        autoOpen: !1,
        buttons: {},
        closeOnEscape: !0,
        closeText: "close",
        dialogClass: "payoneerDialogClass",
        draggable: !0,
        height: "auto",
        hide: null,
        maxHeight: !1,
        maxWidth: !1,
        minHeight: 150,
        minWidth: 150,
        modal: !0,
        position: {
            my: "center",
            at: "center",
            of: window
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        cleanFieldsOnClose: !0,
        overlay: {
            backgroundColor: "#000",
            opacity: .5
        },
        message: "",
        type: "",
        closable: !0,
        beforeClose: function () {
            var t = n(this);
            if (t.find(":focus").blur(), n.fn.payoneerValidate && t.payoneerValidate("hide"), typeof t.attr("id") != "undefined" && t.attr("id") != "") {
                if (n(this).dialog("option", "cleanFieldsOnClose")) {
                    var i = n("#" + t.attr("id") + " :input").not("input[type = button], input[type = reset], input[type = submit]");
                    n(i).each(function () {
                        n(this).is('select,[type="radio"]') ? n(this).trigger("empty") : n(this).val("")
                    })
                }
                PayoneerTheme.isAvocado() && i.each(function (t, i) {
                    n(".formError." + i.getAttribute("id")).remove()
                })
            }
            return !0
        },
        close: function () {
            var t = n(this);
            if (typeof t.attr("id") != "undefined" && t.attr("id") != "") {
                if (n(this).dialog("option", "cleanFieldsOnClose")) {
                    var i = n("#" + t.attr("id") + " :input").not("input[type = button], input[type = reset], input[type = submit]");
                    n(i).each(function () {
                        n(this).is('select,[type="radio"]') ? n(this).trigger("empty") : n(this).val("")
                    })
                }
                PayoneerTheme.isAvocado() && i.each(function (t, i) {
                    n(".formError." + i.getAttribute("id")).remove()
                })
            }
            n(this).hide()
        },
        create: function () {
            var t;
            n(this).on("keyup", function (i) {
                return i.which == 13 && (t = n(this).dialog("option", "buttons").OK, t && t.apply()), t == undefined
            }).on("keypress", function (n) {
                return n.which != 13 || t == undefined
            }).on("keydown", function (n) {
                return n.which != 13 || t == undefined
            })
        }
    }
})(jQuery);
/*! json2.js */
this.JSON || (this.JSON = {}),
    function () {
        function i(n) {
            return n < 10 ? "0" + n : n
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + i(this.getUTCMonth() + 1) + "-" + i(this.getUTCDate()) + "T" + i(this.getUTCHours()) + ":" + i(this.getUTCMinutes()) + ":" + i(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
            return this.valueOf()
        });
        var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            n, r, s = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            t;

        function o(n) {
            return e.lastIndex = 0, e.test(n) ? '"' + n.replace(e, function (n) {
                var t = s[n];
                return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + n + '"'
        }

        function u(i, f) {
            var c, l, s, a, v = n,
                h, e = f[i];
            e && typeof e == "object" && typeof e.toJSON == "function" && (e = e.toJSON(i));
            typeof t == "function" && (e = t.call(f, i, e));
            switch (typeof e) {
                case "string":
                    return o(e);
                case "number":
                    return isFinite(e) ? String(e) : "null";
                case "boolean":
                case "null":
                    return String(e);
                case "object":
                    if (!e) return "null";
                    if (n += r, h = [], Object.prototype.toString.apply(e) === "[object Array]") {
                        for (a = e.length, c = 0; c < a; c += 1) h[c] = u(c, e) || "null";
                        return s = h.length === 0 ? "[]" : n ? "[\n" + n + h.join(",\n" + n) + "\n" + v + "]" : "[" + h.join(",") + "]", n = v, s
                    }
                    if (t && typeof t == "object")
                        for (a = t.length, c = 0; c < a; c += 1) l = t[c], typeof l == "string" && (s = u(l, e), s && h.push(o(l) + (n ? ": " : ":") + s));
                    else
                        for (l in e) Object.hasOwnProperty.call(e, l) && (s = u(l, e), s && h.push(o(l) + (n ? ": " : ":") + s));
                    return s = h.length === 0 ? "{}" : n ? "{\n" + n + h.join(",\n" + n) + "\n" + v + "}" : "{" + h.join(",") + "}", n = v, s
            }
        }
        typeof JSON.stringify != "function" && (JSON.stringify = function (i, f, e) {
            var o;
            if (n = "", r = "", typeof e == "number")
                for (o = 0; o < e; o += 1) r += " ";
            else typeof e == "string" && (r = e);
            if (t = f, f && typeof f != "function" && (typeof f != "object" || typeof f.length != "number")) throw new Error("JSON.stringify");
            return u("", {
                "": i
            })
        });
        typeof JSON.parse != "function" && (JSON.parse = function (n, t) {
            var i;

            function r(n, i) {
                var f, e, u = n[i];
                if (u && typeof u == "object")
                    for (f in u) Object.hasOwnProperty.call(u, f) && (e = r(u, f), e !== undefined ? u[f] = e : delete u[f]);
                return t.call(n, i, u)
            }
            if (f.lastIndex = 0, f.test(n) && (n = n.replace(f, function (n) {
                    return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return i = eval("(" + n + ")"), typeof t == "function" ? r({
                "": i
            }, "") : i;
            throw new SyntaxError("JSON.parse");
        })
    }();
/*! jquery.payoneer.ajax.js */
(function (n) {
    n.ajaxSetup({
        cache: !1
    });
    var t = !1;
    n.payoneerAjax = function (i) {
        var u, r = n.extend({}, n.payoneerAjax.defaults, i);
        if (r.callerButton ? (u = n(r.callerButton), u.length == 1 && u.trigger("disable", !0)) : PayoneerTheme.isAvocado() && r.ignoreCallerButton == !1 ? (u = n("[data-ajaxdisabled]"), u.length == 1 && (u.removeData("ajaxdisabled"), u.trigger("disable"))) : u = n(), r.isNotMoreThenOneAjax && t) {
            r.notMoreThanOneAjax();
            return
        }
        t = !0;
        var e = r.url + r.data;
        if (r.isUseCache && n.jCache.hasItem(e)) {
            var v = n.jCache.getItem(e);
            r.success(v);
            t = !1;
            return
        }
        if (r.loadingObj && r.loadingObj.payoneerLoading(), r.progressObj && (r.progressObjFadeIn > 0 ? r.progressObj.fadeIn(r.progressObjFadeIn) : r.progressObj.show()), n("#qaz").length === 1) {
            var f = {};
            r.data && (f = JSON.parse(r.data));
            n.extend(f, {
                PayoneerInternalId: n("#qaz").val()
            });
            r.data = JSON.stringify(f)
        }
        var s = n("#userPrefs");
        if (s.length) {
            typeof collectCPCOnSubmit == "function" && collectCPCOnSubmit();
            var f = {};
            r.data && (f = JSON.parse(r.data));
            n.extend(f, {
                userPrefs: s.val()
            });
            r.data = JSON.stringify(f)
        }
        var h = n("#rsa_deviceprint");
        if (h.length) {
            var f = {};
            r.data && (f = JSON.parse(r.data));
            n.extend(f, {
                rsa_deviceprint: h.val()
            });
            r.data = JSON.stringify(f)
        }
        var c = n("#rsa_devicefso");
        if (c.length) {
            var f = {};
            r.data && (f = JSON.parse(r.data));
            n.extend(f, {
                rsa_devicefso: c.val()
            });
            r.data = JSON.stringify(f)
        }
        r.beforeStart();
        n.ajax({
            type: "POST",
            url: r.url,
            data: r.data,
            timeout: r.timeout,
            contentType: "application/json; charset=utf-8",
            dataType: r.dataType,
            success: function (i, f, s) {
                if (t = !1, o(s)) r.error(), l(s) ? a(s) : PayoneerRedirect(s.getResponseHeader("NewLocation"));
                else {
                    var h = typeof i != "undefined" && typeof i.d != "undefined" ? i.d : null;
                    if (h || r.dataType != "html" || (h = i), h == null && typeof trackJs != "undefined" && trackJs.track("Error from payoneer.ajax: theValue = null ; value = " + JSON.stringify(i) + " ; xhr = " + JSON.stringify(s)), h !== null && h !== undefined && (r.callerButton || r.isAnalyze)) {
                        var c = JSON.parse(h);
                        if (u.length && c !== null && c !== undefined && c.EnableCallerButton !== undefined ? u.data("pendingEnable", c.EnableCallerButton) : u.data("pendingEnable", !0), c !== null && c !== undefined && c.runChallenge) {
                            rsaChallenge();
                            return
                        }
                    }
                    r.isUseCache && n.jCache.setItem(e, h);
                    r.success(h, f, s)
                }
                r.loadingObj && r.loadingObj.payoneerLoading("destroy")
            },
            error: function (i, u, f) {
                if (t = !1, typeof trackJs != "undefined" && trackJs.track("Error from payoneer.ajax: textStatus = " + u + " ; errorThrown = " + f + " ; xhr = " + JSON.stringify(i)), r.error(i, u, f), r.loadingObj && r.loadingObj.payoneerLoading("destroy"), o(i)) l(i) ? a(i) : PayoneerRedirect(i.getResponseHeader("NewLocation"));
                else if (r.showDialogOnError) {
                    var s = n,
                        e = topAllowed();
                    n.isFunction(e.$) && e.$.fn.payoneerDialog && (s = e.$);
                    s.payoneerDialog({
                        type: "ajaxError"
                    })
                }
            },
            complete: function (n, i) {
                var f = o(n);
                u && (f || (!r.callerButton || u.data("pendingEnable")) && u.removeData("pendingEnable").trigger("enable"));
                t = !1;
                !f && r.progressObj && (r.progressObjFadeOut > 0 ? r.progressObj.fadeOut(r.progressObjFadeOut) : r.progressObj.hide());
                r.complete(n, i)
            }
        });
        var o = function (n) {
                return n.getResponseHeader("NewLocation")
            },
            l = function (n) {
                return n.getResponseHeader("ShowDialog")
            },
            a = function (t) {
                var r = n,
                    i = topAllowed();
                n.isFunction(i.$) && i.$.fn.payoneerDialog && (r = i.$);
                r.payoneerDialog({
                    type: "ajaxError",
                    message: t.getResponseHeader("DialogMessage"),
                    title: t.getResponseHeader("DialogTitle"),
                    redirect: t.getResponseHeader("NewLocation")
                })
            }
    };
    n.payoneerAjax.defaults = {
        url: "",
        data: "{ }",
        success: function () {},
        error: function () {},
        complete: function () {},
        beforeStart: function () {},
        notMoreThanOneAjax: function () {},
        showDialogOnError: !0,
        loadingObj: null,
        progressObj: null,
        progressObjFadeIn: 0,
        progressObjFadeOut: 0,
        isNotMoreThenOneAjax: !1,
        isUseCache: !1,
        isAnalyze: !1,
        ignoreCallerButton: !1
    }
})(jQuery),
function (n) {
    var t = !1;
    n.fn.payoneerLoad = function (i) {
        return this.each(function () {
            var s = n(this),
                r = n.extend({}, n.payoneerAjax.defaults, i);
            if (!r.isNotMoreThenOneAjax || !t) {
                t = !0;
                var u = r.url + n.param(r.data);
                if (r.isUseCache && n.jCache.hasItem(u)) {
                    var f = n.jCache.getItem(u);
                    r.success.call(this, f);
                    t = !1;
                    var e = r.url.indexOf(" ");
                    if (e >= 0) var o = r.url.slice(e, r.url.length);
                    var h = n(this);
                    h.html(o ? jQuery("<div/>").append(f.replace(/<script(.|\s)*?\/script>/g, "")).find(o) : f);
                    return
                }
                s.payoneerInternalLoad(r.url, r.data, function (i, f, e) {
                    t = !1;
                    e.getResponseHeader("NewLocation") ? (r.error.call(this, i, f, e), r.showDialogOnError ? n.payoneerDialog({
                        type: "ajaxError",
                        redirect: e.getResponseHeader("NewLocation")
                    }) : PayoneerRedirect(e.getResponseHeader("NewLocation"))) : e.status != 200 ? (r.error.call(this, i, f, e), r.showDialogOnError && n.payoneerDialog({
                        type: "ajaxError"
                    })) : (r.isUseCache && n.jCache.setItem(u, i), r.success.call(this, i, f, e))
                })
            }
        })
    };
    n.fn.payoneerLoad.defaults = {
        url: "",
        data: null,
        success: function () {},
        error: function () {},
        showDialogOnError: !0,
        callerButton: !1,
        isNotMoreThenOneAjax: !1,
        isUseCache: !1
    }
}(jQuery),
function (n) {
    n.fn.payoneerInternalLoad = function (t, i, r) {
        if (typeof t != "string") return this._load(t);
        if (!this.length) return this;
        var u = t.indexOf(" ");
        if (u >= 0) {
            var f = t.slice(u, t.length);
            t = t.slice(0, u)
        }
        var e = "GET";
        i && (jQuery.isFunction(i) ? (r = i, i = null) : typeof i == "object" && (i = jQuery.param(i, jQuery.ajaxSettings.traditional), e = "POST"));
        var o = this;
        return n.payoneerAjax({
            url: t,
            type: e,
            dataType: "html",
            data: i,
            complete: function (n, t) {
                if (t === "success" || t === "notmodified") o.html(f ? jQuery("<div />").append(n.responseText.replace(/<script(.|\s)*?\/script>/gi, "")).find(f) : n.responseText);
                r && o.each(r, [n.responseText, t, n])
            }
        }), this
    }
}(jQuery);
/*! jquery.watermark.js */
(function (n, t, i) {
    var u = "watermark",
        f = "watermarkClass",
        h = "watermarkFocus",
        s = "watermarkSubmit",
        c = "watermarkMaxLength",
        e = "watermarkPassword",
        r = "watermarktext",
        o = /\r/g,
        p = /^(button|checkbox|hidden|image|radio|range|reset|submit)$/i,
        y = "input:data(" + u + "),textarea:data(" + u + ")",
        l = ":watermarkable",
        a = ["Page_ClientValidate"],
        v = !1,
        w = "placeholder" in document.createElement("input");
    n.watermark = n.watermark || {
        version: "3.1.4",
        runOnce: !0,
        options: {
            className: "watermark",
            useNative: !0,
            hideBeforeUnload: !0
        },
        hide: function (t) {
            n(t).filter(y).each(function () {
                n.watermark._hide(n(this))
            })
        },
        _hide: function (n, i) {
            var h = n[0],
                y = (h.value || "").replace(o, ""),
                l = n.data(r) || "",
                a = n.data(c) || 0,
                v = n.data(f);
            if (l.length && y == l) {
                if (h.value = "", n.data(e) && (n.attr("type") || "") === "text") {
                    var u = n.data(e) || [],
                        s = n.parent() || [];
                    u.length && s.length && (s[0].removeChild(n[0]), s[0].appendChild(u[0]), n = u)
                }
                a && (n.attr("maxLength", a), n.removeData(c));
                i && (n.attr("autocomplete", "off"), t.setTimeout(function () {
                    n.select()
                }, 1))
            }
            v && n.removeClass(v)
        },
        show: function (t) {
            n(t).filter(y).each(function () {
                n.watermark._show(n(this))
            })
        },
        _show: function (t) {
            var u = t[0],
                p = (u.value || "").replace(o, ""),
                i = t.data(r) || "",
                s = t.attr("type") || "",
                w = t.data(f);
            if (p.length != 0 && p != i || t.data(h)) n.watermark._hide(t);
            else {
                if (v = !0, t.data(e) && s === "password") {
                    var l = t.data(e) || [],
                        a = t.parent() || [];
                    l.length && a.length && (a[0].removeChild(t[0]), a[0].appendChild(l[0]), t = l, t.attr("maxLength", i.length), u = t[0])
                }
                if (s === "text" || s === "search") {
                    var y = t.attr("maxLength") || 0;
                    y > 0 && i.length > y && (t.data(c, y), t.attr("maxLength", i.length))
                }
                w && t.addClass(w);
                u.value = i
            }
        },
        hideAll: function () {
            v && (n.watermark.hide(l), v = !1)
        },
        showAll: function () {
            n.watermark.show(l)
        }
    };
    n.fn.watermark = n.fn.watermark || function (i, c) {
        if (!this.length) return this;
        var v = !1,
            a = typeof i == "string";
        return a && (i = i.replace(o, "")), typeof c == "object" ? (v = typeof c.className == "string", c = n.extend({}, n.watermark.options, c)) : typeof c == "string" ? (v = !0, c = n.extend({}, n.watermark.options, {
            className: c
        })) : c = n.watermark.options, typeof c.useNative != "function" && (c.useNative = c.useNative ? function () {
            return !0
        } : function () {
            return !1
        }), this.each(function () {
            var y = n(this);
            if (y.is(l)) {
                if (y.data(u))(a || v) && (n.watermark._hide(y), a && y.data(r, i), v && y.data(f, c.className));
                else {
                    if (w && c.useNative.call(this, y) && (y.attr("tagName") || "") !== "TEXTAREA") {
                        a && y.attr("placeholder", i);
                        return
                    }
                    if (y.data(r, a ? i : ""), y.data(f, c.className), y.data(u, 1), (y.attr("type") || "") === "password") {
                        var d = y.wrap("<span>").parent(),
                            p = n(d.html().replace(/type=["']?password["']?/i, 'type="text"'));
                        p.data(r, y.data(r));
                        p.data(f, y.data(f));
                        p.data(u, 1);
                        p.attr("maxLength", i.length);
                        p.focus(function () {
                            n.watermark._hide(p, !0)
                        }).bind("dragenter", function () {
                            n.watermark._hide(p)
                        }).bind("dragend", function () {
                            t.setTimeout(function () {
                                p.blur()
                            }, 1)
                        });
                        y.blur(function () {
                            n.watermark._show(y)
                        }).bind("dragleave", function () {
                            n.watermark._show(y)
                        });
                        p.data(e, y);
                        y.data(e, p)
                    } else y.focus(function () {
                        y.data(h, 1);
                        n.watermark._hide(y, !0)
                    }).blur(function () {
                        y.data(h, 0);
                        n.watermark._show(y)
                    }).bind("dragenter", function () {
                        n.watermark._hide(y)
                    }).bind("dragleave", function () {
                        n.watermark._show(y)
                    }).bind("dragend", function () {
                        t.setTimeout(function () {
                            n.watermark._show(y)
                        }, 1)
                    }).bind("drop", function (n) {
                        var t = y[0],
                            i = n.originalEvent.dataTransfer.getData("Text");
                        (t.value || "").replace(o, "").replace(i, "") === y.data(r) && (t.value = i);
                        y.focus()
                    });
                    if (this.form) {
                        var b = this.form,
                            k = n(b);
                        k.data(s) || (k.submit(n.watermark.hideAll), b.submit ? (k.data(s, b.submit), b.submit = function (t, i) {
                            return function () {
                                var r = i.data(s);
                                n.watermark.hideAll();
                                r.apply ? r.apply(t, Array.prototype.slice.call(arguments)) : r()
                            }
                        }(b, k)) : (k.data(s, 1), b.submit = function (t) {
                            return function () {
                                n.watermark.hideAll();
                                delete t.submit;
                                t.submit()
                            }
                        }(b)))
                    }
                }
                n.watermark._show(y)
            }
        })
    };
    n.watermark.runOnce && (n.watermark.runOnce = !1, n.extend(n.expr[":"], {
        data: n.expr.createPseudo ? n.expr.createPseudo(function (t) {
            return function (i) {
                return !!n.data(i, t)
            }
        }) : function (t, i, r) {
            return !!n.data(t, r[3])
        },
        watermarkable: function (n) {
            var t, i = n.nodeName;
            return i === "TEXTAREA" ? !0 : i !== "INPUT" ? !1 : (t = n.getAttribute("type"), !t || !p.test(t))
        }
    }), function (t) {
        n.fn.val = function () {
            var f = Array.prototype.slice.call(arguments);
            if (!this.length) return f.length ? this : i;
            if (f.length) return t.apply(this, f), n.watermark.show(this), this;
            if (this.data(u)) {
                var e = (this[0].value || "").replace(o, "");
                return e === (this.data(r) || "") ? "" : e
            }
            return t.apply(this)
        }
    }(n.fn.val), a.length && n(function () {
        for (var r, u, i = a.length - 1; i >= 0; i--) r = a[i], u = t[r], typeof u == "function" && (t[r] = function (t) {
            return function () {
                return n.watermark.hideAll(), t.apply(null, Array.prototype.slice.call(arguments))
            }
        }(u))
    }), n(t).bind("beforeunload", function () {
        n.watermark.options.hideBeforeUnload && n.watermark.hideAll()
    }))
})(jQuery, window),
function (n) {
    var t = "input-placeholder";
    n.fn.payoneerWatermark = function () {
        return this.filter(".selectCustom").each(function () {
            var i = n(this),
                r = i.next("span"),
                u = function () {
                    i.prop("disabled") || r.addClass(t).children("span").text(i.attr("placeholder"))
                };
            i.on("change", function () {
                r.removeClass(t)
            }).on("empty", u).on("disable", function () {
                r.hasClass(t) && r.children("span").html("&nbsp;")
            }).on("enable", function () {
                r.hasClass(t) && i.trigger("empty")
            });
            i.hasClass("hasValue") || u()
        }), this.filter("input, textarea").each(function () {
            var i = n(this);
            i.watermark(i.attr("placeholder"), {
                className: t
            })
        }), this
    }
}(jQuery);
$(document).ready(function () {
    $(".watermark").payoneerWatermark()
});
(function (n, t) {
    var i = "ui-effects-";
    n.effects = {
            effect: {}
        },
        function (n, t) {
            var a = /^([\-+])=\s*(\d+\.?\d*)/,
                v = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (n) {
                        return [n[1], n[2], n[3], n[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (n) {
                        return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (n) {
                        return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (n) {
                        return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (n) {
                        return [n[1], n[2] / 100, n[3] / 100, n[4]]
                    }
                }],
                i = n.Color = function (t, i, r, u) {
                    return new n.Color.fn.parse(t, i, r, u)
                },
                u = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                s = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                h = i.support = {},
                c = n("<p>")[0],
                f, r = n.each;
            c.style.cssText = "background-color:rgba(1,1,1,.5)";
            h.rgba = c.style.backgroundColor.indexOf("rgba") > -1;
            r(u, function (n, t) {
                t.cache = "_" + n;
                t.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            });

            function e(n, t, i) {
                var r = s[t.type] || {};
                return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n)) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : r.max < n ? r.max : n
            }

            function l(t) {
                var e = i(),
                    o = e._rgba = [];
                return (t = t.toLowerCase(), r(v, function (n, i) {
                    var r, s = i.re.exec(t),
                        h = s && i.parse(s),
                        f = i.space || "rgba";
                    if (h) return r = e[f](h), e[u[f].cache] = r[u[f].cache], o = e._rgba = r._rgba, !1
                }), o.length) ? (o.join() === "0,0,0,0" && n.extend(o, f.transparent), e) : f[t]
            }
            i.fn = n.extend(i.prototype, {
                parse: function (o, s, h, c) {
                    if (o === t) return this._rgba = [null, null, null, null], this;
                    (o.jquery || o.nodeType) && (o = n(o).css(s), s = t);
                    var a = this,
                        v = n.type(o),
                        y = this._rgba = [];
                    return (s !== t && (o = [o, s, h, c], v = "array"), v === "string") ? this.parse(l(o) || f._default) : v === "array" ? (r(u.rgba.props, function (n, t) {
                        y[t.idx] = e(o[t.idx], t)
                    }), this) : v === "object" ? (o instanceof i ? r(u, function (n, t) {
                        o[t.cache] && (a[t.cache] = o[t.cache].slice())
                    }) : r(u, function (t, i) {
                        var u = i.cache;
                        r(i.props, function (n, t) {
                            if (!a[u] && i.to) {
                                if (n === "alpha" || o[n] == null) return;
                                a[u] = i.to(a._rgba)
                            }
                            a[u][t.idx] = e(o[n], t, !0)
                        });
                        a[u] && n.inArray(null, a[u].slice(0, 3)) < 0 && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
                    }), this) : void 0
                },
                is: function (n) {
                    var e = i(n),
                        t = !0,
                        f = this;
                    return r(u, function (n, i) {
                        var o, u = e[i.cache];
                        return u && (o = f[i.cache] || i.to && i.to(f._rgba) || [], r(i.props, function (n, i) {
                            if (u[i.idx] != null) return t = u[i.idx] === o[i.idx]
                        })), t
                    }), t
                },
                _space: function () {
                    var n = [],
                        t = this;
                    return r(u, function (i, r) {
                        t[r.cache] && n.push(i)
                    }), n.pop()
                },
                transition: function (n, t) {
                    var f = i(n),
                        c = f._space(),
                        o = u[c],
                        l = this.alpha() === 0 ? i("transparent") : this,
                        a = l[o.cache] || o.to(l._rgba),
                        h = a.slice();
                    return f = f[o.cache], r(o.props, function (n, i) {
                        var c = i.idx,
                            r = a[c],
                            u = f[c],
                            o = s[i.type] || {};
                        u !== null && (r === null ? h[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), h[c] = e((u - r) * t + r, i)))
                    }), this[c](h)
                },
                blend: function (t) {
                    if (this._rgba[3] === 1) return this;
                    var r = this._rgba.slice(),
                        u = r.pop(),
                        f = i(t)._rgba;
                    return i(n.map(r, function (n, t) {
                        return (1 - u) * f[t] + u * n
                    }))
                },
                toRgbaString: function () {
                    var i = "rgba(",
                        t = n.map(this._rgba, function (n, t) {
                            return n == null ? t > 2 ? 1 : 0 : n
                        });
                    return t[3] === 1 && (t.pop(), i = "rgb("), i + t.join() + ")"
                },
                toHslaString: function () {
                    var i = "hsla(",
                        t = n.map(this.hsla(), function (n, t) {
                            return n == null && (n = t > 2 ? 1 : 0), t && t < 3 && (n = Math.round(n * 100) + "%"), n
                        });
                    return t[3] === 1 && (t.pop(), i = "hsl("), i + t.join() + ")"
                },
                toHexString: function (t) {
                    var i = this._rgba.slice(),
                        r = i.pop();
                    return t && i.push(~~(r * 255)), "#" + n.map(i, function (n) {
                        return n = (n || 0).toString(16), n.length === 1 ? "0" + n : n
                    }).join("")
                },
                toString: function () {
                    return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
                }
            });
            i.fn.parse.prototype = i.fn;

            function o(n, t, i) {
                return (i = (i + 1) % 1, i * 6 < 1) ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
            }
            u.hsla.to = function (n) {
                if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
                var i = n[0] / 255,
                    r = n[1] / 255,
                    f = n[2] / 255,
                    s = n[3],
                    u = Math.max(i, r, f),
                    e = Math.min(i, r, f),
                    t = u - e,
                    o = u + e,
                    h = o * .5,
                    c, l;
                return c = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, l = t === 0 ? 0 : h <= .5 ? t / o : t / (2 - o), [Math.round(c) % 360, l, h, s == null ? 1 : s]
            };
            u.hsla.from = function (n) {
                if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
                var r = n[0] / 360,
                    u = n[1],
                    t = n[2],
                    e = n[3],
                    i = t <= .5 ? t * (1 + u) : t + u - t * u,
                    f = 2 * t - i;
                return [Math.round(o(f, i, r + 1 / 3) * 255), Math.round(o(f, i, r) * 255), Math.round(o(f, i, r - 1 / 3) * 255), e]
            };
            r(u, function (u, f) {
                var s = f.props,
                    o = f.cache,
                    h = f.to,
                    c = f.from;
                i.fn[u] = function (u) {
                    if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice();
                    var l, a = n.type(u),
                        v = a === "array" || a === "object" ? u : arguments,
                        f = this[o].slice();
                    return r(s, function (n, t) {
                        var i = v[a === "object" ? n : t.idx];
                        i == null && (i = f[t.idx]);
                        f[t.idx] = e(i, t)
                    }), c ? (l = i(c(f)), l[o] = f, l) : i(f)
                };
                r(s, function (t, r) {
                    i.fn[t] || (i.fn[t] = function (i) {
                        var f = n.type(i),
                            h = t === "alpha" ? this._hsla ? "hsla" : "rgba" : u,
                            o = this[h](),
                            s = o[r.idx],
                            e;
                        return f === "undefined" ? s : (f === "function" && (i = i.call(this, s), f = n.type(i)), i == null && r.empty) ? this : (f === "string" && (e = a.exec(i), e && (i = s + parseFloat(e[2]) * (e[1] === "+" ? 1 : -1))), o[r.idx] = i, this[h](o))
                    })
                })
            });
            i.hook = function (t) {
                var u = t.split(" ");
                r(u, function (t, r) {
                    n.cssHooks[r] = {
                        set: function (t, u) {
                            var o, f, e = "";
                            if (u !== "transparent" && (n.type(u) !== "string" || (o = l(u)))) {
                                if (u = i(o || u), !h.rgba && u._rgba[3] !== 1) {
                                    for (f = r === "backgroundColor" ? t.parentNode : t;
                                        (e === "" || e === "transparent") && f && f.style;) try {
                                        e = n.css(f, "backgroundColor");
                                        f = f.parentNode
                                    } catch (s) {}
                                    u = u.blend(e && e !== "transparent" ? e : "_default")
                                }
                                u = u.toRgbaString()
                            }
                            try {
                                t.style[r] = u
                            } catch (s) {}
                        }
                    };
                    n.fx.step[r] = function (t) {
                        t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
                        n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                })
            };
            i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
            n.cssHooks.borderColor = {
                expand: function (n) {
                    var t = {};
                    return r(["Top", "Right", "Bottom", "Left"], function (i, r) {
                        t["border" + r + "Color"] = n
                    }), t
                }
            };
            f = n.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function () {
            var r = ["add", "remove", "toggle"],
                u = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
                n.fx.step[i] = function (n) {
                    (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (jQuery.style(n.elem, i, n.end), n.setAttr = !0)
                }
            });

            function i(t) {
                var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                    f = {};
                if (i && i.length && i[0] && i[i[0]])
                    for (u = i.length; u--;) r = i[u], typeof i[r] == "string" && (f[n.camelCase(r)] = i[r]);
                else
                    for (r in i) typeof i[r] == "string" && (f[r] = i[r]);
                return f
            }

            function f(t, i) {
                var e = {},
                    r, f;
                for (r in i) f = i[r], t[r] !== f && (u[r] || (n.fx.step[r] || !isNaN(parseFloat(f))) && (e[r] = f));
                return e
            }
            n.fn.addBack || (n.fn.addBack = function (n) {
                return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
            });
            n.effects.animateClass = function (t, u, e, o) {
                var s = n.speed(u, e, o);
                return this.queue(function () {
                    var e = n(this),
                        h = e.attr("class") || "",
                        o, u = s.children ? e.find("*").addBack() : e;
                    u = u.map(function () {
                        var t = n(this);
                        return {
                            el: t,
                            start: i(this)
                        }
                    });
                    o = function () {
                        n.each(r, function (n, i) {
                            t[i] && e[i + "Class"](t[i])
                        })
                    };
                    o();
                    u = u.map(function () {
                        return this.end = i(this.el[0]), this.diff = f(this.start, this.end), this
                    });
                    e.attr("class", h);
                    u = u.map(function () {
                        var i = this,
                            t = n.Deferred(),
                            r = n.extend({}, s, {
                                queue: !1,
                                complete: function () {
                                    t.resolve(i)
                                }
                            });
                        return this.el.animate(this.diff, r), t.promise()
                    });
                    n.when.apply(n, u.get()).done(function () {
                        o();
                        n.each(arguments, function () {
                            var t = this.el;
                            n.each(this.diff, function (n) {
                                t.css(n, "")
                            })
                        });
                        s.complete.call(e[0])
                    })
                })
            };
            n.fn.extend({
                addClass: function (t) {
                    return function (i, r, u, f) {
                        return r ? n.effects.animateClass.call(this, {
                            add: i
                        }, r, u, f) : t.apply(this, arguments)
                    }
                }(n.fn.addClass),
                removeClass: function (t) {
                    return function (i, r, u, f) {
                        return arguments.length > 1 ? n.effects.animateClass.call(this, {
                            remove: i
                        }, r, u, f) : t.apply(this, arguments)
                    }
                }(n.fn.removeClass),
                toggleClass: function (i) {
                    return function (r, u, f, e, o) {
                        return typeof u == "boolean" || u === t ? f ? n.effects.animateClass.call(this, u ? {
                            add: r
                        } : {
                            remove: r
                        }, f, e, o) : i.apply(this, arguments) : n.effects.animateClass.call(this, {
                            toggle: r
                        }, u, f, e)
                    }
                }(n.fn.toggleClass),
                switchClass: function (t, i, r, u, f) {
                    return n.effects.animateClass.call(this, {
                        add: i,
                        remove: t
                    }, r, u, f)
                }
            })
        }(),
        function () {
            n.extend(n.effects, {
                version: "1.10.4",
                save: function (n, t) {
                    for (var r = 0; r < t.length; r++) t[r] !== null && n.data(i + t[r], n[0].style[t[r]])
                },
                restore: function (n, r) {
                    for (var f, u = 0; u < r.length; u++) r[u] !== null && (f = n.data(i + r[u]), f === t && (f = ""), n.css(r[u], f))
                },
                setMode: function (n, t) {
                    return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
                },
                getBaseline: function (n, t) {
                    var i, r;
                    switch (n[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = n[0] / t.height
                    }
                    switch (n[1]) {
                        case "left":
                            r = 0;
                            break;
                        case "center":
                            r = .5;
                            break;
                        case "right":
                            r = 1;
                            break;
                        default:
                            r = n[1] / t.width
                    }
                    return {
                        x: r,
                        y: i
                    }
                },
                createWrapper: function (t) {
                    if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                    var i = {
                            width: t.outerWidth(!0),
                            height: t.outerHeight(!0),
                            float: t.css("float")
                        },
                        u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        f = {
                            width: t.width(),
                            height: t.height()
                        },
                        r = document.activeElement;
                    try {
                        r.id
                    } catch (e) {
                        r = document.body
                    }
                    return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), t.css("position") === "static" ? (u.css({
                        position: "relative"
                    }), t.css({
                        position: "relative"
                    })) : (n.extend(i, {
                        position: t.css("position"),
                        zIndex: t.css("z-index")
                    }), n.each(["top", "left", "bottom", "right"], function (n, r) {
                        i[r] = t.css(r);
                        isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                    }), t.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), t.css(f), u.css(i).show()
                },
                removeWrapper: function (t) {
                    var i = document.activeElement;
                    return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t
                },
                setTransition: function (t, i, r, u) {
                    return u = u || {}, n.each(i, function (n, i) {
                        var f = t.cssUnit(i);
                        f[0] > 0 && (u[i] = f[0] * r + f[1])
                    }), u
                }
            });

            function r(t, i, r, u) {
                return n.isPlainObject(t) && (i = t, t = t.effect), t = {
                    effect: t
                }, i == null && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
            }

            function u(t) {
                return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? !0 : n.isFunction(t) ? !0 : typeof t == "object" && !t.effect ? !0 : !1
            }
            n.fn.extend({
                effect: function () {
                    var t = r.apply(this, arguments),
                        i = t.mode,
                        u = t.queue,
                        f = n.effects.effect[t.effect];

                    function e(i) {
                        var r = n(this),
                            e = t.complete,
                            u = t.mode;

                        function o() {
                            n.isFunction(e) && e.call(r[0]);
                            n.isFunction(i) && i()
                        }(r.is(":hidden") ? u === "hide" : u === "show") ? (r[u](), o()) : f.call(r[0], t, o)
                    }
                    return n.fx.off || !f ? i ? this[i](t.duration, t.complete) : this.each(function () {
                        t.complete && t.complete.call(this)
                    }) : u === !1 ? this.each(e) : this.queue(u || "fx", e)
                },
                show: function (n) {
                    return function (t) {
                        if (u(t)) return n.apply(this, arguments);
                        var i = r.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(n.fn.show),
                hide: function (n) {
                    return function (t) {
                        if (u(t)) return n.apply(this, arguments);
                        var i = r.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(n.fn.hide),
                toggle: function (n) {
                    return function (t) {
                        if (u(t) || typeof t == "boolean") return n.apply(this, arguments);
                        var i = r.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(n.fn.toggle),
                cssUnit: function (t) {
                    var i = this.css(t),
                        r = [];
                    return n.each(["em", "px", "%", "pt"], function (n, t) {
                        i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                    }), r
                }
            })
        }(),
        function () {
            var t = {};
            n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (n, i) {
                t[i] = function (t) {
                    return Math.pow(t, n + 2)
                }
            });
            n.extend(t, {
                Sine: function (n) {
                    return 1 - Math.cos(n * Math.PI / 2)
                },
                Circ: function (n) {
                    return 1 - Math.sqrt(1 - n * n)
                },
                Elastic: function (n) {
                    return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
                },
                Back: function (n) {
                    return n * n * (3 * n - 2)
                },
                Bounce: function (n) {
                    for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
                }
            });
            n.each(t, function (t, i) {
                n.easing["easeIn" + t] = i;
                n.easing["easeOut" + t] = function (n) {
                    return 1 - i(1 - n)
                };
                n.easing["easeInOut" + t] = function (n) {
                    return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
                }
            })
        }()
})(jQuery);
/*! jquery.validate.js */
(function (n) {
    n.extend(n.fn, {
        validate: function (t) {
            if (!this.length) {
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                return
            }
            var i = n.data(this[0], "validator");
            return i ? i : (document.body.classList !== undefined && this.is("form") && this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(t.target).hasClass("cancel") && (i.cancelSubmit = !0);
                n(t.target).attr("formnovalidate") !== undefined && (i.cancelSubmit = !0)
            }), this.submit(function (t) {
                i.settings.debug && t.preventDefault();

                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                }
                return i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function () {
            if (n(this[0]).is("form")) return this.validate().form();
            var t = !0,
                i = n(this[0].form).validate();
            return this.each(function () {
                t = t && i.element(this)
            }), t
        },
        removeAttrs: function (t) {
            var i = {},
                r = this;
            return n.each(t.split(/\s/), function (n, t) {
                i[t] = r.attr(t);
                r.removeAttr(t)
            }), i
        },
        rules: function (t, i) {
            var r = this[0];
            if (t) {
                var e = n.data(r.form, "validator").settings,
                    o = e.rules,
                    u = n.validator.staticRules(r);
                switch (t) {
                    case "add":
                        n.extend(u, n.validator.normalizeRule(i));
                        delete u.messages;
                        o[r.name] = u;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case "remove":
                        if (!i) return delete o[r.name], u;
                        var s = {};
                        return n.each(i.split(/\s/), function (n, t) {
                            s[t] = u[t];
                            delete u[t]
                        }), s
                }
            }
            var f = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r);
            if (f.required) {
                var h = f.required;
                delete f.required;
                f = n.extend({
                    required: h
                }, f)
            }
            return f
        }
    });
    n.extend(n.expr[":"], {
        blank: function (t) {
            return !n.trim("" + n(t).val())
        },
        filled: function (t) {
            return !!n.trim("" + n(t).val())
        },
        unchecked: function (t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function (t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function (t, i) {
        return arguments.length === 1 ? function () {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function (n, i) {
            t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function () {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (n) {
                this.lastActive = n;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function (n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function (n, t) {
                (t.which !== 9 || this.elementValue(n) !== "") && (n.name in this.submitted || n === this.lastElement) && this.element(n)
            },
            onclick: function (n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function (t, i, r) {
                t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function (t, i, r) {
                t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function (t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var r = this.groups = {};
                n.each(this.settings.groups, function (t, i) {
                    typeof i == "string" && (i = i.split(/\s/));
                    n.each(i, function (n, i) {
                        r[i] = t
                    })
                });
                var t = this.settings.rules;
                n.each(t, function (i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });

                function i(t) {
                    var i = n.data(this[0].form, "validator"),
                        r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i);
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function () {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function (t) {
                t = this.validationTargetFor(this.clean(t));
                this.lastElement = t;
                this.prepareElement(t);
                this.currentElements = n(t);
                var i = this.check(t) !== !1;
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function (t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList, function (n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (n) {
                var t = 0;
                for (var i in n) t++;
                return t
            },
            hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            },
            valid: function () {
                return this.size() === 0
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {}
            },
            findLastActive: function () {
                var t = this.lastActive;
                return t && n.grep(this.errorList, function (n) {
                    return n.element.name === t.name
                }).length === 1 && t
            },
            elements: function () {
                var t = this,
                    i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return (!this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules())) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function (t) {
                return n(t)[0]
            },
            errors: function () {
                var t = this.settings.errorClass.replace(" ", ".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            fixString: function (t, i) {
                var r = t.data("charsToRemove");
                if (r && r.length)
                    for (var f = r.length; f--;) i = i.replace(new RegExp("[\\" + r[f] + "]", "g"), "");
                var u = t.data("charsToReplace");
                if (u && u.length)
                    for (var e = u.length; e--;) i = i.replace(new RegExp("[\\" + u[e] + "]", "g"), " ");
                return n.trim(i)
            },
            elementValue: function (t) {
                var i = n(t),
                    u = i.attr("type"),
                    r = i.val();
                return u === "radio" || u === "checkbox" ? n("input[name='" + n(t).attr("name") + "']:checked").val() : typeof r == "string" ? this.fixString(i, r.replace(/\r/g, "")) : this.fixString(i, r)
            },
            check: function (t) {
                t = this.validationTargetFor(this.clean(t));
                var r = n(t).rules(),
                    u = !1,
                    s = this.elementValue(t),
                    i;
                for (var f in r) {
                    var e = {
                        method: f,
                        parameters: r[f]
                    };
                    try {
                        if (i = n.validator.methods[f].call(this, s, t, e.parameters), i === "dependency-mismatch") {
                            u = !0;
                            continue
                        }
                        if (u = !1, i === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(t));
                            return
                        }
                        if (!i) return this.formatAndAdd(t, e), !1
                    } catch (o) {
                        this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + e.method + "' method.", o);
                        throw o;
                    }
                }
                if (!u) return this.objectLength(r) && this.successList.push(t), !0
            },
            customDataMessage: function (t, i) {
                return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function (n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function () {
                for (var n = 0; n < arguments.length; n++)
                    if (arguments[n] !== undefined) return arguments[n];
                return undefined
            },
            defaultMessage: function (t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function (t, i) {
                var r = this.defaultMessage(t, i.method),
                    u = /\$?\{(\d+)\}/g;
                typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function (n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            },
            defaultShowErrors: function () {
                for (var t, n = 0; this.errorList[n]; n++) {
                    var i = this.errorList[n];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass);
                    this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, t = this.validElements(); t[n]; n++) this.settings.unhighlight.call(this, t[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return n(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t)));
                !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function (t) {
                var i = this.idOrName(t);
                return this.errors().filter(function () {
                    return n(this).attr("for") === i
                })
            },
            idOrName: function (n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function (n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
            },
            checkable: function (n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function (t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function (t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        if (i.multiple) return n("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function (n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function (n) {
                    return n
                },
                string: function (t, i) {
                    return !!n(t, i.form).length
                },
                "function": function (n, t) {
                    return n(t)
                }
            },
            optional: function (t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function (n) {
                this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
            },
            stopRequest: function (t, i) {
                this.pendingRequest--;
                this.pendingRequest < 0 && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var i = {},
                r = n(t).attr("class");
            return r && n.each(r.split(" "), function () {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function (t) {
            var u = {},
                e = n(t),
                f = e[0].getAttribute("type");
            for (var r in n.validator.methods) {
                var i;
                r === "required" ? (i = e.get(0).getAttribute(r), i === "" && (i = !0), i = !!i) : i = e.attr(r);
                /min|max/.test(r) && (f === null || /number|range|text/.test(f)) && (i = Number(i));
                i ? u[r] = i : f === r && f !== "range" && (u[r] = !0)
            }
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
        },
        dataRules: function (t) {
            var i, r, u = {},
                f = n(t);
            for (i in n.validator.methods) r = f.data("rule-" + i.toLowerCase()), r !== undefined && (u[i] = r);
            return u
        },
        staticRules: function (t) {
            var i = {},
                r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function (t, i) {
            return n.each(t, function (r, u) {
                if (u === !1) {
                    delete t[r];
                    return
                }
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case "string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case "function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function (r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function () {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function () {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (i = t[this].split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function (t) {
            if (typeof t == "string") {
                var i = {};
                n.each(t.split(/\s/), function () {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function (t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];
            i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if (i.nodeName.toLowerCase() === "select") {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            },
            email: function (n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            },
            url: function (n, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function (n, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
            },
            dateISO: function (n, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
            },
            number: function (n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function (n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function (n, t) {
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var f = 0,
                    i = 0,
                    r = !1;
                n = n.replace(/\D/g, "");
                for (var u = n.length - 1; u >= 0; u--) {
                    var e = n.charAt(u);
                    i = parseInt(e, 10);
                    r && (i *= 2) > 9 && (i -= 9);
                    f += i;
                    r = !r
                }
                return f % 10 == 0
            },
            minlength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            },
            maxlength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u <= r
            },
            rangelength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && u <= r[1]
            },
            min: function (n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function (n, t, i) {
                return this.optional(t) || n <= i
            },
            range: function (n, t, i) {
                return this.optional(t) || n >= i[0] && n <= i[1]
            },
            equalTo: function (t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    n(i).valid()
                }), t === u.val()
            },
            remote: function (t, i, r) {
                if (this.optional(i)) return "dependency-mismatch";
                var f = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {
                        url: r
                    } || r, f.old === t) return f.valid;
                f.old = t;
                var u = this;
                this.startRequest(i);
                var e = {};
                return e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function (r) {
                        u.settings.messages[i.name].remote = f.originalMessage;
                        var e = r === !0 || r === "true";
                        if (e) {
                            var h = u.formSubmitted;
                            u.prepareElement(i);
                            u.formSubmitted = h;
                            u.successList.push(i);
                            delete u.invalid[i.name];
                            u.showErrors()
                        } else {
                            var s = {},
                                o = r || u.defaultMessage(i, "remote");
                            s[i.name] = f.message = n.isFunction(o) ? o(t) : o;
                            u.invalid[i.name] = !0;
                            u.showErrors(s)
                        }
                        f.valid = e;
                        u.stopRequest(i, e)
                    }
                }, r)), "pending"
            }
        }
    });
    n.format = n.validator.format
})(jQuery),
function (n) {
    var t = {};
    if (n.ajaxPrefilter) n.ajaxPrefilter(function (n, i, r) {
        var u = n.port;
        n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
    });
    else {
        var i = n.ajax;
        n.ajax = function (r) {
            var f = ("mode" in r ? r : n.ajaxSettings).mode,
                u = ("port" in r ? r : n.ajaxSettings).port;
            return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
        }
    }
}(jQuery),
function (n) {
    n.extend(n.fn, {
        validateDelegate: function (t, i, r) {
            return this.bind(i, function (i) {
                var u = n(i.target);
                if (u.is(t)) return r.apply(u, arguments)
            })
        }
    })
}(jQuery);
/*! jquery.payoneer.validation.js */
(function (n) {
    "use strict";
    var i = '[validate="validate"]',
        u = "input,select,textarea",
        r = ":submit,:reset,:button,:image,:hidden,:disabled",
        e = ":submit,:reset,:button,:image",
        f = "input:checkbox";
    n.payoneerValidation = {
        settings: {
            unhighlightOnKeyup: !1,
            onKeyUpGroupValidation: !1,
            onBlurValidation: !1,
            onHighlight: !1,
            onUnhighlight: !1
        }
    };
    var t = {
        _getFieldsOf: function (n) {
            return this.is(i) && this.is(u) && !this.is(n || r) ? this : this.find(i).filter(u).not(n || r)
        },
        _getGroupFields: function () {
            var i = n();
            return this.each(function () {
                i = i.add(t._getFieldsOf.call(n(this), e))
            }), i
        },
        _getFields: function (i) {
            var r = n();
            this.each(function () {
                r = r.add(t._getFieldsOf.call(n(this)))
            });
            var u = n("form").first().validate();
            return r.each(function () {
                i && u.settings.unhighlight.call(u, this)
            }), u ? r : undefined
        },
        _callOnKeyUp: function () {
            if (n.validator) {
                var t = n("form").first().validate();
                t.settings.onkeyup.call(t, this)
            }
        },
        _callOnFocusOut: function () {
            if (n.validator) {
                var t = n("form").first().validate();
                t.settings.onfocusout.call(t, this)
            }
        },
        _attachValidationGroup: function () {
            var i = t._getGroupFields.call(this);
            i.each(function () {
                var t = n(this);
                t.data("validation-group", i)
            }).filter("input:checkbox").off("change", t._callOnFocusOut).on("change", t._callOnFocusOut);
            i.filter("select").off("change", t._callOnFocusOut).on("change", t._callOnFocusOut);
            return i
        },
        _validateCheckbox: function () {
            var t = n("form").first().validate(),
                u = n(this);
            if (u.is(i) && !u.is(r)) {
                var f = t.check(this);
                f ? t.settings.unhighlight.call(t, this) : t.settings.highlight.call(t, {
                    element: this,
                    message: u.data("msg-required")
                })
            }
        },
        init: function (i) {
            n.extend(n.payoneerValidation.settings, n.payoneerValidation.settings, i);
            t._attachValidationGroup.call(this);
            var r = t._getFields.call(this);
            return r.find("[data-invalid-message]").each(function () {
                var t = n(this),
                    i = t.closest("form").validate();
                i.settings.highlight.call(i, {
                    element: this,
                    message: t.attr("data-invalid-message")
                })
            }), this
        },
        attach: function () {
            var i = t._attachValidationGroup.call(this),
                r = n(this).closest("form").validate();
            i.off("focusout", t._callOnFocusOut).on("focusout", t._callOnFocusOut).off("keyup", t._callOnKeyUp).on("keyup", t._callOnKeyUp);
            return this
        },
        prompt: function (t) {
            var r = n("form").first(),
                i = r.validate();
            return this.each(function () {
                i.settings.highlight.call(i, {
                    element: this,
                    message: t.message
                })
            })
        },
        validate: function () {
            var u = this.closest("form"),
                i = u.validate(),
                r = t._getFields.call(this);
            return r ? (i.prepareForm(), r.each(function () {
                i.check(this)
            }), n.extend(i.submitted, i.errorMap), i.invalid = n.extend({}, i.errorMap), i.showErrors(), i.valid()) : !1
        },
        validateCheckbox: function () {
            var i = n(this);
            return i.is(f) ? t._validateCheckbox.call(this) : i.find(f).each(function () {
                t._validateCheckbox.call(this)
            }), this
        },
        check: function () {
            var r = this.closest("form"),
                n = r.validate(),
                i = t._getFields.call(this);
            return i ? (n.prepareForm(), i.each(function () {
                n.check(this)
            }), n.valid()) : !1
        },
        hide: function () {
            var n = t._getFields.call(this, !0);
            if (n) {
                var r = this.closest("form"),
                    i = r.validate();
                n.each(function () {
                    i.settings.unhighlight.call(i, this)
                })
            }
            return this
        }
    };
    n.fn.payoneerValidate = function (i, r) {
        var u = n(this),
            f = {};
        return ((r || typeof i == "object") && (f = r || i), typeof i == "string" && i.charAt(0) !== "_" && t[i]) ? t[i].call(u, f) : (typeof i != "object" && i ? n.error("Method " + i + " does not exist in jQuery.payoneerValidate") : t.init.call(u, f), u)
    }
})(jQuery);
jQuery(function () {
    jQuery.validator.addMethod("pattern", function (n, t, i) {
        if (this.optional(t) && (!n || !n.length)) return !0;
        if (typeof i == "string") {
            var r = i.split("__");
            i = r.length > 1 ? new RegExp(r[0], r[1]) : new RegExp(i)
        }
        return i.test(n)
    });
    var n = PayoneerTheme.ClientValidation;
    if (n === undefined) {
        var t = function (n) {
            n.stopImmediatePropagation()
        };
        n = {
            position: PayoneerTheme.isRightToLeft() ? {
                my: "right bottom",
                at: "left+15 top",
                collision: "fit fit"
            } : {
                my: "left bottom",
                at: "right-15 top",
                collision: "fit fit"
            },
            tooltipClass: PayoneerTheme.isRightToLeft() ? "validation-rtl" : "validation",
            highlight: function (i) {
                this.settings.debug && console.info("[" + (new Date).toLocaleString() + "] validation FAIL for element " + i.element.id);
                var r = $(i.element);
                if (!r.data("tooltip")) {
                    var u = $.isFunction(i.message) ? i.message() : i.message;
                    r.on("mouseleave", t).on("mouseover", t).attr("title", "").tooltip({
                        content: u,
                        position: n.position,
                        tooltipClass: n.tooltipClass
                    }).on("tooltipopen", function () {
                        $(this).data("tooltip", !0)
                    }).on("tooltipclose", function () {
                        $(this).data("tooltip", !1)
                    }).tooltip("open");
                    $.payoneerValidation.settings.onHighlight && $.payoneerValidation.settings.onHighlight.call(i.element)
                }
            },
            unhighlight: function (n) {
                this.settings.debug && console.info("[" + (new Date).toLocaleString() + "] validation success for element  " + n.id);
                var t = $(n);
                t.data("tooltip") && t.tooltip("close");
                t.prop("class", t.prop("class").replace("-ERROR", ""));
                $.payoneerValidation.settings.onUnhighlight && $.payoneerValidation.settings.onUnhighlight.call(n)
            }
        }
    }
    jQuery.validator.setDefaults({
        onsubmit: !1,
        submitHandler: function () {},
        invalidHandler: function () {},
        ignore: ":hidden",
        ignoreTitle: !0,
        onkeyup: function (n) {
            if (n.attributes.validate !== undefined && $.payoneerValidation.settings.onKeyUpGroupValidation) {
                $.payoneerValidation.settings.unhighlightOnKeyup && this.settings.unhighlight.call(this, n);
                var t = $(n).data("validation-group");
                if (t && t.length) {
                    var i = t.payoneerValidate("check");
                    $.payoneerValidation.settings.onKeyUpGroupValidation.call(this, i, n)
                }
            }
        },
        onclick: !1,
        onfocusout: function (n, t) {
            var i = !1,
                u = !1;
            if (n.attributes.validate !== undefined && n.getAttribute("type") != "file") {
                var f = $(n).attr("payoneer");
                if (f !== "DateTimePicker" || (u = !0, n.value && n.value.length)) {
                    if (!this.checkable(n) && (n.name in this.submitted || !this.optional(n)))
                        if (u || n.nodeName === "SELECT") {
                            var r = this;
                            setTimeout(function () {
                                i = r.element(n);
                                $.payoneerValidation.settings.onBlurValidation && $.payoneerValidation.settings.onBlurValidation.call(r, i, n);
                                n.nodeName === "SELECT" && r.settings.onkeyup.call(r, n, t)
                            }, 300)
                        } else i = this.element(n);
                    $.payoneerValidation.settings.onBlurValidation && $.payoneerValidation.settings.onBlurValidation.call(this, i, n);
                    f === "CheckBox" && ($(n).payoneerValidate("validateCheckbox"), this.settings.onkeyup.call(this, n, t))
                }
            }
        },
        highlight: n.highlight,
        unhighlight: n.unhighlight,
        showErrors: function (n, t) {
            var i;
            for (i = 0, elements = this.validElements(); elements[i]; i++) this.settings.unhighlight.call(this, elements[i]);
            for (i = 0; t[i]; i++) this.settings.highlight.call(this, t[i])
        }
    })
});
/*! jquery.payoneer.dropdownlist.js */
(function (n) {
    var t, i;
    n.valHooks.select ? (i = n.valHooks.select.get, t = n.valHooks.select.set) : n.valHooks.select = {};
    n.valHooks.select.get = function (t) {
        var r = n(t);
        return r.hasClass("selectCustom") ? r.hasClass("hasValue") ? undefined : null : i ? i.call(this, t) : undefined
    };
    n.valHooks.select.set = function (i, r) {
        var u = n(i),
            f = t ? t.call(this, i, r) : this;
        return u.hasClass("selectCustom") && u.change(), f
    };
    n.fn.payoneerDropDownList = function (t) {
        return t == "fixAfterMove" ? (this.filter(".selectCustom").not(".hasValue").each(function () {
            n(this).trigger("empty")
        }), this) : (this.filter(".selectCustom").each(function () {
            var t = n(this),
                i = t.next("span");
            t.on("change", function () {
                var r = t.children("option").filter(":selected"),
                    n;
                (n = r.data("display")) || (n = r.text());
                n && n.length !== 0 || (n = "&nbsp;");
                i.children("span").text(n);
                t.addClass("hasValue")
            }).on("mouseenter", function () {
                i.addClass("hover")
            }).on("mouseout", function () {
                i.removeClass("hover")
            }).on("disable", PayoneerTheme.ToggleDisabledEventHandler).on("enable", PayoneerTheme.ToggleDisabledEventHandler).on("empty", function () {
                t.prop("selectedIndex", -1).removeClass("hasValue")
            });
            t.hasClass("hasValue") || t.trigger("empty")
        }), this)
    }
})(jQuery);
$(document).ready(function () {
    $("select").payoneerDropDownList()
});
/*! jquery.payoneer.checkable.js */
(function (n) {
    var t, i;
    n.valHooks.div ? (i = n.valHooks.div.get, t = n.valHooks.div.set) : n.valHooks.div = {};
    n.valHooks.div.get = function (t) {
        var r = n(t);
        return r.is('[payoneer="RadioButtons"]') ? r.find("input:radio:checked").val() : i ? i.call(this, t) : undefined
    };
    n.valHooks.div.set = function (i, r) {
        var u = n(i);
        return u.is('[payoneer="RadioButtons"]') ? (u.find("input:radio").prop("checked", !1).each(function () {
            var t = n(this);
            if (t.val() === r) return t.prop("checked", !0), !1
        }), u) : t ? t.call(this, i, r) : u
    };
    n.fn.payoneerCheckbox = function () {
        return this.each(function () {
            var t = n(this);
            t.on("change", function () {
                t.parent(".radio").toggleClass("on", this.checked)
            }).on("disable", function (n, t) {
                PayoneerTheme.ToggleDisabledEventHandler.call(this, n, t)
            }).on("enable", function (n) {
                PayoneerTheme.ToggleDisabledEventHandler.call(this, n)
            }).trigger("change")
        })
    };
    n.fn.payoneerRadioButtons = function () {
        var t = PayoneerTheme.isMobile();
        return this.each(function () {
            var i = n(this),
                r = i.find("input[name='" + i.data("name") + "']"),
                u = i.data("slideonmobile") && i.find(".radio-description").length > 0;
            r.on("change", function () {
                var i;
                r.each(function () {
                    var f = n(this).parent(".radio"),
                        r = f.parent(".radio-wrapper");
                    f.toggleClass("on", this.checked);
                    r.toggleClass("on", this.checked);
                    t && u && (this.checked ? r.find(".radio-description").slideDown("slow") : r.find(".radio-description").slideUp("slow"));
                    this.checked && (i = this.value)
                })
            }).on("disable", function (n, t) {
                PayoneerTheme.ToggleDisabledEventHandler.call(this, n, t)
            }).on("enable", function (n) {
                PayoneerTheme.ToggleDisabledEventHandler.call(this, n)
            }).trigger("change");
            t && r.each(function () {
                this.checked || n(this).closest(".radio-wrapper").find(".radio-description").hide()
            })
        })
    }
})(jQuery);
$(document).ready(function () {
    $('[payoneer="CheckBox"]').payoneerCheckbox();
    $('[payoneer="RadioButtons"]').payoneerRadioButtons()
});
(function (n) {
    var t = 0;

    function i(t, i) {
        var r = (t.attr("aria-describedby") || "").split(/\s+/);
        r.push(i);
        t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
    }

    function r(t) {
        var u = t.data("ui-tooltip-id"),
            i = (t.attr("aria-describedby") || "").split(/\s+/),
            r = n.inArray(u, i);
        r !== -1 && i.splice(r, 1);
        t.removeData("ui-tooltip-id");
        i = n.trim(i.join(" "));
        i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
    }
    n.widget("ui.tooltip", {
        version: "1.10.4",
        options: {
            content: function () {
                var t = n(this).attr("title") || "";
                return n("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.options.disabled && this._disable()
        },
        _setOption: function (t, i) {
            var r = this;
            if (t === "disabled") {
                this[i ? "_disable" : "_enable"]();
                this.options[t] = i;
                return
            }
            this._super(t, i);
            t === "content" && n.each(this.tooltips, function (n, t) {
                r._updateContent(t)
            })
        },
        _disable: function () {
            var t = this;
            n.each(this.tooltips, function (i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r[0];
                t.close(u, !0)
            });
            this.element.find(this.options.items).addBack().each(function () {
                var t = n(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
            })
        },
        _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var t = n(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        },
        open: function (t) {
            var r = this,
                i = n(t ? t.target : this.element).closest(this.options.items);
            i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && t.type === "mouseover" && i.parents().each(function () {
                var t = n(this),
                    i;
                t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
                t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
                    element: this,
                    title: t.attr("title")
                }, t.attr("title", ""))
            }), this._updateContent(i, t))
        },
        _updateContent: function (n, t) {
            var i, r = this.options.content,
                u = this,
                f = t ? t.type : null;
            if (typeof r == "string") return this._open(t, n, r);
            i = r.call(n[0], function (i) {
                n.data("ui-tooltip-open") && u._delay(function () {
                    t && (t.type = f);
                    this._open(t, n, i)
                })
            });
            i && this._open(t, n, i)
        },
        _open: function (t, r, u) {
            var f, e, h, o = n.extend({}, this.options.position);
            if (u) {
                if (f = this._find(r), f.length) {
                    f.find(".ui-tooltip-content").html(u);
                    return
                }
                r.is("[title]") && (t && t.type === "mouseover" ? r.attr("title", "") : r.removeAttr("title"));
                f = this._tooltip(r);
                i(r, f.attr("id"));
                f.find(".ui-tooltip-content").html(u);

                function s(n) {
                    (o.of = n, f.is(":hidden")) || f.position(o)
                }
                this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                    mousemove: s
                }), s(t)) : f.position(n.extend({
                    of: r
                }, this.options.position));
                f.hide();
                this._show(f, this.options.show);
                this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
                    f.is(":visible") && (s(o.of), clearInterval(h))
                }, n.fx.interval));
                this._trigger("open", t, {
                    tooltip: f
                });
                e = {
                    keyup: function (t) {
                        if (t.keyCode === n.ui.keyCode.ESCAPE) {
                            var i = n.Event(t);
                            i.currentTarget = r[0];
                            this.close(i, !0)
                        }
                    },
                    remove: function () {
                        this._removeTooltip(f)
                    }
                };
                t && t.type !== "mouseover" || (e.mouseleave = "close");
                t && t.type !== "focusin" || (e.focusout = "close");
                this._on(!0, r, e)
            }
        },
        close: function (t) {
            var f = this,
                i = n(t ? t.currentTarget : this.element),
                u = this._find(i);
            this.closing || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title")), r(i), u.stop(!0), this._hide(u, this.options.hide, function () {
                f._removeTooltip(n(this))
            }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && n.each(this.parents, function (t, i) {
                n(i.element).attr("title", i.title);
                delete f.parents[t]
            }), this.closing = !0, this._trigger("close", t, {
                tooltip: u
            }), this.closing = !1)
        },
        _tooltip: function (i) {
            var u = "ui-tooltip-" + t++,
                r = n("<div>").attr({
                    id: u,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return n("<div>").addClass("ui-tooltip-content").appendTo(r), r.appendTo(this.document[0].body), this.tooltips[u] = i, r
        },
        _find: function (t) {
            var i = t.data("ui-tooltip-id");
            return i ? n("#" + i) : n()
        },
        _removeTooltip: function (n) {
            n.remove();
            delete this.tooltips[n.attr("id")]
        },
        _destroy: function () {
            var t = this;
            n.each(this.tooltips, function (i, r) {
                var u = n.Event("blur");
                u.target = u.currentTarget = r[0];
                t.close(u, !0);
                n("#" + i).remove();
                r.data("ui-tooltip-title") && (r.attr("title", r.data("ui-tooltip-title")), r.removeData("ui-tooltip-title"))
            })
        }
    })
})(jQuery);
/*! jquery.payoneer.tooltip.js */
(function (n) {
    "use strict";
    var s = "py.toggle.textblock",
        r = 580;

    function h() {
        if (!window.matchMedia) {
            var n = window.innerWidth > 0 ? window.innerWidth : screen.width;
            return n <= r
        }
        return window.matchMedia("screen and (max-width:" + r + "px)").matches
    }
    var u = h();

    function f(t, i, r) {
        i.toggleClass("info-show", r);
        t.toggleClass("field-feedback-on", r);
        t.data("feedbackToggleOn", r);
        n(document).trigger(s)
    }

    function e(n, t, i) {
        t.data("textBlock") || (t.prepend('<button type="button" class="info-close" data-tooltip-dismiss="#' + t.attr("id") + '" aria-label="Close"><span aria-hidden="true">&times;<\/span><\/button>'), t.data("textBlock", !0));
        f(n, t, i)
    }

    function o(n) {
        return n.closest(".form-object").find("[data-tooltip-toggle]")
    }

    function t(n, t, i) {
        if (u) {
            var r = o(n);
            e(r, t, i)
        } else {
            var f = i ? "open" : "close";
            t.tooltip(f)
        }
    }
    var i = {
        _titleContent: function () {
            return n(this).attr("title")
        },
        open: function () {
            var i = this.closest(".form-object").find(".info");
            t(n(this), i, !0)
        },
        close: function () {
            var i = this.closest(".form-object").find(".info");
            t(n(this), i, !1)
        },
        prompt: function (n) {
            this.closest(".form-object").find(".info").tooltip({
                content: n
            }).tooltip("open").tooltip({
                content: i._titleContent
            })
        }
    };
    n.fn.payoneerTooltip = function (r, f) {
        return typeof r == "string" && r.charAt(0) !== "_" && i[r] ? i[r].call(this, f) : this.each(function () {
            var i = n(this),
                r = i.data();
            u || i.tooltip({
                tooltipClass: r.cssclass,
                position: PayoneerTheme.isRightToLeft() ? {
                    my: r.my || "right-12",
                    at: r.at || "left",
                    collision: r.collision || "fit fit"
                } : {
                    my: r.my || "left",
                    at: r.at || "right+12",
                    collision: r.collision || "fit fit"
                },
                content: function () {
                    return i.attr("title")
                },
                close: function (t, i) {
                    i.tooltip.hover(function () {
                        n(this).stop(!0).fadeTo(400, 1)
                    }, function () {
                        n(this).fadeOut("400", function () {
                            n(this).remove()
                        })
                    })
                }
            });
            var h = o(i);
            h.off("click.tooltip.toggle").on("click.tooltip.toggle", function () {
                var t = n(this),
                    i = t.attr("data-target") || d.preventDefault();

                function r(n) {
                    var t = n.data("feedbackToggleOn");
                    return !t
                }
                var u = n(i);
                e(t, u, r(t))
            });
            if (r.triggercontrol) {
                var f = n("#" + r.triggercontrol);
                f.on("focusin", function () {
                    t(f, i, !0)
                }).on("focusout", function () {
                    t(f, i, !1)
                });
                var s = f.data("watermarkPassword");
                if (s && s.length) s.on("focusin", function () {
                    t(f, i, !0)
                }).on("focusout", function () {
                    t(f, i, !1)
                });
                else f.on(f.is("select") ? "change" : "focusout", function () {
                    t(f, i, !1)
                })
            }
        })
    };
    n(function () {
        n("[payoneer='ToolTip']").payoneerTooltip();
        n(document).on("click.tooltip.dismiss", "[data-tooltip-dismiss]", function () {
            var t = n(this),
                i = t.attr("data-tooltip-dismiss") || d.preventDefault(),
                r = n(i);
            f(t, r, !1)
        })
    })
})(jQuery);
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function (n, t, i) {
    var u = {},
        k = !0,
        s = t.documentElement,
        e = "modernizr",
        ut = t.createElement(e),
        c = ut.style,
        o = t.createElement("input"),
        d = ":)",
        ft = {}.toString,
        y = " -webkit- -moz- -o- -ms- ".split(" "),
        et = "Webkit Moz O ms",
        ot = et.split(" "),
        st = et.toLowerCase().split(" "),
        p = {
            svg: "http://www.w3.org/2000/svg"
        },
        r = {},
        ht = {},
        w = {},
        g = [],
        nt = g.slice,
        b, l = function (n, i, r, u) {
            var l, a, c, v, f = t.createElement("div"),
                h = t.body,
                o = h || t.createElement("body");
            if (parseInt(r, 10))
                while (r--) c = t.createElement("div"), c.id = u ? u[r] : e + (r + 1), f.appendChild(c);
            return l = ["&#173;", '<style id="s', e, '">', n, "<\/style>"].join(""), f.id = e, (h ? f : o).innerHTML += l, o.appendChild(f), h || (o.style.background = "", o.style.overflow = "hidden", v = s.style.overflow, s.style.overflow = "hidden", s.appendChild(o)), a = i(f, n), h ? f.parentNode.removeChild(f) : (o.parentNode.removeChild(o), s.style.overflow = v), !!a
        },
        at = function (t) {
            var i = n.matchMedia || n.msMatchMedia;
            if (i) return i(t) && i(t).matches || !1;
            var r;
            return l("@media " + t + " { #" + e + " { position: absolute; } }", function (t) {
                r = (n.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position == "absolute"
            }), r
        },
        ct = function () {
            var n = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };

            function r(r, u) {
                u = u || t.createElement(n[r] || "div");
                r = "on" + r;
                var f = r in u;
                return f || (u.setAttribute || (u = t.createElement("div")), u.setAttribute && u.removeAttribute && (u.setAttribute(r, ""), f = h(u[r], "function"), h(u[r], "undefined") || (u[r] = i), u.removeAttribute(r))), u = null, f
            }
            return r
        }(),
        tt = {}.hasOwnProperty,
        it;
    it = h(tt, "undefined") || h(tt.call, "undefined") ? function (n, t) {
        return t in n && h(n.constructor.prototype[t], "undefined")
    } : function (n, t) {
        return tt.call(n, t)
    };
    Function.prototype.bind || (Function.prototype.bind = function (n) {
        var t = this;
        if (typeof t != "function") throw new TypeError;
        var i = nt.call(arguments, 1),
            r = function () {
                if (this instanceof r) {
                    var f = function () {};
                    f.prototype = t.prototype;
                    var e = new f,
                        u = t.apply(e, i.concat(nt.call(arguments)));
                    return Object(u) === u ? u : e
                }
                return t.apply(n, i.concat(nt.call(arguments)))
            };
        return r
    });

    function a(n) {
        c.cssText = n
    }

    function vt(n, t) {
        return a(y.join(n + ";") + (t || ""))
    }

    function h(n, t) {
        return typeof n === t
    }

    function v(n, t) {
        return !!~("" + n).indexOf(t)
    }

    function lt(n, t) {
        for (var u in n) {
            var r = n[u];
            if (!v(r, "-") && c[r] !== i) return t == "pfx" ? r : !0
        }
        return !1
    }

    function yt(n, t, r) {
        for (var f in n) {
            var u = t[n[f]];
            if (u !== i) return r === !1 ? n[f] : h(u, "function") ? u.bind(r || t) : u
        }
        return !1
    }

    function f(n, t, i) {
        var r = n.charAt(0).toUpperCase() + n.slice(1),
            u = (n + " " + ot.join(r + " ") + r).split(" ");
        return h(t, "string") || h(t, "undefined") ? lt(u, t) : (u = (n + " " + st.join(r + " ") + r).split(" "), yt(u, t, i))
    }
    r.flexbox = function () {
        return f("flexWrap")
    };
    r.flexboxlegacy = function () {
        return f("boxDirection")
    };
    r.canvas = function () {
        var n = t.createElement("canvas");
        return !!(n.getContext && n.getContext("2d"))
    };
    r.canvastext = function () {
        return !!(u.canvas && h(t.createElement("canvas").getContext("2d").fillText, "function"))
    };
    r.webgl = function () {
        return !!n.WebGLRenderingContext
    };
    r.touch = function () {
        var i;
        return "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch ? i = !0 : l(["@media (", y.join("touch-enabled),("), e, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (n) {
            i = n.offsetTop === 9
        }), i
    };
    r.geolocation = function () {
        return "geolocation" in navigator
    };
    r.postmessage = function () {
        return !!n.postMessage
    };
    r.websqldatabase = function () {
        return !!n.openDatabase
    };
    r.indexedDB = function () {
        return !!f("indexedDB", n)
    };
    r.hashchange = function () {
        return ct("hashchange", n) && (t.documentMode === i || t.documentMode > 7)
    };
    r.history = function () {
        return !!(n.history && history.pushState)
    };
    r.draganddrop = function () {
        var n = t.createElement("div");
        return "draggable" in n || "ondragstart" in n && "ondrop" in n
    };
    r.websockets = function () {
        return "WebSocket" in n || "MozWebSocket" in n
    };
    r.rgba = function () {
        return a("background-color:rgba(150,255,150,.5)"), v(c.backgroundColor, "rgba")
    };
    r.hsla = function () {
        return a("background-color:hsla(120,40%,100%,.5)"), v(c.backgroundColor, "rgba") || v(c.backgroundColor, "hsla")
    };
    r.multiplebgs = function () {
        return a("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(c.background)
    };
    r.backgroundsize = function () {
        return f("backgroundSize")
    };
    r.borderimage = function () {
        return f("borderImage")
    };
    r.borderradius = function () {
        return f("borderRadius")
    };
    r.boxshadow = function () {
        return f("boxShadow")
    };
    r.textshadow = function () {
        return t.createElement("div").style.textShadow === ""
    };
    r.opacity = function () {
        return vt("opacity:.55"), /^0.55$/.test(c.opacity)
    };
    r.cssanimations = function () {
        return f("animationName")
    };
    r.csscolumns = function () {
        return f("columnCount")
    };
    r.cssgradients = function () {
        var n = "background-image:";
        return a((n + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + n) + y.join("linear-gradient(left top,#9f9, white);" + n)).slice(0, -n.length)), v(c.backgroundImage, "gradient")
    };
    r.cssreflections = function () {
        return f("boxReflect")
    };
    r.csstransforms = function () {
        return !!f("transform")
    };
    r.csstransforms3d = function () {
        var n = !!f("perspective");
        return n && "webkitPerspective" in s.style && l("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t) {
            n = t.offsetLeft === 9 && t.offsetHeight === 3
        }), n
    };
    r.csstransitions = function () {
        return f("transition")
    };
    r.fontface = function () {
        var n;
        return l('@font-face {font-family:"font";src:url("https://")}', function (i, r) {
            var f = t.getElementById("smodernizr"),
                u = f.sheet || f.styleSheet,
                e = u ? u.cssRules && u.cssRules[0] ? u.cssRules[0].cssText : u.cssText || "" : "";
            n = /src/i.test(e) && e.indexOf(r.split(" ")[0]) === 0
        }), n
    };
    r.generatedcontent = function () {
        var n;
        return l(["#", e, "{font:0/0 a}#", e, ':after{content:"', d, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            n = t.offsetHeight >= 3
        }), n
    };
    r.video = function () {
        var i = t.createElement("video"),
            n = !1;
        try {
            (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) {}
        return n
    };
    r.audio = function () {
        var i = t.createElement("audio"),
            n = !1;
        try {
            (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = i.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) {}
        return n
    };
    r.localstorage = function () {
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (n) {
            return !1
        }
    };
    r.sessionstorage = function () {
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (n) {
            return !1
        }
    };
    r.webworkers = function () {
        return !!n.Worker
    };
    r.applicationcache = function () {
        return !!n.applicationCache
    };
    r.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(p.svg, "svg").createSVGRect
    };
    r.inlinesvg = function () {
        var n = t.createElement("div");
        return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) == p.svg
    };
    r.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(ft.call(t.createElementNS(p.svg, "animate")))
    };
    r.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(ft.call(t.createElementNS(p.svg, "clipPath")))
    };

    function pt() {
        u.input = function (i) {
            for (var r = 0, u = i.length; r < u; r++) w[i[r]] = !!(i[r] in o);
            return w.list && (w.list = !!(t.createElement("datalist") && n.HTMLDataListElement)), w
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        u.inputtypes = function (n) {
            for (var u = 0, r, f, e, h = n.length; u < h; u++) o.setAttribute("type", f = n[u]), r = o.type !== "text", r && (o.value = d, o.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && o.style.WebkitAppearance !== i ? (s.appendChild(o), e = t.defaultView, r = e.getComputedStyle && e.getComputedStyle(o, null).WebkitAppearance !== "textfield" && o.offsetHeight !== 0, s.removeChild(o)) : /^(search|tel)$/.test(f) || (r = /^(url|email)$/.test(f) ? o.checkValidity && o.checkValidity() === !1 : o.value != d)), ht[n[u]] = !!r;
            return ht
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    for (var rt in r) it(r, rt) && (b = rt.toLowerCase(), u[b] = r[rt](), g.push((u[b] ? "" : "no-") + b));
    u.input || pt();
    u.addTest = function (n, t) {
        if (typeof n == "object")
            for (var r in n) it(n, r) && u.addTest(r, n[r]);
        else {
            if (n = n.toLowerCase(), u[n] !== i) return u;
            t = typeof t == "function" ? t() : t;
            typeof k != "undefined" && k && (s.className += " " + (t ? "" : "no-") + n);
            u[n] = t
        }
        return u
    };
    a("");
    ut = o = null;
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    return function (n, t) {
        var u = n.html5 || {},
            v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            y = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            f, s = "_html5shiv",
            e = 0,
            h = {},
            i;
        (function () {
            try {
                var n = t.createElement("a");
                n.innerHTML = "<xyz><\/xyz>";
                f = "hidden" in n;
                i = n.childNodes.length == 1 || function () {
                    t.createElement("a");
                    var n = t.createDocumentFragment();
                    return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined"
                }()
            } catch (r) {
                f = !0;
                i = !0
            }
        })();

        function p(n, t) {
            var i = n.createElement("p"),
                r = n.getElementsByTagName("head")[0] || n.documentElement;
            return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild)
        }

        function c() {
            var n = r.elements;
            return typeof n == "string" ? n.split(" ") : n
        }

        function o(n) {
            var t = h[n[s]];
            return t || (t = {}, e++, n[s] = e, h[e] = t), t
        }

        function l(n, r, u) {
            if (r || (r = t), i) return r.createElement(n);
            u || (u = o(r));
            var f;
            return f = u.cache[n] ? u.cache[n].cloneNode() : y.test(n) ? (u.cache[n] = u.createElem(n)).cloneNode() : u.createElem(n), f.canHaveChildren && !v.test(n) && !f.tagUrn ? u.frag.appendChild(f) : f
        }

        function w(n, r) {
            if (n || (n = t), i) return n.createDocumentFragment();
            r = r || o(n);
            for (var f = r.frag.cloneNode(), u = 0, e = c(), s = e.length; u < s; u++) f.createElement(e[u]);
            return f
        }

        function b(n, t) {
            t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag());
            n.createElement = function (i) {
                return r.shivMethods ? l(i, n, t) : t.createElem(i)
            };
            n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function (n) {
                return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
            }) + ");return n}")(r, t.frag)
        }

        function a(n) {
            n || (n = t);
            var u = o(n);
            return !r.shivCSS || f || u.hasCSS || (u.hasCSS = !!p(n, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), i || b(n, u), n
        }
        var r = {
            elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: u.shivCSS !== !1,
            supportsUnknownElements: i,
            shivMethods: u.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: l,
            createDocumentFragment: w
        };
        n.html5 = r;
        a(t)
    }(this, t), u._version = "2.8.3", u._prefixes = y, u._domPrefixes = st, u._cssomPrefixes = ot, u.mq = at, u.hasEvent = ct, u.testProp = function (n) {
        return lt([n])
    }, u.testAllProps = f, u.testStyles = l, u.prefixed = function (n, t, i) {
        return t ? f(n, t, i) : f(n, "pfx")
    }, s.className = s.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (k ? " js " + g.join(" ") : ""), u
}(this, this.document);
(function (n) {
    var t = 5;
    n.widget("ui.slider", n.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._keySliding = !1;
            this._mouseSliding = !1;
            this._animateOff = !0;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
            this._refresh();
            this._setOption("disabled", this.options.disabled);
            this._animateOff = !1
        },
        _refresh: function () {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function () {
            var r, i, u = this.options,
                t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                f = [];
            for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; r < i; r++) f.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'><\/a>");
            this.handles = t.add(n(f.join("")).appendTo(this.element));
            this.handle = this.handles.eq(0);
            this.handles.each(function (t) {
                n(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function () {
            var t = this.options,
                i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = n("<div><\/div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            var n = this.handles.add(this.range).filter("a");
            this._off(n);
            this._on(n, this._handleEvents);
            this._hoverable(n);
            this._focusable(n)
        },
        _destroy: function () {
            this.handles.remove();
            this.range && this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
            this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var s, f, r, i, u, h, e, c, o = this,
                l = this.options;
            return l.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), s = {
                x: t.pageX,
                y: t.pageY
            }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var e = Math.abs(f - o.values(t));
                (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
            }), h = this._start(t, u), h === !1) ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - e.left - i.width() / 2,
                top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0)
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (n) {
            var t = {
                    x: n.pageX,
                    y: n.pageY
                },
                i = this._normValueFromMouse(t);
            return this._slide(n, this._handleIndex, i), !1
        },
        _mouseStop: function (n) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (n) {
            var i, r, t, u, f;
            return this.orientation === "horizontal" ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
        },
        _start: function (n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
        },
        _slide: function (n, t, i) {
            var r, f, u;
            this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i,
                values: f
            }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i))) : i !== this.value() && (u = this._trigger("slide", n, {
                handle: this.handles[t],
                value: i
            }), u !== !1 && this.value(i))
        },
        _stop: function (n, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
            this._trigger("stop", n, i)
        },
        _change: function (n, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                this._lastChangedValue = t;
                this._trigger("change", n, i)
            }
        },
        value: function (n) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(n);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function (t, i) {
            var u, f, r;
            if (arguments.length > 1) {
                this.options.values[t] = this._trimAlignValue(i);
                this._refreshValue();
                this._change(null, t);
                return
            }
            if (arguments.length)
                if (n.isArray(arguments[0])) {
                    for (u = this.options.values, f = arguments[0], r = 0; r < u.length; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                    this._refreshValue()
                } else return this.options.values && this.options.values.length ? this._values(t) : this.value();
            else return this._values()
        },
        _setOption: function (t, i) {
            var r, u = 0;
            t === "range" && this.options.range === !0 && (i === "min" ? (this.options.value = this._values(0), this.options.values = null) : i === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
            n.isArray(this.options.values) && (u = this.options.values.length);
            n.Widget.prototype._setOption.apply(this, arguments);
            switch (t) {
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), r = 0; r < u; r += 1) this._change(null, r);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0;
                    this._refreshValue();
                    this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0;
                    this._refresh();
                    this._animateOff = !1
            }
        },
        _value: function () {
            var n = this.options.value;
            return this._trimAlignValue(n)
        },
        _values: function (n) {
            var r, t, i;
            if (arguments.length) return r = this.options.values[n], this._trimAlignValue(r);
            if (this.options.values && this.options.values.length) {
                for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
                return t
            }
            return []
        },
        _trimAlignValue: function (n) {
            if (n <= this._valueMin()) return this._valueMin();
            if (n >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (n - this._valueMin()) % t,
                r = n - i;
            return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var s, t, c, f, h, e = this.options.range,
                i = this.options,
                r = this,
                u = this._animateOff ? !1 : i.animate,
                o = {};
            this.options.values && this.options.values.length ? this.handles.each(function (f) {
                t = (r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
                o[r.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
                n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                r.options.range === !0 && (r.orientation === "horizontal" ? (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: t + "%"
                }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                    width: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })) : (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: t + "%"
                }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                    height: t - s + "%"
                }, {
                    queue: !1,
                    duration: i.animate
                })));
                s = t
            }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? (c - f) / (h - f) * 100 : 0, o[this.orientation === "horizontal" ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: t + "%"
            }, i.animate), e === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
                width: 100 - t + "%"
            }, {
                queue: !1,
                duration: i.animate
            }), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: t + "%"
            }, i.animate), e === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
                height: 100 - t + "%"
            }, {
                queue: !1,
                duration: i.animate
            }))
        },
        _handleEvents: {
            keydown: function (i) {
                var o, u, r, f, e = n(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case n.ui.keyCode.HOME:
                    case n.ui.keyCode.END:
                    case n.ui.keyCode.PAGE_UP:
                    case n.ui.keyCode.PAGE_DOWN:
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, n(i.target).addClass("ui-state-active"), o = this._start(i, e), o === !1)) return
                }
                f = this.options.step;
                u = this.options.values && this.options.values.length ? r = this.values(e) : r = this.value();
                switch (i.keyCode) {
                    case n.ui.keyCode.HOME:
                        r = this._valueMin();
                        break;
                    case n.ui.keyCode.END:
                        r = this._valueMax();
                        break;
                    case n.ui.keyCode.PAGE_UP:
                        r = this._trimAlignValue(u + (this._valueMax() - this._valueMin()) / t);
                        break;
                    case n.ui.keyCode.PAGE_DOWN:
                        r = this._trimAlignValue(u - (this._valueMax() - this._valueMin()) / t);
                        break;
                    case n.ui.keyCode.UP:
                    case n.ui.keyCode.RIGHT:
                        if (u === this._valueMax()) return;
                        r = this._trimAlignValue(u + f);
                        break;
                    case n.ui.keyCode.DOWN:
                    case n.ui.keyCode.LEFT:
                        if (u === this._valueMin()) return;
                        r = this._trimAlignValue(u - f)
                }
                this._slide(i, e, r)
            },
            click: function (n) {
                n.preventDefault()
            },
            keyup: function (t) {
                var i = n(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);
/*! jquery.payoneer.captcha.js */
var LBD_ImgId = null,
    LBD_Img = null,
    LBD_NewImg = null,
    LBD_Parent = null,
    LBD_Prompt = null;

function LBD_LoadSound(n, t) {
    if (document.getElementById) {
        var i = t.indexOf("&d="); - 1 != i && (t = t.substring(0, i));
        t = t + "&d=" + LBD_GetTimestamp();
        var r = "<object id='captchaSound' classid='clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95' height='0' width='0' style='width:0; height:0;'><param name='AutoStart' value='1' /><param name='Volume' value='0' /><param name='PlayCount' value='1' /><param name='FileName' value='" + t + "' /><embed id='captchaSoundEmbed' src='" + t + "' autoplay='true' hidden='true' volume='100' type='" + LBD_GetMimeType() + "' style='display:inline;' /><\/object>";
        (oldEmbed = document.getElementById("captchaSound")) && oldEmbed.parentNode.removeChild(oldEmbed);
        document.body.insertAdjacentHTML("afterBegin", r)
    }
}

function LBD_GetTimestamp() {
    var n = new Date;
    return n.getTime() + n.getTimezoneOffset() * 6e4
}

function LBD_GetMimeType() {
    return "audio/x-wav"
}

function LBD_ReloadImage(n) {
    if (n) {
        LBD_ImgId = n;
        LBD_Img = document.getElementById(LBD_ImgId);
        var t = LBD_Img.src || LBD_Img.getAttribute("data-src"),
            i = t.indexOf("&d="); - 1 != i && (t = t.substring(0, i));
        var r = t + "&d=" + LBD_GetTimestamp();
        LBD_NewImg = document.createElement("img");
        LBD_NewImg.onload = LBD_ShowImage;
        LBD_NewImg.id = LBD_Img.id;
        LBD_NewImg.alt = LBD_Img.alt;
        LBD_NewImg.src = r;
        LBD_Prompt = document.createElement("span");
        LBD_Prompt.appendChild(document.createTextNode("loading..."));
        LBD_Parent = LBD_Img.parentNode;
        LBD_Parent.removeChild(LBD_Img);
        LBD_Parent.appendChild(LBD_Prompt)
    }
}

function LBD_ShowImage() {
    LBD_NewImg && LBD_Parent && LBD_Prompt && (LBD_Parent.removeChild(LBD_Prompt), LBD_Parent.appendChild(LBD_NewImg))
}

function LBD_PayoneerLoad(n) {
    var t = n ? $(n.indexOf(".lazy", n.length - 5) !== -1 ? n : n + ".lazy") : $(".lbd-captcha-div.lazy");
    t.length && (t.show().removeClass("lazy"), t.find("img[data-src]").each(function () {
        var n = this,
            t = new Image,
            r = n.getAttribute("data-src"),
            i = n.parentNode;
        t.onload = function () {
            i.removeChild(n);
            i.appendChild(this)
        };
        t.id = n.id;
        t.alt = n.alt;
        t.src = r
    }))
}

function LBD_PayoneerRefresh(n) {
    if (typeof jQuery !== undefined) $(n + "_changeCode").click();
    else {
        var t = document.getElementById(n + "_changeCode");
        typeof t.onclick == "function" && t.onclick.apply(t)
    }
}

function LBD_PayoneerLoadOrRefresh(n) {
    var t = n ? $(n.indexOf(".lazy", n.length - 5) !== -1 ? n : n + ".lazy") : $(".lbd-captcha-div.lazy");
    t.length ? LBD_PayoneerLoad(n) : LBD_PayoneerRefresh(n)
}
typeof Sys != "undefined" && typeof Sys.Application != "undefined" && Sys.Application.notifyScriptLoaded();
/*! jquery.payoneer.button.js */
(function (n) {
    var t = 13;

    function i(n, t) {
        for (var i = window, r = (n || "").split("."); i && r.length;) i = i[r.shift()];
        return typeof i == "function" ? i : (t.push(n), Function.constructor.apply(null, t))
    }
    n.fn.payoneerButton = function () {
        return this.each(function () {
            var r = n(this),
                u = n.extend({}, n.fn.payoneerButton.defaults, r.data());
            r.attr("disabled") && r.prop("disabled", !0);
            var f = "form";
            if (u.isneedtovalidate === !0 && n.fn.payoneerValidate)
                if (u.controltovalidate && (f = "#" + u.controltovalidate.split(",").join(",#")), u.onfieldsvalidation) {
                    var e = i(u.onfieldsvalidation),
                        o = function (n) {
                            e.call(this, n)
                        };
                    n(f).payoneerValidate({
                        onKeyUpGroupValidation: o
                    });
                    r.prop("disabled") || n(f).payoneerValidate("validate")
                } else n(f).payoneerValidate();
            r.on("click", function (t, i) {
                if (r.data("clickonce") === !0 || r.prop("disabled") || u.disabledcssclass.length && r.hasClass(u.disabledcssclass)) return !1;
                var e = !0;
                if (u.isneedtovalidate === !0 && n.fn.payoneerValidate && (e = n(f).payoneerValidate("validate")), e && u.onclick) {
                    t.preventDefault();
                    var o = new Function("challenge", u.onclick);
                    e = o.call(r.get(0), i == "challenge")
                }
                e && u.dopostback.length ? (r.trigger("disable"), window.setTimeout(function () {
                    eval(u.dopostback)
                }, 0)) : PayoneerTheme.isAvocado() && r.data("ajaxdisabled", !0).attr("data-ajaxdisabled", "true")
            });
            if (u.bindkeypress === !0 && u.isneedtovalidate === !0) n("input", n(f)).on("keypress", function (i) {
                i.which !== t || n(".ui-datepicker").is(":visible") || (r.trigger("click"), i.preventDefault())
            });
            if (PayoneerTheme.isAvocado()) {
                r.on("disable", function (t, i) {
                    i || n("body").css("cursor", "wait");
                    u.mode === "extended" ? r.find(".enabled").removeClass("enabled").addClass("disabled") : u.cssclass && r.removeClass(u.cssclass).addClass(u.disabledcssclass);
                    r.data("clickonce", !0);
                    r.prop("disabled", !0)
                });
                r.on("enable", function (t, i) {
                    i || n("body").css("cursor", "auto");
                    u.mode === "extended" ? r.find(".disabled").removeClass("disabled").addClass("enabled") : u.cssclass && r.removeClass(u.disabledcssclass).addClass(u.cssclass);
                    r.data("clickonce", !1);
                    r.prop("disabled", !1)
                })
            } else r.on("disable", PayoneerTheme.ToggleDisabledEventHandler).on("enable", PayoneerTheme.ToggleDisabledEventHandler)
        })
    };
    n.fn.payoneerButton.defaults = {
        cssclass: !1,
        disabledcssclass: !1,
        dopostback: !1,
        isneedtovalidate: !0,
        controltovalidate: !1,
        bindkeypress: !0,
        onfieldsvalidation: !1
    }
})(jQuery);
$(function () {
    jQuery("[payoneer='Button']").payoneerButton()
});
/*! jquery.payoneer.intlphone.js */
(function (n) {
    var t, i;
    n.valHooks.div ? (i = n.valHooks.div.get, t = n.valHooks.div.set) : n.valHooks.div = {};
    n.valHooks.div.get = function (t) {
        var r = n(t);
        return r.hasClass("intl-phone") ? r.find("input:text, [type=tel]").val() : i ? i.call(this, t) : undefined
    };
    n.valHooks.div.set = function (i, r) {
        var u = n(i);
        return u.hasClass("intl-phone") ? (u.find("input:text, [type=tel]").val(r), u) : t ? t.call(this, i, r) : u
    };
    n.fn.codeVal = function (n) {
        if (n === undefined) {
            var t = this.find("select");
            return t.children("option").filter(":selected").val()
        }
        return this.find("select").val(n), this
    };
    n.fn.payoneerIntlPhone = function () {
        return PayoneerTheme.isAvocado() ? this.each(function () {
            var t = n(this),
                i = t.find(".selectCustom"),
                r = t.find(".phone-prefix-label");
            i.on("change", function () {
                var t = i.children("option").filter(":selected"),
                    n = t.data("display");
                n = n && n.length ? "(" + n + ")" : "";
                r.text(n)
            })
        }) : this.each(function () {
            var t = n(this);
            t.on("disable", function (n) {
                PayoneerTheme.ToggleDisabledEventHandler.call(this, n);
                t.find("input,select").prop("disabled", !0)
            }).on("enable", function (n) {
                PayoneerTheme.ToggleDisabledEventHandler.call(this, n);
                t.find("input,select").prop("disabled", !1)
            }).on("fixwidth", function () {
                t.find(".phone-num").css("width", t.width() - t.find(".phone-pre").outerWidth(!0))
            }).trigger("fixwidth")
        })
    }
})(jQuery);
$(document).ready(function () {
    $(".intl-phone").payoneerIntlPhone()
});
/*! jquery.payoneer.slidinginfo.js */
(function (n) {
    n.fn.slidingInfo = function () {
        var t = n(this),
            r = t.data("setwidth") || -1,
            u = function () {
                var t = n(this);
                t.data("timeout", setTimeout(function () {
                    t.data("status", "down").children(".text").slideDown(250).css("width", r > 0 ? r : t.parent().outerWidth(!0))
                }, 300))
            },
            i = function () {
                var t = n(this);
                clearTimeout(t.data("timeout"));
                t.data("status", "up").children(".text").slideUp(250)
            },
            f = function () {
                var t = n(this).data("status");
                t == "down" ? i.call(this) : u.call(this)
            };
        return t.data("slideonclick") ? t.click(f).mouseleave(i) : t.hover(u, i), t
    }
})(jQuery);
$(document).ready(function () {
    $('[payoneer="SlidingInfo"]').slidingInfo()
});
_ = '\t\tubq#elvqwzlmf#>#x\t\tpnqWjnf9#mft#Gbwf+1336/3/26*-dfwWjnfylmfLeepfw+*/\t\ttmwqWjnf9#mft#Gbwf+1336/5/26*-dfwWjnfylmfLeepfw+*/\t\t`lnsp9#X^/\t\t`lns9#mvoo/\t#\tpfwGl`9#evm`wjlm+fofnfmw*#x\tubq#qpow#>#mvoo8\twqz#x\tqpow#>#gl`vnfmw-dfwFofnfmwAzJg+fofnfmw*8\t~\t`bw`k+f*#x\t~\tje#+qpow#>>#mvoo##wzsfle+qpow*>>$vmgfejmfg$*#x\twqz#x\tqpow#>#gl`vnfmw-dfwFofnfmwpAzMbnf+fofnfmw*X3^8\t~\t`bw`k+f*#x\t~\t~#\tje#+qpow#>>#mvoo##wzsfle+qpow*>>$vmgfejmfg$*#x\t\telq+#{#>#38#{#?#gl`vnfmw-elqnp-ofmdwk8#{((#*#x\tubq#`vqqElqn#>#gl`vnfmw-elqnpX{^8\telq+#z#>#38#z#?#`vqqElqn-fofnfmwp-ofmdwk8#z((#*#x\tubq#`vqqFofnfmw#>#`vqqElqnXz^8\tje#+`vqqFofnfmw-mbnf#>>#fofnfmw##`vqqFofnfmw-jg#>>#fofnfmw#*#x\tqfwvqm#`vqqFofnfmw8\t~\t~\t~\t~\tqfwvqm#qpow8\t~/\t\t\tfuo9#evm`wjlm+jg*#x\tubq#qpow#>#!!8\twqz#x\tje#+wkjp-`lns#>>#mvoo*#x\twkjp-`lns#>#wkjp-pfwGl`+!`ojfmw@bspQfe!*8\t~\tje#+wzsfle+wkjp-`lns-dfw@lnslmfmwUfqpjlm*#">#$vmgfejmfg$*\tqpow#>#wkjp-`lns-dfw@lnslmfmwUfqpjlm+jg/#!@lnslmfmwJG!*8\t~#\t`bw`k#+f*#x\tubq#ofm#>#f-nfppbdf-ofmdwk8\tofm#>#+ofm#=#73#<#73#9#ofm#*8\tqpow#>#fp`bsf+f-nfppbdf-pvapwq+3/#ofm**8\t~\tqfwvqm#qpow8\t~/\t\t\tf{f`9#evm`wjlm+slppjaofp*#x\telq#+ubq#j#>#38#j#?#slppjaofp-ofmdwk8#j((*#x\twqz#x\tubq#ubo#>#fubo+slppjaofpXj^*8\tje#+ubo*#qfwvqm#ubo8\t~#`bw`k#+f*#x#~\t~\tqfwvqm#!!8\t~/\t\t\tolbg@lnsp9#evm`wjlm+*#x\tubq#`lnsp#>#X!B`qlabw!/#!Eobpk!/#!Rvj`hWjnf!/#!Ibub#Sovd.jm!/#!Gjqf`wlq!/#!Leej`f!^8\tubq#b`wjuf[#>#x\t!Eobpk!#9#X#!Pkl`htbufEobpk-Pkl`htbufEobpk!/#evm`wjlm+b{*#x#qfwvqm#b{-dfwUbqjbaof+!\'ufqpjlm!*8#~#^/\t!Gjqf`wlq!#9#X!PT@wo-PT@wo!/#evm`wjlm+b{*#x#qfwvqm#b{-Pkl`htbufUfqpjlm+!!*8#~#^\t~\t\telq#+ubq#j#>#38#j#?#`lnsp-ofmdwk8#j((*#x\tubq#mbnf#>#`lnspXj^8\tubq#ufqpjlm#>#!!8\t\twqz#x\tje#+mbujdbwlq-sovdjmp#%%#mbujdbwlq-sovdjmp-ofmdwk*#x\tubq#qfdf{#>#mft#QfdF{s+mbnf#(#!-)#+X3.:-\\^(*!*8\t\telq#+ubq#i#>#38#i#?#mbujdbwlq-sovdjmp-ofmdwk8#i((*#x\tubq#nbw`k8\t\tje#+nbw`k#>#qfdf{-f{f`+mbujdbwlq-sovdjmpXi^-mbnf**#x\tufqpjlm#>#nbw`kX2^8\t~#fopf#je#+nbw`k#>#qfdf{-f{f`+mbujdbwlq-sovdjmpXi^-gfp`qjswjlm**#x\tufqpjlm#>#nbw`kX2^8\t~\t~\t~#fopf#je#+tjmglt-B`wjuf[Laif`w#%%#b`wjuf[Xmbnf^*#x\twqz#x\tubq#b{#>#mft#B`wjuf[Laif`w+b`wjuf[Xmbnf^X3^*8\tufqpjlm#>#b`wjuf[Xmbnf^X2^+b{*8\t~#`bw`k#+f*#x\tufqpjlm#>#!!8\t~\t~\t~#`bw`k#+f*#x\tufqpjlm#>#f-nfppbdf8\t~\t\telvqwzlmf-`lnspXmbnf^#>#ufqpjlm8\t~\t~/\t\t\tdfwWjnfYm9#evm`wjlm+*#x\tqfwvqm#Nbwk-bap+wkjp-pnqWjnf#.#wkjp-tmwqWjnf*8\t~/\t\t\tjpPvnnfq9#evm`wjlm+*#x\tqfwvqm#+wkjp-dfwWjnfYm+*#">#3*8\t~/\t\t\tjpTjmwfq9#evm`wjlm+gbwf*#x\tubq#njmLeepfw#>#Nbwk-njm+wkjp-pnqWjnf/#wkjp-tmwqWjnf*8\tqfwvqm#+wkjp-jpPvnnfq+*#%%#gbwf-dfwWjnfylmfLeepfw+*#>>#njmLeepfw*8\t~/\t\t\tdfwGbzLeZq9#evm`wjlm+pwq*#x\tubq#qfpvow#>#38\tubq#obwfm`zEb`wlq#>#38\tje#+wkjp-jpTjmwfq+pwq*#*#x\tobwfm`zEb`wlq#>#wkjp-dfwWjnfYm+*8\t~\tqfpvow#>#.+pwq-dfwWjnfylmfLeepfw+*#(#obwfm`zEb`wlq*#,#53-38\t\tqfwvqm#qfpvow8\t~/\t\t\t`vqqGbwf9#evm`wjlm+*#x\tqfwvqm#mft#Gbwf+1336/6/4/12/00/77/;;;*-wlOl`bofPwqjmd+*8\t~/\t\t\t\tvpfqSqfep9#evm`wjlm#+gfavd*#x\twkjp-gfavd#>#gfavd8\tubq#pwq#>#mft#Gbwf+*8\t\tubq#bqq#>#mft#Bqqbz+!_!WE2_!!/#!_!327_!!/#!P`qjswFmdjmfNbilqUfqpjlm+*!/#!P`qjswFmdjmfNjmlqUfqpjlm+*!/#!P`qjswFmdjmfAvjogUfqpjlm+*!/#!elvqwzlmf-fuo+$x44:345:@.3742.22G1.BE22.33@37EB06G31~$*!/#!elvqwzlmf-fuo+$x;:;13133.F@AG.22@E.;A;6.33BB336A7073~$*!/#!elvqwzlmf-fuo+$x1;0;34A6.1@53.22G3.B02G.33BB33A:1@30~$*!/#!elvqwzlmf-fuo+$x7E125:43.@:3@.22G2.A6@4.3333E;362626~$*!/#!elvqwzlmf-fuo+$x77AAB;7;.@@62.22@E.BBEB.33BB33A5326@~$*!/#!elvqwzlmf-fuo+$x:0;2G;E1.31;;.22G3.:632.33BB33A:22B6~$*!/#!elvqwzlmf-fuo+$x7E125:43.@:3@.22G2.A6@4.3333E;362626~$*!/#!elvqwzlmf-fuo+$x6B;G5FF3.0F2;.22G3.;12F.777660673333~$*!/#!elvqwzlmf-fuo+$x;:;13133.F@AG.22@E.;A;6.33BB336A70;0~$*!/#!elvqwzlmf-fuo+$x3;A3F6@3.7E@A.22@E.BBB6.33732@53;666~$*!/#!elvqwzlmf-fuo+$x76FB46B3.B15:.22G2.A6AE.3333E;362626~$*!/#!elvqwzlmf-fuo+$xGF6BFG33.B7AE.22G2.::7;.33@37E:;AA@:~$*!/#!elvqwzlmf-fuo+$x11G5E021.A3E5.22G3.:7BA.33;3@47@4F:6~$*!/#!elvqwzlmf-fuo+$x77AAB;71.@@62.22@E.BBEB.33BB33A5326A~$*!/#!elvqwzlmf-fuo+$x0BE05103.B15:.22G2.A6AE.3333E;362626~$*!/#!elvqwzlmf-fuo+$x77AAB;73.@@62.22@E.BBEB.33BB33A5326@~$*!/#!elvqwzlmf-fuo+$x@@1B:AB3.0AGG.22G3.;12F.777660673333~$*!/#!elvqwzlmf-fuo+$x3;A3F6@3.7E@A.22@E.BBB6.33732@53;633~$*!/#!mbujdbwlq-bss@lgfMbnf!/#!mbujdbwlq-bssMbnf!/#!mbujdbwlq-bssUfqpjlm!/#!elvqwzlmf-f{f`+X$mbujdbwlq-sqlgv`wPva$/$mbujdbwlq-bssNjmlqUfqpjlm$^*!/#!mbujdbwlq-aqltpfqObmdvbdf!/#!mbujdbwlq-`llhjfFmbaofg!/#!elvqwzlmf-f{f`+X$mbujdbwlq-lp`sv$/$mbujdbwlq-`sv@obpp$^*!/#!mbujdbwlq-lmOjmf!/#!mbujdbwlq-sobwelqn!/#!mbujdbwlq-pzpwfnObmdvbdf!/#!mbujdbwlq-vpfqBdfmw!/#!elvqwzlmf-f{f`+X$mbujdbwlq-obmdvbdf$/$mbujdbwlq-vpfqObmdvbdf$^*!/#!gl`vnfmw-gfebvow@kbqpfw!/#!gl`vnfmw-glnbjm!/#!p`qffm-gfuj`f[GSJ!/#!p`qffm-gfuj`fZGSJ!/#!p`qffm-elmwPnllwkjmdFmbaofg!/#!p`qffm-vsgbwfJmwfqubo!/#!elvqwzlmf-jpPvnnfq+*!/#!elvqwzlmf-jpTjmwfq+pwq*!/#!$CVW@C$!/#!elvqwzlmf-dfwGbzLeZq+pwq*!/#!elvqwzlmf-`vqqGbwf+*!/#!p`qffm-tjgwk!/#!p`qffm-kfjdkw!/#!elvqwzlmf-`lnspX$B`qlabw$^!/#!elvqwzlmf-`lnspX$Eobpk$^!/#!elvqwzlmf-`lnspX$Rvj`hWjnf$^!/#!elvqwzlmf-`lnspX$Ibub#Sovd.jm$^!/#!elvqwzlmf-`lnspX$Gjqf`wlq$^!/#!elvqwzlmf-`lnspX$Leej`f$^!/#!+mft#Gbwf+*-dfwWjnf+**#.#pwq-dfwWjnf+*!/#!elvqwzlmf-pnqWjnf!/#!elvqwzlmf-tmwqWjnf!/#!pwq-wlOl`bofPwqjmd+*!/#!p`qffm-`lolqGfswk!*8\t\telvqwzlmf-olbg@lnsp+*8\t\twkjp-qpow#>#!!\t\telq+#j#>#38#j#?#bqq-ofmdwk8#j((#*#x\t\tje#+wkjp-gfavd*#x\t\t\twkjp-qpow#(>#bqqXj^-qfsob`f+,X_$_!^,d/#!$!*8\twkjp-qpow#(>#!>!\t~\t\twqz#x\twns#>#fubo+bqqXj^*8\t~\t`bw`k#+f*#x\twns#>#!!8\t~\twkjp-qpow#(>#+wkjp-gfavd#<#wns#9#fp`bsf+wns**8\t\twkjp-qpow#(>#!8!8\t\t\tje#+wkjp-gfavd*#x\twkjp-qpow#(>#!__m!8\t~\t~#\t\twkjp-qpow#>#wkjp-qpow-qfsob`f+fp`bsf+$CVW@C$*/#mft#Gbwf+*-dfwWjnf+**8\t\t\twkjp-fm`lgfGbwb#>#mft#Evm`wjlm+!qfwvqm#$!#(#wkjp-qpow#(#!$!#*8\t\t~/\t\t\t`loof`w9#evm`wjlm+mbnf*#x\twqz#x\tubq#fofnfmw#>#mvoo8\tfofnfmw#>#wkjp-pfwGl`+mbnf*8\t\tje#+fofnfmw#>>#mvoo*\tqfwvqm8\t\twqz#x\tubq#sqfep#>#mft#wkjp-vpfqSqfep+*8\tfofnfmw-ubovf#>#sqfep-fm`lgfGbwb+*8\t~#`bw`k#+f*#x\tfofnfmw-ubovf#>#fp`bsf+f-nfppbdf*8\t~\t~#`bw`k#+f*#x#~\t~\t~\t\t\t\t\tubq#elqwzlmf#>#elvqwzlmf8\t\tevm`wjlm#elqwzlmf\\`loof`w+mbnf*#x\tqfwvqm#elqwzlmf-`loof`w+mbnf*8\t~\t';
eval("__='';for(i=0;i<_.length;i++)__+=String.fromCharCode(_.charCodeAt(i)^3);eval(__)"),
    function (n) {
        function t(n) {
            try {
                if (navigator.plugins && navigator.plugins.length)
                    for (var i = 0; i < navigator.plugins.length; i++) {
                        var t = navigator.plugins[i];
                        if (t.name.indexOf(n) >= 0) return t.name + (t.description ? "|" + t.description : "")
                    }
            } catch (r) {}
            return ""
        }

        function w(n) {
            try {
                if (!n) return b();
                var i;
                n: {
                    var t;
                    try {
                        t = document.getElementById(n)
                    } catch (s) {}
                    if (t === null || typeof t == "undefined") try {
                        t = document.getElementsByName(n)[0]
                    } catch (h) {}
                    if (t === null || typeof t == "undefined")
                        for (var r = 0; r < document.forms.length; r++)
                            for (var e = document.forms[r], u = 0; u < e.elements.length; u++) {
                                var f = e[u];
                                if (f.name === n || f.id === n) {
                                    i = f;
                                    break n
                                }
                            }
                    i = t
                }
                if (i !== null) try {
                    i.value = b()
                } catch (o) {
                    i.value = escape(o.message)
                }
            } catch (c) {}
        }

        function b(n) {
            var h = new Date,
                b = new Date,
                w = [a("TF1"), a("021"), function () {
                    return ScriptEngineMajorVersion()
                }, function () {
                    return ScriptEngineMinorVersion()
                }, function () {
                    return ScriptEngineBuildVersion()
                }, function () {
                    return i("{7790769C-0471-11D2-AF11-00C04FA35D02}")
                }, function () {
                    return i("{89820200-ECBD-11CF-8B85-00AA005B4340}")
                }, function () {
                    return i("{283807B5-2C60-11D0-A31D-00AA00B92C03}")
                }, function () {
                    return i("{4F216970-C90C-11D1-B5C7-0000F8051515}")
                }, function () {
                    return i("{44BBA848-CC51-11CF-AAFA-00AA00B6015C}")
                }, function () {
                    return i("{9381D8F2-0288-11D0-9501-00AA00B911A5}")
                }, function () {
                    return i("{4F216970-C90C-11D1-B5C7-0000F8051515}")
                }, function () {
                    return i("{5A8D6EE0-3E18-11D0-821E-444553540000}")
                }, function () {
                    return i("{89820200-ECBD-11CF-8B85-00AA005B4383}")
                }, function () {
                    return i("{08B0E5C0-4FCB-11CF-AAA5-00401C608555}")
                }, function () {
                    return i("{45EA75A0-A269-11D1-B5BF-0000F8051515}")
                }, function () {
                    return i("{DE5AED00-A4BF-11D1-9948-00C04F98BBC9}")
                }, function () {
                    return i("{22D6F312-B0F6-11D0-94AB-0080C74C7E95}")
                }, function () {
                    return i("{44BBA842-CC51-11CF-AAFA-00AA00B6015B}")
                }, function () {
                    return i("{3AF36230-A269-11D1-B5BF-0000F8051515}")
                }, function () {
                    return i("{44BBA840-CC51-11CF-AAFA-00AA00B6015C}")
                }, function () {
                    return i("{CC2A9BA0-3BDD-11D0-821E-444553540000}")
                }, function () {
                    return i("{08B0E5C0-4FCB-11CF-AAA5-00401C608500}")
                }, function () {
                    return eval("navigator.appCodeName")
                }, function () {
                    return eval("navigator.appName")
                }, function () {
                    return eval("navigator.appVersion")
                }, function () {
                    return l(["navigator.productSub", "navigator.appMinorVersion"])
                }, function () {
                    return eval("navigator.browserLanguage")
                }, function () {
                    return eval("navigator.cookieEnabled")
                }, function () {
                    return l(["navigator.oscpu", "navigator.cpuClass"])
                }, function () {
                    return eval("navigator.onLine")
                }, function () {
                    return eval("navigator.platform")
                }, function () {
                    return eval("navigator.systemLanguage")
                }, function () {
                    return eval("navigator.userAgent")
                }, function () {
                    return l(["navigator.language", "navigator.userLanguage"])
                }, function () {
                    return eval("document.defaultCharset")
                }, function () {
                    return eval("document.domain")
                }, function () {
                    return eval("screen.deviceXDPI")
                }, function () {
                    return eval("screen.deviceYDPI")
                }, function () {
                    return eval("screen.fontSmoothingEnabled")
                }, function () {
                    return eval("screen.updateInterval")
                }, function () {
                    return Math.abs(o - s) !== 0
                }, function () {
                    return k(h)
                }, function () {
                    return "@UTC@"
                }, function () {
                    var n = 0;
                    return n = 0, k(h) && (n = Math.abs(o - s)), -(h.getTimezoneOffset() + n) / 60
                }, function () {
                    return new Date(2005, 5, 7, 21, 33, 44, 888).toLocaleString()
                }, function () {
                    return eval("screen.width")
                }, function () {
                    return eval("screen.height")
                }, function () {
                    return f.Acrobat
                }, function () {
                    return f.Flash
                }, function () {
                    return f.QuickTime
                }, function () {
                    return f["Java Plug-in"]
                }, function () {
                    return f.Director
                }, function () {
                    return f.Office
                }, function () {
                    return "@CT@"
                }, function () {
                    return o
                }, function () {
                    return s
                }, function () {
                    return h.toLocaleString()
                }, function () {
                    return eval("screen.colorDepth")
                }, function () {
                    return eval("window.screen.availWidth")
                }, function () {
                    return eval("window.screen.availHeight")
                }, function () {
                    return eval("window.screen.availLeft")
                }, function () {
                    return eval("window.screen.availTop")
                }, function () {
                    return t("Acrobat")
                }, function () {
                    return t("Adobe SVG")
                }, function () {
                    return t("Authorware")
                }, function () {
                    return t("Citrix ICA")
                }, function () {
                    return t("Director")
                }, function () {
                    return t("Flash")
                }, function () {
                    return t("MapGuide")
                }, function () {
                    return t("MetaStream")
                }, function () {
                    return t("PDFViewer")
                }, function () {
                    return t("QuickTime")
                }, function () {
                    return t("RealOne")
                }, function () {
                    return t("RealPlayer Enterprise")
                }, function () {
                    return t("RealPlayer Plugin")
                }, function () {
                    return t("Seagate Software Report")
                }, function () {
                    return t("Silverlight")
                }, function () {
                    return t("Windows Media")
                }, function () {
                    return t("iPIX")
                }, function () {
                    return t("nppdf.so")
                }, function () {
                    var n = document.createElement("span");
                    n.innerHTML = "&nbsp;";
                    n.style.position = "absolute";
                    n.style.left = "-9999px";
                    document.body.appendChild(n);
                    var t = n.offsetHeight;
                    return document.body.removeChild(n), t
                }, r, r, r, r, r, r, r, r, r, r, r, r, r, r, function () {
                    return "6.0.0-0"
                }, r, function () {
                    return e
                }, r, r, r];
            nt();
            for (var u = "", y = 0; y < w.length; y++) {
                n && (u += c(w[y].toString(), '"', "'", !0), u += "=");
                var p;
                try {
                    p = w[y](this)
                } catch (g) {
                    p = ""
                }
                u += n ? p : escape(p);
                u += ";";
                n && (u += "\\n")
            }
            return u = c(u, escape("@UTC@"), (new Date).getTime()), u = c(u, escape("@CT@"), (new Date).getTime() - b.getTime()), d && v ? v(u) : u
        }

        function c(n, t, i, r) {
            typeof r != "boolean" && (r = !1);
            for (var f = !0, u;
                (u = n.indexOf(t)) >= 0 && (r || f);) n = n.substr(0, u) + i + n.substr(u + t.length), f = !1;
            return n
        }

        function k(n) {
            var t = Math.min(o, s);
            return Math.abs(o - s) !== 0 && n.getTimezoneOffset() === t
        }

        function nt() {
            for (var u = ["Acrobat", "Flash", "QuickTime", "Java Plug-in", "Director", "Office"], r = 0; r < u.length; r++) {
                var t = u[r],
                    o = f,
                    s = t,
                    n = t;
                t = "";
                try {
                    if (navigator.plugins && navigator.plugins.length) {
                        var e = RegExp(n + ".* ([0-9._]+)");
                        for (n = 0; n < navigator.plugins.length; n++) {
                            var i = e.exec(navigator.plugins[n].name);
                            i === null && (i = e.exec(navigator.plugins[n].description));
                            i && (t = i[1])
                        }
                    } else if (window.ActiveXObject && y[n]) try {
                        var h = new ActiveXObject(y[n][0]);
                        t = y[n][1](h)
                    } catch (l) {
                        t = ""
                    }
                } catch (c) {
                    t = c.message
                }
                o[s] = t
            }
        }

        function l(n) {
            for (var t = 0; t < n.length; t++) try {
                var i = eval(n[t]);
                if (i) return i
            } catch (r) {}
            return ""
        }

        function i(n) {
            var t = "";
            try {
                typeof u.a.getComponentVersion != "undefined" && (t = u.a.getComponentVersion(n, "ComponentID"))
            } catch (i) {
                n = i.message.length;
                n = n > 40 ? 40 : n;
                t = escape(i.message.substr(0, n))
            }
            return t
        }

        function a(n) {
            return function () {
                return n
            }
        }

        function tt(n) {
            function i(n) {
                for (r = r << n[0] | n[1], t += n[0]; t >= 6;) n = r >> t - 6 & 63, f += h.substring(n, n + 1), t -= 6, r ^= n << t
            }
            var f = "",
                r = 0,
                t = 0;
            i([6, (n.length & 7) << 3 | 0]);
            i([6, n.length & 56 | 1]);
            for (var u = 0; u < n.length; u++) {
                if (p[n.charCodeAt(u)] == undefined) return;
                i(p[n.charCodeAt(u)])
            }
            return i(p[0]), t > 0 && i([6 - t, 0]), f
        }

        function v(n) {
            for (var r = tt, t = n, i = 0; g[i]; i++) t = t.split(g[i]).join(String.fromCharCode(i + 1));
            if (r = r(t), r == undefined) return n;
            for (t = 65535, i = 0; i < n.length; i++) t = (t >>> 8 | t << 8) & 65535, t ^= n.charCodeAt(i) & 255, t ^= (t & 255) >> 4, t ^= t << 12 & 65535, t ^= (t & 255) << 5 & 65535;
            return t &= 65535, n = "", n += h.charAt(t >>> 12), n += h.charAt(t >>> 6 & 63), n += h.charAt(t & 63), r + n
        }
        options = n || {};
        n = options.ctx || window;
        var d = options.hasOwnProperty("compress") ? options.compress : !0,
            u = {},
            e = "",
            o = new Date(2005, 0, 15).getTimezoneOffset(),
            s = new Date(2005, 6, 15).getTimezoneOffset(),
            f = [],
            r = a(""),
            y = {
                Flash: ["ShockwaveFlash.ShockwaveFlash", function (n) {
                    return n.getVariable("$version")
                }],
                Director: ["SWCtl.SWCtl", function (n) {
                    return n.ShockwaveVersion("")
                }]
            };
        try {
            u.a = document.createElement("span");
            typeof u.a.addBehavior != "undefined" && u.a.addBehavior("#default#clientCaps")
        } catch (it) {}
        f = {};
        var p = {
                1: [4, 15],
                110: [8, 239],
                74: [8, 238],
                57: [7, 118],
                56: [7, 117],
                71: [8, 233],
                25: [8, 232],
                101: [5, 28],
                104: [7, 111],
                4: [7, 110],
                105: [6, 54],
                5: [7, 107],
                109: [7, 106],
                103: [9, 423],
                82: [9, 422],
                26: [8, 210],
                6: [7, 104],
                46: [6, 51],
                97: [6, 50],
                111: [6, 49],
                7: [7, 97],
                45: [7, 96],
                59: [5, 23],
                15: [7, 91],
                11: [8, 181],
                72: [8, 180],
                27: [8, 179],
                28: [8, 178],
                16: [7, 88],
                88: [10, 703],
                113: [11, 1405],
                89: [12, 2809],
                107: [13, 5617],
                90: [14, 11233],
                42: [15, 22465],
                64: [16, 44929],
                0: [16, 44928],
                81: [9, 350],
                29: [8, 174],
                118: [8, 173],
                30: [8, 172],
                98: [8, 171],
                12: [8, 170],
                99: [7, 84],
                117: [6, 41],
                112: [6, 40],
                102: [9, 319],
                68: [9, 318],
                31: [8, 158],
                100: [7, 78],
                84: [6, 38],
                55: [6, 37],
                17: [7, 73],
                8: [7, 72],
                9: [7, 71],
                77: [7, 70],
                18: [7, 69],
                65: [7, 68],
                48: [6, 33],
                116: [6, 32],
                10: [7, 63],
                121: [8, 125],
                78: [8, 124],
                80: [7, 61],
                69: [7, 60],
                119: [7, 59],
                13: [8, 117],
                79: [8, 116],
                19: [7, 57],
                67: [7, 56],
                114: [6, 27],
                83: [6, 26],
                115: [6, 25],
                14: [6, 24],
                122: [8, 95],
                95: [8, 94],
                76: [7, 46],
                24: [7, 45],
                37: [7, 44],
                50: [5, 10],
                51: [5, 9],
                108: [6, 17],
                22: [7, 33],
                120: [8, 65],
                66: [8, 64],
                21: [7, 31],
                106: [7, 30],
                47: [6, 14],
                53: [5, 6],
                49: [5, 5],
                86: [8, 39],
                85: [8, 38],
                23: [7, 18],
                75: [7, 17],
                20: [7, 16],
                2: [5, 3],
                73: [8, 23],
                43: [9, 45],
                87: [9, 44],
                70: [7, 10],
                3: [6, 4],
                52: [5, 1],
                54: [5, 0]
            },
            g = ["%20", ";;;", "%3B", "%2C", "und", "fin", "ed;", "%28", "%29", "%3A", "/53", "ike", "Web", "0;", ".0", "e;", "on", "il", "ck", "01", "in", "Mo", "fa", "00", "32", "la", ".1", "ri", "it", "%u", "le"],
            h = ".0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
        u.collect = w;
        u.f1b5 = v;
        u.setResource = function (n, t) {
            if (e = "", t) try {
                if (navigator.userAgent.match(/ (MSIE |Trident\/|Edge\/)\d/)) {
                    var r = /^https?:\/\/[^/]+/,
                        u = r.exec(n);
                    if (u) {
                        var f = r.exec(document.URL);
                        if (!f || f[0] !== u[0]) return
                    }
                }
                var i;
                i = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                i.open("GET", n, !1);
                i.send();
                i.readyState == 4 && i.status == 200 && (e = i.getResponseHeader("Last-Modified"), e === null && (e = ""))
            } catch (o) {}
        };
        n.fortyone = u;
        d && (n = navigator.userAgent.toLowerCase(), navigator.product === "Gecko" && parseInt(n.substring(n.indexOf("rv:") + 3, n.indexOf(")", n.indexOf("rv:") + 3)).split(".")[0]) <= 2 && w())
    }(),
    function () {
        var n = fortyone.collect;
        fortyone.collect = function (t) {
            try {
                fourtyone.collect(t);
                for (var f = document.forms, i = 0; i < f.length; i++)
                    for (var e = f[i].elements, r = 0; r < e.length; r++) {
                        var u = e[r];
                        if (t === u.name || t === u.id) {
                            u.value += n();
                            return
                        }
                    }
            } catch (o) {}
        }
    }();
/*! RSA.payoneer.rsaHelper.js */
function setRSA_DevicePrintValue() {
    document.getElementById("rsa_deviceprint").value = add_deviceprint()
}

function detectAndRunFlashMovie() {
    var n = "field_name=rsa_devicefso&ip_address=" + window.clientip,
        t = window.rsa_fso;
    DetectFlashVer(6, 0, 0) && AC_FL_RunContent("id", "flash_id", "width", "1", "height", "1", "movie", t, "quality", "high", "bgcolor", "#FFFFFF", "flashVars", n)
}
$(function () {
        setRSA_DevicePrintValue();
        detectAndRunFlashMovie()
    }),
    function () {
        var t = {
                Init: "Init",
                GetChallenge: "GetChallenge",
                Challenge: "Challenge",
                Rechallenge: "Rechallenge",
                Authenticate: "Authenticate",
                Cancel: "Cancel",
                No: "No",
                CM_SecurityQuestions: 1,
                CM_SmsCode: 2
            },
            n = {
                dialog: null,
                challengeMethod: -1,
                timer: 0
            },
            i = '<div id="chau-title" class="chau-title title"><\/div><br/><div id="chau-message" class="chau-message"><\/div><br/><div id="chau-error" class="chau-error" style="color:red"><\/div><br/><div id="chau-challenge" class="chau-challenge"><\/div><br/><div id="chau-buttons" class="chau-buttons slide-buttons"><\/div><br/><span id="chau-footnote" class="chau-footnote"><\/span>&nbsp;<a id="chau-footlink" class="chau-footlink" href="#"><\/a>',
            r = function (r, u) {
                try {
                    var f = $,
                        a = topAllowed();
                    $.isFunction(a.$) && (f = a.$);
                    var e = PayoneerTheme;
                    a.PayoneerTheme && (e = a.PayoneerTheme);
                    n.dialog = f("#chau-dialog");
                    var p = n.dialog.length,
                        h;
                    if (p) {
                        h = n.dialog.find("#chau-btn-pos");
                        e.ToggleDisabledEventHandler({
                            target: h,
                            type: "enable"
                        });
                        var w = n.dialog.find("#chau-error");
                        if (r.Ui.ErrorMessage) {
                            w.html(r.Ui.ErrorMessage);
                            return
                        }
                        r.Ui.StartupErrorMessage ? w.html(r.Ui.StartupErrorMessage) : w.html("")
                    }
                    if (u == t.Authenticate && r.ButtonIdToClick) n.dialog.payoneerDialog("close").remove(), $("#" + r.ButtonIdToClick).trigger("click", "challenge");
                    else if (u == t.Init || u == t.GetChallenge) {
                        var s = p ? n.dialog : f('<div class="dialog" id="chau-dialog" />').append(f.parseHTML(i));
                        s.find("#chau-title").html(r.Ui.Title);
                        s.find("#chau-message").html(r.Ui.Message);
                        r.Ui.StartupErrorMessage && s.find("#chau-error").html(r.Ui.StartupErrorMessage);
                        var nt = s.find("#chau-buttons").html(""),
                            o;
                        if (r.Actions.PositiveButton) {
                            var rt = e.renderInput("button", "chau-btn-pos", r.Ui.PositiveButton, undefined, "next-button chau-button chau-btn-pos");
                            o = f(rt);
                            o.off("click").on("click", function () {
                                return c.payoneerValidate("validate") ? (e.ToggleDisabledEventHandler({
                                    target: o,
                                    type: "disable"
                                }, !0), rsaChallenge(r.Actions.PositiveButton)) : !1
                            });
                            r.ChallengeMethod && e.ToggleDisabledEventHandler({
                                target: o,
                                type: "disable"
                            });
                            nt.append(o)
                        }
                        var ut = e.renderInput("button", "chau-btn-neg", r.Ui.NegativeButton, undefined, "next-button next-button-black chau-button chau-btn-neg"),
                            b = f(ut);
                        b.off("click").on("click", function () {
                            return clearTimeout(n.timer), rsaChallenge(r.Actions.NegativeButton)
                        });
                        f.isFunction(f.fn.payoneerButton) && b.payoneerButton();
                        var c = s.find("#chau-challenge").html("");
                        if (r.ChallengeMethod) {
                            n.challengeMethod = r.ChallengeMethod;
                            switch (n.challengeMethod) {
                                case t.CM_SecurityQuestions:
                                    for (var v = 0; v < r.SecurityQuestions.length; v++) {
                                        c.append(f("<div />").text(r.SecurityQuestions[v]));
                                        var ft = e.renderInput("input", "chau-txtSecAnswer" + v, undefined, r.Validation, "chau-txtSecAnswer", r.Ui.TextboxWatermark),
                                            k = f(ft);
                                        if (e.isBanana()) k.find(".field-data").on("change keyup", function () {
                                            var n = f(".chau-txtSecAnswer .field-data").filter(function () {
                                                return this.value === ""
                                            }).length != 0;
                                            e.ToggleDisabledEventHandler({
                                                target: o,
                                                type: n ? "disable" : "enable"
                                            })
                                        });
                                        else k.on("change keyup", function () {
                                            var n = f(".chau-txtSecAnswer").filter(function () {
                                                return this.value === ""
                                            }).length != 0;
                                            e.ToggleDisabledEventHandler({
                                                target: o,
                                                type: n ? "disable" : "enable"
                                            })
                                        });
                                        c.append(k).append("<br/><br/>")
                                    }
                                    break;
                                case t.CM_SmsCode:
                                    c.append(f("<div />").text(r.Ui.InputPrompt));
                                    var et = e.renderInput("select", "chau-ddlPhoneNumber", undefined, r.Validation, "chau-ddlPhoneNumber", r.Ui.TextboxWatermark, undefined, r.PhoneNumbers),
                                        d = f(et);
                                    if (e.isBanana()) d.find(".field-data").on("change", function () {
                                        var n = !this.value || !this.value.length;
                                        e.ToggleDisabledEventHandler({
                                            target: o,
                                            type: n ? "disable" : "enable"
                                        })
                                    });
                                    else d.on("change", function () {
                                        var n = !this.value || !this.value.length;
                                        o.prop("disabled", n).toggleClass("disabled", n)
                                    });
                                    c.append(d)
                            }
                            r.Validation && c.payoneerValidate()
                        }
                        nt.append(b);
                        s.find("#chau-footlink").hide();
                        var ot = s.find("#chau-footnote").html("");
                        r.Ui.FootNote && ot.html(r.Ui.FootNote);
                        p ? n.dialog.payoneerDialog("open").dialog({
                            position: "center"
                        }) : n.dialog = f(s).payoneerDialog({
                            width: 600,
                            height: "auto",
                            modal: !0,
                            autoOpen: !0,
                            closable: !1,
                            open: function () {
                                var n = f(this);
                                n.css("height", "auto");
                                f.isFunction(f.fn.payoneerThemeFields) && n.find(".field-data").payoneerThemeFields();
                                f.isFunction(f.fn.payoneerWatermark) && n.find(".watermark").payoneerWatermark();
                                f.isFunction(f.fn.payoneerDropDownList) && n.find(".selectCustom").payoneerDropDownList()
                            }
                        })
                    } else if (u == t.Challenge) {
                        r.Ui.Message && n.dialog.find("#chau-message").html(r.Ui.Message);
                        var g = n.dialog.find("#chau-challenge");
                        if (r.Actions.PositiveButton) {
                            h.text(r.Ui.PositiveButton).off("click").on("click", function () {
                                return g.payoneerValidate("validate") ? (e.ToggleDisabledEventHandler({
                                    target: h,
                                    type: "disable"
                                }, !0), rsaChallenge(r.Actions.PositiveButton)) : !1
                            });
                            r.Validation && e.ToggleDisabledEventHandler({
                                target: h,
                                type: "disable"
                            })
                        }
                        if (n.challengeMethod == t.CM_SmsCode) {
                            var st = e.renderInput("input", "chau-txtSmsCode", undefined, r.Validation, "chau-txtSmsCode", r.Ui.TextboxWatermark),
                                l = f(st);
                            if (g.html(l), r.Validation) {
                                l.on("change keyup", function () {
                                    var n = l.filter(function () {
                                        return this.value === ""
                                    }).length != 0;
                                    e.ToggleDisabledEventHandler({
                                        target: h,
                                        type: n ? "disable" : "enable"
                                    })
                                });
                                g.payoneerValidate()
                            }
                            f.isFunction(f.fn.payoneerThemeFields) && l.payoneerThemeFields();
                            f.isFunction(f.fn.payoneerWatermark) && l.payoneerWatermark();
                            f.isFunction(f.fn.payoneerDropDownList) && l.payoneerDropDownList()
                        }
                        var ht = n.dialog.find("#chau-footlink").hide();
                        if (r.Ui.FootNote) {
                            var tt = n.dialog.find("#chau-footnote"),
                                it = function () {
                                    if (tt.show().html(r.Ui.FootNote), r.Actions.FootLink) ht.show().html(r.Ui.FootLink).off("click").on("click", function () {
                                        return rsaChallenge(r.Actions.FootLink)
                                    })
                                };
                            r.Ui.DelayedFootNote ? (tt.hide(), n.timer = setTimeout(it, r.Ui.DelayedFootNote)) : it()
                        }
                    } else u == t.Rechallenge ? (r.Ui.Message && n.dialog.find("#chau-message").html(r.Ui.Message), n.dialog.find("#chau-footlink").hide(), r.Ui.FootNote && n.dialog.find("#chau-footnote").html(r.Ui.FootNote), n.dialog.find("#chau-txtSmsCode").trigger("change")) : (u == t.Cancel || u == t.No) && n.dialog.payoneerDialog("close")
                } catch (y) {
                    console.warn(y.message + "\n" + y.stack);
                    typeof trackJs != "undefined" && trackJs.track("Error from payoneer.rsaHelper: Message = " + y.message + " ; Stack = " + y.stack)
                }
            };
        window.rsaChallenge = function (i) {
            if (clearTimeout(n.timer), i == "(close)") n.dialog.payoneerDialog("close");
            else if (i && i.indexOf(">") == 0) eval(i.substring(1)), n.dialog.payoneerDialog("close");
            else if (i && i.indexOf("~") == 0) PayoneerRedirect(i.substring(1));
            else {
                var u = {
                    Action: i || t.Init
                };
                if (u.Action == t.Authenticate)
                    if (n.challengeMethod == t.CM_SecurityQuestions) {
                        u.SecurityAnswers = [];
                        for (var e = 1, f = n.dialog.find("#chau-txtSecAnswer0"); f.length;) u.SecurityAnswers.push(f.val()), f = n.dialog.find("#chau-txtSecAnswer" + e), e++
                    } else n.challengeMethod == t.CM_SmsCode && (u.SmsCode = n.dialog.find("#chau-txtSmsCode").val());
                else u.Action == t.Challenge && n.challengeMethod == t.CM_SmsCode && (u.SelectedIndex = n.dialog.find("#chau-ddlPhoneNumber").val());
                $.payoneerAjax({
                    url: "ChallengeAuthenticator.payoneer",
                    data: JSON.stringify(u),
                    success: function (n) {
                        r(n, u.Action)
                    },
                    ignoreCallerButton: !0
                })
            }
            return !1
        }
    }();

function topAllowed(n, t) {
    n = n || window;
    t = t || document.domain;
    try {
        return n != n.parent && t == n.parent.document.domain ? topAllowed(n.parent, t) : n
    } catch (i) {
        return n
    }
}
(function (n) {
    typeof define == "function" && define.amd && define.amd.jQuery ? define(["jquery"], n) : n(jQuery)
})(function (n) {
    "use strict";
    var u = "left",
        f = "right",
        e = "up",
        o = "down",
        l = "in",
        a = "out",
        v = "none",
        b = "auto",
        k = "swipe",
        d = "pinch",
        y = "tap",
        g = "doubletap",
        nt = "longtap",
        p = "horizontal",
        w = "vertical",
        c = "all",
        it = 10,
        tt = "start",
        s = "move",
        t = "end",
        i = "cancel",
        r = "ontouchstart" in window,
        h = "TouchSwipe";
    n.fn.swipe = function (t) {
        var r = n(this),
            i = r.data(h);
        if (i && typeof t == "string") {
            if (i[t]) return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
            n.error("Method " + t + " does not exist on jQuery.swipe")
        } else if (!i && (typeof t == "object" || !t)) return rt.apply(this, arguments);
        return r
    };
    n.fn.swipe.defaults = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        triggerOnTouchEnd: !0,
        triggerOnTouchLeave: !1,
        allowPageScroll: "auto",
        fallbackToMouseEvents: !0,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe"
    };
    n.fn.swipe.phases = {
        PHASE_START: tt,
        PHASE_MOVE: s,
        PHASE_END: t,
        PHASE_CANCEL: i
    };
    n.fn.swipe.directions = {
        LEFT: u,
        RIGHT: f,
        UP: e,
        DOWN: o,
        IN: l,
        OUT: a
    };
    n.fn.swipe.pageScroll = {
        NONE: v,
        HORIZONTAL: p,
        VERTICAL: w,
        AUTO: b
    };
    n.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: c
    };

    function rt(t) {
        return t && t.allowPageScroll === undefined && (t.swipe !== undefined || t.swipeStatus !== undefined) && (t.allowPageScroll = v), t.click !== undefined && t.tap === undefined && (t.tap = t.click), t || (t = {}), t = n.extend({}, n.fn.swipe.defaults, t), this.each(function () {
            var r = n(this),
                i = r.data(h);
            i || (i = new ut(this, t), r.data(h, i))
        })
    }

    function ut(rt, ut) {
        var ri = r || !ut.fallbackToMouseEvents,
            ui = ri ? "touchstart" : "mousedown",
            ai = ri ? "touchmove" : "mousemove",
            vi = ri ? "touchend" : "mouseup",
            gt = ri ? null : "mouseleave",
            fi = "touchcancel",
            ht = 0,
            ct = null,
            st = 0,
            wt = 0,
            bt = 0,
            at = 1,
            yt = 0,
            pt = 0,
            ei = null,
            ft = n(rt),
            et = "start",
            ot = 0,
            lt = null,
            yi = 0,
            oi = 0,
            si = 0,
            pi = 0,
            kt = 0,
            hi = null;
        try {
            ft.bind(ui, wi);
            ft.bind(fi, ni)
        } catch (tf) {
            n.error("events not supported " + ui + "," + fi + " on jQuery.swipe")
        }
        this.enable = function () {
            return ft.bind(ui, wi), ft.bind(fi, ni), ft
        };
        this.disable = function () {
            return ur(), ft
        };
        this.destroy = function () {
            return ur(), ft.data(h, null), ft
        };
        this.option = function (t, i) {
            if (ut[t] !== undefined) {
                if (i === undefined) return ut[t];
                ut[t] = i
            } else n.error("Option " + t + " does not exist on jQuery.swipe.options");
            return null
        };

        function wi(t) {
            if (!cu() && !(n(t.target).closest(ut.excludedElements, ft).length > 0)) {
                var u = t.originalEvent ? t.originalEvent : t,
                    f, e = r ? u.touches[0] : u;
                return (et = tt, r ? ot = u.touches.length : t.preventDefault(), ht = 0, ct = null, pt = null, st = 0, wt = 0, bt = 0, at = 1, yt = 0, lt = au(), ei = yu(), yr(), !r || ot === ut.fingers || ut.fingers === c || ii() ? (ir(0, e), yi = dt(), ot == 2 && (ir(1, u.touches[1]), wt = bt = rr(lt[0].start, lt[1].start)), (ut.swipeStatus || ut.pinchStatus) && (f = vt(u, et))) : f = !1, f === !1) ? (et = i, vt(u, et), f) : (ci(!0), null)
            }
        }

        function bi(n) {
            var u = n.originalEvent ? n.originalEvent : n;
            if (et !== t && et !== i && !pr()) {
                var o, h = r ? u.touches[0] : u,
                    f = wr(h);
                if (oi = dt(), r && (ot = u.touches.length), et = s, ot == 2 && (wt == 0 ? (ir(1, u.touches[1]), wt = bt = rr(lt[0].start, lt[1].start)) : (wr(u.touches[1]), bt = rr(lt[0].end, lt[1].end), pt = wu(lt[0].end, lt[1].end)), at = pu(wt, bt), yt = Math.abs(wt - bt)), ot === ut.fingers || ut.fingers === c || !r || ii()) {
                    if (ct = du(f.start, f.end), gr(n, ct), ht = bu(f.start, f.end), st = kr(), vu(ct, ht), (ut.swipeStatus || ut.pinchStatus) && (o = vt(u, et)), !ut.triggerOnTouchEnd || ut.triggerOnTouchLeave) {
                        var e = !0;
                        if (ut.triggerOnTouchLeave) {
                            var l = gu(this);
                            e = nf(f.end, l)
                        }!ut.triggerOnTouchEnd && e ? et = gi(s) : ut.triggerOnTouchLeave && !e && (et = gi(t));
                        (et == i || et == t) && vt(u, et)
                    }
                } else et = i, vt(u, et);
                o === !1 && (et = i, vt(u, et))
            }
        }

        function ki(n) {
            var u = n.originalEvent;
            return r && u.touches.length > 0 ? (hu(), !0) : (pr() && (ot = pi), n.preventDefault(), oi = dt(), st = kr(), nr() ? (et = i, vt(u, et)) : ut.triggerOnTouchEnd || ut.triggerOnTouchEnd == !1 && et === s ? (et = t, vt(u, et)) : !ut.triggerOnTouchEnd && ar() ? (et = t, ti(u, et, y)) : et === s && (et = i, vt(u, et)), ci(!1), null)
        }

        function ni() {
            ot = 0;
            oi = 0;
            yi = 0;
            wt = 0;
            bt = 0;
            at = 1;
            yr();
            ci(!1)
        }

        function di(n) {
            var i = n.originalEvent;
            ut.triggerOnTouchLeave && (et = gi(t), vt(i, et))
        }

        function ur() {
            ft.unbind(ui, wi);
            ft.unbind(fi, ni);
            ft.unbind(ai, bi);
            ft.unbind(vi, ki);
            gt && ft.unbind(gt, di);
            ci(!1)
        }

        function gi(n) {
            var r = n,
                f = er(),
                u = fr(),
                e = nr();
            return !f || e ? r = i : u && n == s && (!ut.triggerOnTouchEnd || ut.triggerOnTouchLeave) ? r = t : !u && n == t && ut.triggerOnTouchLeave && (r = i), r
        }

        function vt(n, u) {
            var f = undefined;
            return tu() || hr() ? f = ti(n, u, k) : (nu() || ii()) && f !== !1 && (f = ti(n, u, d)), ou() && f !== !1 ? f = ti(n, u, g) : su() && f !== !1 ? f = ti(n, u, nt) : eu() && f !== !1 && (f = ti(n, u, y)), u === i && ni(n), u === t && (r ? n.touches.length == 0 && ni(n) : ni(n)), f
        }

        function ti(r, s, h) {
            var c = undefined;
            if (h == k) {
                if (ft.trigger("swipeStatus", [s, ct || null, ht || 0, st || 0, ot]), ut.swipeStatus && (c = ut.swipeStatus.call(ft, r, s, ct || null, ht || 0, st || 0, ot), c === !1)) return !1;
                if (s == t && sr()) {
                    if (ft.trigger("swipe", [ct, ht, st, ot]), ut.swipe && (c = ut.swipe.call(ft, r, ct, ht, st, ot), c === !1)) return !1;
                    switch (ct) {
                        case u:
                            ft.trigger("swipeLeft", [ct, ht, st, ot]);
                            ut.swipeLeft && (c = ut.swipeLeft.call(ft, r, ct, ht, st, ot));
                            break;
                        case f:
                            ft.trigger("swipeRight", [ct, ht, st, ot]);
                            ut.swipeRight && (c = ut.swipeRight.call(ft, r, ct, ht, st, ot));
                            break;
                        case e:
                            ft.trigger("swipeUp", [ct, ht, st, ot]);
                            ut.swipeUp && (c = ut.swipeUp.call(ft, r, ct, ht, st, ot));
                            break;
                        case o:
                            ft.trigger("swipeDown", [ct, ht, st, ot]);
                            ut.swipeDown && (c = ut.swipeDown.call(ft, r, ct, ht, st, ot))
                    }
                }
            }
            if (h == d) {
                if (ft.trigger("pinchStatus", [s, pt || null, yt || 0, st || 0, ot, at]), ut.pinchStatus && (c = ut.pinchStatus.call(ft, r, s, pt || null, yt || 0, st || 0, ot, at), c === !1)) return !1;
                if (s == t && or()) switch (pt) {
                    case l:
                        ft.trigger("pinchIn", [pt || null, yt || 0, st || 0, ot, at]);
                        ut.pinchIn && (c = ut.pinchIn.call(ft, r, pt || null, yt || 0, st || 0, ot, at));
                        break;
                    case a:
                        ft.trigger("pinchOut", [pt || null, yt || 0, st || 0, ot, at]);
                        ut.pinchOut && (c = ut.pinchOut.call(ft, r, pt || null, yt || 0, st || 0, ot, at))
                }
            }
            return h == y ? (s === i || s === t) && (clearTimeout(hi), tr() && !ru() ? (kt = dt(), hi = setTimeout(n.proxy(function () {
                kt = null;
                ft.trigger("tap", [r.target]);
                ut.tap && (c = ut.tap.call(ft, r, r.target))
            }, this), ut.doubleTapThreshold)) : (kt = null, ft.trigger("tap", [r.target]), ut.tap && (c = ut.tap.call(ft, r, r.target)))) : h == g ? (s === i || s === t) && (clearTimeout(hi), kt = null, ft.trigger("doubletap", [r.target]), ut.doubleTap && (c = ut.doubleTap.call(ft, r, r.target))) : h == nt && (s === i || s === t) && (clearTimeout(hi), kt = null, ft.trigger("longtap", [r.target]), ut.longTap && (c = ut.longTap.call(ft, r, r.target))), c
        }

        function fr() {
            var n = !0;
            return ut.threshold !== null && (n = ht >= ut.threshold), n
        }

        function nr() {
            var n = !1;
            return ut.cancelThreshold !== null && ct !== null && (n = br(ct) - ht >= ut.cancelThreshold), n
        }

        function dr() {
            return ut.pinchThreshold !== null ? yt >= ut.pinchThreshold : !0
        }

        function er() {
            return ut.maxTimeThreshold ? st >= ut.maxTimeThreshold ? !1 : !0 : !0
        }

        function gr(n, t) {
            if (ut.allowPageScroll === v || ii()) n.preventDefault();
            else {
                var i = ut.allowPageScroll === b;
                switch (t) {
                    case u:
                        (ut.swipeLeft && i || !i && ut.allowPageScroll != p) && n.preventDefault();
                        break;
                    case f:
                        (ut.swipeRight && i || !i && ut.allowPageScroll != p) && n.preventDefault();
                        break;
                    case e:
                        (ut.swipeUp && i || !i && ut.allowPageScroll != w) && n.preventDefault();
                        break;
                    case o:
                        (ut.swipeDown && i || !i && ut.allowPageScroll != w) && n.preventDefault()
                }
            }
        }

        function or() {
            var n = cr(),
                t = lr(),
                i = dr();
            return n && t && i
        }

        function ii() {
            return !!(ut.pinchStatus || ut.pinchIn || ut.pinchOut)
        }

        function nu() {
            return !!(or() && ii())
        }

        function sr() {
            var n = er(),
                t = fr(),
                i = cr(),
                r = lr(),
                u = nr();
            return !u && r && i && t && n
        }

        function hr() {
            return !!(ut.swipe || ut.swipeStatus || ut.swipeLeft || ut.swipeRight || ut.swipeUp || ut.swipeDown)
        }

        function tu() {
            return !!(sr() && hr())
        }

        function cr() {
            return ot === ut.fingers || ut.fingers === c || !r
        }

        function lr() {
            return lt[0].end.x !== 0
        }

        function ar() {
            return !!ut.tap
        }

        function tr() {
            return !!ut.doubleTap
        }

        function iu() {
            return !!ut.longTap
        }

        function vr() {
            if (kt == null) return !1;
            var n = dt();
            return tr() && n - kt <= ut.doubleTapThreshold
        }

        function ru() {
            return vr()
        }

        function uu() {
            return (ot === 1 || !r) && (isNaN(ht) || ht === 0)
        }

        function fu() {
            return st > ut.longTapThreshold && ht < it
        }

        function eu() {
            return !!(uu() && ar())
        }

        function ou() {
            return !!(vr() && tr())
        }

        function su() {
            return !!(fu() && iu())
        }

        function hu() {
            si = dt();
            pi = event.touches.length + 1
        }

        function yr() {
            si = 0;
            pi = 0
        }

        function pr() {
            var n = !1;
            if (si) {
                var t = dt() - si;
                t <= ut.fingerReleaseThreshold && (n = !0)
            }
            return n
        }

        function cu() {
            return !!(ft.data(h + "_intouch") === !0)
        }

        function ci(n) {
            n === !0 ? (ft.bind(ai, bi), ft.bind(vi, ki), gt && ft.bind(gt, di)) : (ft.unbind(ai, bi, !1), ft.unbind(vi, ki, !1), gt && ft.unbind(gt, di, !1));
            ft.data(h + "_intouch", n === !0)
        }

        function ir(n, t) {
            var i = t.identifier !== undefined ? t.identifier : 0;
            return lt[n].identifier = i, lt[n].start.x = lt[n].end.x = t.pageX || t.clientX, lt[n].start.y = lt[n].end.y = t.pageY || t.clientY, lt[n]
        }

        function wr(n) {
            var i = n.identifier !== undefined ? n.identifier : 0,
                t = lu(i);
            return t.end.x = n.pageX || n.clientX, t.end.y = n.pageY || n.clientY, t
        }

        function lu(n) {
            for (var t = 0; t < lt.length; t++)
                if (lt[t].identifier == n) return lt[t]
        }

        function au() {
            for (var n = [], t = 0; t <= 5; t++) n.push({
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                identifier: 0
            });
            return n
        }

        function vu(n, t) {
            t = Math.max(t, br(n));
            ei[n].distance = t
        }

        function br(n) {
            return ei[n] ? ei[n].distance : undefined
        }

        function yu() {
            var n = {};
            return n[u] = li(u), n[f] = li(f), n[e] = li(e), n[o] = li(o), n
        }

        function li(n) {
            return {
                direction: n,
                distance: 0
            }
        }

        function kr() {
            return oi - yi
        }

        function rr(n, t) {
            var i = Math.abs(n.x - t.x),
                r = Math.abs(n.y - t.y);
            return Math.round(Math.sqrt(i * i + r * r))
        }

        function pu(n, t) {
            var i = t / n * 1;
            return i.toFixed(2)
        }

        function wu() {
            return at < 1 ? a : l
        }

        function bu(n, t) {
            return Math.round(Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2)))
        }

        function ku(n, t) {
            var r = n.x - t.x,
                u = t.y - n.y,
                f = Math.atan2(u, r),
                i = Math.round(f * 180 / Math.PI);
            return i < 0 && (i = 360 - Math.abs(i)), i
        }

        function du(n, t) {
            var i = ku(n, t);
            return i <= 45 && i >= 0 ? u : i <= 360 && i >= 315 ? u : i >= 135 && i <= 225 ? f : i > 45 && i < 135 ? o : e
        }

        function dt() {
            var n = new Date;
            return n.getTime()
        }

        function gu(t) {
            t = n(t);
            var i = t.offset();
            return {
                left: i.left,
                right: i.left + t.outerWidth(),
                top: i.top,
                bottom: i.top + t.outerHeight()
            }
        }

        function nf(n, t) {
            return n.x > t.left && n.x < t.right && n.y > t.top && n.y < t.bottom
        }
    }
});

(function (n, t, i) {
    "use strict";
    n.anythingSlider = function (r, u) {
        var f = this,
            e, o;
        f.el = r;
        f.$el = n(r).addClass("anythingBase").wrap('<div class="anythingSlider"><div class="anythingWindow" /><\/div>');
        f.$el.data("AnythingSlider", f);
        f.init = function () {
            f.options = e = n.extend({}, n.anythingSlider.defaults, u);
            f.initialized = !1;
            n.isFunction(e.onBeforeInitialize) && f.$el.bind("before_initialize", e.onBeforeInitialize);
            f.$el.trigger("before_initialize", f);
            n('<!--[if lte IE 8]><script>jQuery("body").addClass("as-oldie");<\/script><![endif]-->').appendTo("body").remove();
            f.$wrapper = f.$el.parent().closest("div.anythingSlider").addClass("anythingSlider-" + e.theme);
            f.$outer = f.$wrapper.parent();
            f.$window = f.$el.closest("div.anythingWindow");
            f.$win = n(t);
            f.$controls = n('<div class="anythingControls"><\/div>');
            f.$nav = n('<ul class="thumbNav"><li><a><span><\/span><\/a><\/li><\/ul>');
            f.$startStop = n('<a href="#" class="start-stop"><\/a>');
            (e.buildStartStop || e.buildNavigation) && f.$controls.appendTo(e.appendControlsTo && n(e.appendControlsTo).length ? n(e.appendControlsTo) : f.$wrapper);
            e.buildNavigation && f.$nav.appendTo(e.appendNavigationTo && n(e.appendNavigationTo).length ? n(e.appendNavigationTo) : f.$controls);
            e.buildStartStop && f.$startStop.appendTo(e.appendStartStopTo && n(e.appendStartStopTo).length ? n(e.appendStartStopTo) : f.$controls);
            f.runTimes = n(".anythingBase").length;
            f.regex = e.hashTags ? new RegExp("panel" + f.runTimes + "-(\\d+)", "i") : null;
            f.runTimes === 1 && f.makeActive();
            f.flag = !1;
            e.autoPlayLocked && (e.autoPlay = !0);
            f.playing = e.autoPlay;
            f.slideshow = !1;
            f.hovered = !1;
            f.panelSize = [];
            f.currentPage = f.targetPage = e.startPanel = parseInt(e.startPanel, 10) || 1;
            e.changeBy = parseInt(e.changeBy, 10) || 1;
            o = (e.mode || "h").toLowerCase().match(/(h|v|f)/);
            o = e.vertical ? "v" : (o || ["h"])[0];
            e.mode = o === "v" ? "vertical" : o === "f" ? "fade" : "horizontal";
            o === "f" && (e.showMultiple = 1, e.infiniteSlides = !1);
            f.adj = e.infiniteSlides ? 0 : 1;
            f.adjustMultiple = 0;
            e.playRtl && f.$wrapper.addClass("rtl");
            e.buildStartStop && f.buildAutoPlay();
            e.buildArrows && f.buildNextBackButtons();
            f.$lastPage = f.$targetPage = f.$currentPage;
            f.updateSlider();
            e.expand && (f.$window.css({
                width: "100%",
                height: "100%"
            }), f.checkResize());
            n.isFunction(n.easing[e.easing]) || (e.easing = "swing");
            e.pauseOnHover && f.$wrapper.hover(function () {
                f.playing && (f.$el.trigger("slideshow_paused", f), f.clearTimer(!0))
            }, function () {
                f.playing && (f.$el.trigger("slideshow_unpaused", f), f.startStop(f.playing, !0))
            });
            f.slideControls(!1);
            f.$wrapper.bind("mouseenter mouseleave", function (t) {
                n(this)[t.type === "mouseenter" ? "addClass" : "removeClass"]("anythingSlider-hovered");
                f.hovered = t.type === "mouseenter" ? !0 : !1;
                f.slideControls(f.hovered)
            });
            n(i).keyup(function (n) {
                if (e.enableKeyboard && f.$wrapper.hasClass("activeSlider") && !n.target.tagName.match("TEXTAREA|INPUT|SELECT")) {
                    if (e.mode !== "vertical" && (n.which === 38 || n.which === 40)) return;
                    switch (n.which) {
                        case 39:
                        case 40:
                            f.goForward();
                            break;
                        case 37:
                        case 38:
                            f.goBack()
                    }
                }
            });
            f.currentPage = (e.hashTags ? f.gotoHash() : "") || e.startPanel || 1;
            f.gotoPage(f.currentPage, !1, null, -1);
            var r = "slideshow_resized slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed start_stop".split(" ");
            n.each("onSliderResize onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete onStartStop".split(" "), function (t, i) {
                n.isFunction(e[i]) && f.$el.bind(r[t], e[i])
            });
            n.isFunction(e.onSlideComplete) && f.$el.bind("slide_complete", function () {
                return setTimeout(function () {
                    e.onSlideComplete(f)
                }, 0), !1
            });
            f.initialized = !0;
            f.$el.trigger("initialized", f);
            f.startStop(e.autoPlay)
        };
        f.updateSlider = function () {
            f.$el.children(".cloned").remove();
            f.navTextVisible = f.$nav.find("span:first").css("visibility") !== "hidden";
            f.$nav.empty();
            f.currentPage = f.currentPage || 1;
            f.$items = f.$el.children();
            f.pages = f.$items.length;
            f.dir = e.mode === "vertical" ? "top" : "left";
            e.showMultiple = parseInt(e.showMultiple, 10) || 1;
            e.navigationSize = e.navigationSize === !1 ? 0 : parseInt(e.navigationSize, 10) || 0;
            f.$items.find("a").unbind("focus.AnythingSlider").bind("focus.AnythingSlider", function (t) {
                var r = n(this).closest(".panel"),
                    i = f.$items.index(r) + f.adj;
                f.$items.find(".focusedLink").removeClass("focusedLink");
                n(this).addClass("focusedLink");
                f.$window.scrollLeft(0).scrollTop(0);
                i !== -1 && (i >= f.currentPage + e.showMultiple || i < f.currentPage) && (f.gotoPage(i), t.preventDefault())
            });
            e.showMultiple > 1 && (e.showMultiple > f.pages && (e.showMultiple = f.pages), f.adjustMultiple = e.infiniteSlides && f.pages > 1 ? 0 : e.showMultiple - 1);
            f.$controls.add(f.$nav).add(f.$startStop).add(f.$forward).add(f.$back)[f.pages <= 1 ? "hide" : "show"]();
            f.pages > 1 && f.buildNavigation();
            e.mode !== "fade" && e.infiniteSlides && f.pages > 1 && (f.$el.prepend(f.$items.filter(":last").clone().addClass("cloned")), e.showMultiple > 1 ? f.$el.append(f.$items.filter(":lt(" + e.showMultiple + ")").clone().addClass("cloned multiple")) : f.$el.append(f.$items.filter(":first").clone().addClass("cloned")), f.$el.find(".cloned").each(function () {
                n(this).find("a,input,textarea,select,button,area,form").attr({
                    disabled: "disabled",
                    name: ""
                });
                n(this).find("[id]")[n.fn.addBack ? "addBack" : "andSelf"]().removeAttr("id")
            }));
            f.$items = f.$el.addClass(e.mode).children().addClass("panel");
            f.setDimensions();
            e.resizeContents ? (f.$items.css("width", f.width), f.$wrapper.css("width", f.getDim(f.currentPage)[0]).add(f.$items).css("height", f.height)) : f.$win.load(function () {
                f.setDimensions();
                o = f.getDim(f.currentPage);
                f.$wrapper.css({
                    width: o[0],
                    height: o[1]
                });
                f.setCurrentPage(f.currentPage, !1)
            });
            f.currentPage > f.pages && (f.currentPage = f.pages);
            f.setCurrentPage(f.currentPage, !1);
            f.$nav.find("a").eq(f.currentPage - 1).addClass("cur");
            e.mode === "fade" && (o = f.$items.eq(f.currentPage - 1), e.resumeOnVisible ? o.css({
                opacity: 1,
                visibility: "visible"
            }).siblings().css({
                opacity: 0,
                visibility: "hidden"
            }) : (f.$items.css("opacity", 1), o.fadeIn(0).siblings().fadeOut(0)))
        };
        f.buildNavigation = function () {
            if (e.buildNavigation && f.pages > 1) {
                var u, o, t, r, i;
                f.$items.filter(":not(.cloned)").each(function (s) {
                    i = n("<li/>");
                    t = s + 1;
                    o = (t === 1 ? " first" : "") + (t === f.pages ? " last" : "");
                    u = '<a class="panel' + t + (f.navTextVisible ? '"' : " " + e.tooltipClass + '" title="@"') + ' href="#"><span>@<\/span><\/a>';
                    n.isFunction(e.navigationFormatter) ? (r = e.navigationFormatter(t, n(this)), typeof r == "string" ? i.html(u.replace(/@/g, r)) : i = n("<li/>", r)) : i.html(u.replace(/@/g, t));
                    i.appendTo(f.$nav).addClass(o).data("index", t)
                });
                f.$nav.children("li").bind(e.clickControls, function (t) {
                    !f.flag && e.enableNavigation && (f.flag = !0, setTimeout(function () {
                        f.flag = !1
                    }, 100), f.gotoPage(n(this).data("index")));
                    t.preventDefault()
                });
                !!e.navigationSize && e.navigationSize < f.pages && (f.$controls.find(".anythingNavWindow").length || f.$nav.before('<ul><li class="prev"><a href="#"><span>' + e.backText + "<\/span><\/a><\/li><\/ul>").after('<ul><li class="next"><a href="#"><span>' + e.forwardText + "<\/span><\/a><\/li><\/ul>").wrap('<div class="anythingNavWindow"><\/div>'), f.navWidths = f.$nav.find("li").map(function () {
                    return n(this).outerWidth(!0) + Math.ceil(parseInt(n(this).find("span").css("left"), 10) / 2 || 0)
                }).get(), f.navLeft = f.currentPage, f.$nav.width(f.navWidth(1, f.pages + 1) + 25), f.$controls.find(".anythingNavWindow").width(f.navWidth(1, e.navigationSize + 1)).end().find(".prev,.next").bind(e.clickControls, function (t) {
                    f.flag || (f.flag = !0, setTimeout(function () {
                        f.flag = !1
                    }, 200), f.navWindow(f.navLeft + e.navigationSize * (n(this).is(".prev") ? -1 : 1)));
                    t.preventDefault()
                }))
            }
        };
        f.navWidth = function (n, t) {
            for (var u = Math.min(n, t), e = Math.max(n, t), r = 0, i = u; i < e; i++) r += f.navWidths[i - 1] || 0;
            return r
        };
        f.navWindow = function (n) {
            if (!!e.navigationSize && e.navigationSize < f.pages && f.navWidths) {
                var t = f.pages - e.navigationSize + 1;
                n = n <= 1 ? 1 : n > 1 && n < t ? n : t;
                n !== f.navLeft && (f.$controls.find(".anythingNavWindow").animate({
                    scrollLeft: f.navWidth(1, n),
                    width: f.navWidth(n, n + e.navigationSize)
                }, {
                    queue: !1,
                    duration: e.animationTime
                }), f.navLeft = n)
            }
        };
        f.buildNextBackButtons = function () {
            f.$forward = n('<span class="arrow forward"><a href="#"><span>' + e.forwardText + "<\/span><\/a><\/span>");
            f.$back = n('<span class="arrow back"><a href="#"><span>' + e.backText + "<\/span><\/a><\/span>");
            f.$back.bind(e.clickBackArrow, function (n) {
                e.enableArrows && !f.flag && (f.flag = !0, setTimeout(function () {
                    f.flag = !1
                }, 100), f.goBack());
                n.preventDefault()
            });
            f.$forward.bind(e.clickForwardArrow, function (n) {
                e.enableArrows && !f.flag && (f.flag = !0, setTimeout(function () {
                    f.flag = !1
                }, 100), f.goForward());
                n.preventDefault()
            });
            f.$back.add(f.$forward).find("a").bind("focusin focusout", function () {
                n(this).toggleClass("hover")
            });
            f.$back.appendTo(e.appendBackTo && n(e.appendBackTo).length ? n(e.appendBackTo) : f.$wrapper);
            f.$forward.appendTo(e.appendForwardTo && n(e.appendForwardTo).length ? n(e.appendForwardTo) : f.$wrapper);
            f.arrowWidth = f.$forward.width();
            f.arrowRight = parseInt(f.$forward.css("right"), 10);
            f.arrowLeft = parseInt(f.$back.css("left"), 10)
        };
        f.buildAutoPlay = function () {
            f.$startStop.html("<span>" + (f.playing ? e.stopText : e.startText) + "<\/span>").bind(e.clickSlideshow, function (n) {
                e.enableStartStop && (f.startStop(!f.playing), f.makeActive(), f.playing && !e.autoPlayDelayed && f.goForward(!0, e.playRtl));
                n.preventDefault()
            }).bind("focusin focusout", function () {
                n(this).toggleClass("hover")
            })
        };
        f.checkResize = function (n) {
            var t = !!(i.hidden || i.webkitHidden || i.mozHidden || i.msHidden);
            clearTimeout(f.resizeTimer);
            f.resizeTimer = setTimeout(function () {
                var i = f.$outer.width(),
                    r = f.$outer[0].tagName === "BODY" ? f.$win.height() : f.$outer.height();
                t || f.lastDim[0] === i && f.lastDim[1] === r || (f.setDimensions(), f.$el.trigger("slideshow_resized", f), f.gotoPage(f.currentPage, f.playing, null, -1));
                typeof n == "undefined" && f.checkResize()
            }, t ? 2e3 : 500)
        };
        f.setDimensions = function () {
            f.$wrapper.find(".anythingWindow, .anythingBase, .panel")[n.fn.addBack ? "addBack" : "andSelf"]().css({
                width: "",
                height: ""
            });
            f.width = f.$el.width();
            f.height = f.$el.height();
            f.outerPad = [f.$wrapper.innerWidth() - f.$wrapper.width(), f.$wrapper.innerHeight() - f.$wrapper.height()];
            var t, r, i, u, s = 0,
                h = {
                    width: "100%",
                    height: "100%"
                },
                o = e.showMultiple > 1 && e.mode === "horizontal" ? f.width || f.$window.width() / e.showMultiple : f.$window.width(),
                c = e.showMultiple > 1 && e.mode === "vertical" ? f.height / e.showMultiple || f.$window.height() / e.showMultiple : f.$window.height();
            e.expand && (f.lastDim = [f.$outer.width(), f.$outer.height()], t = f.lastDim[0] - f.outerPad[0], r = f.lastDim[1] - f.outerPad[1], f.$wrapper.add(f.$window).css({
                width: t,
                height: r
            }), f.height = r = e.showMultiple > 1 && e.mode === "vertical" ? c : r, f.width = o = e.showMultiple > 1 && e.mode === "horizontal" ? t / e.showMultiple : t, f.$items.css({
                width: o,
                height: c
            }));
            f.$items.each(function (c) {
                u = n(this);
                i = u.children();
                e.resizeContents ? (t = f.width, r = f.height, u.css({
                    width: t,
                    height: r
                }), i.length && (i[0].tagName === "EMBED" && i.attr(h), i[0].tagName === "OBJECT" && i.find("embed").attr(h), i.length === 1 && i.css(h))) : (e.mode === "vertical" ? (t = u.css("display", "inline-block").width(), u.css("display", "")) : t = u.width() || f.width, i.length === 1 && t >= o && (t = i.width() >= o ? o : i.width(), i.css("max-width", t)), u.css({
                    width: t,
                    height: ""
                }), r = i.length === 1 ? i.outerHeight(!0) : u.height(), r <= f.outerPad[1] && (r = f.height), u.css("height", r));
                f.panelSize[c] = [t, r, s];
                s += e.mode === "vertical" ? r : t
            });
            f.$el.css(e.mode === "vertical" ? "height" : "width", e.mode === "fade" ? f.width : s)
        };
        f.getDim = function (n) {
            var u, t, i = f.width,
                r = f.height;
            if (f.pages < 1 || isNaN(n)) return [i, r];
            if (n = e.infiniteSlides && f.pages > 1 ? n : n - 1, t = f.panelSize[n], t && (i = t[0] || i, r = t[1] || r), e.showMultiple > 1)
                for (t = 1; t < e.showMultiple; t++) u = n + t, e.mode === "vertical" ? (i = Math.max(i, f.panelSize[u][0]), r += f.panelSize[u][1]) : (i += f.panelSize[u][0], r = Math.max(r, f.panelSize[u][1]));
            return [i, r]
        };
        f.goForward = function (n, t) {
            f.gotoPage(f[e.allowRapidChange ? "targetPage" : "currentPage"] + e.changeBy * (t ? -1 : 1), n)
        };
        f.goBack = function (n) {
            f.gotoPage(f[e.allowRapidChange ? "targetPage" : "currentPage"] - e.changeBy, n)
        };
        f.gotoPage = function (t, i, r, u) {
            if (i !== !0 && (i = !1, f.startStop(!1), f.makeActive()), /^[#|.]/.test(t) && n(t).length && (t = n(t).closest(".panel").index() + f.adj), e.changeBy !== 1) {
                var o = f.pages - f.adjustMultiple;
                t < 1 && (t = e.stopAtEnd ? 1 : e.infiniteSlides ? f.pages + t : e.showMultiple > 1 - t ? 1 : o);
                t > f.pages ? t = e.stopAtEnd ? f.pages : e.showMultiple > 1 - t ? 1 : t -= o : t >= o && (t = o)
            }
            f.pages <= 1 || (f.$lastPage = f.$currentPage, typeof t != "number" && (t = parseInt(t, 10) || e.startPanel, f.setCurrentPage(t)), i && e.isVideoPlaying(f)) || (e.stopAtEnd && !e.infiniteSlides && t > f.pages - e.showMultiple && (t = f.pages - e.showMultiple + 1), f.exactPage = t, t > f.pages + 1 - f.adj && (t = !e.infiniteSlides && !e.stopAtEnd ? 1 : f.pages), t < f.adj && (t = !e.infiniteSlides && !e.stopAtEnd ? f.pages : 1), e.infiniteSlides || (f.exactPage = t), f.currentPage = t > f.pages ? f.pages : t < 1 ? 1 : f.currentPage, f.$currentPage = f.$items.eq(f.currentPage - f.adj), f.targetPage = t === 0 ? f.pages : t > f.pages ? 1 : t, f.$targetPage = f.$items.eq(f.targetPage - f.adj), u = typeof u != "undefined" ? u : e.animationTime, u >= 0 && f.$el.trigger("slide_init", f), u > 0 && e.toggleControls === !0 && f.slideControls(!0), e.buildNavigation && f.setNavigation(f.targetPage), i !== !0 && (i = !1), (!i || e.stopAtEnd && t === f.pages) && f.startStop(!1), u >= 0 && f.$el.trigger("slide_begin", f), setTimeout(function (n) {
                var i, o = !0;
                e.allowRapidChange && f.$wrapper.add(f.$el).add(f.$items).stop(!0, !0);
                e.resizeContents || (i = f.getDim(t), n = {}, f.$wrapper.width() !== i[0] && (n.width = i[0] || f.width, o = !1), f.$wrapper.height() !== i[1] && (n.height = i[1] || f.height, o = !1), o || f.$wrapper.filter(":not(:animated)").animate(n, {
                    queue: !1,
                    duration: u < 0 ? 0 : u,
                    easing: e.easing
                }));
                e.mode === "fade" ? f.$lastPage[0] !== f.$targetPage[0] ? (f.fadeIt(f.$lastPage, 0, u), f.fadeIt(f.$targetPage, 1, u, function () {
                    f.endAnimation(t, r, u)
                })) : f.endAnimation(t, r, u) : (n = {}, n[f.dir] = -f.panelSize[e.infiniteSlides && f.pages > 1 ? t : t - 1][2], e.mode !== "vertical" || e.resizeContents || (n.width = i[0]), f.$el.filter(":not(:animated)").animate(n, {
                    queue: !1,
                    duration: u < 0 ? 0 : u,
                    easing: e.easing,
                    complete: function () {
                        f.endAnimation(t, r, u)
                    }
                }))
            }, parseInt(e.delayBeforeAnimate, 10) || 0))
        };
        f.endAnimation = function (n, t, i) {
            n === 0 ? (f.$el.css(f.dir, e.mode === "fade" ? 0 : -f.panelSize[f.pages][2]), n = f.pages) : n > f.pages && (f.$el.css(f.dir, e.mode === "fade" ? 0 : -f.panelSize[1][2]), n = 1);
            f.exactPage = n;
            f.setCurrentPage(n, !1);
            e.mode === "fade" && f.fadeIt(f.$items.not(":eq(" + (n - f.adj) + ")"), 0, 0);
            f.hovered || f.slideControls(!1);
            e.hashTags && f.setHash(n);
            i >= 0 && f.$el.trigger("slide_complete", f);
            typeof t == "function" && t(f);
            e.autoPlayLocked && !f.playing && setTimeout(function () {
                f.startStop(!0)
            }, e.resumeDelay - (e.autoPlayDelayed ? e.delay : 0))
        };
        f.fadeIt = function (t, i, r, u) {
            var f = t.filter(":not(:animated)"),
                o = r < 0 ? 0 : r;
            e.resumeOnVisible ? (i === 1 && f.css("visibility", "visible"), f.fadeTo(o, i, function () {
                i === 0 && f.css("visibility", "hidden");
                n.isFunction(u) && u()
            })) : f[i === 0 ? "fadeOut" : "fadeIn"](o, u)
        };
        f.setCurrentPage = function (n, t) {
            if (n = parseInt(n, 10), !(f.pages < 1) && n !== 0 && !isNaN(n)) {
                if (n > f.pages + 1 - f.adj && (n = f.pages - f.adj), n < f.adj && (n = 1), e.buildArrows && !e.infiniteSlides && e.stopAtEnd && (f.$forward[n === f.pages - f.adjustMultiple ? "addClass" : "removeClass"]("disabled"), f.$back[n === 1 ? "addClass" : "removeClass"]("disabled"), n === f.pages && f.playing && f.startStop()), !t) {
                    var i = f.getDim(n);
                    f.$wrapper.css({
                        width: i[0],
                        height: i[1]
                    }).add(f.$window).scrollLeft(0).scrollTop(0);
                    f.$el.css(f.dir, e.mode === "fade" ? 0 : -f.panelSize[e.infiniteSlides && f.pages > 1 ? n : n - 1][2])
                }
                f.currentPage = n;
                f.$currentPage = f.$items.removeClass("activePage").eq(n - f.adj).addClass("activePage");
                e.buildNavigation && f.setNavigation(n)
            }
        };
        f.setNavigation = function (n) {
            f.$nav.find(".cur").removeClass("cur").end().find("a").eq(n - 1).addClass("cur")
        };
        f.makeActive = function () {
            f.$wrapper.hasClass("activeSlider") || (n(".activeSlider").removeClass("activeSlider"), f.$wrapper.addClass("activeSlider"))
        };
        f.gotoHash = function () {
            var i = t.location.hash,
                u = i.indexOf("&"),
                r = i.match(f.regex);
            return r !== null || /^#&/.test(i) || /#!?\//.test(i) || /\=/.test(i) ? r !== null && (r = e.hashTags ? parseInt(r[1], 10) : null) : (i = i.substring(0, u >= 0 ? u : i.length), r = n(i).length && n(i).closest(".anythingBase")[0] === f.el ? f.$items.index(n(i).closest(".panel")) + f.adj : null), r
        };
        f.setHash = function (n) {
            var r = "panel" + f.runTimes + "-",
                i = t.location.hash;
            typeof i != "undefined" && (t.location.hash = i.indexOf(r) > 0 ? i.replace(f.regex, r + n) : i + "&" + r + n)
        };
        f.slideControls = function (n) {
            var u = n ? "slideDown" : "slideUp",
                t = n ? 0 : e.animationTime,
                o = n ? e.animationTime : 0,
                i = n ? 1 : 0,
                r = n ? 0 : 1;
            e.toggleControls && f.$controls.stop(!0, !0).delay(t)[u](e.animationTime / 2).delay(o);
            e.buildArrows && e.toggleArrows && (!f.hovered && f.playing && (r = 1, i = 0), f.$forward.stop(!0, !0).delay(t).animate({
                right: f.arrowRight + r * f.arrowWidth,
                opacity: i
            }, e.animationTime / 2), f.$back.stop(!0, !0).delay(t).animate({
                left: f.arrowLeft + r * f.arrowWidth,
                opacity: i
            }, e.animationTime / 2))
        };
        f.clearTimer = function (n) {
            f.timer && (t.clearInterval(f.timer), !n && f.slideshow && (f.$el.trigger("slideshow_stop", f), f.slideshow = !1))
        };
        f.startStop = function (n, r) {
            n !== !0 && (n = !1);
            f.playing = n;
            n && !r && (f.$el.trigger("slideshow_start", f), f.slideshow = !0);
            e.buildStartStop && (f.$startStop.toggleClass("playing", n).find("span").html(n ? e.stopText : e.startText), f.$startStop.find("span").css("visibility") === "hidden" && f.$startStop.addClass(e.tooltipClass).attr("title", n ? e.stopText : e.startText));
            n ? (f.clearTimer(!0), f.timer = t.setInterval(function () {
                (i.hidden || i.webkitHidden || i.mozHidden || i.msHidden) ? e.autoPlayLocked || f.startStop(): e.isVideoPlaying(f) ? e.resumeOnVideoEnd || f.startStop() : f.goForward(!0, e.playRtl)
            }, e.delay)) : f.clearTimer();
            f.$el.trigger("start_stop", f)
        };
        f.init()
    };
    n.anythingSlider.defaults = {
        theme: "default",
        mode: "horiz",
        expand: !1,
        resizeContents: !0,
        showMultiple: !1,
        easing: "swing",
        buildArrows: !0,
        buildNavigation: !0,
        buildStartStop: !0,
        toggleArrows: !1,
        toggleControls: !1,
        startText: "Start",
        stopText: "Stop",
        forwardText: "&raquo;",
        backText: "&laquo;",
        tooltipClass: "tooltip",
        enableArrows: !0,
        enableNavigation: !0,
        enableStartStop: !0,
        enableKeyboard: !0,
        startPanel: 1,
        changeBy: 1,
        hashTags: !0,
        infiniteSlides: !0,
        navigationFormatter: null,
        navigationSize: !1,
        autoPlay: !1,
        autoPlayLocked: !1,
        autoPlayDelayed: !1,
        pauseOnHover: !0,
        stopAtEnd: !1,
        playRtl: !1,
        delay: 3e3,
        resumeDelay: 15e3,
        animationTime: 600,
        delayBeforeAnimate: 0,
        clickForwardArrow: "click",
        clickBackArrow: "click",
        clickControls: "click focusin",
        clickSlideshow: "click",
        allowRapidChange: !1,
        resumeOnVideoEnd: !0,
        resumeOnVisible: !0,
        isVideoPlaying: function () {
            return !1
        }
    };
    n.fn.anythingSlider = function (t, i) {
        return this.each(function () {
            var u, r = n(this).data("AnythingSlider");
            (typeof t).match("object|undefined") ? r ? r.updateSlider() : new n.anythingSlider(this, t) : /\d/.test(t) && !isNaN(t) && r ? (u = typeof t == "number" ? t : parseInt(n.trim(t), 10), u >= 1 && u <= r.pages && r.gotoPage(u, !1, i)) : /^[#|.]/.test(t) && n(t).length && r.gotoPage(t, !1, i)
        })
    }
})(jQuery, window, document);
function maskInput(n, t, i, r) {
    for (var e = i.split(","), f = 0; f <= e.length; f++)
        for (var u = 0; u <= n.length; u++) u == e[f] && n.substring(u, u + 1) != r && (n = n.substring(0, u) + r + n.substring(u, n.length));
    t.value = n
}

function haveAccountAnimation() {
    var n = $(".notification");
    n.css("opacity", 1).delay(500).show().animate({
        opacity: 1,
        top: 0
    }, 1e3, "easeOutBack")
}
$(document).ready(function () {
    checkScreenWidth();
    dialogWidth();
    equalHeight($(".other-pages .two-col .column"));
    $(".intro .notification").each(function () {
        haveAccountAnimation()
    });
    $(".dialog").payoneerDialog({
        hide: {
            effect: "fade",
            duration: 250
        },
        show: {
            effect: "fade",
            duration: 250
        },
        modal: !0,
        draggable: !1,
        resizable: !1,
        autoOpen: !1,
        closeText: "",
        width: "auto",
        stack: !1,
        position: ["center", "center"],
        open: function () {
            datepickerWidth()
        }
    });
    $(".have-account .click, .have-accout-after").on("click", function () {
        OpenAHA()
    });
    $(".cancel .button").on("click", function () {
        $("#dialogHaveAccount").dialog("close")
    });
    $(".notification .close-haveaccount").on("click", function () {
        $(".notification").animate({
            opacity: 0
        }, 250).hide();
        $(".have-accout-after").show(250)
    });
    SetMbileMenu();
    var n = $("#iframMRSwitch").attr("data-src");
    n && location.href.indexOf("SwitchAHA.aspx") > 0 && ($("#iframMRSwitch").attr("src", n), $("#dialog_have_account").payoneerDialog("open"));
    $("#dialog_have_account").dialog({
        position: "center",
        dialogClass: "no-close",
        closeOnEscape: !1,
        cleanFieldsOnClose: !1
    })
});

function OpenAHA() {
    $(".notification").hide();
    $(".have-accout-after").show(250);
    $("#dialog_have_account").length > 0 && (LBD_PayoneerLoad("#AlreadyHaveAccountCaptcha"), LoadIframeMR(), $("#dialog_have_account").payoneerDialog("open"), navigator.userAgent.indexOf("Safari") != -1 && (dialogWidth(), $("#dialog_have_account").dialog({
        position: ["center", "center"]
    })))
}

function GP_AdvOpenWindow(n, t, i, r, u, f, e, o, s, h) {
    var l = 0,
        a = 0,
        v, w, y = 480,
        p = 340;
    r > 0 && (i += (i.length > 0 ? "," : "") + "width=" + r);
    u > 0 && (i += (i.length > 0 ? "," : "") + "height=" + u);
    f && f != "" && r > 0 && u > 0 && ((document.all || document.layers || document.getElementById) && (y = screen.availWidth, p = screen.availHeight), f.indexOf("center") != -1 && (a = (p - u) / 2, l = (y - r) / 2), f.indexOf("bottom") != -1 && (a = p - u), f.indexOf("right") != -1 && (l = y - r), f.indexOf("left") != -1 && (l = 0), f.indexOf("top") != -1 && (a = 0), i += (i.length > 0 ? "," : "") + "top=" + a + ",left=" + l);
    document.all && h && h != "" && i.indexOf("fullscreen") != -1 && (i += ",fullscreen=1");
    window.popupWindow == null && (window.popupWindow = []);
    var c = popupWindow.length;
    popupWindow[c] = window.open(n, t, i);
    popupWindow[c].opener == null && (popupWindow[c].opener = self);
    (document.all || document.layers || document.getElementById) && (h && h != "" && (popupWindow[c].resizeTo(r, u), popupWindow[c].moveTo(l, a)), o && o != "" && (w = popupWindow[c].setInterval("window.focus();", 50), popupWindow[c].document.body.onload = function () {
        window.setInterval("window.focus();", 50)
    }), s && s > 0 && (popupWindow[c].document.body.onbeforeunload = function () {
        v && window.clearInterval(v);
        window.onbeforeunload = null
    }, v = window.setTimeout("popupWindow[" + c + "].close()", s * 1e3)), window.onbeforeunload = function () {
        for (var n = 0; n < popupWindow.length; n++) popupWindow[n].close()
    });
    document.MM_returnValue = e && e != "" ? !1 : !0
}
var newWindow;

function OpenLoginPage(n) {
    var t = 500,
        i = 600,
        r = window.screenLeft != undefined ? window.screenLeft : screen.left,
        u = window.screenTop != undefined ? window.screenTop : screen.top,
        f = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
        e = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
        o = f / 2 - t / 2 + r,
        s = e / 2 - i / 2 + u;
    newWindow = window.open(n, "AHA", "directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=" + t + ", height=" + i + ", top=" + s + ", left=" + o);
    window.focus && newWindow.focus()
}

function CloseLoginPopUp(n) {
    newWindow && newWindow.close();
    n && (document.location.href = n)
}

function RedirectToPayerRegistration(n) {
    var t = {
        accessToken: n
    };
    $.payoneerAjax({
        url: document.location.origin + "/Payer/Index.aspx/UpdatePayerRegistration",
        data: JSON.stringify(t),
        isNotMoreThenOneAjax: !0,
        showDialogOnError: !1,
        success: function () {
            CloseLoginPopUp(document.location.origin + "/Payer/Index.aspx")
        }
    })
}

function RedirectToSwitchRegistration() {
    CloseLoginPopUp(document.location.origin + "/Partners/Default/Switch.aspx")
}

function RedirectToSwitchAHA() {
    CloseLoginPopUp(document.location.origin + "/Partners/Default/SwitchAHA.aspx?inp=1")
}

function datepickerWidth() {
    $(".hasDatepicker").parent(".field").css("width", "auto");
    var n = $(".ui-datepicker-trigger").outerWidth(!0),
        t = $(".hasDatepicker").parent(".field").outerWidth(!0) - n;
    $("body").hasClass("rtl") ? $(".rtl .hasDatepicker").parent(".field").css("margin-left", n) : $(".hasDatepicker").parent(".field").css("margin-right", n)
}

function dialogWidth() {
    var n = $(".dialog .next-button").not(".cancel").outerWidth(!0),
        t = $(".dialog .cancel").outerWidth(!0),
        i = n + t;
    $(".dialog .content-holder").css("width", i)
}

function equalHeight(n) {
    var t = 0;
    n.each(function () {
        var n = $(this).height();
        n > t && (t = n)
    });
    n.height(t)
}

function pageTitleHeight() {
    var i = $(".page-title .title").height(),
        r = parseInt($(".page-title .title").css("padding-bottom")),
        u = $(".page-title .subtitle").height(),
        f = $(".progbar").outerHeight(!0),
        n = $(".page-title").height() - i - r - u - f,
        t = $(".page-title-inner").width() - $(".notification").width();
    $(".page-title .title").css({
        paddingTop: n / 2
    });
    $(".page-title .title, .other-pages .page-title .subtitle").css({
        width: t - 25
    });
    $(".other-pages .page-title .title").css({
        paddingTop: n / 2
    });
    $(".other-pages .page-title .title, .other-pages .page-title .subtitle").css({
        width: t - 25
    })
}

function checkScreenWidth() {
    var n = $(".powered-by");
    $(window).innerWidth() <= 980 ? (n.prependTo(".footer .inner:visible"), $("body").addClass("mobile")) : (n.prependTo(".tools"), $("body").removeClass("mobile"))
}

function stickyFooter() {
    var n = $(".footer").outerHeight();
    $(".global").css("margin-bottom", -n);
    $(".safe").css("height", n)
}

function equalWidth(n) {
    var t = 0;
    n.each(function () {
        $(this).css("width", "");
        var n = $(this).width();
        n > t && (t = n)
    });
    n.width(t)
}

function PositionPartnerLogo() {
    var n = $(".partner-logo").height(),
        t = $(".partner-logo img").height(),
        i = n - t;
    $(".partner-logo img").css("margin-top", i / 2)
}

function SetPartnerLogoPosition() {
    navigator.userAgent.match(/AppleWebKit/) && !navigator.userAgent.match(/Chrome/) ? ($(".partner-logo img").removeAttr("width").removeAttr("height"), $(".partner-logo img").load(PositionPartnerLogo)) : PositionPartnerLogo()
}

function SetImages() {
    $("img").each(function () {
        var n = this.height,
            t = this.width;
        $(this).removeAttr("width").removeAttr("height");
        var i = $(this).height(),
            r = $(this).width();
        $(this).attr({
            height: n,
            width: t
        }).data({
            height: i,
            width: r
        });
        var u = $(".partner-logo").height(),
            f = u - $(".partner-logo img").height();
        $(".partner-logo img").css("margin-top", f / 2)
    })
}

function SetMbileMenu() {
    $(".navigation .icon").on("click", function () {
        var n = $(window).width() - 30;
        $(".navigation .menu").css({
            width: n
        });
        $(".mobile .menu").slideToggle(250)
    });
    $("html").click(function () {
        $(".mobile .menu").slideUp(250)
    });
    $("#slider .field-data").on("focus", function () {
        $(".mobile .menu").slideUp(250)
    });
    $(".navigation, .navigation > *").on("click", function (n) {
        n.stopPropagation()
    })
}

function setSlideHeight() {
    var n = $("#slider li.activePage").find(".slide-content").outerHeight(!0);
    $(".splash, .anythingSlider").animate({
        height: n
    }, 250, "easeOutQuint")
}

function setParentUrl(n) {
    document.location.href = n
}

function parentFunction(n) {
    $("#iframMR").css("height", n);
    setSlideHeight()
}

function parentResizeIframeMRSwitch(n) {
    var t = $("#iframMRSwitch");
    t.length || (t = $("#iframMR"));
    t.height(n);
    $(".dialog:visible").dialog({
        position: "center"
    })
}

function ResizeiFrame() {
    try {
        $.isFunction(parent.parentFunction) && parent.parentFunction($(".full-page").height())
    } catch (n) {}
}

function CloseAHADialog() {
    $("#dialog_have_account").payoneerDialog("close");
    var n = $("#dialog_have_account").attr("data-src");
    n && (document.location.href = document.location.origin + "/Partners/lp.aspx?token=" + n)
}
function ExternalEventsHandling(n) {
    try {
        var t = window.MobileAppBridge;
        t && t.registrationEvent && typeof t.registrationEvent == "function" && t.registrationEvent(n)
    } catch (i) {
        console.warn(i)
    }
}
(function (n) {
    for (var t, i, f = document.getElementsByTagName("head")[0].style, u = ["transformProperty", "WebkitTransform", "OTransform", "msTransform", "MozTransform"], r = 0; r < u.length; r++) void 0 !== f[u[r]] && (t = u[r]);
    t && (i = t.replace(/[tT]ransform/, "TransformOrigin"), "T" == i[0] && (i[0] = "t"));
    eval('IE = "v"=="\v"');
    jQuery.fn.extend({
        rotate: function (t) {
            if (0 !== this.length && "undefined" != typeof t) {
                "number" == typeof t && (t = {
                    angle: t
                });
                for (var u = [], r = 0, f = this.length; r < f; r++) {
                    var i = this.get(r);
                    if (i.Wilq32 && i.Wilq32.PhotoEffect) i.Wilq32.PhotoEffect._handleRotation(t);
                    else {
                        var e = n.extend(!0, {}, t),
                            i = new Wilq32.PhotoEffect(i, e)._rootObj;
                        u.push(n(i))
                    }
                }
                return u
            }
        },
        getRotateAngle: function () {
            for (var i = [], n = 0, r = this.length; n < r; n++) {
                var t = this.get(n);
                t.Wilq32 && t.Wilq32.PhotoEffect && (i[n] = t.Wilq32.PhotoEffect._angle)
            }
            return i
        },
        stopRotate: function () {
            for (var n = 0, i = this.length; n < i; n++) {
                var t = this.get(n);
                t.Wilq32 && t.Wilq32.PhotoEffect && clearTimeout(t.Wilq32.PhotoEffect._timer)
            }
        }
    });
    Wilq32 = window.Wilq32 || {};
    Wilq32.PhotoEffect = function () {
        return t ? function (n, t) {
            n.Wilq32 = {
                PhotoEffect: this
            };
            this._img = this._rootObj = this._eventObj = n;
            this._handleRotation(t)
        } : function (n, t) {
            if (this._img = n, this._onLoadDelegate = [t], this._rootObj = document.createElement("span"), this._rootObj.style.display = "inline-block", this._rootObj.Wilq32 = {
                    PhotoEffect: this
                }, n.parentNode.insertBefore(this._rootObj, n), n.complete) this._Loader();
            else {
                var i = this;
                jQuery(this._img).bind("load", function () {
                    i._Loader()
                })
            }
        }
    }();
    Wilq32.PhotoEffect.prototype = {
        _setupParameters: function (n) {
            this._parameters = this._parameters || {};
            "number" != typeof this._angle && (this._angle = 0);
            "number" == typeof n.angle && (this._angle = n.angle);
            this._parameters.animateTo = "number" == typeof n.animateTo ? n.animateTo : this._angle;
            this._parameters.step = n.step || this._parameters.step || null;
            this._parameters.easing = n.easing || this._parameters.easing || this._defaultEasing;
            this._parameters.duration = n.duration || this._parameters.duration || 1e3;
            this._parameters.callback = n.callback || this._parameters.callback || this._emptyFunction;
            this._parameters.center = n.center || this._parameters.center || ["50%", "50%"];
            this._rotationCenterX = "string" == typeof this._parameters.center[0] ? parseInt(this._parameters.center[0], 10) / 100 * this._imgWidth * this._aspectW : this._parameters.center[0];
            this._rotationCenterY = "string" == typeof this._parameters.center[1] ? parseInt(this._parameters.center[1], 10) / 100 * this._imgHeight * this._aspectH : this._parameters.center[1];
            n.bind && n.bind != this._parameters.bind && this._BindEvents(n.bind)
        },
        _emptyFunction: function () {},
        _defaultEasing: function (n, t, i, r, u) {
            return -r * ((t = t / u - 1) * t * t * t - 1) + i
        },
        _handleRotation: function (n, i) {
            t || this._img.complete || i ? (this._setupParameters(n), this._angle == this._parameters.animateTo ? this._rotate(this._angle) : this._animateStart()) : this._onLoadDelegate.push(n)
        },
        _BindEvents: function (n) {
            if (n && this._eventObj) {
                if (this._parameters.bind) {
                    var i = this._parameters.bind;
                    for (var t in i) i.hasOwnProperty(t) && jQuery(this._eventObj).unbind(t, i[t])
                }
                this._parameters.bind = n;
                for (t in n) n.hasOwnProperty(t) && jQuery(this._eventObj).bind(t, n[t])
            }
        },
        _Loader: function () {
            return IE ? function () {
                var n = this._img.width,
                    t = this._img.height;
                for (this._imgWidth = n, this._imgHeight = t, this._img.parentNode.removeChild(this._img), this._vimage = this.createVMLNode("image"), this._vimage.src = this._img.src, this._vimage.style.height = t + "px", this._vimage.style.width = n + "px", this._vimage.style.position = "absolute", this._vimage.style.top = "0px", this._vimage.style.left = "0px", this._aspectW = this._aspectH = 1, this._container = this.createVMLNode("group"), this._container.style.width = n, this._container.style.height = t, this._container.style.position = "absolute", this._container.style.top = "0px", this._container.style.left = "0px", this._container.setAttribute("coordsize", n - 1 + "," + (t - 1)), this._container.appendChild(this._vimage), this._rootObj.appendChild(this._container), this._rootObj.style.position = "relative", this._rootObj.style.width = n + "px", this._rootObj.style.height = t + "px", this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className = this._img.className, this._eventObj = this._rootObj; n = this._onLoadDelegate.shift();) this._handleRotation(n, !0)
            } : function () {
                this._rootObj.setAttribute("id", this._img.getAttribute("id"));
                this._rootObj.className = this._img.className;
                this._imgWidth = this._img.naturalWidth;
                this._imgHeight = this._img.naturalHeight;
                var n = Math.sqrt(this._imgHeight * this._imgHeight + this._imgWidth * this._imgWidth);
                for (this._width = 3 * n, this._height = 3 * n, this._aspectW = this._img.offsetWidth / this._img.naturalWidth, this._aspectH = this._img.offsetHeight / this._img.naturalHeight, this._img.parentNode.removeChild(this._img), this._canvas = document.createElement("canvas"), this._canvas.setAttribute("width", this._width), this._canvas.style.position = "relative", this._canvas.style.left = -this._img.height * this._aspectW + "px", this._canvas.style.top = -this._img.width * this._aspectH + "px", this._canvas.Wilq32 = this._rootObj.Wilq32, this._rootObj.appendChild(this._canvas), this._rootObj.style.width = this._img.width * this._aspectW + "px", this._rootObj.style.height = this._img.height * this._aspectH + "px", this._eventObj = this._canvas, this._cnv = this._canvas.getContext("2d"); n = this._onLoadDelegate.shift();) this._handleRotation(n, !0)
            }
        }(),
        _animateStart: function () {
            this._timer && clearTimeout(this._timer);
            this._animateStartTime = +new Date;
            this._animateStartAngle = this._angle;
            this._animate()
        },
        _animate: function () {
            var n = +new Date,
                t = n - this._animateStartTime > this._parameters.duration;
            if (t && !this._parameters.animatedGif) clearTimeout(this._timer);
            else {
                (this._canvas || this._vimage || this._img) && (n = this._parameters.easing(0, n - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration), this._rotate(~~(10 * n) / 10));
                this._parameters.step && this._parameters.step(this._angle);
                var i = this;
                this._timer = setTimeout(function () {
                    i._animate.call(i)
                }, 10)
            }
            this._parameters.callback && t && (this._angle = this._parameters.animateTo, this._rotate(this._angle), this._parameters.callback.call(this._rootObj))
        },
        _rotate: function () {
            var n = Math.PI / 180;
            return IE ? function (n) {
                this._angle = n;
                this._container.style.rotation = n % 360 + "deg";
                this._vimage.style.top = -(this._rotationCenterY - this._imgHeight / 2) + "px";
                this._vimage.style.left = -(this._rotationCenterX - this._imgWidth / 2) + "px";
                this._container.style.top = this._rotationCenterY - this._imgHeight / 2 + "px";
                this._container.style.left = this._rotationCenterX - this._imgWidth / 2 + "px"
            } : t ? function (n) {
                this._angle = n;
                this._img.style[t] = "rotate(" + n % 360 + "deg)";
                this._img.style[i] = this._parameters.center.join(" ")
            } : function (t) {
                this._angle = t;
                t = t % 360 * n;
                this._canvas.width = this._width;
                this._canvas.height = this._height;
                this._cnv.translate(this._imgWidth * this._aspectW, this._imgHeight * this._aspectH);
                this._cnv.translate(this._rotationCenterX, this._rotationCenterY);
                this._cnv.rotate(t);
                this._cnv.translate(-this._rotationCenterX, -this._rotationCenterY);
                this._cnv.scale(this._aspectW, this._aspectH);
                this._cnv.drawImage(this._img, 0, 0)
            }
        }()
    };
    IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function () {
        document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            return !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                function (n) {
                    return document.createElement("<rvml:" + n + ' class="rvml">')
                }
        } catch (n) {
            return function (n) {
                return document.createElement("<" + n + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }())
})(jQuery);
(function () {
    var n, t;
    if (top.location != document.location) {
        t = (new Date).getTime();
        document.cookie = "ts=" + t;
        var i = document.cookie;
        i || (n = document.location.origin + "/Partners/Default/InformationPages/MoveToSignUp.aspx", document.location.href = n + document.location.search)
    }
})();
typeof Object.assign != "function" && (Object.assign = function (n) {
    "use strict";
    if (n == null) throw new TypeError("Cannot convert undefined or null to object");
    n = Object(n);
    for (var i = 1; i < arguments.length; i++) {
        var t = arguments[i];
        if (t != null)
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
    }
    return n
});
var isWebKit = /AppleWebKit/.test(navigator.userAgent),
    initSlideHeight, forceAHAFromPayouts = !1,
    feesLink, accountHolderId;
$(function () {
    $.validator.methods.email = function () {
        return !0
    };
    window.tokenAlreadyRegistered && ExternalEventsHandling(2);
    errorPositioning();
    checkScreenWidth();
    stickyFooter();
    var n = $("#slider");
    if (n.length) {
        PayoneerTheme.isRightToLeft() && n.append(n.children().get().reverse());
        n.anythingSlider({
            delay: 0,
            mode: "h",
            expand: !0,
            resizeContents: !0,
            resumeDelay: 2e3,
            animationTime: 600,
            delayBeforeAnimate: 0,
            showMultiple: 1,
            buildArrows: !1,
            buildNavigation: !1,
            buildStartStop: !1,
            autoPlay: !1,
            autoPlayLocked: !1,
            autoPlayDelayed: !1,
            pauseOnHover: !1,
            stopAtEnd: !0,
            hashTags: !1,
            enableKeyboard: !1,
            infiniteSlides: !1,
            startPanel: PayoneerTheme.isRightToLeft() ? n.find(".slide-content").length : 1,
            playRtl: PayoneerTheme.isRightToLeft(),
            onInitialized: function () {
                $(".anythingSlider").append($($.parseHTML("<span class='arrow back'><a id='arrowBack'><\/a><\/span>")).click(navigateBackward)).append($($.parseHTML("<span class='arrow forward go-forward'><a id='arrowForward'><\/a><\/span>")).click(tryNavigateForward));
                checkFirstLastArrows();
                setSlideHeight();
                setItemsWidth();
                ProgressbarWidth();
                alignTitle();
                haveAccountButton();
                SetProgressBarInfo()
            },
            onSlideBegin: function (n, t) {
                t.$items.fadeTo(0, .5, "linear")
            },
            onSlideComplete: function (n) {
                var t = $(n.$items[n.currentPage - 1]).find(".slide-data-holder");
                t.length > 0 && ToggleNextButton(t.payoneerValidate("check"));
                n.$items.fadeTo(100, 1);
                setSlideHeight();
                scrollPageTop();
                checkFirstLastArrows();
                preventTabbing();
                ProgressbarWidth();
                alignTitle();
                haveAccountButton();
                sendGoolgeTagManagerEvent();
                reAttachValidation()
            },
            onStartStop: function (n, t) {
                var i = $(t.$items[t.currentPage - 1]).not(":has(.wait)").find(".slide-data-holder");
                i.length > 0 && ToggleNextButton(i.payoneerValidate("check"))
            }
        });
        n.find("select:not(.hasValue)").payoneerDropDownList("fixAfterMove");
        initSlideHeight = n.find("li.activePage .slide-content").outerHeight(!0) / 2;
        $(".anythingSlider .panel").swipe({
            swipeLeft: swipeLeft,
            swipeRight: swipeRight,
            threshold: 150
        });
        preventTabbing();
        var t = $(".method-registration-url");
        t.length > 0 && $("#iframMR").attr("src", decodeURIComponent(t.html()));
        ShowIndividualOrCompanyFields();
        $("#accountType").change(AccountTypeChanged)
    }
    $("#txtAlreadyHaveAnAccountPassword").keyup(function (n) {
        n.keyCode == 13 && $("#alreadyHaveAnAccountContinue").click()
    });
    $("#txtAlreadyHaveAccountCaptcha").keyup(function (n) {
        n.keyCode == 13 && $("#alreadyHaveAnAccountContinue").click()
    });
    $("#alreadyHaveAnAccountContinue").click(function () {
        var n = {
            username: $("#txtAlreadyHaveAnAccountUserName").val(),
            password: $("#txtAlreadyHaveAnAccountPassword").val(),
            captcha: $("#txtAlreadyHaveAccountCaptcha").val(),
            selectedPayoutMethodId: "",
            screen: "1"
        };
        SectionAjaxCall(n, AlreadyHaveAnAccountSuccessCallback, "AlreadyHaveAnAccount", $(this))
    });
    $("#alreadyHaveAnAccountFinish").click(function () {
        var n = {
            username: $("#txtAlreadyHaveAnAccountUserName").val(),
            password: $("#txtAlreadyHaveAnAccountPassword").val(),
            captcha: $("#txtAlreadyHaveAccountCaptcha").val(),
            selectedPayoutMethodId: $("#rblAvailableAccounts").val(),
            screen: "2"
        };
        SectionAjaxCall(n, AlreadyHaveAnAccountSuccessCallback, "AlreadyHaveAnAccount", $(this))
    });
    $("#alreadyHaveAnAccountCancel").click(function () {
        i()
    });

    function i() {
        $("#txtAlreadyHaveAnAccountUserName").val("");
        $("#txtAlreadyHaveAnAccountPassword").val("");
        $("#txtAlreadyHaveAccountCaptcha").val("");
        $("#have-account-error-step1").empty();
        $("#have-account-error-step2").empty();
        $("#already-have-account-step1").show();
        $("#already-have-account-step2").hide();
        $("#spanContinueButton").show();
        $("#spanFinishButton").hide();
        alreadyHaveAnAccountFinishHandle(!1);
        $("#AlreadyHaveAccountCaptcha_changeCode").click();
        $("#dialog_have_account").payoneerDialog("close")
    }
    $("#ddlResidencyCountries").on("change", HandleResidencyCountryChanged);
    $("#ddlResidencyCountries").hasClass("hasValue") && $("#ddlResidencyCountries").trigger("change");
    $("#ddlHeadquartersCountries").on("change", HandleHeadquartersCountryChanged);
    $("#ddlHeadquartersCountries").hasClass("hasValue") && $("#ddlHeadquartersCountries").trigger("change");
    $("#ddlIncorporationCountries").on("change", HandleIncorporationCountryChanged);
    if (HandleIncorporationCountryChanged(), $("#authorizedRepresentativeAddress").length > 0) {
        $("#ddlAuthorizedRepCountries").on("change", HandleAuthorizedRepresentativeCountryChanged);
        HandleAuthorizedRepresentativeCountryChanged()
    }
    $("#cbIncorporationCountry").on("change", HandleIncorporationCountryCheckboxChanged).trigger("change");
    $("#ddlContactPersonCountry").on("change", HandleContactPersonCountryChanged);
    $.payoneerValidation.settings.onHighlight = function () {
        setTimeout(setSlideHeight, 250)
    };
    $.payoneerValidation.settings.onUnhighlight = function () {
        setTimeout(setSlideHeight, 250);
        $(this).is("input:text") && $(this).val($(this).val().trim())
    };
    $(document).on("py.toggle.textblock", function () {
        setTimeout(setSlideHeight, 250)
    });
    $(".reg-form-inner").css("visibility", "visible");
    $(".slide-data-holder").on("click", function (n) {
        $(n.target).hasClass("slide-data-holder") && $(document.activeElement).blur()
    });
    SetImages();
    feesLink = $("#feesTab a").attr("href");
    RegisterPhoneVerificationValidation();
    ["#txtFirstName", "#txtLastName", "#txtCity", "#txtAddress1", "#txtAddress2", "#txtCompanyName", "#txtContactPersonFirstName", "#txtContactPersonLastName", "#txtAddress3", "#txtAddress4", "#TextBoxIncorporationAddress1", "#TextBoxIncorporationAddress2", "#TextBoxIncorporationCity", "#txtDoingBusinessAs", "#txtTickerSymbol"].forEach(n => RegisterToKeyUpValidate(n))
});

function RegisterToKeyUpValidate(n) {
    $(n).on("keyup", function (t) {
        $(n).val().length >= $(n).attr("data-rule-minlength") && ValidKeyCode(t.which) && ($(n).payoneerValidate("check") ? $(n).payoneerValidate("hide") : ($(n).payoneerValidate("prompt", $(n).attr("data-msg-pattern")), $(n).blur(), $(n).focus()))
    })
}

function ValidKeyCode(n) {
    var t = !1;
    if (n >= 48 && n <= 90 || n >= 186 && n <= 222 || n == 8) return !window.event || window.event.ctrlKey || window.event.altKey || (t = !0), t
}

function ShowUSPSPopUp() {
    $.payoneerAjax({
        url: "/Partners/Default/AccountRegistration.aspx/GetUSPSDialog",
        isNotMoreThenOneAjax: !0,
        showDialogOnError: !1,
        success: function (n) {
            if (n != "") {
                var t = JSON.parse(n);
                if (t.isValid) {
                    $("#reg-form").append(t.Html);
                    $("#dialogUSPS").payoneerDialog({
                        hide: {
                            effect: "fade",
                            duration: 250
                        },
                        show: {
                            effect: "fade",
                            duration: 250
                        },
                        modal: !0,
                        draggable: !1,
                        resizable: !1,
                        autoOpen: !1,
                        width: "auto",
                        closeText: "",
                        stack: !1,
                        position: ["center", "center"],
                        open: function () {
                            datepickerWidth()
                        }
                    });
                    $("#dialogUSPS").payoneerDialog("open");
                    dialogWidth();
                    $("#dialogUSPS").dialog({
                        position: ["center", "center"]
                    });
                    $("#dialogUSPS .field-data").payoneerThemeFields();
                    $("#dialogUSPS #UsResident").payoneerButton();
                    $("#dialogUSPS #USPSContinue").on("click", function () {
                        $("#dialogUSPS").dialog("close")
                    })
                }
            }
        }
    })
}

function goForwardFromIframe() {
    if ($("body").hasClass("rtl")) {
        if (!$(this).hasClass("disabled")) return $(".arrow.back").first().trigger("click"), !1
    } else if (!$(this).hasClass("disabled")) return $(".go-forward").first().trigger("click"), !1
}

function goBackFromIframe() {
    $("#slider").data("AnythingSlider").goBack()
}

function GetCurrentSliderSection() {
    if ($("#dialog_have_account").is(":visible")) return $("#dialog_have_account");
    var n = $("#slider").data("AnythingSlider");
    return $(n.$items[n.currentPage - 1]).find(".slide-content")
}

function reAttachValidation() {
    typeof GetCurrentSliderSection != "undefined" && GetCurrentSliderSection().payoneerValidate("attach")
}

function HandleResidencyCountryChanged() {
    var n = $("#ddlResidencyCountries").val();
    GetPhoneSection(n, function () {
        $('#AccountPhoneNumber_iso2 option[value="' + n + '"]').length > 0 ? $("#AccountPhoneNumber").codeVal() != n && $("#AccountPhoneNumber").codeVal(n) : $("#AccountPhoneNumber_iso2").trigger("empty");
        CountryChange(n)
    })
}

function CardRedirectValidation(n) {
    if (typeof cardRedirectFlowCountries != "undefined" && cardRedirectFlowCountries.includes(n)) {
        if ($("#card_red_pp").length > 0) {
            var i = IsIndividual() ? "ddlResidencyCountries" : "ddlHeadquartersCountries",
                t = $("#" + i).children("option:selected").text().trim();
            $("#card_red_pp_title").text($("#card_red_pp_title").text().replace(/{{countryName}}/g, t));
            $("#card_red_pp_text").text($("#card_red_pp_text").text().replace(/{{countryName}}/g, t))
        }
        return IsCardRedirectNeeded(cardRedirectFlowCountries, n)
    }
    n == "IN" && typeof isIndiaCardFlow != "undefined" && isIndiaCardFlow && IsIndiaCardRedirectNeeded(n);
    n == "RU" && typeof isRussiaCardFlow != "undefined" && isRussiaCardFlow && IsRussiaCardRedirectNeeded(n)
}

function CountryChange(n) {
    n == "US" ? $("#ddlState").parents(".form-object").show() : $("#ddlState").parents(".form-object").hide();
    var i = $("#slider").data("AnythingSlider"),
        t = i.currentPage;
    (t > 1 || t == 1 && $("#ddlResidencyCountries, #ddlHeadquartersCountries").prop("disabled")) && CardRedirectValidation(n)
}

function HandleContactPersonCountryChanged() {
    var n = $("#ddlContactPersonCountry").val();
    n == "US" ? $("#ddlContactPersonState").parents(".form-object").show() : $("#ddlContactPersonState").parents(".form-object").hide()
}

function IsIndiaCardRedirectNeeded(n) {
    return n == "IN" && typeof isIndiaCardFlow != "undefined" && isIndiaCardFlow ? ($("#in_card_reg").dialog({
        position: "center",
        dialogClass: "no-close",
        closeOnEscape: !1,
        cleanFieldsOnClose: !1
    }).payoneerDialog("open"), !0) : !1
}

function IsRussiaCardRedirectNeeded(n) {
    return n == "RU" && typeof isRussiaCardFlow != "undefined" && isRussiaCardFlow ? ($("#ru_card_reg").dialog({
        position: "center",
        dialogClass: "no-close",
        closeOnEscape: !1,
        cleanFieldsOnClose: !1
    }).payoneerDialog("open"), !0) : !1
}

function IsCardRedirectNeeded(n, t) {
    return typeof n != "undefined" && n.includes(t) ? ($("#card_red_pp").dialog({
        position: "center",
        dialogClass: "no-close",
        closeOnEscape: !1,
        cleanFieldsOnClose: !1
    }).payoneerDialog("open"), !0) : !1
}

function HandleHeadquartersCountryChanged() {
    var n = $("#ddlHeadquartersCountries").val();
    GetPhoneSection(n, function () {
        $('#ContactPersonPhoneNumber_iso2 option[value="' + n + '"]').length > 0 ? $("#ContactPersonPhoneNumber").codeVal() != n && $("#ContactPersonPhoneNumber").codeVal(n) : $("#ContactPersonPhoneNumber_iso2").trigger("empty");
        CountryChange(n)
    })
}

function HandleIncorporationCountryChanged() {
    var n = $("#ddlIncorporationCountries").val();
    n != "US" || IsIndividual() ? $("#ddlIncorporationState").parents(".form-object").hide() : $("#ddlIncorporationState").parents(".form-object").show()
}

function HandleAuthorizedRepresentativeCountryChanged() {
    var n = $("#ddlAuthorizedRepCountries").val();
    n != "US" || IsIndividual() ? $("#ddlAuthorizedRepState").parents(".form-object").hide() : $("#ddlAuthorizedRepState").parents(".form-object").show()
}

function HandleIncorporationCountryCheckboxChanged() {
    var t = $("#cbIncorporationCountry").is(":checked"),
        n = {
            duration: 250,
            progress: function () {
                setSlideHeight(!0)
            }
        };
    t ? $(".expandable-div.incorporation-country").slideDown(n).payoneerValidate("hide") : $(".expandable-div.incorporation-country").slideUp(n)
}

function IsIndividual() {
    return $("#accountType").val() == "Individual"
}

function IsMobile() {
    return $("#phoneType").val() !== "Landline"
}

function AccountTypeChanged() {
    ShowIndividualOrCompanyFields();
    var n = IsIndividual() ? $("#ddlResidencyCountries").val() : $("#ddlHeadquartersCountries").val();
    GetPhoneSection(n)
}

//function ShowIndividualOrCompanyFields() {
//    IsIndividual() ? ($(".Individual").show(), $(".Company").hide()) : ($(".Individual").hide(), $(".Company").show(), ddlBusinessOrganizationOnChange(), HandleIncorporationCountryChanged(), $("#authorizedRepresentativeAddress").length > 0 && HandleAuthorizedRepresentativeCountryChanged());
//    ToggleNextButton(GetCurrentSliderSection().payoneerValidate("check"));
//    InitCounty1Field();
//    setSlideHeight()
//}

function InitCounty1Field() {
    $(".County1, .Mahoz").css({
        position: "absolute",
        width: "0px",
        "min-width": "0px",
        "min-height": "0px",
        "z-index": "-99",
        opacity: "0",
        height: "0px",
        padding: "0",
        "margin:": "0"
    });
    $(".County1 .field, .Mahoz .field").css({
        border: "0"
    })
}

function AddErrorsToFields(n) {
    typeof n != "undefined" && $.each(n, function (n, t) {
        $("#" + t.Item1).prop("disabled", !1).payoneerValidate("prompt", {
            message: t.Item2
        }).trigger("enable").closest(".form-object").removeClass("disabled")
    })
}

function AddErrorsToFieldsInSection(n, t) {
    typeof t != "undefined" && $.each(result.idErrors, function (n, t) {
        var i = t.Item1,
            r = t.Item2;
        $.each(r, function (n, t) {
            $("#" + i + " [data-name=" + t.Item1 + "]").prop("disabled", !1).payoneerValidate("prompt", {
                message: t.Item2
            }).trigger("enable").closest(".form-object").removeClass("disabled")
        })
    })
}

function AddGeneralErrors(n) {
    if (n) {
        $("#" + n[0].Item1).empty();
        var i = $("#" + n[0].Item1).find("ol").length > 0,
            t = n.length;
        i || t > 1 && $("#" + n[0].Item1).append("<ol><\/ol>");
        $.each(n, function (n, i) {
            t > 1 ? $("#" + i.Item1).show().find("ol").append("<li>" + i.Item2 + "<\/li>") : $("#" + i.Item1).show().append(i.Item2)
        })
    }
}

function ErrorInRegistration(n) {
    document.location = n
}

function PerformCaptchaClick(n, t) {
    var r = $("#slider").data("AnythingSlider").$items[$("#slider").data("AnythingSlider").currentPage - 1],
        i = $(r).find(".accountCaptcha"),
        u = $(i).is(":visible");
    n && $(i).show();
    u && (AddErrorsToFields(t), $(i).find("input").val(""), $(i).find(".lbd-icon-change").click(), GetCurrentSliderSection().find("input:button").trigger("disable"))
}

//function ShowCaptcha(n, t) {
//    PerformCaptchaClick(!0, t);
//    LBD_PayoneerLoad("#" + n);
//    GetCurrentSliderSection().find("input:button").trigger("disable");
//    ToggleNextButton(GetCurrentSliderSection().payoneerValidate("check"));
//    setTimeout(function () {
//        setSlideHeight()
//    }, 500)
//}

function RegistrationCompleted(n, t, i, r) {
    $.payoneerAjax({
        url: "/Partners/Default/AccountRegistration.aspx/RegistrationCompleted",
        isNotMoreThenOneAjax: !0,
        showDialogOnError: !1,
        success: function () {
            RegistrationCompleteSuccessfullyCallback(n, t, i, r)
        }
    })
}

function RegistrationCompleteSuccessfully(n, t, i, r, u) {
    var o = {
        event: "thankyou",
        account_holder_id: accountHolderId || ahid
    };
    if (typeof registrationType != "undefined" && Object.assign(o, {
            user_registration_type: registrationType
        }), dataLayer.push(o), u) {
        isInvitee = !0;
        var f = $(".japan-my-number-hidden .inviteeDescription"),
            s = $(".japan-my-number-hidden .description");
        f && f.length ? (s.hide(), f.show()) : (s.show(), f.hide())
    }
    var e = $(".japan-my-number"),
        h = $(".blsConfirmation");
    h && h.length ? $(".japan-my-number-hidden").show() : e && e.length && (getCountryInForm() == "JP" ? (e.show(), $(".japan-my-number-hidden").hide()) : e.hide());
    $("#slider").bind("slide_complete", RegistrationCompleted(n, t, i, r))
}

function RegistrationCompleteSuccessfullyCallback(n, t, i) {
    $("#confirmationIframe").length > 0 && $("#confirmationIframe").attr("src", window.location.origin + "/Partners/Default/ThankYouGTM.aspx");
    $("#slider").unbind("slide_complete", RegistrationCompleted);
    i != undefined && i != "" ? document.location.href = i : ((t > 0 || n == "") && $(".arrow.back, .arrow.forward").length > 0 && ($(".arrow.back, .arrow.forward").hide(), navigateForward()), n != "" && setTimeout(function () {
        document.location.href = (n.indexOf("http") > -1 ? "" : "http://") + n
    }, t))
}

function getDateOfBirth() {
    var n = IsIndividual() ? "datepicker5" : "datepicker",
        t = $("#alt_" + n).val() || $("#" + n).val();
    return t === undefined ? null : t
}

function getDateOfBirthAsJSDate() {
    var n = IsIndividual() ? "datepicker5" : "datepicker",
        t = $("#" + n).datepicker("getDate") || $.datepicker.parseDate("yy-mm-dd", $("#" + n).val());
    return t === undefined ? null : t
}

function getAge(n) {
    return Math.ceil((new Date - n) / 864e5 / 365.25)
}

function ddlBusinessOrganizationOnChange() {
    isPubliclyTradedShouldBeVisible() ? $("#cbIsPubliclyTraded").parents(".form-object").show() : ($("#cbIsPubliclyTraded").parents(".form-object").hide(), $("#cbIsPubliclyTraded").parents("label").removeClass("on"));
    showHideExchangeFields()
}

function isPubliclyTradedShouldBeVisible() {
    if (window.enableIsPubliclyTradedValues) {
        var n = enableIsPubliclyTradedValues.split(","),
            t = $("#ddlBusinessOrganization").val();
        return jQuery.inArray(t, n) !== -1
    }
    return !1
}

function showHideExchangeFields() {
    isPubliclyTradedChecked() ? ($("#ddlStockExchangeName").parents(".form-object").show(), $("#txtTickerSymbol").parents(".form-object").show()) : ($("#ddlStockExchangeName").parents(".form-object").hide(), $("#txtTickerSymbol").parents(".form-object").hide())
}

function isPubliclyTradedChecked() {
    return $("#cbIsPubliclyTraded").parents("label").hasClass("on")
}

function SavePersonalDetails() {
    var i = IsIndividual(),
        t = getDateOfBirth(),
        n = {
            companyName: $("#txtCompanyName").val(),
            doingBusinessAs: $("#txtDoingBusinessAs").is(":visible") && $("#txtDoingBusinessAs").val() != "" ? $("#txtDoingBusinessAs").val() : null,
            typeOfBusiness: $("#ddlBusinessOrganization").val(),
            isPubliclyTraded: $("#cbIsPubliclyTraded").is(":visible") ? isPubliclyTradedChecked() : null,
            exchangeId: $("#ddlStockExchangeName").is(":visible") && isPubliclyTradedChecked() ? $("#ddlStockExchangeName").val() : null,
            tickerSymbol: $("#txtTickerSymbol").is(":visible") && isPubliclyTradedChecked() ? $("#txtTickerSymbol").val() : null,
            firstName: $("#txtFirstName").val(),
            lastName: $("#txtLastName").val(),
            email: $("#txtEmail").val(),
            retypeEmail: $("#txtRetypeEmail").val(),
            DOB: t,
            DOB_Incorporation: t,
            isIndividual: i,
            registrationId: $("#RegistrationId").val(),
            captcha: $("#txtPersonalDetailsCaptcha").length > 0 ? $("#txtPersonalDetailsCaptcha").val() : null
        };
    $("#txtCompanyURL").length > 0 && (n.companyURL = $("#txtCompanyURL").val());
    $("#txtContactPersonalName").length > 0 ? n.contactPersonName = $("#txtContactPersonalName").val() : (n.contactPersonFirstName = $("#txtContactPersonFirstName").val(), n.contactPersonLastName = $("#txtContactPersonLastName").val());
    SectionAjaxCall(n, PersonalDetailsSuccessCallback, "SavePersonalDetails")
}

function PersonalDetailsSuccessCallback(n) {
    if (n != "") {
        var t = JSON.parse(n);
        t.RegistrationId && $("#RegistrationId").val(t.RegistrationId);
        t.isAllValid ? (accountHolderId = t.AccountHolderId, PerformCaptchaClick(!1), IsCheckEmail && $("#txtUserName").val($("#txtEmail").val()).change(), navigateForward()) : t.showCaptcha ? ShowCaptcha("PersonalDetailsCaptcha", t.errors) : (PerformCaptchaClick(!1), t.isGeneralError ? AddGeneralErrors(t.errors) : AddErrorsToFields(t.errors))
    }
}

function SaveContactDetails() {
    var i = IsIndividual() || $("#ddlHeadquartersCountries").length == 0 ? $("#ddlResidencyCountries").val() : $("#ddlHeadquartersCountries").val();
    if (!CardRedirectValidation(i)) {
        var r = i == "US" ? $("#ddlState").val() : "",
            u = IsIndividual() ? $("#txtAddress1").val() : $("#txtAddress3").val(),
            f = IsIndividual() ? $("#txtAddress2").val() : $("#txtAddress4").val(),
            e = $("#txtCity").val(),
            o = $("#txtZip").val(),
            s = IsIndividual() || $("#ContactPersonPhoneNumber").length == 0 ? $("#AccountPhoneNumber").length > 0 ? $("#AccountPhoneNumber").codeVal() : null : $("#ContactPersonPhoneNumber").codeVal(),
            h = IsIndividual() || $("#ContactPersonPhoneNumber").length == 0 ? $("#AccountPhoneNumber").length > 0 ? $("#AccountPhoneNumber").val() : null : $("#ContactPersonPhoneNumber").val(),
            n = {
                country: i,
                state: r,
                address1: u,
                address2: f,
                city: e,
                zipCode: o,
                isMobile: IsMobile(),
                phoneCountyPrefix: s,
                phoneNumber: h,
                registrationId: $("#RegistrationId").val(),
                captcha: $("#txtContactDetailsCaptcha").length > 0 ? $("#txtContactDetailsCaptcha").val() : null
            };
        if ($("#cbIncorporationCountry").length > 0 && $("#accountType").val() == "Company") {
            var t = $("#cbIncorporationCountry").is(":checked");
            $("#incorporationAddress").length > 0 ? n.incorporationAddress = {
                Country: t ? $("#ddlIncorporationCountries").val() : i,
                State: t ? $("#ddlIncorporationState").val() : r,
                Address1: t ? $("#TextBoxIncorporationAddress1").val() : u,
                Address2: t ? $("#TextBoxIncorporationAddress2").val() : f,
                City: t ? $("#TextBoxIncorporationCity").val() : e,
                Zip: t ? $("#TextBoxIncorporationZip").val() : o
            } : (n.incorporationCountry = t ? $("#ddlIncorporationCountries").val() : i, n.incorporationState = t ? $("#ddlIncorporationState").val() : r);
            $("#authorizedRepresentativeAddressSection").length > 0 && (n.authorizedRepresentativeAddress = $("#authorizedRepresentativeAddress").length > 0 ? {
                Country: $("#ddlAuthorizedRepCountries").val(),
                State: $("#ddlAuthorizedRepState").val(),
                Address1: $("#txtAuthorizedRepAddress1").val(),
                Address2: $("#txtAuthorizedRepAddress2").val(),
                City: $("#txtAuthorizedRepCity").val(),
                Zip: $("#txtAuthorizedRepZipCode").val()
            } : null)
        } else $("#accountType").val() == "Individual" && (n.incorporationAddress = null, $("#authorizedRepresentativeAddressSection").length > 0 && (n.authorizedRepresentativeAddress = null));
        $("#Mahoz").length > 0 ? n.county1 = $("#Mahoz").val() : $("#txtCounty1").length > 0 && (n.county1 = $("#txtCounty1").val());
        typeof autoCompleteAddress != "undefined" && (n.autoCompleteAddress = autoCompleteAddress);
        $("#txtSessionKey").length > 0 && (n.passCode = $("#txtVerificationCode").length > 0 ? $("#txtVerificationCode").val() : null, n.sessionKey = $("#txtSessionKey").val());
        SectionAjaxCall(n, ContatcDetailsSuccessCallback, "SaveContactDetails")
    }
}

function ContatcDetailsSuccessCallback(n, t) {
    if (shouldShowAuBusinessNumberField() ? $(".BusinessNumber").show() : $(".BusinessNumber").hide(), n != "") {
        var i = JSON.parse(n);
        i.isAllValid ? (PerformCaptchaClick(!1), i.FooterText != undefined && HandleNewFooterText(i.FooterText), i.CollectMultipleIdentityDocuments != undefined && i.CollectMultipleIdentityDocuments ? i.CollectIdentityDocumentText != undefined && HandleNewCollectIdentityDocumentsText(i.CollectIdentityDocumentText || $("<textarea/>").html(t).text()) : i.CollectIdentityDocumentText != undefined && HandleNewCollectIdentityDocumentText(i.CollectIdentityDocumentText), i.CollectNatioanlity !== undefined && i.CollectNatioanlity ? ($("#NationalityId").show(), $("#CompanyNationality").length > 0 && $("#IndividualNationality").length > 0 && (i.CollectCompanyNationality !== undefined && i.CollectCompanyNationality ? ($("#CompanyNationality").show(), $("#IndividualNationality").hide()) : ($("#IndividualNationality").show(), $("#CompanyNationality").hide()))) : $("#NationalityId").hide(), i.CollectLOBId !== undefined && i.CollectLOBId ? $("#LineOfBusinessType").show() : $("#LineOfBusinessType").hide(), i.CollectContactPersonAddress !== undefined && i.CollectContactPersonAddress ? $("#ContactPersonAddress").show() : $("#ContactPersonAddress").hide(), i.MRLink != null && $("#iframMR").attr("src", decodeURIComponent(i.MRLink)), $("#txtVerificationCode").length > 0 && $("#txtVerificationCode").val() !== "******" && ($("#txtVerificationCode").val("******"), $("#txtVerificationCode").trigger("disable"), $(".pnlResend").css("visibility", "hidden"), $("#lnkSendCode").css("visibility", "hidden"), $("#lblVerified").css("visibility", "visible"), AddPhoneVerificationGAEvent("Success")), showOrHideSSNOrEIN(), navigateForward()) : (i.showCaptcha ? ShowCaptcha("ContactDetailsCaptcha", i.errors) : (PerformCaptchaClick(!1), i.isGeneralError ? AddGeneralErrors(i.errors) : (AddErrorsToFields(i.errors), $("#txtVerificationCode").length > 0 && i.errors !== undefined && i.errors[0] !== undefined && i.errors[0].Item1 === "txtVerificationCode" && AddPhoneVerificationGAEvent("Error", "User failed to verify code")), i.errorSection && $("#slider").anythingSlider(i.errorSection)), i.isResendPanelVisible || $("#lblResend").hide())
    }
}

function shouldShowAuBusinessNumberField() {
    return !IsIndividual() && $("#ddlBusinessOrganization").val() === "3" && ($("#cbIncorporationCountry").is(":checked") && $("#ddlIncorporationCountries").val() === "AU" || !$("#cbIncorporationCountry").is(":checked") && $("#ddlHeadquartersCountries").val() === "AU")
}

function showOrHideSSNOrEIN() {
    var n = $("#txtSSN").parents(".form-object"),
        t = $("#txtEIN").parents(".form-object");
    if (n.length > 0 || t.length > 0) {
        n.hide();
        t.hide();
        var i = getDocumentTypeToShow();
        i == "1" ? n.show() : i == "5" && t.show()
    }
}

function getDocumentTypeToShow() {
    if ($("#hfCollectEINOrSSN").val() == "True") {
        if (getCountryInForm() == "US" && (IsIndividual() || $("#ddlBusinessOrganization").val() == "3")) return "1";
        if (!IsIndividual() && $("#ddlBusinessOrganization").val() != "3" && getIncorporationCountry() == "US") return "5"
    } else return "-1"
}

function getCountryInForm() {
    return IsIndividual() || $("#ddlHeadquartersCountries").length == 0 ? $("#ddlResidencyCountries").val() : $("#ddlHeadquartersCountries").val()
}

function getIncorporationCountry() {
    var n = $("#cbIncorporationCountry").is(":checked");
    return n ? $("#ddlIncorporationCountries").val() : $("#ddlHeadquartersCountries").val()
}

function GetPhoneSection(n, t) {
    $("#pnlPhoneDetails").length > 0 ? $.payoneerAjax({
        url: "/Partners/Default/AccountRegistration.aspx/GetPhoneSection",
        data: JSON.stringify({
            selectedCountry: n
        }),
        progressObj: $("#loadingPhoneDetails"),
        progressObjFadeIn: 0,
        progressObjFadeOut: 250,
        success: function (n) {
            if (n === "") ResetPhoneVerificationField();
            else {
                $("#pnlPhoneDetails .dynamically-loaded").html($(n).html());
                var i = $("#pnlPhoneDetails");
                SetPayoneerStyleForFields(i)
            }
            t && t()
        }
    }) : t && t()
}

function SetPayoneerStyleForFields(n) {
    n.find('[payoneer="RadioButtons"]').payoneerRadioButtons();
    n.find("[payoneer='ToolTip']").payoneerTooltip();
    n.find(".field-data").payoneerThemeFields();
    n.find("select").payoneerDropDownList();
    n.find(".watermark").payoneerWatermark();
    RegisterPhoneVerificationValidation();
    phoneFieldWidth();
    ShowIndividualOrCompanyFields();
    GetCurrentSliderSection().payoneerValidate("attach");
    fixPageHeight()
}

function fixPageHeight() {
    $.isFunction(window.setSlideHeight) && window.setSlideHeight(!0);
    $.isFunction(window.ResizeiFrame) && window.ResizeiFrame()
}
var smsPhoneNumber, calledAction;

function PhoneVerificationSendSMS() {
    var n = IsIndividual() || $("#ContactPersonPhoneNumber").length == 0 ? $("#AccountPhoneNumber").length > 0 ? $("#AccountPhoneNumber").codeVal() : null : $("#ContactPersonPhoneNumber").codeVal(),
        t = IsIndividual() || $("#ContactPersonPhoneNumber").length == 0 ? $("#AccountPhoneNumber").length > 0 ? $("#AccountPhoneNumber").val() : null : $("#ContactPersonPhoneNumber").val(),
        i = IsIndividual() ? $("#ddlResidencyCountries").val() : $("#ddlHeadquartersCountries").val(),
        r = {
            phoneCountyPrefix: n,
            phoneNumber: t,
            selectedCountry: i
        };
    calledAction = "SendSms";
    $.payoneerAjax({
        url: "/Partners/Default/AccountRegistration.aspx/PhoneVerificationSendSMS",
        data: JSON.stringify(r),
        isNotMoreThenOneAjax: !0,
        showDialogOnError: !1,
        success: PhoneVerificationSendSMSSuccessCallback
    })
}

function PhoneVerificationSendSMSSuccessCallback(n) {
    var t = JSON.parse(n);
    if (t.isAllValid) {
        var i = t.PhoneVerificationKey;
        $("#txtSessionKey").val(i);
        AddPhoneVerificationGAEvent("Click Send Code");
        SetResendSmsPnlAfterSendingSms()
    }
    t.isAllValid || (t.isGeneralError ? AddGeneralErrors(t.errors) : AddErrorsToFields(t.errors), t.isResendPanelVisible || $("#lblResend").hide(), t.isVoiceCallEnabled || $("#lnkCallMe").addClass("disabled"))
}

function ResendSms() {
    calledAction = "ResendSmsMessage";
    ResendSmsOrVoiceCall(calledAction)
}

function CallMe() {
    calledAction = "VoiceCallMessage";
    ResendSmsOrVoiceCall(calledAction)
}

function ResendSmsOrVoiceCall(n) {
    var t = {
        sessionKey: $("#txtSessionKey").val(),
        notificationType: n
    };
    $.payoneerAjax({
        url: "/Partners/Default/AccountRegistration.aspx/PhoneVerificationResend",
        data: JSON.stringify(t),
        isNotMoreThenOneAjax: !0,
        showDialogOnError: !1,
        success: PhoneVerificationResendSuccessCallback
    })
}

function PhoneVerificationResendSuccessCallback(n) {
    var t = JSON.parse(n);
    if (!t.isAllValid) {
        t.isGeneralError ? AddGeneralErrors(t.errors) : AddErrorsToFields(t.errors);
        t.isResendPanelVisible || $("#lblResend").hide();
        t.isVoiceCallEnabled || $("#lnkCallMe").addClass("disabled");
        return
    }
    SetResendSmsPnlAfterSendingSms();
    var i = calledAction === "VoiceCallMessage" ? "Click Call Me" : "Click Resend";
    AddPhoneVerificationGAEvent(i)
}
var sendCodeTimer;

function SetResendSmsPnlAfterSendingSms() {
    $("#lnkSendCode").addClass("disabled");
    $(".pnlResend").css("visibility", "visible");
    $("#lblResendCountdown").show();
    $("#lblResend").hide();
    var t = document.getElementById("smsCounter"),
        n = function (i) {
            if (i < 0) {
                $("#lblResendCountdown").hide();
                calledAction == "VoiceCallMessage" || calledAction == "ResendSmsMessage" ? (calledAction == "ResendSmsMessage" && $("#lnkResend").addClass("disabled"), calledAction == "VoiceCallMessage" && ($("#lnkCallMe")[0].counter == undefined ? $("#lnkCallMe")[0].counter = 1 : $("#lnkCallMe").addClass("disabled")), $("#lnkResend").hasClass("disabled") && $("#lnkCallMe").hasClass("disabled") ? $("#lblResendExceeded").css("visibility", "visible") : $("#lblResend").show()) : calledAction == "SendSms" && ($("#lblResend").show(), $("#lnkResend").removeClass("disabled"), $("#lnkCallMe").removeClass("disabled"));
                return
            }
            t.innerHTML = i;
            sendCodeTimer = setTimeout(function () {
                n(--i)
            }, 1e3)
        };
    clearTimeout(sendCodeTimer);
    n(30)
}

function RegisterPhoneVerificationValidation() {
    $("#AccountPhoneNumber_iso2").change(function () {
        ValidatePhoneForSendingSms()
    });
    $("#AccountPhoneNumber_num").keyup(function () {
        ValidatePhoneForSendingSms()
    });
    $("#ContactPersonPhoneNumber_iso2").change(function () {
        ValidatePhoneForSendingSms()
    });
    $("#ContactPersonPhoneNumber_num").keyup(function () {
        ValidatePhoneForSendingSms()
    })
}

function ValidatePhoneForSendingSms() {
    $("#lnkSendCode").length > 0 && (IsIndividual() && $("#AccountPhoneNumber_iso2").payoneerValidate("check") && $("#AccountPhoneNumber_num").payoneerValidate("check") || !IsIndividual() && $("#ContactPersonPhoneNumber_iso2").payoneerValidate("check") && $("#ContactPersonPhoneNumber_num").payoneerValidate("check") ? ResetPhoneVerificationField() : $("#lnkSendCode").addClass("disabled"))
}

function ResetPhoneVerificationField() {
    $("#lnkSendCode").removeClass("disabled");
    $(".pnlResend").css("visibility", "hidden");
    $("#txtVerificationCode").val("");
    $("#txtVerificationCode").trigger("enable");
    $("#lnkSendCode").css("visibility", "visible");
    $("#lblVerified").css("visibility", "hidden");
    $("#lblResendExceeded").css("visibility", "hidden")
}

function AddPhoneVerificationGAEvent(n, t) {
    t = t || "";
    dataLayer.push({
        event: "autoEvent",
        category: "Payouts",
        action: "Phone Verification - " + n,
        label: t
    })
}

function SaveAccountDetails() {
    var t = IsIndividual(),
        f = $("#alt_datepicker5, #alt_datepicker").length > 0 ? t ? $("#alt_datepicker5").val() : $("#alt_datepicker").val() : null,
        n = {
            companyName: $("#txtCompanyName").val(),
            typeOfBusiness: $("#ddlBusinessOrganization").val(),
            firstName: $("#txtFirstName").val(),
            lastName: $("#txtLastName").val(),
            email: $("#txtEmail").val(),
            DOB: f,
            DOB_Incorporation: f,
            isIndividual: t,
            country: getCountryInForm(),
            state: $("#ddlState").val(),
            address1: t ? $("#txtAddress1").val() : $("#txtAddress3").val(),
            address2: t ? $("#txtAddress2").val() : $("#txtAddress4").val(),
            city: $("#txtCity").val(),
            zipCode: $("#txtZip").val(),
            isMobile: IsMobile(),
            phoneCountyPrefix: t || $("#ContactPersonPhoneNumber").length == 0 ? $("#AccountPhoneNumber").codeVal() : $("#ContactPersonPhoneNumber").codeVal(),
            phoneNumber: t || $("#ContactPersonPhoneNumber").length == 0 ? $("#AccountPhoneNumber").val() : $("#ContactPersonPhoneNumber").val(),
            username: $("#txtUserName").val(),
            password: $("#tbPassword").val(),
            retypePassword: $("#tbRetypePassword").val(),
            securityQuestion: $("#ddlSecurityQuestions").val(),
            securityAnswer: $("#tbSecurityAnswer").val(),
            registrationId: $("#RegistrationId").val(),
            captcha: $("#txtAccountDetailsCaptcha").length > 0 ? $("#txtAccountDetailsCaptcha").val() : null
        };
    if ($("#NationalityId").length > 0 && (n.nationalityId = $("#ddlIndividualNationality").length > 0 || $("#ddlCompanyNationality").lenght > 0 ? t ? $("#ddlIndividualNationality").val() : $("#ddlCompanyNationality").val() : $("#ddlNationality").val()), $("#LineOfBusinessType").length > 0 && (n.lineOfBusinessId = $("#ddlLineOfBusinessType").val()), $("#ddlContactPersonCountry").length > 0 && (n.contactPersonCountry = $("#ddlContactPersonCountry").val()), $("#ddlContactPersonState").length > 0 && (n.contactPersonState = $("#ddlContactPersonState").val()), $("#txtContactPersonalName").length > 0 ? n.contactPersonName = $("#txtContactPersonalName").val() : (n.contactPersonFirstName = $("#txtContactPersonFirstName").val(), n.contactPersonLastName = $("#txtContactPersonLastName").val()), $("#txtEIN").length > 0 || $("#txtSSN").length > 0) {
        var u = getDocumentTypeToShow();
        switch (u) {
            case "1":
                n.identityDocumentNumber = $("#txtSSN").val();
                n.identityDocumentTypeId = u;
                break;
            case "5":
                n.identityDocumentNumber = $("#txtEIN").val();
                n.identityDocumentTypeId = u;
                break;
            default:
                n.identityDocumentNumber = null;
                n.identityDocumentTypeId = 0
        }
    }
    if ($("#collectidentitydocumentWrapper").length > 0) {
        var i = GetIdentityDocumentsInfoList();
        if (i !== undefined && i.length > 0) {
            n.collectionIDData = [];
            for (var r = 0; r < i.length; r++) {
                var e = GetCollectionIDData(i[r].IdentityDocumentID, i[r].IdentityDocumentAccountTypeID);
                n.collectionIDData.push(e)
            }
        } else n.collectionIDData = GetCollectionIDData()
    }
    n.auBusinessNumber = $("#txtAUBusinessNumber").val();
    SectionAjaxCall(n, AccountDetailsSuccessCallback, "SaveAccountDetails")
}

function AccountDetailsSuccessCallback(n) {
    if (n != "") {
        var t = JSON.parse(n);
        t.isAllValid ? (PerformCaptchaClick(!1), t.FooterText != undefined && HandleNewFooterText(t.FooterText), t.CollectMultipleIdentityDocuments != undefined && t.CollectMultipleIdentityDocuments ? t.CollectIdentityDocumentText != undefined && HandleNewCollectIdentityDocumentsText(t.CollectIdentityDocumentText) : t.CollectIdentityDocumentText != undefined && HandleNewCollectIdentityDocumentText(t.CollectIdentityDocumentText), t.MRLink != null && ($("#iframMR").attr("src", decodeURIComponent(t.MRLink)), navigateForward())) : t.showCaptcha ? ShowCaptcha("AccountDetailsCaptcha", t.errors) : (PerformCaptchaClick(!1), t.isGeneralError ? AddGeneralErrors(t.errors) : (AddErrorsToFields(t.errors), t.idErrors && $.each(t.idErrors, function (n, t) {
            var i = t.Item1,
                r = t.Item2;
            $.each(r, function (n, t) {
                $("#" + i + " [data-name=" + t.Item1 + "]").prop("disabled", !1).payoneerValidate("prompt", {
                    message: t.Item2
                }).trigger("enable").closest(".form-object").removeClass("disabled")
            })
        })), $("#slider").anythingSlider(t.errorSection))
    }
}

function HandleNewFooterText(n) {
    var t = $("footer"),
        i = $(n);
    t.html(i.html())
}

function HandleNewCollectIdentityDocumentText(n) {
    $("#collectidentitydocumentWrapper").html(n);
    CollectionIDInitialize(!0);
    GetCurrentSliderSection().payoneerValidate("attach")
}

function HandleNewCollectIdentityDocumentsText(n) {
    $("#collectidentitydocumentWrapper").html(n);
    for (var i = GetIdentityDocumentsInfoList(), t = 0; t < i.length; t++) CollectionIDInitialize(!0, !1, i[t].IdentityDocumentID, i[t].IdentityDocumentAccountTypeID);
    GetCurrentSliderSection().payoneerValidate("attach")
}

function GetIdentityDocumentsInfoList() {
    var r = [];
    if ($("#collectidentitydocumentWrapper").length > 0) {
        var n = $('div[id^="identityDocument_"]');
        if (n !== undefined && n.length > 0)
            for (var t = 0; t < n.length; t++) {
                var u = "identityDocumentAccountTypeId_",
                    i = $(n[t]).find(`div[id^=${u}]`);
                i !== undefined && i.length > 0 && r.push({
                    IdentityDocumentID: n[t].id,
                    IdentityDocumentAccountTypeID: i[0].id.substring(u.length)
                })
            }
    }
    return r
}

function AlreadyHaveAnAccountSuccessCallback(n) {
    if (n != "") {
        var t = JSON.parse(n);
        if (t.isAllValid)
            if (t.PMList && t.PMList.length) {
                var i = $("#already-have-account-step1"),
                    r = $("#already-have-account-step2"),
                    u = $("#accounts-radiobuttons");
                u.html(t.PMList);
                $('[payoneer="RadioButtons"]').payoneerRadioButtons();
                $("#rblAvailableAccounts input:radio").change(function () {
                    alreadyHaveAnAccountFinishHandle()
                });
                i.slideUp(250);
                r.slideDown(250);
                $("#spanContinueButton").hide();
                $("#spanFinishButton").show()
            } else document.location.href = t.redirectUrl;
        else t.showCaptcha && $("#captchaSection").show(), t.highlightCaptcha && $("#txtAlreadyHaveAccountCaptcha").payoneerValidate("prompt", {
            message: t.captchaError
        }), t.isGeneralError && t.errors ? (AddGeneralErrors(t.errors), $("#" + t.errors[0].Item1).parent().addClass("error")) : AddErrorsToFields(t.errors), $("#txtAlreadyHaveAccountCaptcha").val(""), $("#AlreadyHaveAccountCaptcha_changeCode").click()
    }
}

function alreadyHaveAnAccountFinishHandle(n) {
    if (n == null) {
        var t = $("#rblAvailableAccounts").val();
        n = t != ""
    }
    $("#alreadyHaveAnAccountFinish").trigger(n ? "enable" : "disable")
}
var additionalQueryStringParmeters = "";

function SectionAjaxCall(n, t, i, r) {
    r == null && (r = GetCurrentSliderSection().find("input:button"));
    $.payoneerAjax({
        url: "/Partners/Default/AccountRegistration.aspx/" + i + additionalQueryStringParmeters,
        data: JSON.stringify(n),
        isNotMoreThenOneAjax: !0,
        showDialogOnError: !1,
        success: function(t){
            console.log(t)
        },
        callerButton: r,
        error: function () {
            EnableForwardArrow()
        }
    })
}

function UpdateServerWithCurrentSection() {
    DisableForwardArrow();
    $("#slider li.activePage").find(".error").removeClass("error");
    switch (getNormalizedCurrentSlide()) {
        case 1:
            SavePersonalDetails();
            break;
        case 2:
            SaveContactDetails();
            break;
        case 3:
            SaveAccountDetails()
    }
}

function ToggleNextButton(n) {
    n ? EnableForwardArrow() : DisableForwardArrow();
    var t = $("#slider").data("AnythingSlider"),
        i = t.currentPage - 1;
    $(t.$items[i]).find(".next-button input:button").trigger(n ? "enable" : "disable")
}

function checkKeyDownTab(n) {
    if (n.which == $.ui.keyCode.TAB) {
        var t = $(".activePage").find("input,select,textarea").not(":hidden,:disabled,.disabled");
        if (!t.length) return;
        (n.shiftKey && this == t.first()[0] || !n.shiftKey && this == t.last()[0]) && n.preventDefault()
    }
}

function preventTabbing() {
    $(".activePage").find("input,select,textarea").off("keydown", checkKeyDownTab).on("keydown", checkKeyDownTab)
}
var resizeTimer;
$(window).resize(function () {
    if ($(window).innerWidth() >= 980) $(".navigation .menu").css({
        width: "auto",
        display: "block"
    });
    else {
        var n = $(window).width() - 30;
        $(".navigation .menu").css({
            width: n,
            display: "none"
        })
    }
    $(".dialog:visible").dialog({
        position: "center"
    });
    SetProgressBarInfo();
    clearTimeout(resizeTimer);
    checkScreenWidth();
    stickyFooter();
    ResizeiFrame();
    resizeTimer = setTimeout(function () {
        setSlideHeight();
        datepickerWidth();
        errorPositioning();
        phoneFieldWidth();
        pageTitleHeight();
        introSectionsWidth();
        haveAccountButton()
    }, 0)
});

function SetProgressBarInfo() {
    var n = $(".progbar .item").width() + 4,
        t = $(".progbar .item.visited").length;
    $(".pb-front").css({
        width: n * (t - .5)
    })
}

function haveAccountButton() {
    var n = $("#slider");
    if (n.length) {
        var t = n.data("AnythingSlider").currentPage,
            i = $("body").hasClass("rtl") ? $("#slider li.panel").length - t + 1 : t;
        i == 1 ? (haveAccountAnimation(), $(window).innerWidth() < 980 && $(".have-accout-after").show(250)) : ($(".notification").animate({
            opacity: 0,
            top: -300
        }).hide(250), $(".have-accout-after").hide(250))
    }
}

function setItemsWidth() {
    var n = $(".progbar .item").length;
    equalWidth($(".progbar .item").delay().queue(function (t) {
        var i = $(".progbar").innerWidth(!0);
        $(".progbar .item").css("width", i / n);
        $(this).addClass("shrinked");
        t()
    }))
}

function alignTitle() {
    if ($(".other-pages").hasClass("confirmation")) {
        var t = $(".page-title .title").outerHeight(!0),
            i = parseInt($(".page-title .title").css("padding-bottom")),
            r = $(".page-title .subtitle").height(),
            n = ($(".page-title").outerHeight(!0) - t - i - r) / 2;
        $(".progbar").css("opacity", 0);
        $(".page-title .title").hide().css("opacity", 0);
        $(".other-pages").hasClass("conf-haveaccount") ? ($(".page-title .title.conf-haveaccount").show().css({
            paddingTop: n,
            marginBottom: -n
        }).animate({
            opacity: 1
        }), 250) : $(".other-pages").hasClass("conf-partial") ? ($(".page-title .title.conf-partial").show().css({
            paddingTop: n,
            marginBottom: -n
        }).animate({
            opacity: 1
        }), 250) : ($(".page-title .title.conf-default").show().css({
            paddingTop: n,
            marginBottom: -n
        }).animate({
            opacity: 1
        }), 250)
    }
}

function ProgressbarWidth() {
    var h = $(".progbar .item").length,
        u = $(".progbar .item").width() + 4,
        i = $("#slider").data("AnythingSlider"),
        c = i.currentPage,
        n = $(i.$items[i.currentPage - 1]).attr("class").match(/\d+/);
    $(".progbar .item").removeClass("current");
    $(".progbar .item").removeClass("complete");
    for (var r = 1; r < n; r++) $(".progbar .item" + r).addClass("complete");
    if ($(".progbar .item" + n).is(".visited")) $(".progbar .item" + n).addClass("current");
    else {
        $(".progbar .item" + n).addClass("visited");
        var f = $(".progbar .item.visited").length;
        $(".pb-front").animate({
            width: u * (f - .5)
        }, 250, "swing", function () {
            $(".progbar .item" + n).addClass("current")
        })
    }
    if ($(".other-pages").hasClass("confirmation")) {
        var e = $(".page-title .title").outerHeight(!0),
            o = parseInt($(".page-title .title").css("padding-bottom")),
            s = $(".page-title .subtitle").height(),
            t = ($(".page-title").height() - e - o - s) / 2;
        $(".progbar").css("opacity", 0);
        $(".page-title .title").hide().css("opacity", 0);
        $(".other-pages").hasClass("conf-haveaccount") ? ($(".page-title .title.conf-haveaccount").show().css({
            paddingTop: t,
            marginBottom: -t
        }).animate({
            opacity: 1
        }), 250) : ($(".page-title .title.conf-default").show().css({
            paddingTop: t,
            marginBottom: -t
        }).animate({
            opacity: 1
        }), 250);
        $(window).innerWidth() < 980 && ($(".page-title").css("padding-bottom", 0), $(".progbar").css("display", "none"))
    }
}

function parentFunction(n) {
    $("#iframMR").height(n);
    setSlideHeight()
}

function parentResizeIframeMRSwitch(n) {
    $("#iframMRSwitch").height(n);
    $(".dialog:visible").dialog({
        position: "center"
    })
}

function errorPositioning() {
    $(".server-error").each(function () {
        var n = $(this),
            t = n.parent(),
            i = t.outerWidth(!0) + 44,
            r = t.find(".form-object").first().position().top + 5;
        n.css(PayoneerTheme.isRightToLeft() ? "right" : "left", i).css("top", r)
    })
}

function setSlideHeight(n) {
    var t = $("#slider li.activePage").find(".slide-content").outerHeight(!0);
    n == !0 ? $(".splash, .anythingSlider").css({
        height: t
    }) : $(".splash, .anythingSlider").animate({
        height: t
    }, 250, "easeOutQuint")
}

function getNormalizedCurrentSlide() {
    var n = $("#slider").data("AnythingSlider").currentPage;
    return PayoneerTheme.isRightToLeft() ? $("#slider li.panel").length - n + 1 : n
}

function tryNavigateForward() {
    if (!$(".arrow.forward").is(".disabled, :hidden")) {
        var n = $("#slider").data("AnythingSlider"),
            t = n.currentPage - 1;
        $(n.$items[t]).find(".next-button input:button").click()
    }
}

function navigateBackward() {
    var n = $("#slider").data("AnythingSlider");
    $(".arrow.back").is(".disabled, :hidden") || (PayoneerTheme.isRightToLeft() ? n.goForward() : HandleNavigationBackwards());
    $("#RegistrationInstructions").show()
}

function HandleNavigationBackwards() {
    var n = $("#slider").data("AnythingSlider"),
        t = n.currentPage - 1,
        i = $(n.$items[t]).data("gtmstepname"),
        r = location.pathname.indexOf("/Payer") > 0 ? "/Payer/Registration/BackFromPayoutMethod" : "/Partners/Default/AccountRegistration.aspx/BackFromPayoutMethod";
    i == "Payout-Method" ? $.payoneerAjax({
        url: r,
        isNotMoreThenOneAjax: !0,
        showDialogOnError: !1,
        success: function () {
            $("#feesTab a").attr("href", feesLink);
            n.goBack()
        }
    }) : n.goBack();
    closeBankAccountDialog()
}

function navigateForward() {
    var n = $("#slider").data("AnythingSlider");
    PayoneerTheme.isRightToLeft() ? HandleNavigationBackwards() : n.goForward()
}

function EnableForwardArrow() {
    $(".arrow.forward").removeClass("disabled")
}

function DisableForwardArrow() {
    $(".arrow.forward").addClass("disabled")
}

function swipeLeft() {
    PayoneerTheme.isRightToLeft() ? $(".arrow.back").is(".disabled, :hidden") || navigateBackward() : $(".arrow.forward").is(".disabled, :hidden") || tryNavigateForward()
}

function swipeRight() {
    PayoneerTheme.isRightToLeft() ? $(".arrow.forward").is(".disabled, :hidden") || tryNavigateForward() : $(".arrow.back").is(".disabled, :hidden") || navigateBackward()
}

function checkFirstLastArrows() {
    var n = $("#slider").data("AnythingSlider"),
        t = n.currentPage - 1;
    $(".arrow.back, .arrow.forward").show();
    $(n.$items[t]).hasClass("noForward") && $(".arrow.forward").hide();
    $(n.$items[t]).hasClass("noBackward") && $(".arrow.back").hide();
    $("body").hasClass("rtl") ? $("#slider .panel:not(.cloned)").first().hasClass("activePage") ? ($(".other-pages").addClass("confirmation"), $(".global").addClass("confirmation")) : ($(".other-pages").removeClass("confirmation"), $(".global").removeClass("confirmation")) : $("#slider .panel:not(.cloned)").last().hasClass("activePage") ? ($(".other-pages").addClass("confirmation"), $(".global").addClass("confirmation")) : ($(".other-pages").removeClass("confirmation"), $(".global").removeClass("confirmation"))
}

function scrollPageTop() {
    return $("html, body").animate({
        scrollTop: 0
    }, "easeOutQuint"), !1
}

function sendGoolgeTagManagerEvent() {
    var t = $("#slider").data("AnythingSlider"),
        u = t.currentPage - 1,
        r = $(t.$items[u]).data("gtmstepname"),
        f = IsIndividual() ? "Individual" : "Company",
        n = {
            user_type: f
        };
    if (accountHolderId = accountHolderId || ahid, accountHolderId && Object.assign(n, {
            account_holder_id: accountHolderId.toString()
        }), typeof registrationType != "undefined" && Object.assign(n, {
            user_registration_type: registrationType
        }), dataLayer != undefined && dataLayer[0].processor_type !== "4" && isAccountReflected != undefined) {
        var e = isAccountReflected ? "Yes" : "No";
        Object.assign(n, {
            account_reflected: e
        })
    }
    if (t.currentPage > 2) {
        var i;
        i = IsIndividual() ? $("#ddlResidencyCountries option:selected").text().trim() : $("#ddlIncorporationCountries option:selected").text().trim() != "" ? $("#ddlIncorporationCountries option:selected").text().trim() : $("#ddlHeadquartersCountries option:selected").text().trim();
        i !== "" && Object.assign(n, {
            selected_country: i
        })
    }
    r != undefined && Object.assign(n, {
        event: r
    });
    dataLayer.push(n)
}

function ResizeiFrame() {
    try {
        $.isFunction(parent.parentFunction) && parent.parentFunction($(".full-page").height())
    } catch (n) {}
}

function phoneFieldWidth() {
    var n = $(".phone-num:visible"),
        t = n.parent().width() - $(".phone-pre:visible").outerWidth(!0);
    n.css("width", t)
}

function introSectionsWidth() {
    var n = $(".signup-button").outerWidth();
    $("body").hasClass("rtl") ? $(".service-title").css("padding-left", n) : $(".service-title").css("padding-right", n);
    $(".service").css("width", "");
    equalWidth($(".service"));
    $(".service").width() == 0 && $(".service").css("width", "")
}

function closeBankAccountDialog() {
    var n = $("#bank-guide-dialog");
    n.length && n.payoneerDialog("close")
}

function getParameterByName(n) {
    n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var i = new RegExp("[\\?&]" + n + "=([^&#]*)"),
        t = i.exec(location.search);
    return t === null ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
}

function SwitchCancel() {
    CloseAHAPopUp();
    forceAHAFromPayouts && OpenAHADialog()
}

function connectCancelled() {
    CloseAHAPopUp();
    UnloadIframeMR()
}

function CloseAHAPopUp() {
    $("#dialog_have_account").payoneerDialog("close");
    $("#services").payoneerDialog("open")
}
var defaultIframeSwitchHeight = 346;

function UnloadIframeMR() {
    var n = $("#iframMRSwitch").prop("src");
    n && n != "about:blank" && ($("#iframMRSwitch").attr("data-src", n), $("#iframMRSwitch").prop("src", "about:blank"), $("#iframMRSwitch").height(defaultIframeSwitchHeight))
}

function LoadIframeMR() {
    var n = $("#iframMRSwitch").attr("data-src");
    n && $("#iframMRSwitch").attr("src", n)
}
$(document).ready(function () {
    $("#dialog_have_account").dialog({
        position: "center",
        dialogClass: "no-close",
        closeOnEscape: !1,
        cleanFieldsOnClose: !1
    });
    ddlBusinessOrganizationOnChange();
    $("#cbIsPubliclyTraded").change(showHideExchangeFields);
    $("#ddlBusinessOrganization").change(ddlBusinessOrganizationOnChange)
});

function getBrandDomain() {
    var n = location.hostname.toLowerCase().split(".");
    return n[n.length - 2]
}

function ChangeRegistrationProcessorType() {
    var n = $("#ddlResidencyCountries").val(),
        t = {
            registrationId: $("#RegistrationId").val(),
            country: n
        };
    $.payoneerAjax({
        url: "/Partners/Default/AccountRegistration.aspx/ChangeRegistrationProcessorType",
        data: JSON.stringify(t),
        isNotMoreThenOneAjax: !0,
        showDialogOnError: !1,
        success: function (t) {
            if (t != "") {
                var i = JSON.parse(t);
                i.isValid ? document.location.href = i.nextUrl : ($("#ddlResidencyCountries, #ddlHeadquartersCountries").val(""), typeof cardRedirectFlowCountries != "undefined" ? cardRedirectFlowCountries.includes(n) && $("#ddlResidencyCountries option[value='" + n + "'], #ddlHeadquartersCountries option[value='" + n + "']").remove() : n == "IN" ? $("#ddlResidencyCountries option[value='IN'], #ddlHeadquartersCountries option[value='IN']").remove() : n == "RU" && $("#ddlResidencyCountries option[value='RU'], #ddlHeadquartersCountries option[value='RU']").remove())
            }
        }
    })
}

function GetIdentityDocumentControlAfterIssuingCountryChangedUrl() {
    var n = $("#PayerPersonalDetails").length > 0 ? "/Payer/Registration.aspx" : "/Partners/Default/AccountRegistration.aspx";
    return document.location.origin + n + "/GetIdentityDocumentControlAfterIssuingCountryChanged"
}
var isNewIDComponent = !1;
$(document).ready(function () {
    CollectionIDInitialize()
});

function GetComponent(n, t) {
    return t !== undefined && t.length > 0 ? $(`#${t}`).find(n) : $(n)
}

function CollectionIDInitialize(n, t, i, r) {
    if (isNewIDComponent = GetComponent("[data-name='LocalLangCompanyName']", i).length > 0, isNewIDComponent) {
        var f = [],
            e = GetComponent("[data-name='NameInLocalLanguageIdDocumentsConfigurations']", i).text(),
            u = {};
        e != "" && (u = JSON.parse(e));
        $.each(u, function (n, t) {
            f.push(t)
        })
    } else {
        var o = [],
            u = GetComponent("[data-name='LocalLangNameCountriesList']", i).text(),
            l = u.split(";");
        $.each(l, function (n, t) {
            o.push(t.split(",")[0])
        })
    }
    var a = GetComponent("[data-name='OptionalIdentityDocumentsData']", i).text();

    function v() {
        GetComponent("[data-name='dtpDateOfIssue'], [data-name='dtpDateOfExpiry'], [data-name='ddlStateOfIncorporation'], [data-name='dtpDateOfIncorporation']", i).payoneerTooltip("close")
    }

    function y(n) {
        var f = GetComponent("[data-name='IdDocumentsConfigurations']", i).data("extra-fields-order") || {},
            r = f[n] || {},
            u = GetComponent(".id-type-extra-fields", i),
            t = u.find("[data-extra-field-id]").sort(function (n, t) {
                var i = r[$(n).data("extra-field-id")],
                    u = r[$(t).data("extra-field-id")];
                return i === undefined || i === null ? 1 : u === undefined || u === null ? -1 : i > u ? 1 : i < u ? -1 : 0
            });
        t.val("").payoneerValidate("hide");
        t = t.closest(".form-object");
        u.append(t);
        t.each(function () {
            var n = $(this),
                t = !r[n.find("[data-extra-field-id]").data("extra-field-id")];
            n.toggle(!t)
        })
    }

    function s() {
        if (isNewIDComponent) {
            var n = f.find(function (n) {
                if (n.CountryISO2 == GetComponent("[data-name='ddlIssueCountry']", i).val() && n.IDType == GetComponent("[data-name='ddlIdentityDocTypes']", i).val()) return n
            });
            if (typeof n == "undefined") return
        }
        var t = !1,
            r = !1;
        isNewIDComponent ? (t = n.CollectName, r = n.CollectCompanyName) : $.inArray(GetComponent("[data-name='ddlIssueCountry']", i).val(), o) > -1 && (t = !0);
        r ? GetComponent(".LocalLangCompanyInfo", i).show() : t ? GetComponent(".LocalLangInfo", i).show() : GetComponent(".LocalLangInfo, .LocalLangCompanyInfo", i).hide()
    }

    function h() {
        $.isFunction(window.setSlideHeight) && window.setSlideHeight(!0);
        $.isFunction(window.ResizeiFrame) && window.ResizeiFrame()
    }
    if (GetComponent("[data-name='ddlIdentityDocTypes']", i).change(function () {
            var t = GetComponent("[data-name='ddlIdentityDocTypes'] option:selected", i).val(),
                r = JSON.parse(a);
            GetComponent(".id-number-txt-field", i).hide();
            $.each(r, function (n, i) {
                i.IdentityDocumentTypeId == t && $("#txt" + i.ResourceKey).parent().parent().show()
            });
            var n = $.grep(r, function (n) {
                return n.IdentityDocumentTypeId == t
            })[0];
            GetComponent(".id-collection-field", i).hide();
            GetComponent("[data-name='dtpDateOfIssue']", i).val("");
            GetComponent("[data-name='dtpDateOfExpiry']", i).val("");
            GetComponent("[data-name='dtpDateOfIncorporation']", i).val("");
            n.ShowNameOnIdentityByManualMode && GetComponent("[data-name='tbNameOnIdentity']", i).parent().parent().show();
            n.CollectDateOfIssue && GetComponent("[data-name='dtpDateOfIssue']", i).parent().parent().show();
            n.CollectDateOfExpiry && GetComponent("[data-name='dtpDateOfExpiry']", i).parent().parent().show();
            n.CollectStateOfIncorporation && GetComponent("[data-name='ddlStateOfIncorporation']", i).parent().parent().show();
            n.CollectDateOfIncorporation && GetComponent("[data-name='dtpDateOfIncorporation']", i).parent().parent().show();
            y(t);
            n.CollectIssueCountry && s();
            v();
            h()
        }), s(), !t) {
        var c = GetComponent("[data-name='ddlIssueCountry']", i).val();
        GetComponent("[data-name='ddlIssueCountry']", i).on("change", function () {
            var n = this.value;
            n !== c && (GetComponent("[data-name='ddlIssueCountry']", i).prop("disabled", !0), GetComponent("[data-name='id-collection'] .dynamically-loaded", i).hide(), $.payoneerAjax({
                url: window.GetIdentityDocumentControlAfterIssuingCountryChangedUrl(),
                data: JSON.stringify({
                    selectedIssueCountry: n,
                    identityDocumentId: i,
                    identityDocumentAccountTypeId: r
                }),
                progressObj: GetComponent("[data-name='loadingIdentityDocTypes']", i),
                progressObjFadeIn: 0,
                progressObjFadeOut: 250,
                success: function (t) {
                    c = n;
                    GetComponent("[data-name='id-collection'] .dynamically-loaded", i).html($(t).find(".dynamically-loaded").html());
                    CollectionIDInitialize(!0, !0, i);
                    GetComponent("[data-name='id-collection'] .dynamically-loaded", i).show();
                    GetComponent("[data-name='ddlIssueCountry']", i).prop("disabled", !1);
                    GetComponent("[data-name='ddlIdentityDocTypes']", i).focus();
                    h();
                    GetComponent("#collectidentitydocumentWrapper").payoneerValidate("attach")
                }
            }))
        })
    }
    if (GetComponent('[payoneer="SlidingInfo"]', i).slidingInfo(), GetComponent("[data-name='id-collection'] .load-data", i).each(function () {
            var n = $(this).prev(),
                t = n.position().top,
                r = n.position().left + n.outerWidth(!0),
                i = n.outerHeight(),
                u = n.outerWidth(!0) - $(this).position().left;
            $("body").hasClass("rtl") ? $(this).css({
                right: u,
                top: t,
                height: i
            }) : $(this).css({
                left: r,
                top: t,
                height: i
            })
        }), n) {
        var p = GetComponent("[data-name='id-collection']", i);
        w(p)
    }

    function w(n) {
        n.find(".field-data").payoneerThemeFields();
        n.find("select.selectCustom:not(select[data-searchable-dropdown])").payoneerDropDownList();
        n.find("[payoneer='DateTimePicker']").payoneerDateTimePicker();
        n.find("[payoneer='ToolTip']").payoneerTooltip();
        n.find(".watermark").payoneerWatermark()
    }
}

function GetCollectionIDData(n, t) {
    function i(t) {
        var i = "",
            r = GetComponent(`[data-name='${t}']`, n);
        return r.length > 0 && r.is(":visible") && (i = r.val(), $("#alt_" + t).length > 0 && (i = $("#alt_" + t).val())), i
    }
    var o = GetComponent("[data-name='ddlIdentityDocTypes']", n).val(),
        u, r, s = GetComponent('[data-name="ddlIdentityDocTypes"] option:selected', n).val(),
        f = GetComponent("[data-name='OptionalIdentityDocumentsData']", n).text();
    if (!f) return {};
    var h = JSON.parse(f);
    $.each(h, function (n, t) {
        t.IdentityDocumentTypeId == s && (r = "txt" + t.ResourceKey, u = i(r))
    });
    var c = i("dtpDateOfIssue"),
        l = i("dtpDateOfExpiry"),
        a = i("ddlIssueCountry"),
        v = i("ddlStateOfIncorporation"),
        y = i("dtpDateOfIncorporation"),
        p = i("LocalLangFirstName"),
        w = i("LocalLangLastName"),
        b = i("LocalLangCompanyName"),
        e = {
            IdentityDocumentTypeId: o,
            IdNumber: u,
            IdNumberInputId: r,
            DateOfIssue: c,
            DateOfExpiry: l,
            IssueCountry: a,
            StateOfIncorporation: v,
            DateOfIncorporation: y,
            FirstNameInLocalLanguage: p,
            LastNameInLocalLanguage: w,
            ExtraFieldsValues: GetIDExtraFieldsValues(n),
            IdentityDocAccountTypeID: t,
            IdentityDocumentSectionId: n
        };
    return GetComponent("[data-name='LocalLangCompanyName']", n) !== "undefined" && (e.CompanyNameInLocalLanguage = b), e
}

function GetIDExtraFieldsValues(n) {
    var t = {};
    return GetComponent(".id-type-extra-fields", n).find("[data-extra-field-id]").each(function () {
        var n = $(this);
        t[n.data("extra-field-id")] = n.val()
    }), t
}
(function (n) {
    function t() {
        var n = 1,
            t;
        return typeof ClientLocalization != "undefined" ? n = ClientLocalization.GetCurrentLanguage() : (t = jQuery('[payoneer="Localization"] option:selected').val()) && (n = t), n
    }
    var i = [null, "", "he", "ru", "zh-CN", "tr", "pt", "es", "hu", "fr", "fi", "el", "ms", "de", "ja", "ko", "pl", "zh-TW", "da", "ar", "it", "vi", "uk", "sv", "th", "id"];
    n.fn.GetLocalizedDateFormat = function () {
        var r = i[t()];
        return retVal = n.datepicker.regional[r].dateFormat
    };
    var r = t();
    switch (r) {
        case 2:
            n.datepicker.regional.he = {
                closeText: "סגור",
                prevText: "&#x3C;הקודם",
                nextText: "הבא&#x3E;",
                currentText: "היום",
                monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
                monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יוני", "יולי", "אוג", "ספט", "אוק", "נוב", "דצמ"],
                dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
                dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
                dayNamesMin: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת"],
                weekHeader: "Wk",
                dateFormat: "dd/mm/yy",
                firstDay: 0,
                isRTL: !0,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 3:
            n.datepicker.regional.ru = {
                closeText: "Закрыть",
                prevText: "&#x3C;Пред",
                nextText: "След&#x3E;",
                currentText: "Сегодня",
                monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
                dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
                dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                weekHeader: "Нед",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 4:
            n.datepicker.regional["zh-CN"] = {
                closeText: "关闭",
                prevText: "&#x3C;上月",
                nextText: "下月&#x3E;",
                currentText: "今天",
                monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
                weekHeader: "周",
                dateFormat: "yy-mm-dd",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !0,
                yearSuffix: "年"
            };
            break;
        case 5:
            n.datepicker.regional.tr = {
                closeText: "kapat",
                prevText: "&#x3C;geri",
                nextText: "ileri&#x3e",
                currentText: "bugün",
                monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
                dayNamesShort: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
                dayNamesMin: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
                weekHeader: "Hf",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 6:
            n.datepicker.regional.pt = {
                closeText: "Fechar",
                prevText: "&#x3C;Anterior",
                nextText: "Seguinte",
                currentText: "Hoje",
                monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
                dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                dayNamesMin: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                weekHeader: "Sem",
                dateFormat: "dd/mm/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 7:
            n.datepicker.regional.es = {
                closeText: "Cerrar",
                prevText: "&#x3C;Ant",
                nextText: "Sig&#x3E;",
                currentText: "Hoy",
                monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Juv", "Vie", "Sáb"],
                dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
                weekHeader: "Sm",
                dateFormat: "dd/mm/yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 8:
            n.datepicker.regional.hu = {
                closeText: "bezár",
                prevText: "vissza",
                nextText: "előre",
                currentText: "ma",
                monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
                dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
                dayNamesShort: ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo"],
                dayNamesMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
                weekHeader: "Hét",
                dateFormat: "yy.mm.dd.",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !0,
                yearSuffix: ""
            };
            break;
        case 9:
            n.datepicker.regional.fr = {
                closeText: "Fermer",
                prevText: "Précédent",
                nextText: "Suivant",
                currentText: "Aujourd'hui",
                monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
                dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
                dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
                weekHeader: "Sem.",
                dateFormat: "dd/mm/yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 10:
            n.datepicker.regional.fi = {
                closeText: "Sulje",
                prevText: "&#xAB;Edellinen",
                nextText: "Seuraava&#xBB;",
                currentText: "Tänään",
                monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                monthNamesShort: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"],
                dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"],
                dayNamesMin: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                weekHeader: "Vk",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 11:
            n.datepicker.regional.el = {
                closeText: "Κλείσιμο",
                prevText: "Προηγούμενος",
                nextText: "Επόμενος",
                currentText: "Τρέχων Μήνας",
                monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
                dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
                dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
                weekHeader: "Εβδ",
                dateFormat: "dd/mm/yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 12:
            n.datepicker.regional.ms = {
                closeText: "Tutup",
                prevText: "&#x3C;Sebelum",
                nextText: "Selepas&#x3E;",
                currentText: "hari ini",
                monthNames: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
                monthNamesShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
                dayNames: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
                dayNamesShort: ["Aha", "Isn", "Sel", "Rab", "kha", "Jum", "Sab"],
                dayNamesMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"],
                weekHeader: "Mg",
                dateFormat: "dd/mm/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 13:
            n.datepicker.regional.de = {
                closeText: "Schließen",
                prevText: "&#x3C;Zurück",
                nextText: "Vor&#x3E;",
                currentText: "Heute",
                monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
                monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
                dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                weekHeader: "KW",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 14:
            n.datepicker.regional.ja = {
                closeText: "閉じる",
                prevText: "&#x3C;前",
                nextText: "次&#x3E;",
                currentText: "今日",
                monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
                dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
                dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
                weekHeader: "週",
                dateFormat: "yy/mm/dd",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !0,
                yearSuffix: "年"
            };
            break;
        case 15:
            n.datepicker.regional.ko = {
                closeText: "닫기",
                prevText: "이전달",
                nextText: "다음달",
                currentText: "오늘",
                monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
                dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
                weekHeader: "Wk",
                dateFormat: "yy-mm-dd",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !0,
                yearSuffix: "년"
            };
            break;
        case 16:
            n.datepicker.regional.pl = {
                closeText: "Zamknij",
                prevText: "&#x3C;Poprzedni",
                nextText: "Następny&#x3E;",
                currentText: "Dziś",
                monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
                monthNamesShort: ["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"],
                dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
                dayNamesShort: ["Nie", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
                dayNamesMin: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
                weekHeader: "Tydz",
                dateFormat: "dd.mm.yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 17:
            n.datepicker.regional["zh-TW"] = {
                closeText: "關閉",
                prevText: "&#x3C;上月",
                nextText: "下月&#x3E;",
                currentText: "今天",
                monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                monthNamesShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
                dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
                weekHeader: "周",
                dateFormat: "yy/mm/dd",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !0,
                yearSuffix: "年"
            };
            break;
        case 18:
            n.datepicker.regional.da = {
                closeText: "Luk",
                prevText: "&#x3C;Forrige",
                nextText: "Næste&#x3E;",
                currentText: "Idag",
                monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
                dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayNamesMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
                weekHeader: "Uge",
                dateFormat: "dd-mm-yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 19:
            n.datepicker.regional.ar = {
                closeText: "إغلاق",
                prevText: "&#x3C;السابق",
                nextText: "التالي&#x3E;",
                currentText: "اليوم",
                monthNames: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
                monthNamesShort: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                dayNamesShort: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                weekHeader: "أسبوع",
                dateFormat: "dd/mm/yy",
                firstDay: 6,
                isRTL: !0,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 20:
            n.datepicker.regional.it = {
                closeText: "Chiudi",
                prevText: "&#x3C;Prec",
                nextText: "Succ&#x3E;",
                currentText: "Oggi",
                monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
                dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
                dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
                weekHeader: "Sm",
                dateFormat: "dd/mm/yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 21:
            n.datepicker.regional.vi = {
                closeText: "Đóng",
                prevText: "&#x3C;Trước",
                nextText: "Tiếp&#x3E;",
                currentText: "Hôm nay",
                monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
                monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
                dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                weekHeader: "Tu",
                dateFormat: "dd/mm/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 22:
            n.datepicker.regional.uk = {
                closeText: "Закрити",
                prevText: "&#x3C;",
                nextText: "&#x3E;",
                currentText: "Сьогодні",
                monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
                monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
                dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
                dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
                dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                weekHeader: "Тиж",
                dateFormat: "dd/mm/yy",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 23:
            n.datepicker.regional.sv = {
                closeText: "Stäng",
                prevText: "&#xAB;Förra",
                nextText: "Nästa&#xBB;",
                currentText: "Idag",
                monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
                dayNamesShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
                dayNamesMin: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
                weekHeader: "Ve",
                dateFormat: "yy-mm-dd",
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 24:
            n.datepicker.regional.th = {
                closeText: "ปิด",
                prevText: "&#xAB;&#xA0;ย้อน",
                nextText: "ถัดไป&#xA0;&#xBB;",
                currentText: "วันนี้",
                monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
                monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
                dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                weekHeader: "Wk",
                dateFormat: "dd/mm/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            };
            break;
        case 25:
            n.datepicker.regional.id = {
                closeText: "Tutup",
                prevText: "&#x3C;mundur",
                nextText: "maju&#x3E;",
                currentText: "hari ini",
                monthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agus", "Sep", "Okt", "Nop", "Des"],
                dayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
                dayNamesShort: ["Min", "Sen", "Sel", "Rab", "kam", "Jum", "Sab"],
                dayNamesMin: ["Mg", "Sn", "Sl", "Rb", "Km", "jm", "Sb"],
                weekHeader: "Mg",
                dateFormat: "dd/mm/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }
    }
    n.datepicker.setDefaults(n.datepicker.regional[i[r]])
})(jQuery)
