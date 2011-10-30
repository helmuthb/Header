var latestAddress = "";
var transparency = "0.5";
var color = "128,128,128";
var align = "left";

var showAddress = function() {
  if (latestAddress != document.title) {
    latestAddress = document.title;
    var newHtml = document.getElementById("address-info-chrome");
    if (newHtml == undefined) {
      newHtml = document.createElement("div");
      newHtml.id = "address-info-chrome";
      newHtml.onmouseover = function() {
        newHtml.style.display = "none";
        // newHtml.style.zIndex = -1000;
        window.setTimeout(function() {
          // newHtml.style.zIndex = 1000;
          newHtml.style.display = "block";
        }, 5000);
      };
      chrome.extension.sendRequest({names:["align","color","transp"]}, function(response) {
        align = response["align"];
        color = response["color"];
        transparency = response["transp"];
        if (!align) {
          align = "left";
        }
        if (!color) {
          color = "0,255,0";
        }
        if (!transparency) {
          transparency = "0";
        }
        newHtml.style.textAlign = align;
        newHtml.style.backgroundColor = "rgba(" + color + "," +transparency + ")";
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
    if (request.name == "color") {
      color = request.value;
    }
    if (request.name == "transp") {
      transparency = request.value;
    }
    if (request.name == "align") {
      align = request.value;
    }
    topHtml.style.backgroundColor = "rgba("+color+","+transparency+")";
    topHtml.style.textAlign = align;
    // topHtml.parentNode.removeChild(topHtml);
    lastAddress = "";
  }
});
