# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Proyecto 1 usando React+Vite
============================

ecosntruyendo la práctica de los web componets (recreación BBC) pero usando React, en este caso como el New York Times.


Web de noticias desarrollada con React y Vite, que permite a los usuarios explorar, filtrar y leer artículos de diversas secciones, cambiar el idioma de la interfaz y obtener información en tiempo real a través de una API.

Características Principales
===========================
Diseño responsivo para una experiencia óptima en dispositivos móviles y de escritorio.
Compatible con varios idiomas (EN, ES, CH, FR, PT, IT).
Encuentra artículos rápidamente con una interfaz de búsqueda intuitiva.
Noticias clasificadas por secciones como World News, Sport, Finance, Technology, y Entertainment.
Cada artículo muestra título, autor, fecha, sección e imagen destacada.


Tecnologías Utilizadas
======================
    Frontend: React + Vite
    Ruteo: React Router DOM
    Contexto Global: React Context API
    Estilo: CSS Modules
    API de Noticias: News API

Instalación Local
=================
1. Clonar el Repositorio:
git clone https://github.com/EstDC/practica1React.git
cd newsapp

2. Instalar Dependencias:
npm install

3. Iniciar el Servidor de Desarrollo:
npm run dev

4. Abrir la Aplicación en el Navegador:
http://localhost:5173


Traducciones Disponibles
========================
    🇬🇧 Inglés (en)
    🇪🇸 Español (es)
    🇨🇳 Chino (ch)
    🇫🇷 Francés (fr)
    🇵🇹 Portugués (pt)
    🇮🇹 Italiano (it)

El idioma puede cambiarse mediante los botones disponibles en el Header.


Estructura del Proyecto
=======================
```plaintext
src/
├── assets/           # Imágenes, fuentes e íconos
├── components/         # Componentes reutilizables
│   ├── Footer.jsx      # Pie de página
│   ├── Header.jsx      # Encabezado principal
│   ├── LangProvider.jsx# Proveedor de contexto para el idioma
│   ├── Navbar.jsx      # Barra de navegación
│   ├── NewsCard.jsx    # Tarjeta de noticias individuales
│   ├── NewsGrid.jsx    # Grid de tarjetas de noticias
│   ├── Search.jsx      # Barra de búsqueda
│   ├── Translator.jsx  # Botones para cambiar de idioma
│   ├── Section.jsx     # Página de secciones temáticas ***Debería estar en pages pero debido al planteamiento original se estructuró incorrectamente.
│
├── pages/              # Páginas principales de la aplicación
│   ├── Home.jsx        # Página de inicio
│   ├── Article.jsx     # Página de artículo individual
│
├── App.jsx             # Componente principal de la aplicación
├── main.jsx            # Punto de entrada de la aplicación
├── App.css             # Estilos globales de la aplicación
├── index.css           # Estilos adicionales
│
├── .gitignore          # Archivos ignorados por Git
├── eslint.config.js    # Configuración de ESLint
├── index.html          # Archivo HTML principal
├── vite.config.js      # Configuración de Vite
├── package.json        # Dependencias y scripts del proyecto
└── package-lock.json   # Bloqueo de dependencias
```

Uso de la API
=============
Endpoint de Noticias:
https://news-foniuhqsba-uc.a.run.app


Funcionalidades en proceso de implementación
============================================
Agregar la funcionalidad de guardar noticias favoritas en LocalStore y cargarlas. Por ahora no funciona, el onClick me está dando problemas con useEffect y el toggleFavoritos.

Parámetros Disponibles:
=======================
    lang: Idioma de las noticias (en, es, fr, etc.)
    section: Filtrado por sección (World News, Sport, etc.)
