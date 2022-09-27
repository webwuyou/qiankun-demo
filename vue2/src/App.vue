<template>
  <div id="app">
    <h1>vue2</h1>
    <div id="vue2-map" style="width:200px;height:200px"></div>
  </div>
</template>

<script>
  export default {
      name: 'datav',
      data() {
          return {
             map:null
          };
      },
     
      mounted() {
          console.log(this.map)
          console.log(AMap)
          new AMap.Map('vue2-map');
          // 这里写成this.map=new AMap.Map('vue2-map')就会卡死
      },
     
     
  };
  </script>
  