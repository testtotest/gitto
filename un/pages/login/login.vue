<template>
	<view>
		<view class="ban">
			<swiper class="swiper" autoplay="autoplay" indicator-dots="indicatorDots">
				<swiper-item v-for="(item,index) in news">					
					<image :src="item.cover"></image>
				</swiper-item>				
			</swiper>
		</view>
		
		<view class="hot_goods">
			<view class="tit" @tap="pro">商品</view>
			<glist :goods="goods"></glist>	
		</view>
		<!-- <p v-show="showTishi">{{tishi}}</p>
		<view>
		<text class="demo">a:</text>
		 <input type="text" placeholder="请输入内容" v-model="uname"/>
		 <span>{{uname}}</span> 
		  <span>{{tishi}}</span> 
		  <span>{{tishis}}</span>
		 b:<input type="password" v-model="upwd"/>
		 
		 <button v-on:click="login">to</button>
		 
		 </view> -->
	</view>
	
</template>

<script>
	import app from '../../config/config'
	import glists from '../../comp/glist/glist.vue'
	export default {
		data() {
			return {
				uname:'',
				upwd:'',
				showTishi:false,
				tishi:"test",
				news: [],
				goods:[]
			}
		},
		onLoad(){
			this.getBan();
			
		},
		computed: {
		  tishis:function () {			 
		      return this.tishi.split('').reverse().join('')
		  }
		},
		components:{"glist":glists},
		watch:{
			// uname(val) {
			//         this.value = this.demo;
			//       }
		},
		methods: {
			// async getBan(){
			// 	// const res= await uni.request({
			// 	// 	url: 'https://unidemo.dcloud.net.cn/api/news'
			// 	// })
			// 	var that=this
			// 	const res=that.$mR({
			// 		url:"/api/news"
			// 	})
			// 	console.log(res)
				
			// },
			 getBan(){
				
				this.$mR({url:'/api/news'}).then(res=>(			
				this.goods=res.data
				)).catch(err=>{				
				console.log(err);
				});
				
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					method: 'GET',
					data: {},
					success: res => {						
						this.news=res.data;
						uni.showToast({
							title:"ok"
						})
					},
					fail: () => {},
					complete: () => {}
				});
			 },
			login(){
			 
				// app.baseRequest({
				// 	url:"www",
				// 	method: 'POST',
				// 	success: (res) => {
					
				//     },
				// });
				if(this.uname=="" || this.upwd=="")
				{
					this.showTishi=true;
					this.tishi="请填写内容"					
				}
				// if(this.uname=="jack")
				// {
				// 	setTimeout(function() {
				// 		console.log(this.upwd)
				// 	}.bind(this), 2000);
					
				// }
			},
			pro(){
				uni.navigateTo({
					url: '../pro/pro',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
		}
	}
</script>

<style >	
    @import './login.css';
</style>
