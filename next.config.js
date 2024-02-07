/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/copia-de-nuestra-compa%C3%B1ia',
        destination: '/aboutUs',
        permanent: true
      },
      {
        source: '/copia-de-nosotros',
        destination: '/aboutUs',
        permanent: true
      },
      {
        source: '/blank-4',
        destination: '/',
        permanent: true
      },
      {
        source: '/blank-2',
        destination: '/',
        permanent: true
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/deyofhj4o/**'
      }
    ]
  }
}
module.exports = nextConfig
