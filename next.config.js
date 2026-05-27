/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repo = 'EILEN-SERVICE-ELECTRIC'

const nextConfig = {
  output: 'export',          // genera HTML/CSS/JS estático en /out
  trailingSlash: true,       // evita 404 en rutas como /servicios/
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  images: {
    unoptimized: true,       // requerido para export estático
  },
  env: {
    // Expuesto al cliente para prefixar rutas de imágenes en public/
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repo}` : '',
  },
}

module.exports = nextConfig
