<script>
export default {
  data() {
    return {
      lugar: null,

      lugares: [
  {
    id: 1,
    nombre: "Arica",
    tempActual: 22,
    estadoActual: "Soleado",
    pronostico: [
      { dia: "Lunes", min: 18, max: 24, estado: "Soleado" },
      { dia: "Martes", min: 17, max: 23, estado: "Soleado" },
      { dia: "Miércoles", min: 18, max: 25, estado: "Parcial" }
    ]
  },
  {
    id: 2,
    nombre: "Iquique",
    tempActual: 24,
    estadoActual: "Costero",
    pronostico: [
      { dia: "Lunes", min: 20, max: 25, estado: "Nublado" },
      { dia: "Martes", min: 19, max: 24, estado: "Costero" },
      { dia: "Miércoles", min: 21, max: 26, estado: "Soleado" }
    ]
  },
  {
    id: 3,
    nombre: "Santiago",
    tempActual: 30,
    estadoActual: "Soleado",
    pronostico: [
      { dia: "Lunes", min: 20, max: 30, estado: "Soleado" },
      { dia: "Martes", min: 19, max: 31, estado: "Soleado" },
      { dia: "Miércoles", min: 18, max: 29, estado: "Parcial" }
    ]
  },
  {
    id: 4,
    nombre: "Temuco",
    tempActual: 15,
    estadoActual: "Lluvioso",
    pronostico: [
      { dia: "Lunes", min: 10, max: 16, estado: "Lluvia" },
      { dia: "Martes", min: 9, max: 14, estado: "Lluvia" },
      { dia: "Miércoles", min: 11, max: 15, estado: "Nublado" }
    ]
  },
  {
    id: 5,
    nombre: "Punta Arenas",
    tempActual: 5,
    estadoActual: "Ventoso",
    pronostico: [
      { dia: "Lunes", min: 2, max: 6, estado: "Viento" },
      { dia: "Martes", min: 1, max: 5, estado: "Frío" },
      { dia: "Miércoles", min: 0, max: 4, estado: "Nieve" }
    ]
  }
]
    };
  },

  created() {
    const id = parseInt(this.$route.params.id);
    this.lugar = this.lugares.find(l => l.id === id);
  },

  computed: {
    stats() {
      if (!this.lugar) return null;

      const mins = this.lugar.pronostico.map(d => d.min);
      const maxs = this.lugar.pronostico.map(d => d.max);

      const min = Math.min(...mins);
      const max = Math.max(...maxs);
      const promedio = Math.round(
        [...mins, ...maxs].reduce((a, b) => a + b, 0) /
        (mins.length + maxs.length)
      );

      return { min, max, promedio };
    }
  }
};
</script>

<template>
  <div class="detail">

    <!-- BOTÓN VOLVER -->
    <router-link to="/" class="back-btn">
      ← Volver
    </router-link>

    <!-- SI EXISTE -->
    <div v-if="lugar" class="detail-card">

      <h2>{{ lugar.nombre }}</h2>
      <p class="temp">{{ lugar.tempActual }}°C</p>
      <p>{{ lugar.estadoActual }}</p>

      <!-- PRONÓSTICO -->
      <h3 class="mt-4">Pronóstico semanal</h3>

      <div class="forecast">
        <div
          v-for="dia in lugar.pronostico"
          :key="dia.dia"
          class="forecast-item"
        >
          <strong>{{ dia.dia }}</strong>
          <p>{{ dia.min }}° / {{ dia.max }}°</p>
          <small>{{ dia.estado }}</small>
        </div>
      </div>

      <!-- ESTADÍSTICAS -->
      <h3 class="mt-4">Estadísticas</h3>

      <div class="stats">
        <p>🔻 Mínima: {{ stats.min }}°C</p>
        <p>🔺 Máxima: {{ stats.max }}°C</p>
        <p>📊 Promedio: {{ stats.promedio }}°C</p>
      </div>

    </div>

    <!-- SI NO EXISTE -->
    <div v-else>
      <p>Ciudad no encontrada</p>
    </div>

  </div>
</template>

<style scoped>

.detail {
  max-width: 700px;
  margin: auto;
}

/* BOTÓN VOLVER */
.back-btn {
  display: inline-block;
  margin-bottom: 20px;
  text-decoration: none;
  color: #333;
}

/* CARD */
.detail-card {
  background: white;
  padding: 25px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.temp {
  font-size: 2.5rem;
  font-weight: bold;
}

/* PRONÓSTICO */
.forecast {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.forecast-item {
  flex: 1;
  background: #f3f3f3;
  border-radius: 10px;
  padding: 10px;
}

/* STATS */
.stats {
  margin-top: 10px;
}

</style>