window.onload = function() {getSettings();};
function saveSetting(name, valBox)
{
  chrome.extension.getBackgroundPage().saveSetting(name, valBox[valBox.selectedIndex].value);
}

function saveSettingOld(name, value)
{
	localStorage.setItem(name, value[value.selectedIndex].value);
}
function getSetting(name)
{
  return chrome.extension.getBackgroundPage().getSetting(name);
}

function getSettings()
{
	var align = getSetting("align");
	var color = getSetting("color");
	var transp = getSetting("transp");
	
	var alignSelect = document.getElementById("Align");
	var colorSelect = document.getElementById("Color");
	var transpSelect = document.getElementById("Transp");
	
	alignSelect.value = align;
	colorSelect.value = color;
	transpSelect.value = transp;
}

