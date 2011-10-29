window.onload = function() {getSettings();};
function saveSetting(name, value)
{
	localStorage.setItem(name, value[value.selectedIndex].value);
}

function getSettings()
{
	var align = localStorage.getItem("align");
	var color = localStorage.getItem("color");
	
	var alignSelect = document.getElementById("Align");
	var colorSelect = document.getElementById("Color");
	
	alignSelect.value = align;
	colorSelect.value = color;
}

