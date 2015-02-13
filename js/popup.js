xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","http://animetime.qiniudn.com/emotion.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
//alert(xmlhttp.readyState);
//alert(xmlDoc.responseXML);    //一直报错
var x=xmlDoc.getElementsByTagName("category")[0];
alert(x.tagName);               //通过x的name检查XML是否加载成功
var txt = x.getElementsByTagName("entry")[0].childNodes[0].textContent;
alert(x.getElementsByTagName("entry")[0].length);
function display()
{
txta= txt+"baiqoain";
document.getElementById("suggest").innerText=txta;
}