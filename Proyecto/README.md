# Examen 01 - Documentación de API con Swagger/OpenAPI

**Autor**: Kevin Llugcha  
**Institución**: [Tu institución o "Proyecto Personal"]  
**Curso**: Aplicaciones Web  
**Fecha**: 30 de noviembre de 2025  

---

## 🎬 Temática: API de Actores y Películas

Este examen documenta una **API ficticia** para gestionar **actores** y **películas**, simulando un catálogo tipo IMDb. La API permite:

- Registrar y consultar actores
- Gestionar películas
- Relacionar actores con las películas en las que participan

Aunque no está conectada a una base de datos real, sigue las **mejores prácticas REST** y está construida sobre el estándar **OpenAPI 3.0**.

---

## 🎯 Objetivos

- Documentar endpoints REST usando OpenAPI 3.0
- Modelar recursos y relaciones (actores ↔ películas)
- Generar una interfaz interactiva con **Swagger UI**
- Permitir pruebas directas desde el navegador

---

## 📚 Recursos Documentados

### 1. **Actores (`/actors`)**
- `GET /actors` – Listar todos los actores  
- `GET /actors/{id}` – Obtener actor por ID  
- `POST /actors` – Crear nuevo actor  
- `PUT /actors/{id}` – Actualizar actor  
- `DELETE /actors/{id}` – Eliminar actor  
- `GET /actors/{id}/movies` – Obtener películas de un actor  

### 2. **Películas (`/movies`)**
- `GET /movies` – Listar todas las películas  
- `GET /movies/{id}` – Obtener película por ID  
- `POST /movies` – Crear nueva película  
- `PUT /movies/{id}` – Actualizar película  
- `DELETE /movies/{id}` – Eliminar película  
- `GET /movies/{id}/actors` – Obtener actores de una película  

---

## 🧩 Schemas (Modelos de Datos)

| Recurso      | Campos principales |
|--------------|--------------------|
| **Actor**    | `id`, `name`, `birthDate`, `nationality`, `biography` |
| **Movie**    | `id`, `title`, `releaseYear`, `director`, `genre`, `duration` |

> Los esquemas definen tipos, formatos y campos requeridos.

---

## 🚀 Cómo Usar la Documentación

1. **Abre [Swagger Editor](https://editor.swagger.io/)**
2. **Copia todo el contenido del archivo [`swagger.yaml`](swagger.yaml)**
3. **Pégalo en el panel izquierdo del editor**
4. **¡La interfaz interactiva aparecerá automáticamente en el panel derecho!**

✅ Puedes hacer clic en **"Try it out"** en cualquier endpoint para probarlo.

> ⚠️ **Nota**: Esta API es **simulada** (como JSONPlaceholder).  
> - Las operaciones `POST`, `PUT`, `DELETE` devuelven respuestas realistas  
> - **No persisten datos reales**  
> - Ideal para pruebas y aprendizaje

---

## 🛠️ Tecnologías Utilizadas

- **OpenAPI 3.0** – Estándar para documentar APIs REST  
- **Swagger Editor** – Edición y validación en tiempo real  
- **Swagger UI** – Interfaz visual interactiva  
- **YAML** – Formato legible para la especificación

---

## 📂 Repositorio

Este proyecto es parte de tus estudios/prácticas personales en desarrollo web.

> Repositorio sugerido: `llugcha-2025-b-kalc-web-gr1/Examen-01`

---

## 📄 Licencia

Material educativo creado por **Kevin Llugcha** para fines académicos y de aprendizaje.