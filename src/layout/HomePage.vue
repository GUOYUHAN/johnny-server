<script setup>
// import '../styles/css/animate.css'
// import '../styles/css/icomoon.css'
// import '../styles/css/bootstrap.css'
// import '../styles/css/style.css'

import Navigation from './navigation.vue'
import Header from './Header.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div>
    <!-- <div class="gtco-loader"></div> -->
    <div id="page">
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Crimson+Text:400,400i|Roboto+Mono');

html,
body {
  width: 100%;
  height: 100%;
}
</style>
