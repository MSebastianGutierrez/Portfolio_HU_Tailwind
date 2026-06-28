#  Portafolio 

##  Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Características Principales](#características-principales)
- [Instalación y Uso](#instalación-y-uso)
- [Responsive Design](#responsive-design)
- [Componentes Bootstrap Implementados](#componentes-bootstrap-implementados)

---

##  Descripción del Proyecto

Portafolio desarrollado como proyecto académico para demostrar habilidades en **desarrollo Frontend** utilizando un enfoque híbrido entre **Tailwind CSS** y **Bootstrap**. El sitio presenta una interfaz moderna, responsiva y con animaciones interactivas que muestran la trayectoria, habilidades y proyectos.


##  Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **HTML5** | - | Estructura semántica del sitio |
| **Tailwind CSS** | v3.x | Framework de estilos utilitarios |
| **Bootstrap 5** | v5.3 | Componentes híbridos |
| **JavaScript** | ES6+ | Interactividad y animaciones |
| **Font Awesome** | v6.4 | Iconografía |
| **Google Fonts** | Inter | Tipografía moderna |
| **Git** | - | Control de versiones |

### 📦 Recursos CDN

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## 📁 Estructura del Proyecto

```
Portfolio_HU_Tailwind/
│
├── index.html              # Página principal
│
├── css/
│   └── styles.css          # Estilos personalizados
│
├── scripts/
│   └── index.js            # JavaScript (interactividad)
│
├── img/
│   └── favicon.png         # Favicon del sitio
│
├── README.md               # Documentación del proyecto
└── .gitignore              # Archivos ignorados por Git
```

---

##  Características Principales

###  Diseño y Estilos

- **Diseño 100% responsive** con enfoque Mobile-First
- **Paleta de colores oscura** moderna (slate, blue)
- **Efectos de gradiente** en textos y botones
- **Transiciones y animaciones** suaves
- **Efecto de blur y transparencia** en navbar

###  Componentes

- **Navbar** con menú hamburguesa animado
- **Hero Section** con typing effect
- **Tarjetas de habilidades** con efectos hover
- **Timeline** de experiencia laboral
- **Grid de proyectos** con imágenes y tecnologías
- **Formulario de contacto** validado
- **Footer** con redes sociales

###  Interactividad

- Menú hamburguesa con animación de transformación
- Typing effect en el Hero
- Scroll suave entre secciones
- Animación de revelado al hacer scroll
- Contador animado de estadísticas
- Easter egg en consola del navegador

---

##  Responsive Design

El sitio está diseñado bajo el enfoque **Mobile-First**, adaptándose a todos los dispositivos:

| Dispositivo | Breakpoint | Comportamiento |
|-------------|------------|----------------|
| **Móvil** | < 768px | Una columna, menú hamburguesa |
| **Tablet** | 768px - 1023px | Dos columnas, menú completo |
| **Escritorio** | ≥ 1024px | Tres columnas, efectos completos |

### Breakpoints Utilizados

```html
<!-- Móvil: Una columna -->
<div class="grid grid-cols-1">

<!-- Tablet: Dos columnas -->
<div class="md:grid-cols-2">

<!-- Escritorio: Tres columnas -->
<div class="lg:grid-cols-3">
```

---

##  Componentes Bootstrap Implementados

### 1. Formulario de Contacto

```html
<input type="text" class="form-control bg-slate-900 ..." />
<button type="submit" class="btn btn-primary w-full ...">
```

**Clases Bootstrap:** `.form-control`, `.form-label`, `.btn-primary`

### 2. Botones de Acción

```html
<a href="#contact" class="btn btn-primary bg-blue-600 ...">
```

**Clase Bootstrap:** `.btn-primary`

### 3. Inputs y Campos de Formulario

```html
<textarea class="form-control bg-slate-900 ..."></textarea>
```

**Clase Bootstrap:** `.form-control`

##  Instalación y Uso

### Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VSCode recomendado)
- Git (opcional, para control de versiones)

### Clonar el Repositorio

```bash
# Clonar el repositorio
git clone https://github.com/MSebastianGutierrez/Portfolio_HU_Tailwind.git

# Navegar al directorio
cd Portfolio_HU_Tailwind
```

### Abrir el Proyecto

**Opción 1: Live Server (Recomendado)**

1. Instalar extensión "Live Server" en VSCode
2. Hacer clic derecho en `index.html`
3. Seleccionar "Open with Live Server"


**Opción 2: Directo en Navegador**

- Hacer doble clic en `index.html`

---
