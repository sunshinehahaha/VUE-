<template>
  <div id="app">
      <div class="box">
        <router-view/>
      </div> 
    <footer-comp></footer-comp>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
/*body{
  font-size:12px;
}*/
ul{
  list-style: none;
}
@font-face {
  font-family: 'iconfont';
  src: url('./../static/font/iconfont.eot');
  src: url('./../static/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('./../static/font/iconfont.woff') format('woff'),
  url('./../static/font/iconfont.ttf') format('truetype'),
  url('./../static/font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

body,html{
  height:100%;
  font-size:12px;
  /*width:100%;*/
}

#app {
  height:100%;
    width:100%;
    display: flex;
    flex-direction: column;
}

.box{
  flex:1;
  overflow: auto;
}
a{
  text-decoration: none;
  color:#333;
}
</style>
