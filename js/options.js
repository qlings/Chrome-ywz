//设置页的js
function saveset(){
	var SourceUrl;
	var setsource = document.getElementsByName("source");
  for(i=0;i<setsource.length;i++){
	  if(setsource[i].checked){
		  SourceUrl = setsource[i].value;
		  alert(SourceUrl);
		  dress.href.innerText = SourceUrl;
		  save4.innerText = SourceUrl;
	    }
    }
}
