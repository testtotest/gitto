import Vue from 'vue'
import App from './App'
import store from './store'
import {mR} from './ut/utapi.js'
Vue.config.productionTip = false
Vue .prototype.$mR=mR
// Vue.prototype.islogin=function(ut){
// 	var uid=uni.getStorageSync("uid");
// 	uni.redirectTo({
// 		url: ut
// 	});
// }
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
//发布运行live-server --port=33