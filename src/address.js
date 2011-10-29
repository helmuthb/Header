var latestAddress = "";
var showAddress = function() {
  if (latestAddress != document.title) {
    latestAddress = document.title;
    var newHtml = document.getElementById("address-info-chrome");
    if (newHtml == undefined) {
      newHtml = document.createElement("div");
      newHtml.id = "address-info-chrome";
      newHtml.onmouseoverX = function() {
        newHtml.style.display = "none";
        // newHtml.style.zIndex = -1000;
        window.setTimeout(function() {
          // newHtml.style.zIndex = 1000;
          newHtml.style.display = "block";
        }, 5000);
      };
      chrome.extension.sendRequest({names:["align","color","transp"]}, function(response) {
        var optAlign = response["align"];
        var optBackground = response["color"];
        var optTransparency = response["transp"];
        if (!optAlign) {
          optAlign = "left";
        }
        if (!optBackground) {
          optBackground = "0,255,0";
        }
        if (!optTransparency) {
          optTransparency = "0";
        }
        newHtml.style.textAlign = optAlign;
        newHtml.style.backgroundColor = "rgba(" + optBackground + "," +optTransparency + ")";
      });
    }
    var newText = newHtml.firstChild;
    if (newText == undefined) {
      newText = document.createTextNode();
      newHtml.appendChild(newText);
    }
    newText.nodeValue = latestAddress;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(newHtml);
  };
};
showAddress();
window.setInterval(showAddress, 100);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  // re-load the top bar
  var topHtml = document.getElementById("address-info-chrome");
  if (topHtml) {
    topHtml.parentNode.removeChild(topHtml);
  }
});
