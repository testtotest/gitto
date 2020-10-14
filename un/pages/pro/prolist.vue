<template>
	<view class="pics">
       <scroll-view  class="left" scroll-y>
		   <view 
		   @click="leftClick(index)"
		    :class="act===index?'act':''"			
			v-for="(item,index) in goods" :key="item.id">
			   电子产品
		   </view>		 
	   </scroll-view>
	   <scroll-view class="right" scroll-y>
		   <view class="item" v-for="(item,index) in goods" :key="item.id">
			  <image @click="preImg(item.cover)" src="https://img.36krcdn.com/20200404/v2_d6613223fb15414897a0ba3449d00afd_img_png"></image>
			  <text>电子产品电子产品电子产品电子产品电子产品</text>
		   </view>	
		   <view v-if="goods.length===0">暂无数据</view>		  
	   </scroll-view>
	</view>
</template>

<script>
	import pro from '../../comp/glist/glist.vue'
	export default {
		data() {
			return {			
				goods:[],
				act:0
			}
		},	
		methods: {
			getGoodsList(){
				this.$mR({url:'/api/news?id='+this.pageIndex}).then(res=>(
				    this.goods=res.data,
					this.leftClick(0,this.goods[0].id)
				)).catch(err=>{				
				    console.log(err);
				});			
			},
			leftClick(i){
				this.act=i;
				console.log(i)
			},
			preImg(current){
				const urls=this.goods.map(item=>{
					return item.cover
				})
				uni.previewImage({
					current,
					urls
				})
				console.log(urls)
			}
		},
		onLoad() {
		    this.getGoodsList()	
		}
		
		
	}
</script>

<style>
	page{
		height: 100%;		
	}
	.pics{height: 100%;display: flex;}
	.left{width:200rpx;height:100%;border-right: 1px solid #eee;}
	.left view{height:60px;line-height: 60px;color: #333;text-align: center;font-size: 30rpx;border-top: 1px solid #eee;}
	 .act{background: #0A98D5;color: #FFFFFF;}
	 .right{
		 height: 100%;
		 width: 500rpx;
		 margin: auto;
	 }
	 image{border-radius: 3px;}
	 text{line-height: 60rpx;font-size: 30rpx;}
</style>
