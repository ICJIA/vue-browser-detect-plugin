const VueBrowserDetect = {
  install: Vue => {
    let ua = window.navigator.userAgent;
    let browserObj = {};

    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
    browserObj.isOpera =
      !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0;
    // Firefox 1.0+
    browserObj.isEdge = /Edge/.test(navigator.userAgent);
    browserObj.isFirefox = /Firefox/.test(navigator.userAgent);
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

    browserObj.isChrome = /Google Inc/.test(navigator.vendor);
    browserObj.isChromeIOS = /CriOS/.test(navigator.userAgent);
    browserObj.isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

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
