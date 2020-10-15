<template>	
		<nlist @itemClick="goInfo" :lists="goods"></nlist>	
</template>
<script>
	import news from '../../comp/glist/nlist.vue'
	export default {
		data() {
			return {
				goods:[]
			}
		},
		
		components:{"nlist":news},	
		methods: {
			getGoodsList(){
				this.$mR({url:'/api/news'}).then(res=>(
				this.goods=res.data,
				console.log(res.data)
				)).catch(err=>{				
				console.log(err);
				});
			},
			goInfo(id){				
				uni.navigateTo({
					url:'/pages/news/info?id='+id
				})
			}
		},
		onLoad() {
		    this.getGoodsList()	
		}
	}
</script>

