const VueBrowserDetect = {
  install: Vue => {
    let ua = window.navigator.userAgent;
    let browserObj = {};

    //   // IE 10
    // ua = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)";

    //   // IE 11
    // ua = "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko";

    //   // Edge 12 (Spartan)
    // ua =
    //   "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0";

    //   // Edge 13
    // ua =
    //   "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586";

    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    browserObj.isOpera =
      !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
    // Firefox 1.0+
    browserObj.isFirefox = typeof InstallTrigger !== "undefined";
    // Safari 3.0+
    /*eslint-disable */
    browserObj.isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function(p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(!window["safari"] || safari.pushNotification);
    /*eslint-ensable */
    // Internet Explorer 6-11
    browserObj.isIE = /*@cc_on!@*/ false || !!document.documentMode;
    // Edge 20+
    browserObj.isEdge = !browserObj.isIE && !!window.StyleMedia;
    // Chrome 1+
    browserObj.isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    browserObj.isBlink =
      (browserObj.isChrome || browserObj.isOpera) && !!window.CSS;

    browserObj.meta = browserSpecs();
    browserObj.meta.ua = ua;

    function browserSpecs() {
      /**
       * https://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser
       */
      var tem,
        M =
          ua.match(
            /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
          ) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: "IE", version: tem[1] || "" };
      }
      if (M[1] === "Chrome") {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
          return { name: tem[1].replace("OPR", "Opera"), version: tem[2] };
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
      return { name: M[0], version: M[1] };
    }

    Vue.prototype.$browserDetect = browserObj;
  }
};

export default VueBrowserDetect;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueBrowserDetect);
}
