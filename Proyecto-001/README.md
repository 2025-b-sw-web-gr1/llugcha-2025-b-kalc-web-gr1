# 🍳 Proyecto 001 - API de Recetas e Ingredientes

## 📋 Descripción General

API RESTful que gestiona recetas de cocina y sus ingredientes, implementando una relación **1 a muchos** donde una receta puede tener múltiples ingredientes.

---

## 🎯 Objetivo del Proyecto

Diseñar, documentar y probar una API completa que permite:
- Gestionar recetas de cocina
- Administrar ingredientes asociados a cada receta
- Demostrar la relación 1:N entre entidades

**Herramientas utilizadas:**
- 📘 **OpenAPI/Swagger** - Especificación y documentación de la API
- 🧪 **Bruno** - Pruebas y validación de endpoints

---

## 🏗️ Arquitectura de Datos

### Relación 1 a Muchos (1:N)

```
    ┌──────────────────┐
    │     RECETA       │ 1
    ├──────────────────┤
    │ id               │──────┐
    │ title            │      │
    │ description      │      │
    │ difficulty       │      │ contiene
    │ preparationTime  │      │
    │ cookingTime      │      │
    │ servings         │      │
    │ category         │      │
    └──────────────────┘      │
                              │
                              │ N
                    ┌─────────▼────────┐
                    │   INGREDIENTE    │
                    ├──────────────────┤
                    │ id               │
                    │ name             │
                    │ quantity         │
                    │ unit             │
                    │ recipeId         │
                    └──────────────────┘
```

**Una receta** contiene **muchos ingredientes**  
**Cada ingrediente** pertenece a **una sola receta**

---

## 📂 Estructura del Proyecto

```
Proyecto-001-Compañero/
│
├── 📄 recipe-api.yaml               # Especificación OpenAPI completa
├── 📄 bruno.json                    # Configuración de Bruno
├── 📄 README.md                     # Documentación principal
│
├── 📁 Endpoints - Recetas:
│   ├── get-all-recipes.bru          # GET    /recipes
│   ├── get-recipe-by-id.bru         # GET    /recipes/{id}
│   ├── create-recipe.bru            # POST   /recipes
│   ├── update-recipe.bru            # PUT    /recipes/{id}
│   └── delete-recipe.bru            # DELETE /recipes/{id}
│
└── 📁 Endpoints - Ingredientes:
    ├── get-all-ingredients.bru      # GET    /ingredients
    ├── get-ingredient-by-id.bru     # GET    /ingredients/{id}
    ├── get-ingredients-by-recipe.bru# GET    /recipes/{id}/ingredients
    ├── create-ingredient.bru        # POST   /ingredients
    ├── update-ingredient.bru        # PUT    /ingredients/{id}
    └── delete-ingredient.bru        # DELETE /ingredients/{id}
```

---

## 🛣️ Endpoints de la API

### 🍽️ Recetas (`/recipes`)

| Método | Endpoint | Descripción | Ejemplo |
|--------|----------|-------------|---------|
| `GET` | `/recipes` | Listar todas las recetas | - |
| `GET` | `/recipes/{id}` | Obtener una receta específica | `/recipes/1` |
| `POST` | `/recipes` | Crear nueva receta | - |
| `PUT` | `/recipes/{id}` | Actualizar receta completa | `/recipes/1` |
| `DELETE` | `/recipes/{id}` | Eliminar receta | `/recipes/1` |

### 🥕 Ingredientes (`/ingredients`)

| Método | Endpoint | Descripción | Ejemplo |
|--------|----------|-------------|---------|
| `GET` | `/ingredients` | Listar todos los ingredientes | - |
| `GET` | `/ingredients/{id}` | Obtener un ingrediente específico | `/ingredients/5` |
| `GET` | `/recipes/{id}/ingredients` | **Obtener ingredientes de una receta** | `/recipes/1/ingredients` |
| `POST` | `/ingredients` | Crear nuevo ingrediente | - |
| `PUT` | `/ingredients/{id}` | Actualizar ingrediente | `/ingredients/5` |
| `DELETE` | `/ingredients/{id}` | Eliminar ingrediente | `/ingredients/5` |

> ⭐ **Endpoint clave:** `/recipes/{id}/ingredients` demuestra la relación 1:N

---

## 📊 Modelos de Datos

### Recipe (Receta)

```json
{
  "id": 1,
  "title": "Lasagna Italiana",
  "description": "Deliciosa lasagna tradicional con salsa boloñesa",
  "difficulty": "Media",
  "preparationTime": 30,
  "cookingTime": 45,
  "servings": 6,
  "category": "Pasta"
}
```

**Campos:**
- `id` (integer) - Identificador único
- `title` (string) - Nombre de la receta
- `description` (string) - Descripción breve
- `difficulty` (string) - Fácil | Media | Difícil
- `preparationTime` (integer) - Minutos de preparación
- `cookingTime` (integer) - Minutos de cocción
- `servings` (integer) - Número de porciones
- `category` (string) - Categoría culinaria

### RecipeInput (Crear/Actualizar Receta)

```json
{
  "title": "Pasta Carbonara",
  "description": "Receta clásica romana con huevo y pancetta",
  "difficulty": "Fácil",
  "preparationTime": 15,
  "cookingTime": 20,
  "servings": 4,
  "category": "Pasta"
}
```

### Ingredient (Ingrediente)

```json
{
  "id": 5,
  "name": "Tomate",
  "quantity": 500,
  "unit": "gramos",
  "recipeId": 1
}
```

