# Notas de Arch Linux

Esta guía le ayudará a conocer mejor arch linux, desde personalizar, como paquetes, y muchas más cosas, todo acerca de Arch Linux. Tener en cuenta que son recopilación de información que me ha sido útil para conocer mejor el sistema operativo y sé que también les puede ser útiles.

## 🚀 Inicio rápido

Este proyecto está construido con [Astro](https://astro.build), [MDX](https://mdxjs.com), y [TailwindCSS](https://tailwindcss.com).

### Requisitos

- Node.js 18+ 
- pnpm (gestor de paquetes)

### Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Vista previa de producción
pnpm preview
```

## 📁 Estructura del proyecto

```
/
├── public/
│   └── imagenes/          # Imágenes estáticas
├── src/
│   ├── content/           # Archivos MDX (contenido)
│   ├── layouts/           # Layouts de Astro
│   ├── pages/             # Páginas/rutas de Astro
│   └── components/        # Componentes reutilizables
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.mjs    # Configuración de TailwindCSS
└── package.json           # Dependencias del proyecto
```

## 📝 Contenido

### Inicio
- [Que es Arch Linux](/conceptos)

### 0. Instalación
- [Ir a Instalar Arch](/0-instalacion/0-instalacion)
- [Ir a Paquetes en Arch](/0-instalacion/1-paquetes)
- [Comandos](/0-instalacion/2-commands)
- [Editar Videos](/0-instalacion/editar-videos)
- [Virtualización](/0-instalacion/virtualizacion)

### 1. Configuraciones básicas
- [0. internet](/1-configuraciones-basicas/0-internet)
- [1. hyprland](/1-configuraciones-basicas/1-hyprland)
- [2. hyprpaper](/1-configuraciones-basicas/2-hyprpaper)
- [3. darkmode](/1-configuraciones-basicas/3-darkMode)
- [4. font](/1-configuraciones-basicas/4-font)
- [5. waybar](/1-configuraciones-basicas/5-waybar)

### 2. Configuraciones extras
- [1. plymouth](/2-configuraciones-extras/1-plymouth)
- [2. pantalla](/2-configuraciones-extras/2-pantalla)
- [3. notificaciones](/2-configuraciones-extras/3-notificaciones)
- [4. grabar](/2-configuraciones-extras/4-grabar)

### 3. Terminal
- [1. Icons](/3-terminal/1-icons)

### 4. Editor de código
- [1. Lazyvim](/4-editor-de-codigo/LazyVim-tutorial/1-fundamentos)
- [Atajos](/4-editor-de-codigo/LazyVim-tutorial/atajos)

### Otros
- [limpiar caché](/otros/limpiarCache)
- [others](/otros/others)
- [vpn](/otros/vpn)
- [Comandos](/comandos)
- [Ranger](/ranger)

## ⚠️ Nota importante

Es importante saber que este repositorio no pretende ser una guía paso a paso para la configuración de Arch Linux, sino guiar a los nuevos usuarios. Es importante investigar cómo funcionan los elementos por separado y los diferentes temas de esta guía. Deberá investigar el funcionamiento específico de cada elemento o la sintaxis de personalización específica por su cuenta.

Esta guía es una guía, no un curso. Tener muy en cuenta eso.

## 📄 Información

**Actualización:** 0.0.6

**Autor:** Fravelz

## 🛠️ Tecnologías

- [Astro](https://astro.build) - Framework web moderno
- [MDX](https://mdxjs.com) - Markdown con componentes JSX
- [TailwindCSS](https://tailwindcss.com) - Framework CSS utility-first
- [pnpm](https://pnpm.io) - Gestor de paquetes rápido y eficiente
