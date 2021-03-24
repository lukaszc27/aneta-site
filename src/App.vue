<template>
  <div id="my-content">
    <header class="container-fluid">
      <h1>Matematyka</h1>
      <h2>Jest królową nauk</h2>
    </header>
    <Navigation />

    <router-view class="flex-shrink-0"></router-view>

    <Footer/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss">
html,
body { height: 100%; }

#app,
#my-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

header {
  min-height: 20em;
  padding: 3em;

  background-image: url('./assets/header.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  color: white;
  text-shadow: 0px 3px 6px silver;
  text-align: center;

  h1 {
    font-size: 6em;
  }

  h2 {
    font-size: 3em;
  }
}

main { 
  margin-top: 2em;
  margin-bottom: 2em;
}

// dostosowanie do mniejszych ekranów dla telefonu
@media screen and (max-width: 768px) {
  header {
    h1 { font-size: 3.6em; }
    h2 { font-size: 2.6em; }
  }
}

</style>
