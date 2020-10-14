<template>
	<view>
		{{newsinfo.title}}
		<rich-text class="richText" :nodes="newsinfo.content"></rich-text>
	</view>

</template>

<script>
	export default{
		data() {
			return {
				title:"title",
				strings:"strings",
				newsinfo: []
			}
		},
		onLoad:function(e){
			uni.request({
				url: 'https://unidemo.dcloud.net.cn//api/news',
				method: 'GET',
				data: {},
				success: res => {
					console.log(res.data[e.id])
					this.newsinfo=res.data[e.id];
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
</style>
