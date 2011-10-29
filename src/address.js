var latestAddress = "";
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
      chrome.extension.sendRequest({names:["align","color"]}, function(response) {
        var optAlign = response["align"];
        var optBackground = response["color"];
        if (!optAlign) {
          optAlign = "left";
        }
        if (!optBackground) {
          optBackground = "green";
        }
        newHtml.style.textAlign = optAlign;
        newHtml.style.backgroundColor = optBackground;
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
