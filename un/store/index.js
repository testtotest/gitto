import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
	state:{
		count:1
	},
	getters:{
		getStateCount:function(state){
			return state.count+1;
		}
	},
	mutations:{
		a(state,n){
			state.count=state.count+n;
		},
		r(state){
			state.count=state.count-1;
		}
		
	},
	actions:{
		afun(context,n)
		{
			context.commit("a",n)
		},
		rfun(context){
			context.commit("r")
		}
		
	}
})
export default store