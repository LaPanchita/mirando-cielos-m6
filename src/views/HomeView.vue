<script>
export default {
  data() {
    return {
      lugares: [
        { id: 1, nombre: "Arica", tempActual: 22, estadoActual: "Soleado" },
        { id: 2, nombre: "Iquique", tempActual: 24, estadoActual: "Costero" },
        { id: 3, nombre: "Santiago", tempActual: 30, estadoActual: "Soleado", featured: true },
        { id: 4, nombre: "Temuco", tempActual: 15, estadoActual: "Lluvioso" },
        { id: 5, nombre: "Punta Arenas", tempActual: 5, estadoActual: "Ventoso" }
      ],
      busqueda: ""
    };
  },
  computed: {
    filtrados() {
      return this.lugares.filter(l =>
        l.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    },
    destacado() {
      return this.lugares.find(l => l.featured);
    }
  }
};
</script>

<template>
  <div class="home">

    <!-- TÍTULO -->
    <h2 class="title">🌤️ Clima de Ciudades</h2>

    <!-- BUSCADOR -->
    <div class="search-box">
      <input
        v-model="busqueda"
        placeholder="Buscar ciudad..."
      />
    </div>

    <!-- DESTACADO -->
    <div v-if="destacado" class="featured-container">
      <div class="place-card featured">
        <h3>{{ destacado.nombre }} 💚</h3>
        <p class="temp">{{ destacado.tempActual }}°C</p>
        <p>{{ destacado.estadoActual }}</p>
      </div>
    </div>

    <!-- GRID -->
    <div class="grid">
      <div
        v-for="lugar in filtrados"
        :key="lugar.id"
        class="card-wrapper"
      >
        <div class="place-card">
          <h3>{{ lugar.nombre }}</h3>
          <p class="temp">{{ lugar.tempActual }}°C</p>
          <p>{{ lugar.estadoActual }}</p>

          <router-link :to="'/lugar/' + lugar.id">
            <button class="btn">Ver detalles</button>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

/* FONDO GENERAL */
.home {
  padding: 20px;
  max-width: 1100px;
  margin: auto;
}

/* TÍTULO */
.title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
}

/* BUSCADOR */
.search-box {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.search-box input {
  padding: 10px;
  width: 250px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

/* DESTACADO */
.featured-container {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* CARD BASE */
.place-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.place-card:hover {
  transform: translateY(-5px);
}

/* DESTACADO BONITO */
.featured {
  background: linear-gradient(to bottom right, #e4fff1, #c8f3db);
  border: 2px solid #7ecfa2;
  transform: scale(1.05);
}

/* TEMP */
.temp {
  font-size: 2rem;
  font-weight: bold;
}

/* BOTÓN */
.btn {
  margin-top: 10px;
  padding: 8px 15px;
  border-radius: 10px;
  border: none;
  background-color: #7ecfa2;
  color: white;
  cursor: pointer;
}

.btn:hover {
  background-color: #5fbf8a;
}

</style>