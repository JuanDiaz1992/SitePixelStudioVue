<template>
  <section class="banner d-flex justify-content-center align-items-center"
    :style="{ backgroundImage: 'url(' + require('@/assets/img/AboutUs/sitepixel-background.png') + ')', backgroundSize: 'cover' }">
    <h1 class="text-center text-white" style="font-size: 90px;">About Us</h1>
  </section>

  <section class="section3 container my-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <h2>About Us</h2>
        <p>
          We are a passionate team dedicated to creating innovative web and mobile solutions.
          Our goal is to help businesses grow through technology, providing high-quality services
          in software development, design, and digital strategy.
        </p>
        <p>
          With years of experience, we deliver custom solutions tailored to your needs,
          ensuring efficiency, scalability, and great user experience.
        </p>
      </div>
      <div class="col-md-6">
        <img :src="require('@/assets/img/AboutUs/sitepixel-team.png')" class="img-fluid rounded" alt="Our Team"
          style="object-fit: cover;">
      </div>
    </div>
  </section>

  <section class="container my-5 text-center">
    <div class="row">
      <div class="col-12">
        <img :src="require('@/assets/img/AboutUs/sitepixel-background2.png')" class="img-fluid rounded" alt="Our Team">
      </div>
      <div class="col-12 mt-4 d-flex flex-column justify-content-center align-items-center">
        <h2>Our philosophy</h2>
        <p style="max-width: 600px;">
          We are a passionate team dedicated to creating innovative web and mobile solutions.
          Our mission is to empower businesses through technology, delivering high-quality
          software development, design, and digital strategy.
        </p>
        <p style="max-width: 600px;">
          With years of experience, we build custom solutions tailored to your needs, ensuring
          efficiency, scalability, and outstanding user experiences.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
@import '../css/about.css';
</style>