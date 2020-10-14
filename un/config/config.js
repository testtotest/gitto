const app = {
	baseRequest(obj) {
		try{
			const userToken = uni.getStorageSync('userToken');
			if (userToken) {
				 if (obj.header) {
				                    obj.header["token"] = userToken;
				                } else {
				                    obj.header = { "token": userToken };
				 }
			}
			else{
			    console.log("获取不到userToken")			                
			}	
			console.log(obj.url)
		}catch(e){
			//TODO handle the exception
		}
		
	}
}
export default app;