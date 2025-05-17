<template>
  <section id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/Home/sitepixel-background.png" class="d-block w-100" alt="..."
          style="object-fit: cover; object-position: right;">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/Home/sitepixel-background2.png" class="d-block w-100" alt="..."
          style="object-fit: cover; object-position: right;">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/Home/sitepixel-background3.png" class="d-block w-100" alt="..."
          style="object-fit: cover; object-position: right;">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </section>

  <section class="py-4">
    <h2 class="text-center py-2 my-5" style="font-size: 40px;">Our Projects</h2>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="../assets/img/Home/sitepixel-project1.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Airflo</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="../assets/img/Home/sitepixel-project2.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">BMA</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="../assets/img/Home/sitepixel-project3.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Attic's Express</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style="width: 18rem">
            <img src="../assets/img/Home/sitepixel-project4.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Kitchen</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container my-5">
    <div class="row">
      <div class="section3_container col-12 d-flex flex-column justify-content-center px-5 rounded-4"
        style="background-image: url('../assets/img/Home/sitepixel-background4.png'); background-size: cover;">
        <h2>Responsive Design</h2>
        <p style="max-width:375px">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cum ducimus?
          Obcaecati ipsum officia quia esse assumenda fuga neque nostrum, incidunt sed, saepe optio quidem iste, eos
          vitae adipisci beatae.</p>
      </div>
    </div>
  </section>

  <FormSteps />


</template>

<script>
import FormSteps from "../components/Home/FormSteps.vue";
export default {
  name: 'HomePage',
    components: {
    FormSteps
  }
}
</script>
