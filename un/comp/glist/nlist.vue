<template>
	<view class="news">
	<view class="news-item" @click="navigator(index)" v-for="(item,index) in lists" :key="item.id">
		<image :src="item.cover"></image>
		<view class="right">
			<view class="title">{{item.id}}</view>
			<view class="info">
				<text>{{item.created_at | formatDate}}</text>	
				<text>click</text>				
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default{
		props:['lists'],
		filters:{
			formatDate(date)
			{
				const ndate= new Date(date)
				return ndate.getFullYear().toString().padStart(2,0)
			}
		},
		methods:{
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="less">
	.news-item{
		display: flex;border-bottom: 1px solid #007AFF;padding: 12px 10px;
		image{max-width: 190rpx; height: 120rpx;}
		.right{margin-left: 15px;display: flex;flex-direction: column;justify-content: space-between;}
		.info{
			text:nth-child(2){margin-left: 20px;}
		}
	}
</style>