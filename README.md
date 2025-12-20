# Cafeteria Morning — Versión Final

Una página web estática para la cafetería "Morning" — catálogo de productos, reseñas y formulario de contacto.  
Este repositorio contiene la versión final del front-end estático (HTML/CSS/JavaScript) y los recursos visuales utilizados en la web.

Estado: Final / Entregable (sitio estático)

---

## Contenido principal del repositorio
- index.html — página principal
- productos.html — página del catálogo de productos
- contacto.html — formulario de contacto
- reseñas.html — opiniones / reseñas de clientes
- style.css — estilos
- script.js — lógica JavaScript (carga de productos, interacción UI)
- productos.json — datos de ejemplo de los productos
- / (varias imágenes y assets para la web: logos, fondos, fotos de productos)

Puedes ver todas las imágenes en el repo: https://github.com/mariawkpazcerpa-lang/Cafeteria-morning-Final-Version/contents

---

## Capturas / imágenes destacadas
(Algunas imágenes disponibles en el repo)
- Logo: [logo-morning.png](https://github.com/mariawkpazcerpa-lang/Cafeteria-morning-Final-Version/blob/main/logo-morning.png)
- Encabezado: [header.png](https://github.com/mariawkpazcerpa-lang/Cafeteria-morning-Final-Version/blob/main/header.png)
- Productos: [productos.png](https://github.com/mariawkpazcerpa-lang/Cafeteria-morning-Final-Version/blob/main/productos.png)
- Fondo y texturas: [fondocafemorning.png](https://github.com/mariawkpazcerpa-lang/Cafeteria-morning-Final-Version/blob/main/fondocafemorning.png)

---

## Tecnologías
- HTML5, CSS3
- JavaScript (vanilla)
- Datos estáticos en JSON (productos.json)
- Sitio pensado como página estática (sin backend)

---

## Cómo probarlo localmente

Opciones rápidas para previsualizar el sitio:

1) Abrir directamente
- Abre `index.html` con tu navegador (doble clic). Para la mayoría de navegadores esto funciona, aunque algunos comportamientos de fetch para archivos locales pueden requerir servidor.

2) Servidor local simple (recomendado)
- Con Python 3:
  ```bash
  cd Cafeteria-morning-Final-Version
  python -m http.server 8000
  # luego abre http://localhost:8000 en el navegador
  ```
- Con Node.js (serve):
  ```bash
  npm install -g serve
  serve .
  # o usar live-server si lo prefieres
  ```

3) VS Code
- Abre la carpeta en VS Code y usa la extensión Live Server para previsualizar.

---

## Estructura y datos
- `productos.json` contiene la lista de productos que `script.js` carga para generar el catálogo. Para modificar el catálogo, edita ese archivo respetando la estructura JSON actual.
- Las plantillas HTML cargan assets desde el propio repo; si renombrás imágenes, actualizá las referencias en HTML/CSS.

---

## Buenas prácticas y recomendaciones
- Optimizar imágenes para reducir peso y mejorar tiempos de carga (convertir a WebP si es posible).
- Usar un workflow de build (opcional) si pensás añadir dependencias o preprocesadores (Sass, bundlers).
- Si agregás funcionalidades que requieren persistencia (pedidos, usuarios), contemplar un backend (API REST) y mover datos de productos a una base de datos.

---

## Despliegue
Al ser un sitio estático puedes desplegarlo fácilmente en:
- GitHub Pages (branch `main` o `gh-pages`)
- Vercel / Netlify / Surge
Instrucción rápida para GitHub Pages (simple):
1. Ir a Settings > Pages en el repositorio.
2. Seleccionar la rama `main` y la carpeta `/ (root)`.
3. Guardar y acceder al dominio que provea GitHub Pages.

---

## Contribuir
Si quieres que otras personas colaboren:
1. Hacer fork del repo.
2. Crear una rama: `git checkout -b feat/nueva-mejora`
3. Hacer commits claros y descriptivos.
4. Abrir Pull Request describiendo cambios y pruebas realizadas.

---

## Licencia
Este proyecto se publica bajo la Licencia MIT. Consulta el archivo `LICENSE` para el texto completo.

---

## Autor / Contacto
- Maria — @mariawkpazcerpa-lang  
(Para cambios en producción o despliegue, indicá la rama y los permisos necesarios para hacer commits.)

---

Notas:
- He generado este README con la información encontrada en el repositorio. Si añadiste archivos nuevos después de la inspección, puedo re-generarlo para incorporarlos.
