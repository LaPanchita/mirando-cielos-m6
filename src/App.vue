<template>
  <div class="weather-app">

    <!-- HEADER -->
    <header class="weather-app__header">
      <nav class="navbar">
        <div class="container weather-app__header-content">
          <span class="weather-app__title">🌥️ Mirando Cielos</span>
          <span class="weather-app__subtitle">
            Clima mágico para ciudades reales
          </span>
        </div>
      </nav>
    </header>

    <!-- CONTENIDO DINÁMICO -->
    <main class="weather-app__content container mt-4">
      <router-view />
    </main>

    <!-- FOOTER -->
    <footer class="weather-app__footer text-center mt-5">
      <p>🌱 Mirando Cielos — 2026</p>
      <p>Proyecto académico · Frontend Clima</p>
      <p>Hecho con cariño, café y nubes ☁️</p>
    </footer>

  </div>
</template>

<script setup>
</script>

<style>

/* 🌿 FONDO GLOBAL (AQUÍ VA LO IMPORTANTE) */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom, #dff5ec, #bde0d3);
  min-height: 100vh;
}

/* CONTENEDOR GENERAL */
.weather-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* HEADER MÁS BONITO */
.weather-app__header {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  padding: 10px 0;
}

/* TÍTULO */
.weather-app__title {
  font-weight: bold;
  font-size: 1.4rem;
}

/* SUBTÍTULO */
.weather-app__subtitle {
  font-size: 0.9rem;
  opacity: 0.7;
}

/* MAIN */
.weather-app__content {
  flex: 1;
}

/* FOOTER */
.weather-app__footer {
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(6px);
  padding: 20px;
  font-size: 0.9rem;
  opacity: 0.8;
}

</style>