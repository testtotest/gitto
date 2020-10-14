const b_u='https://unidemo.dcloud.net.cn'
export const mR=(opt)=>{
	return new Promise((resolve, reject) =>{
		uni.request({
			url:b_u+opt.url,
			method: opt.method || 'GET',
			data: opt.data || {},
			dataType:opt.dataType || "json",
			success: res => {
				resolve(res)
			},
			fail: () => {
				reject(err)
			},
		})
	})
}

// mR({
// 	url="/api/news",
// 	method: 'GET',
// 	data: {},
// })
