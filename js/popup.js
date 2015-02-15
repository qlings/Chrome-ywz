var url="http://7vznvw.com1.z0.glb.clouddn.com/emotion.xml";
xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET",url,false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
var x=xmlDoc.getElementsByTagName("category")[0];
var txt = x.getElementsByTagName("entry")[1].childNodes[3];
alert(txt.textContent);
function display()
{
document.getElementById("tagbox").innerText=txt.textContent;   
}