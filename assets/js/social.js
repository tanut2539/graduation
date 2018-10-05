$(function () {
    
    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) {
      document.getElementById("fbMobile").href = "fb://profile/?id=100003955939547";
    } else if (navigator.userAgent.match(/Android/i)) {
      document.getElementById("fbMobile").href = "fb://profile/100003955939547";
    }

});
