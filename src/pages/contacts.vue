<template>

  <section class="banner d-flex justify-content-start align-items-center"
    :style="{ backgroundImage: 'url(' + require('@/assets/img/Contacus/sitepixel-background.png') + ')', backgroundSize: 'cover' }">
    <div class="container">
      <h1 class="text-left text-black" style="font-size: 90px;">Contact Us</h1>
    </div>
  </section>

  <section class="container my-5">
    <div class="row align-items-center">
      <div class="col-md-6">
        <img :src="require('@/assets/img/Contacus/sitepixel-img1.png')" class="img-fluid rounded" alt="Contact Us">
      </div>
      <div class="col-md-6">
        <h2>Contact Us</h2>
        <form @submit.prevent="sendMessage">
          <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Enter your name">
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email Address</label>
            <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Enter your email">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea v-model="form.message" class="form-control" id="message" rows="4"
              placeholder="Write your message"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'ContactsPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    sendMessage() {
      // Aquí puedes agregar la lógica para enviar el mensaje
      alert('Mensaje enviado');
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
}
</script>

<style scoped>
@import '../css/contactus.css';
</style>