try{
                var xmlhttp = new window.XMLHttpRequest();
        xmlhttp.open("GET","http://animetime.qiniudn.com/emotion.xml",false);
        xmlhttp.send(null);
        //alert(xmlhttp.readyState);
		//alert("弹窗测试")
        if(xmlhttp.readyState == 4){
        xmlDoc = xmlhttp.responseXML.documentElement;
        }
        
            }catch(e){
            alert("谷歌浏览器不支持该解析方式!");
            }                  //可以工作
//xmlDoc= document.implementation.createDocument("","",null);
//xmlDoc.async= "false";
//xmlDoc= xmlDoc.loadXML("http://animetime.qiniudn.com/emotion.xml");
//xmlDoc=loadXMLDoc("http://animetime.qiniudn.com/emotion.xml");
//xmlDoc=loadXMLDoc("/source/KT.xml");
var x= xmlDoc.documentElement.childNodes;
alert(xmlDoc);
alert(x.childNodes);         //chilaNodes对Chrome
  for (i=1;i<x.length;i++){
	var y= x[i];
      for (n=0;n<y.length;n++){
        var z= y[n].childNodes;
	      document.getElementById("facemoodbox").innerHTML= z.childNodes[0].text+","+z.chilaNodes[1].text;
	      alert(z.text);
	 }
  }	  