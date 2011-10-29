window.onload = function() {getSettings();};
function saveSetting(name, value)
{
  chrome.extension.getBackgroundPage().saveSetting(name, value);
}

function getSettings()
{
	var align = localStorage.getItem("align");
	var color = localStorage.getItem("color");
	var transp = localStorage.getItem("transp");
	
	var alignSelect = document.getElementById("Align");
	var colorSelect = document.getElementById("Color");
	var transpSelect = document.getElementById("Transp");
	
	alignSelect.value = align;
	colorSelect.value = color;
	transpSelect.value = transp;
}

