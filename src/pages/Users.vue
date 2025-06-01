<template>
  <div class="container mt-5">
    <h2 class="mb-4">Usuarios</h2>
    <form @submit.prevent="addUser" class="mb-4">
      <div class="row g-2">
        <div class="col-md-4">
          <input
            v-model="newUser.name"
            type="text"
            class="form-control"
            placeholder="Nombre"
            required
          />
        </div>
        <div class="col-md-4">
          <input
            v-model="newUser.email"
            type="email"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div class="col-md-4">
          <button type="submit" class="btn btn-primary w-100">
            Agregar Usuario
          </button>
        </div>
      </div>
    </form>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "UserPage",
  data() {
    return {
      users: [],
      newUser: {
        name: "",
        email: "",
      },
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      this.users = await res.json();
    },
    async addUser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.newUser),
      });
      const user = await res.json();
      // Simula el ID ya que la API no lo guarda realmente
      user.id = this.users.length + 1;
      this.users.push(user);
      this.newUser.name = "";
      this.newUser.email = "";
    },
  },
};
</script>
