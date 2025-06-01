<template>
      <div
    :style="{
      backgroundImage: `url(${bannerUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '343px'
    }"
  >
    </div>
  <div class="container mt-5">
    

    <form class="row g-2 mb-4" @submit.prevent="buscarProductos">
      <div class="col-md-5">
        <input
          v-model="busquedaNombre"
          type="text"
          class="form-control"
          placeholder="Buscar por nombre"
        />
      </div>
      <div class="col-md-3">
        <input
          v-model="busquedaId"
          type="number"
          class="form-control"
          placeholder="Buscar por ID"
        />
      </div>
      <div class="col-md-2">
        <button class="btn btn-primary w-100" type="submit">Buscar</button>
      </div>
      <div class="col-md-2">
        <button
          class="btn btn-secondary w-100"
          type="button"
          @click="limpiarBusqueda"
        >
          Limpiar
        </button>
      </div>
    </form>


    <form class="row g-2 mb-4" @submit.prevent="registrarProducto">
      <div class="col-md-3">
        <input
          v-model="nuevoProducto.title"
          type="text"
          class="form-control"
          placeholder="Nombre"
          required
        />
      </div>
      <div class="col-md-2">
        <input
          v-model="nuevoProducto.price"
          type="number"
          class="form-control"
          placeholder="Precio"
          required
        />
      </div>
      <div class="col-md-3">
        <input
          v-model="nuevoProducto.description"
          type="text"
          class="form-control"
          placeholder="Descripción"
          required
        />
      </div>
      <div class="col-md-3">
        <input
          v-model="nuevoProducto.image"
          type="text"
          class="form-control"
          placeholder="URL de la imagen"
          required
        />
      </div>
      <div class="col-md-1">
        <button class="btn btn-success w-100" type="submit">Registrar</button>
      </div>
    </form>

    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="producto in productosPaginados"
        :key="producto.id"
      >
        <div class="card h-100">
          <img
            :src="producto.image"
            class="card-img-top"
            :alt="producto.title"
            style="height: 200px; object-fit: contain"
          />
          <div class="card-body">
            <h5 class="card-title">{{ producto.title }}</h5>
            <p class="card-text">{{ producto.description }}</p>
            <p class="card-text">
              <strong>Precio:</strong> ${{ producto.price }}
            </p>
            <p class="card-text">
              <small>ID: {{ producto.id }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>


    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: paginaActual === 1 }">
          <button
            class="page-link"
            @click="cambiarPagina(paginaActual - 1)"
            :disabled="paginaActual === 1"
          >
            Anterior
          </button>
        </li>
        <li
          class="page-item"
          v-for="n in totalPaginas"
          :key="n"
          :class="{ active: paginaActual === n }"
        >
          <button class="page-link" @click="cambiarPagina(n)">{{ n }}</button>
        </li>
        <li
          class="page-item"
          :class="{ disabled: paginaActual === totalPaginas }"
        >
          <button
            class="page-link"
            @click="cambiarPagina(paginaActual + 1)"
            :disabled="paginaActual === totalPaginas"
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import banner from '../assets/img/Productos/banner.png';
export default {
  name: "ProductosPage",
  data() {
    return {
    bannerUrl: banner,
      productos: [],
      productosFiltrados: [],
      paginaActual: 1,
      productosPorPagina: 6,
      busquedaNombre: "",
      busquedaId: "",
      nuevoProducto: {
        title: "",
        price: "",
        description: "",
        image: "https://via.placeholder.com/200",
      },
    };
  },
  computed: {
    totalPaginas() {
      return (
        Math.ceil(this.productosFiltrados.length / this.productosPorPagina) || 1
      );
    },
    productosPaginados() {
      const inicio = (this.paginaActual - 1) * this.productosPorPagina;
      return this.productosFiltrados.slice(
        inicio,
        inicio + this.productosPorPagina
      );
    },
  },
  methods: {
    async fetchProductos() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      this.productos = data;
      this.productosFiltrados = data;
    },
    cambiarPagina(nuevaPagina) {
      if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas) {
        this.paginaActual = nuevaPagina;
      }
    },
    buscarProductos() {
      let filtrados = this.productos;
      if (this.busquedaNombre) {
        filtrados = filtrados.filter((p) =>
          p.title.toLowerCase().includes(this.busquedaNombre.toLowerCase())
        );
      }
      if (this.busquedaId) {
        filtrados = filtrados.filter((p) => p.id === Number(this.busquedaId));
      }
      this.productosFiltrados = filtrados;
      this.paginaActual = 1;
    },
    limpiarBusqueda() {
      this.busquedaNombre = "";
      this.busquedaId = "";
      this.productosFiltrados = this.productos;
      this.paginaActual = 1;
    },
    async registrarProducto() {
      const res = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.nuevoProducto),
      });
      const producto = await res.json();
      // Simula el ID y agrega el producto localmente
      producto.id = this.productos.length + 1;
      this.productos.push(producto);
      this.productosFiltrados = this.productos;
      this.nuevoProducto = {
        title: "",
        price: "",
        description: "",
        image: "https://via.placeholder.com/200",
      };
      this.paginaActual = this.totalPaginas;
    },
  },
  mounted() {
    this.fetchProductos();
  },
};
</script>
