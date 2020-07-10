function openData(evt, ano) {
  
		var i, x, tablinks;
		x = document.getElementsByClassName("data");
		
		for (i = 0; i < x.length; i++) 
		{
			x[i].style.display = "none";
		}
		
		tablinks = document.getElementsByClassName("tablink");
  
		for (i = 0; i < x.length; i++) 
		{
			tablinks[i].className = tablinks[i].className.replace(" w3-teal", "");
		}
  
		document.getElementById(ano).style.display = "block";
		evt.currentTarget.className += " w3-teal";
}
