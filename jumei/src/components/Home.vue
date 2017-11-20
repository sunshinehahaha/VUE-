<template>
  <div id="app">
		
    	<div>
    		<search-comp></search-comp>
   			<nav-comp></nav-comp>
   			<lun-comp></lun-comp>
		    <p @click="show=false"><router-link to="/new" >今日10点上新</router-link></p>
		    <p @click="show=false"><router-link to="/trailer">明日10点预告</router-link></p>
		    
	    </div>
     	<router-view/>
		
		<new-comp v-show="show"></new-comp>
		<!-- <list-comp v-show="show"></list-comp> -->
		<!-- <trailer-comp></trailer-comp> -->
   
  </div>
</template>
<script>
	export default{
		name:"home",
		data:function(){
			return {
				show:true
			}
		}
	}
</script>
<style scoped>
	p{
	    height:0.45rem;
	    line-height: 0.45rem;
	    text-align:center;
	    color:#fe409e;
	    width:50%;
	    float: left;
	}
	p a{
	   text-decoration: none;
	}
</style>