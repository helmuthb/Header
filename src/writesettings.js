window.onload = function() {getSettings();};
function saveSetting(name, value)
{
	localStorage.setItem(name, value[value.selectedIndex].value);
}

function getSettings()
{
	var align = localStorage.getItem("align");
	var color = localStorage.getItem("color");
	
	document.Debug.results.value = align + "|" + color;
}

