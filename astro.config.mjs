import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://web-notas-de-arch-linux.vercel.app/',
  integrations: [
    starlight({
      title: 'Notas de Arch Linux',
      description: 'Guía completa sobre Arch Linux: personalización, paquetes y configuración',
      defaultLocale: 'root',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/logo.svg',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Inicio', link: '/' },
        { label: '0. Instalación', autogenerate: { directory: '0-instalacion' } },
        { label: '1. Configuraciones básicas', autogenerate: { directory: '1-configuraciones-basicas' } },
        { label: '2. Configuraciones extras', autogenerate: { directory: '2-configuraciones-extras' } },
        { label: '3. Terminal', autogenerate: { directory: '3-terminal' } },
        { label: '4. Editor de código', autogenerate: { directory: '4-editor-de-codigo' } },
        { label: 'Otros', autogenerate: { directory: 'otros' } },
        {
          label: 'Recursos',
          items: [
            { slug: 'conceptos' },
            { slug: 'comandos' },
            { slug: 'ranger' },
          ],
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/FraVelz/WEB-Notas-de-ArchLinux',
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content:
              'Arch Linux, Linux, personalización, paquetes, guía, tutorial, configuración',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'Fravelz',
          },
        },
        // Open Graph (Facebook, LinkedIn, Discord, etc.)
        {
          tag: 'meta',
          attrs: {
            property: 'og:type',
            content: 'website',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:title',
            content: 'Notas de Arch Linux',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:description',
            content:
              'Guía completa sobre Arch Linux: personalización, paquetes y configuración',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://web-notas-de-arch-linux.vercel.app/screenshot.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image:alt',
            content:
              'Captura de la guía Notas de Arch Linux con diseño oscuro',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:url',
            content: 'https://web-notas-de-arch-linux.vercel.app/',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:site_name',
            content: 'Notas de Arch Linux',
          },
        },
        // Twitter Cards
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:title',
            content: 'Notas de Arch Linux',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:description',
            content:
              'Guía completa sobre Arch Linux: personalización, paquetes y configuración',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://web-notas-de-arch-linux.vercel.app/screenshot.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image:alt',
            content:
              'Captura de la guía Notas de Arch Linux con diseño oscuro',
          },
        },
      ],
    }),
  ],
});
