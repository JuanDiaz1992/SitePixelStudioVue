<template>
  <div>
    <NavBar />
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'
import FooterPage from './components/Footer.vue'

export default {
  components: {
    NavBar,
    FooterPage,
  }
}
</script>