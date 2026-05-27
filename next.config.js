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
}

module.exports = nextConfig