**Campos:**
- `id` (integer) - Identificador único
- `name` (string) - Nombre del ingrediente
- `quantity` (number) - Cantidad necesaria
- `unit` (string) - Unidad de medida (gramos, ml, cucharadas, etc.)
- `recipeId` (integer) - **FK:** ID de la receta a la que pertenece

### IngredientInput (Crear/Actualizar Ingrediente)

```json
{
  "name": "Queso Parmesano",
  "quantity": 150,
  "unit": "gramos",
  "recipeId": 1
}
```

---

## 🧪 Pruebas con Bruno

### Ejemplo: Crear Receta

**Archivo:** `create-recipe.bru`

```
POST https://api.ejemplo.com/recipes
Content-Type: application/json

{
  "title": "Paella Valenciana",
  "description": "Arroz con mariscos y azafrán",
  "difficulty": "Difícil",
  "preparationTime": 40,
  "cookingTime": 50,
  "servings": 8,
  "category": "Arroz"
}
```

**Respuesta esperada:** `201 Created`

### Ejemplo: Obtener Ingredientes de una Receta

**Archivo:** `get-ingredients-by-recipe.bru`

```
GET https://api.ejemplo.com/recipes/1/ingredients
```

**Respuesta esperada:**
```json
[
  {
    "id": 1,
    "name": "Arroz",
    "quantity": 400,
    "unit": "gramos",
    "recipeId": 1
  },
  {
    "id": 2,
    "name": "Azafrán",
    "quantity": 0.5,
    "unit": "gramos",
    "recipeId": 1
  }
]
```

---

## 📖 Parte Teórica: ¿Qué es REST?

### Definición

**REST** (Representational State Transfer) es un estilo arquitectónico para diseñar APIs web basado en:

1. **Cliente-Servidor:** Separación de responsabilidades
2. **Stateless:** Cada petición es independiente
3. **Cacheable:** Las respuestas pueden ser almacenadas en caché
4. **Interfaz uniforme:** Uso de estándares HTTP
5. **Sistema en capas:** Arquitectura modular

### Principios RESTful

✅ **Uso de métodos HTTP estándar:**
- `GET` - Leer recursos
- `POST` - Crear recursos
- `PUT` - Actualizar recursos completos
- `DELETE` - Eliminar recursos

✅ **Recursos identificados por URLs:**
```
/recipes          → Colección de recetas
/recipes/1        → Receta específica
/recipes/1/ingredients → Ingredientes de la receta 1
```

✅ **Formato de intercambio:**
- JSON (JavaScript Object Notation)
- XML (menos común)

✅ **Códigos de estado HTTP:**
- `200 OK` - Operación exitosa
- `201 Created` - Recurso creado
- `204 No Content` - Eliminación exitosa
- `400 Bad Request` - Datos inválidos
- `404 Not Found` - Recurso no encontrado
- `500 Internal Server Error` - Error del servidor

---

## 🔍 Relación 1 a Muchos Explicada

### Concepto

En bases de datos y diseño de APIs, una relación **1:N** significa:

- **1 Entidad padre** puede estar relacionada con **N entidades hijas**
- **Cada entidad hija** solo puede pertenecer a **1 entidad padre**

### Ejemplo en este proyecto:

```
Receta: "Lasagna Italiana" (id: 1)
  ├─ Ingrediente: "Pasta para lasaña" (recipeId: 1)
  ├─ Ingrediente: "Carne molida" (recipeId: 1)
  ├─ Ingrediente: "Salsa de tomate" (recipeId: 1)
  ├─ Ingrediente: "Queso mozzarella" (recipeId: 1)
  └─ Ingrediente: "Queso parmesano" (recipeId: 1)
```

### Implementación

La relación se mantiene mediante **Foreign Key (FK)**:

```json
{
  "id": 3,
  "name": "Salsa de tomate",
  "quantity": 300,
  "unit": "ml",
  "recipeId": 1  ← Referencia a la receta padre
}
```

---

## 🚀 Cómo usar este proyecto

### 1. Visualizar la documentación Swagger

- Abrir `recipe-api.yaml` en [Swagger Editor](https://editor.swagger.io/)
- Explorar los endpoints y modelos interactivamente

### 2. Probar con Bruno

1. Importar la colección desde `bruno.json`
2. Ejecutar las peticiones en orden:
   - Crear receta
   - Crear ingredientes
   - Consultar receta con sus ingredientes
   - Actualizar/Eliminar según sea necesario

---

## 📝 Notas Importantes

- Todos los endpoints están documentados en `recipe-api.yaml`
- Los archivos `.bru` contienen ejemplos de peticiones listas para usar
- La API es **stateless**: no mantiene sesión entre peticiones
- Los ejemplos usan datos ficticios para demostración

---

## 🎓 Entregables del Proyecto

✅ Documentación Swagger completa (`recipe-api.yaml`)  
✅ Archivos Bruno para todos los endpoints (12 archivos `.bru`)  
✅ README con explicación teórica y práctica  
✅ Diagramas de relación de datos  
✅ Ejemplos de uso y respuestas

---

## 📚 Referencias

- [REST API Tutorial](https://restfulapi.net/)
- [OpenAPI Specification](https://swagger.io/specification/)
- [HTTP Methods](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
- [JSON:API](https://jsonapi.org/)

---

**Proyecto desarrollado como material educativo para el curso de Desarrollo Web**
