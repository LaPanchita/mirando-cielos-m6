export const lugares = [
  {
    id: 1,
    nombre: "Arica",
    tempActual: 24,
    estadoActual: "Soleado",
    pronostico: [
      { dia: "Lunes", min: 18, max: 26, estado: "Soleado" },
      { dia: "Martes", min: 19, max: 27, estado: "Parcial nublado" },
      { dia: "Miércoles", min: 17, max: 25, estado: "Soleado" },
      { dia: "Jueves", min: 16, max: 24, estado: "Nublado" },
      { dia: "Viernes", min: 18, max: 28, estado: "Soleado" }
    ]
  },
  {
    id: 2,
    nombre: "Valparaíso",
    tempActual: 18,
    estadoActual: "Nublado",
    pronostico: [
      { dia: "Lunes", min: 12, max: 18, estado: "Nublado" },
      { dia: "Martes", min: 13, max: 19, estado: "Lluvia" },
      { dia: "Miércoles", min: 11, max: 17, estado: "Nublado" },
      { dia: "Jueves", min: 12, max: 18, estado: "Parcial nublado" },
      { dia: "Viernes", min: 14, max: 20, estado: "Soleado" }
    ]
  },
  {
    id: 3,
    nombre: "Santiago",
    tempActual: 22,
    estadoActual: "Soleado",
    pronostico: [
      { dia: "Lunes", min: 14, max: 24, estado: "Soleado" },
      { dia: "Martes", min: 13, max: 23, estado: "Soleado" },
      { dia: "Miércoles", min: 12, max: 22, estado: "Parcial nublado" },
      { dia: "Jueves", min: 11, max: 21, estado: "Nublado" },
      { dia: "Viernes", min: 15, max: 25, estado: "Soleado" }
    ]
  },
  {
    id: 4,
    nombre: "Temuco",
    tempActual: 14,
    estadoActual: "Lluvia",
    pronostico: [
      { dia: "Lunes", min: 8, max: 15, estado: "Lluvia" },
      { dia: "Martes", min: 7, max: 14, estado: "Lluvia" },
      { dia: "Miércoles", min: 6, max: 13, estado: "Nublado" },
      { dia: "Jueves", min: 9, max: 16, estado: "Parcial nublado" },
      { dia: "Viernes", min: 10, max: 17, estado: "Soleado" }
    ]
  },
  {
    id: 5,
    nombre: "Punta Arenas",
    tempActual: 9,
    estadoActual: "Viento fuerte",
    pronostico: [
      { dia: "Lunes", min: 3, max: 10, estado: "Viento fuerte" },
      { dia: "Martes", min: 2, max: 9, estado: "Nublado" },
      { dia: "Miércoles", min: 1, max: 8, estado: "Lluvia" },
      { dia: "Jueves", min: 4, max: 11, estado: "Viento fuerte" },
      { dia: "Viernes", min: 5, max: 12, estado: "Parcial nublado" }
    ]
  }
];