<template>
	<view class="content">
		 <h2>{{this.$store.state.count}}</h2>
		 <h3>{{this.$store.getters.getStateCount}}</h3>
		 <view>test{{count1}}</view>
		 <view>
			 <button @click="afun">a</button>
			 <button @click="rfun">r</button>
		 </view>
	     <view v-for="(item,index) in news" @tap="info" :data-newsid="item.id">
			 {{item.id}}
		 </view>
		
	</view>
	
</template>

<script>
	import {mapState,mapGetters,mapActions} from 'vuex'
	export default {
		data() {
			return {				
				news: []
			}
		},
		computed:{
			...mapState({
				count1:state=>state.count
			})
		},
		onLoad() {	
			//this.islogin("../test/test")
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news',
				method: 'GET',
				data: {},
				success: res => {
					//console.log(res.data)
					this.news=res.data;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
		
            info(e){
			
				var newsid = e.currentTarget.dataset.newsid ;  				  
				                uni.navigateTo({
				                    url: '../info/info?newsid='+newsid,
				                    success: res => {},
				                    fail: () => {},
				                    complete: () => {}
				                });
				
			},
			afun(){
				//this.$store.commit("a")
				var n=3;
				this.$store.dispatch("afun",n)
			},
			rfun(){
				this.$store.dispatch("rfun")
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
