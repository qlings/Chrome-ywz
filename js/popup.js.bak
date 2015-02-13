try{
        var xmlhttp = new window.XMLHttpRequest();
          xmlhttp.open("GET","http://animetime.qiniudn.com/emotion.xml",false);
          xmlhttp.send(null);
          //alert(xmlhttp.readyState);    //返回读取状态
		if(xmlhttp.readyState == 4){
          //xmlDoc = xmlhttp.responseXML.documentElement;
		  alert("浏览器支持该解析方式!");
          alert(xmlhttp.responsetext);
		  domParser = new  DOMParser();
          xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
        }
            }catch(e){
            alert("浏览器不支持该解析方式!");
            }     		
//xmlDoc= document.implementation.createDocument("","",null);    //销毁，防止内存泄漏
//xmlDoc= xmlDoc.loadXML("http://animetime.qiniudn.com/emotion.xml");
//xmlDoc=loadXMLDoc("http://animetime.qiniudn.com/emotion.xml");
//xmlDoc=loadXMLDoc("/source/KT.xml");
var x= xmlDoc.documentElement.childNodes;
alert(x.text);         //chilaNodes对Chrome
  for (i=1;i<x.length;i++){
	var y= x[i];
      for (n=0;n<y.length;n++){
        var z= y[n].childNodes;
	      document.getElementById("facemoodbox").innerHTML= z.childNodes[0].text+","+z.chilaNodes[1].text;
	      alert(z.text);
	 }
  }	  