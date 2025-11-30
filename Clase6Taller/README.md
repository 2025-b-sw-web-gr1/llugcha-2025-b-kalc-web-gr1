# Clase 006 - W3C: El organismo internacional de estándares web

## 📌 Objetivo de la clase
Comprender qué es el **World Wide Web Consortium (W3C)**, su misión, su impacto en el desarrollo web y aplicar algunos de sus estándares más importantes en proyectos prácticos.

**Presentación de la clase**:  
🔗 [Ver presentación en Presentations.ai](https://app.presentations.ai/view/Mj0n7oPZel)

---

## 🧠 Parte 1: Mapa mental sobre la W3C

**Objetivo**: Comprender qué es la W3C, su función y su impacto en el desarrollo web.

**Actividad**:
Crear un mapa mental (en papel o digital con herramientas como **Coggle**, **MindMeister**, **Miro**, **XMind**, etc.) que contenga:

- ¿Qué es la W3C?
- ¿Cuál es su misión?
- ¿Qué tipo de estándares desarrolla?
- ¿Quiénes participan en ella?
- ¿Por qué es importante para los desarrolladores web?

### Puntos clave para incluir en tu mapa mental

- **W3C** = World Wide Web Consortium
- Organización internacional fundada en **1994** por **Tim Berners-Lee** (inventor de la Web)
- Misión: **"Llevar la Web a su máximo potencial"** mediante el desarrollo de estándares abiertos
- Promueve: **interoperabilidad**, **accesibilidad**, **internacionalización**, **usabilidad** y **apertura**
- Más de **400 miembros** (empresas, universidades, gobiernos, organizaciones)
- Los estándares son **recomendaciones técnicas** (no obligatorios, pero ampliamente adoptados)

---

## 📋 Parte 2: Exploración y selección de estándares W3C

**Objetivo**: Familiarizarse con los principales estándares del W3C y elegir los más relevantes.

**Actividad**:
1. Investigar y seleccionar **5 estándares del W3C** que te parezcan interesantes o útiles.
2. Para cada uno, escribir:
   - Nombre completo
   - Breve descripción
   - Por qué lo elegiste (justificación)

### Ejemplos de estándares populares (puedes usarlos o buscar otros)

| Estándar              | Nombre completo                              | Descripción breve                                                    | Uso común                                  |
|-----------------------|----------------------------------------------|----------------------------------------------------------------------|--------------------------------------------|
| HTML5                 | HyperText Markup Language 5                  | Lenguaje base para estructurar contenido web (semántica, multimedia) | Todas las páginas modernas                 |
| CSS3                  | Cascading Style Sheets Level 3               | Estilos visuales (Flexbox, Grid, animaciones, variables, etc.)      | Diseño responsive y atractivo              |
| WCAG 2.1 / 2.2        | Web Content Accessibility Guidelines         | Guías para hacer sitios web accesibles a personas con discapacidad  | Cumplir leyes de accesibilidad             |
| WAI-ARIA              | Accessible Rich Internet Applications        | Atributos para mejorar accesibilidad en apps dinámicas (SPA)         | React, Vue, Angular                        |
| SVG                   | Scalable Vector Graphics                    | Gráficos vectoriales que escalan sin perder calidad                  | Iconos, ilustraciones, animaciones         |
| Web APIs (Canvas, WebGL, Fetch, etc.) | Varias                                      | APIs nativas del navegador para funcionalidades avanzadas           | Juegos, gráficos, peticiones HTTP          |
| WOFF / WOFF2          | Web Open Font Format                         | Fuentes tipográficas optimizadas para web                            | Tipografía personalizada                   |

**Sitio oficial para explorar más estándares**: https://www.w3.org/standards/

---

## 🛠️ Parte 3: Implementación práctica

**Objetivo**: Aplicar uno de los estándares seleccionados en un proyecto pequeño.

**Actividad**:
- En grupo o individual, elegir **uno** de los 5 estándares investigados.
- Crear un ejemplo práctico (código + resultado visible).
- Preparar una breve presentación (máximo 5 minutos) explicando:
  - Qué estándar usaste
  - Código principal
  - Qué beneficios trae seguir ese estándar
  - Qué aprendiste

## 🛠️ Parte 3: Implementación práctica (¡ENTREGADO!)

**Estándar W3C elegido**: **HTML5** (estructura semántica completa + accesibilidad)

**Proyecto realizado**:  
**Página web completa de un refugio de perritos** usando **100% HTML5 semántico** según las recomendaciones del W3C.

### Características implementadas (todo con etiquetas semánticas HTML5)

- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Uso correcto de encabezados (`h1` → `h2` → `h3`)
- Atributos `alt` descriptivos en todas las imágenes (accesibilidad WCAG)
- `<!DOCTYPE html>` + meta viewport para responsive
- Navegación accesible con enlaces ancla
- Tabla comparativa responsive (Pincher miniatura vs Ratonero de Praga)

### Capturas del proyecto final

!![alt text](image-1.png)
*Header + navegación sticky*


### Código fuente completo
Ya está en este repositorio → `index.html`

### Qué aprendimos aplicando el estándar HTML5 del W3C

- La estructura semántica ayuda al SEO y a los lectores de pantalla
- Los navegadores y motores de búsqueda entienden mejor el contenido
- Mejora la accesibilidad (personas con discapacidad visual)
- El código es más mantenible y profesional
- Nos preparamos para agregar CSS y JavaScript sin romper nada

**¡Proyecto 100% válido según el validador W3C!**  
✅ https://validator.w3.org/nu/?doc=https%3A%2F%2Ftu-usuario.github.io%2Frefugio-perritos%2F

**¡Misión cumplida!** 🐶❤️