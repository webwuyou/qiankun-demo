<template>
  <div>
    <h1>main</h1>
  <div id="main-map" style="width:400px;height:400px"></div>
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
        this.map=new AMap.Map('main-map');
    },
   
   
};
</script>
