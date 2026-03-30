🌥️ Mirando Cielos — Módulo 6 (SPA con Vue.js)

📌 Descripción

Aplicación web de clima desarrollada como una SPA (Single Page Application) utilizando Vue.js.
El proyecto mantiene la temática de "clima de fantasía para ciudades reales de Chile", presentando la información meteorológica de forma clara, visual y accesible.

En esta versión (Módulo 6), la aplicación evoluciona hacia una arquitectura basada en componentes, incorporando navegación interna mediante Vue Router y una interfaz interactiva.

---

🧩 Estructura de la aplicación

La aplicación está organizada en componentes Vue:

- App.vue
  
  - Componente raíz.
  - Contiene la estructura general (header, contenido dinámico y footer).

- HomeView.vue
  
  - Vista principal.
  - Muestra el listado de ciudades con su clima actual.
  - Incluye un buscador interactivo usando "v-model".
  - Destaca una ciudad principal.

- DetailView.vue
  
  - Vista de detalle.
  - Muestra información ampliada de una ciudad:
    - Temperatura actual
    - Pronóstico semanal
    - Estadísticas (mínima, máxima y promedio)

---

🔀 Rutas (Vue Router)

La navegación se realiza sin recargar la página:

- "/"
  
  - Vista Home (listado de ciudades)

- "/lugar/:id"
  
  - Vista de detalle dinámica según el ID de la ciudad

---

⚙️ Funcionalidades principales

- Renderizado dinámico de listas con "v-for"
- Uso de interpolaciones "{{ }}"
- Condicionales con "v-if"
- Buscador reactivo con "v-model"
- Manejo de eventos ("@click")
- Navegación SPA con Vue Router

---

📊 Datos y lógica

Los datos de clima utilizados en esta versión son datos mock (simulados).
El cálculo de estadísticas se realiza en base al pronóstico semanal de cada ciudad:

- Mínima: valor más bajo de temperaturas mínimas
- Máxima: valor más alto de temperaturas máximas
- Promedio: promedio entre mínimas y máximas de la semana

---

🚀 Cómo ejecutar el proyecto

1. Instalar dependencias:

npm install

2. Ejecutar servidor de desarrollo:

npm run dev

3. Abrir en navegador:

http://localhost:5173/

---

🌐 Repositorio GitHub

🔗 https://github.com/LaPanchita/mirando-cielos-m6