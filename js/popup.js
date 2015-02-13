xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","http://animetime.qiniudn.com/emotion.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;
//xmlDoc=loadXMLString(text);
//alert(xmlhttp.readyState);
alert(xmlDoc.responseXML); 
//alert(xmlDoc.responseXML);    //一直报错
var x=xmlDoc.getElementsByTagName("category")[0];
alert(x.tagName);               //通过x的name检查XML是否加载成功
var txt = x.getElementsByTagName("entry")[0].childNodes[0].textContent;
y=x.getElementsByTagName("entry")[0].childNodes[1];
alert(x.getElementsByTagName("entry").length);   //category的子节点：entry节点数量22
alert(y.textContent);                       //Chrome已经不支持nodeValue，使用textContent替代以显示文本
/* function display()
{
txta= txt+"baiqoain";
document.getElementById("suggest").innerText=txta;
} */