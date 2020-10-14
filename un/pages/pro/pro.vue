<template>
	<view class="hot_goods">
		<view class="tit">商品</view>
		<glist :goods="goods"></glist>
		<view class="bottom" v-if="flag">底线</view>
	</view>
</template>

<script>
	import pro from '../../comp/glist/glist.vue'
	export default {
		data() {
			return {
				pageIndex:1,
				flag:false,
				goods:[]
			}
		},
		components:{"glist":pro},		
		methods: {
			getGoodsList(call){
				this.$mR({url:'/api/news?id='+this.pageIndex}).then(res=>(
				    this.goods=res.data					
				)).catch(err=>{				
				    console.log(err);
				});
				call && call()
			}
		},
		onLoad() {
		    this.getGoodsList()	
		},
		onReachBottom() {
			console.log("无记录")			
			if(this.goods.length<=this.pageIndex*20) return this.flag=true
			this.pageIndex++
			this.getGoodsList()
		},
		onPullDownRefresh() {			
			this.pageIndex=1
			this.flag=false
			setTimeout(()=>{this.getGoodsList(()=>{uni.stopPullDownRefresh()});console.log("refresh")},1000)
		}
		
	}
</script>

<style>
      @import 'pro.css';
</style>
