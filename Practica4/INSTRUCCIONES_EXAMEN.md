# EXAMEN PRÁCTICA CSS3 - 2º DAW
## 1º EVAL. Hojas de Estilos CSS3
### Diseño de Interfaces WEB
**Curso: 24/25 | Fecha: Práctica**

---

## NOMBRE: _______________________________

---

## Crear una página web utilizando CSS3 con el siguiente aspecto:

### Características:

✓ **La página está creada íntegramente con CSS3**

✓ **El título tiene una fuente personalizada tipo "fuente.ttf" incluida en la carpeta**

✓ **El título tiene una animación de brillo (glow) infinita**

✓ **La cabecera contiene estrellas animadas con efecto twinkle (parpadeo) infinito**

✓ **El background del footer está creado con un degradado:**
   ```css
   linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)
   ```

✓ **El background del footer tiene una animación del degradado**

✓ **La estructura de la web está creada con Flexbox**

✓ **La página es responsive, teniendo un punto de ruptura en 640px mostrando los elementos con anchura 100%**

✓ **Para una anchura menor de 640px, si hacemos hover sobre un bloque, se incrementará su altura. Para una anchura mayor de 640px se incrementará la anchura**

✓ **El planeta central está creado con CSS puro y tiene varias animaciones:**
   - **Flotación:** animación infinita de arriba-abajo
   - **Hover:** Tiene una transformación en el eje Y con scale
   - **Active:** Tiene una transformación en escala
   - **Anillo:** El anillo del planeta tiene rotación continua

✓ **La caja de texto tendrá un sombreado asociado a la pseudoclase :focus y cuando no se visualice el placeholder, mostrará un background = #d6e2e9 con un color = #fefefe**

✓ **La página tendrá una altura de 200vh. Si modificamos el scroll, ampliaremos una caja fija lateral**

✓ **Se tendrá en cuenta la estructura del código, orden, nesting, metodología BEM...**

---

## NOTA IMPORTANTE:

**Para superar este tema hay que realizar como mínimo:**
- ✅ Animación del footer (degradado)
- ✅ Título con animación
- ✅ Estructura Flexbox
- ✅ Responsive (punto de ruptura 640px)
- ✅ Formulario con estados :focus y :not(:placeholder-shown)
- ✅ La figura central (planeta) sin animación es aceptable

---

## Elementos del diseño:

### Header:
- Título grande centrado con efecto glow
- Estrellas animadas en el fondo

### Main:
- 4 bloques de planetas con colores degradados:
  - Mercurio (morado)
  - Venus (naranja-rosa)
  - Tierra (azul)
  - Marte (rojo-amarillo)
- Figura de planeta central con anillo

### Footer:
- Fondo con degradado animado
- Input de texto con efectos

### Extra:
- Caja que se expande con el scroll
- Altura total: 200vh

---

## Estructura de archivos necesaria:

```
/carpeta-examen/
  ├── index.html
  ├── styles.css
  └── fuente.ttf (o fuente.otf)
```

---

## Puntuación:

| Apartado | Puntos |
|----------|--------|
| Estructura HTML + BEM | 1 punto |
| Flexbox responsive | 2 puntos |
| Animación footer | 1.5 puntos |
| Animación título | 1 punto |
| Formulario (focus + not placeholder) | 1.5 puntos |
| Figura planeta CSS | 2 puntos |
| Animaciones avanzadas | 1 punto |
| **TOTAL** | **10 puntos** |

---

**¡Buena suerte! 🚀**
