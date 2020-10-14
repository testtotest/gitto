<template>
	<view class="goods_l">
			<!--:src="item.cover"  -->
		<view class="goods_i" v-for="(item,index) in goods">
			<image src="https://img.36krcdn.com/20200404/v2_d6613223fb15414897a0ba3449d00afd_img_png"></image>
			<view class="pric">
				<text>{{item.id}}</text>
				<text>002</text>
			</view>	
			<view class="tt">
				测试标题
			</view>
		</view>			
	</view>
</template>

<script>
	export default{
		props:['goods']
	}
</script>

<style >	
     @import '../../pages/login/login.css';
</style>
