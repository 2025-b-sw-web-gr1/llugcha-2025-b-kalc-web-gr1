# 🐾 Proyecto: Guía Rápida del Cachorro Pinscher Miniatura

Este es un pequeño servidor web desarrollado con Node.js y Express, diseñado para presentar información esencial sobre el cuidado de los cachorros de la raza Pinscher Miniatura.

## 💡 Motivación de Contenido: ¿Por qué Pinscher Miniatura?

La elección de los **Pinscher Miniatura** se basa en varios factores:

1.  **Popularidad y Necesidad de Información:** Son perros muy populares como mascotas urbanas debido a su tamaño compacto. Sin embargo, su energía y temperamento requieren una guía específica, especialmente durante la etapa de cachorro.
2.  **Enfoque Educativo:** El proyecto se centra en la etapa de cachorro, que es crítica para el desarrollo conductual y físico del perro.
3.  **Claridad del Tema:** Elegir una raza específica permite enfocar el contenido de manera clara y concisa, ideal para una demostración de servidor simple.
1.  **Interés Personal:**  Tenia 4 pinchers ahora tengo 3 y son lo mejor que me han pasado en la vida.


## ⚙️ Pila Tecnológica

Este proyecto utiliza una pila de desarrollo backend ligera y eficiente, conocida comúnmente como "Stack Mínimo de JS" para renderizado del lado del servidor.

### 1. Node.js y Express.js

*   **Node.js:** El entorno de ejecución de JavaScript que permite correr el código del servidor fuera del navegador.
*   **Express.js:** El *framework* web minimalista para Node.js. Se eligió por su simplicidad y robustez para manejar rutas (`app.get('/')`) y configurar el motor de plantillas.

### 2. Pug (Anteriormente Jade)

*   **Motor de Plantillas:** Pug es el motor de plantillas seleccionado.
*   **Ventaja Principal:** Pug utiliza una sintaxis basada en **indentación (sangría)** en lugar de etiquetas de cierre (`<div></div>`). Esto hace que el código HTML sea mucho más limpio, legible y rápido de escribir, como se demostró en el archivo `index.pug`.

### 3. JavaScript (JS)

*   **Lenguaje Unificado:** El uso de JavaScript tanto en el servidor (Node.js/Express) como en el motor de plantillas (Pug, que compila a JS) permite mantener una coherencia en el lenguaje de programación a lo largo de todo el proyecto.

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha este servidor y ver la información sobre los cachorros:

1.  **Instalar Dependencias:** Asegúrate de tener Node.js instalado. Luego, instala las dependencias necesarias (Express y Pug):
    ```bash
    npm install express pug
    ```

2.  **Ejecutar el Servidor:** Corre el archivo principal:
    ```bash
    node server.js
    ```

3.  **Acceder:** Abre tu navegador y navega a: `http://localhost:3000`