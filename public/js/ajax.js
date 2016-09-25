function AJAX(){
		var ajaxs = ["Msxml2.XMLHTTP","Msxml2.XMLHTTP.4.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"];
		var ajax = false;
		for(var i=0 ; !ajax && i<ajaxs.length ; i++){
			try{ ajax = new ActiveXObject(ajaxs[i]); }
			catch(e) { ajax = false; }
		}
		if(!ajax && typeof XMLHttpRequest!='undefined') {
			ajax = new XMLHttpRequest();
		}
		return ajax;
	}

function CARGARDATOS(pagina,capa, parametros){
				var ajax = AJAX();
				
				if(!ajax){
					alert("Su navegador no soporta AJAX. Instale Internet Explorer 6 o Firefox");
					return false;
				}
						
				document.getElementById(capa).innerHTML = "<center><img src='img/loader4.gif'></center>";
				
				ajax.open("POST",pagina,true);
				ajax.onreadystatechange = function() {
						if (ajax.readyState == 4) {
							document.getElementById(capa).innerHTML=ajax.responseText;
						}
					}			
					
					
				ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				ajax.send(parametros);		
		
			}
function popupqui(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=700,height=600,left = 320,top = 200');");
}

function popupqui1(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300,left = 320,top = 200');");
}