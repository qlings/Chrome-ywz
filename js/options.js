//这个文件到处是问题，需要全部修改
//var Storage = chrome.storage.local;
var SourceUrl;
function saveset(){
  var source = document.form1.source;
  for(i=0;i<source.length;i++){
	  if(source[i].checked){
		  SourceUrl = source[i].value;
		  dress.href.innerText = SourceUrl;
	    }
    }
}