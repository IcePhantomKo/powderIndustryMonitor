<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
  </div>
</template>

<style>
  /* @import './style/common.css'; */

#app,html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  background-color: #0e2c47;
  /* color: #42b983; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
