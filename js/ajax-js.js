window.onload = function() {
	var textArea = document.getElementById("test-area");
	var btn = document.getElementById("btn");
	//成功后调用的方法
	function success(text){
		textArea.value = text;
	}
	
	//失败后调用的方法
	function fail(code){
		textArea.value = "Error code : "+code;
	}
	
	//设置网络请求参数
	var request;
	if(window.XMLHttpRequest){
		//非IE浏览器
		request = new XMLHttpRequest();
	}else{
		//IE浏览器
		request = new ActiveXObject('Microsoft.XMLHTTP');
	}
	
	//网络请求
	request.onreadystatechange = function() {
		if(request.readyState === 4){//请求完成
			if(request.status === 200){//成功
				return success(request.responseText);
			}else{//失败
				return fail(request.status);
			}
		}else{
			//HTTP还在请求
		}
	}
	
	btn.onclick = function() {
		//发送请求
		request.open('GET','../cities.json');
		request.send();
		alert('请求已发送，请等待响应...');
	}
}
