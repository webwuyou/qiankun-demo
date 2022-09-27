<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/app-vue1">app-vue1</router-link>
      <router-link to="/app-vue2">app-vue2</router-link>
    </div>
    <router-view/>
    <div id="container"></div>
  </div>
</template>

<style>
#nav a{
  margin: 10px;
}

</style>
