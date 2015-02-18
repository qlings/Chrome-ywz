var url=chrome.extension.getURL("xml/emotion.xml");
xmlhttp=new XMLHttpRequest();
//xmlhttp.onreadystatechange = handleStateChange;
xmlhttp.open("GET",url,fl);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var x=xmlDoc.getElementsByTagName("category")[0];
var txt = x.getElementsByTagName("entry")[1].childNodes[3];
alert(txt.textContent);
function display()
{
document.getElementById("tagbox").innerText=txt.textContent;   
}